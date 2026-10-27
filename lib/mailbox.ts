import { ImapFlow, type FetchMessageObject } from "imapflow";
import { simpleParser, type AddressObject } from "mailparser";
import nodemailer from "nodemailer";

const LIST_LIMIT = 40;

export type MailFolder = { id: "inbox" | "sent"; path: string; label: string };

export type MailSummary = {
  uid: number;
  subject: string;
  from: string;
  to: string;
  date: string;
  seen: boolean;
};

export type MailMessage = MailSummary & {
  cc: string;
  text: string;
  html: string;
};

function settings() {
  const user = process.env.MAIL_USER || "";
  const pass = process.env.MAIL_PASSWORD || "";
  return {
    configured: Boolean(user && pass),
    user,
    pass,
    from: process.env.MAIL_FROM || user || "info@dezinin.com",
    imapHost: process.env.MAIL_IMAP_HOST || "mail.dezinin.com",
    imapPort: Number(process.env.MAIL_IMAP_PORT || 993),
    smtpHost: process.env.MAIL_SMTP_HOST || "mail.dezinin.com",
    smtpPort: Number(process.env.MAIL_SMTP_PORT || 465),
  };
}

export function mailIsConfigured() {
  return settings().configured;
}

export function mailAddress() {
  return settings().from;
}

function connection() {
  const mail = settings();
  return new ImapFlow({
    host: mail.imapHost,
    port: mail.imapPort,
    secure: true,
    auth: { user: mail.user, pass: mail.pass },
    logger: false,
    connectionTimeout: 20000,
    greetingTimeout: 20000,
    socketTimeout: 30000,
  });
}

async function withClient<T>(run: (client: ImapFlow) => Promise<T>) {
  const client = connection();
  await client.connect();
  try {
    return await run(client);
  } finally {
    await client.logout().catch(() => undefined);
  }
}

function formatAddresses(list?: Array<{ name?: string; address?: string }> | null) {
  return (list || [])
    .map((item) => (item.name && item.address ? `${item.name} <${item.address}>` : item.address || item.name || ""))
    .filter(Boolean)
    .join(", ");
}

function addressText(value?: AddressObject | AddressObject[] | null) {
  if (!value) return "";
  return Array.isArray(value) ? value.map((item) => item.text).join(", ") : value.text;
}

function pickFolders(boxes: Array<{ path: string; specialUse?: string }>): MailFolder[] {
  const inbox = boxes.find((box) => box.specialUse === "\\Inbox" || box.path.toUpperCase() === "INBOX");
  const sent =
    boxes.find((box) => box.specialUse === "\\Sent") ||
    boxes.find((box) => box.path === "INBOX.Sent") ||
    boxes.find((box) => /(^|[/.])sent$/i.test(box.path));
  return [
    { id: "inbox", path: inbox?.path || "INBOX", label: "Inbox" },
    ...(sent ? [{ id: "sent" as const, path: sent.path, label: "Sent" }] : []),
  ];
}

export function resolveFolder(folders: MailFolder[], requested: string) {
  const folder = folders.find((item) => item.id === requested || item.path === requested);
  if (!folder) throw new Error("Unknown folder");
  return folder;
}

function isoDate(value?: Date | string | null) {
  const date = value instanceof Date ? value : value ? new Date(value) : new Date();
  return Number.isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
}

function summary(message: FetchMessageObject): MailSummary {
  return {
    uid: message.uid,
    subject: message.envelope?.subject || "(no subject)",
    from: formatAddresses(message.envelope?.from),
    to: formatAddresses(message.envelope?.to),
    date: isoDate(message.internalDate || message.envelope?.date),
    seen: Boolean(message.flags?.has("\\Seen")),
  };
}

function cleanHtml(html: string) {
  return html
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/\son\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "")
    .slice(0, 200_000);
}

export async function listMailbox(requested = "inbox") {
  return withClient(async (client) => {
    const folders = pickFolders(await client.list());
    const folder = resolveFolder(folders, requested);
    const lock = await client.getMailboxLock(folder.path);
    try {
      const exists = client.mailbox && typeof client.mailbox === "object" ? client.mailbox.exists : 0;
      const messages: MailSummary[] = [];
      if (exists) {
        const start = Math.max(1, exists - LIST_LIMIT + 1);
        for await (const message of client.fetch(`${start}:*`, { uid: true, flags: true, envelope: true, internalDate: true })) {
          messages.push(summary(message));
        }
        messages.reverse();
      }
      return { address: settings().from, folders, folder: folder.path, messages };
    } finally {
      lock.release();
    }
  });
}

export async function readMessage(requestedFolder: string, uid: number) {
  if (!Number.isInteger(uid) || uid < 1) throw new Error("Unknown message");
  return withClient(async (client) => {
    const folders = pickFolders(await client.list());
    const folder = resolveFolder(folders, requestedFolder);
    const lock = await client.getMailboxLock(folder.path);
    try {
      const message = await client.fetchOne(
        String(uid),
        { uid: true, source: true, flags: true, envelope: true, internalDate: true },
        { uid: true },
      );
      if (!message || !message.source) throw new Error("Message not found");
      if (!message.flags?.has("\\Seen")) await client.messageFlagsAdd(String(uid), ["\\Seen"], { uid: true });
      const parsed = await simpleParser(message.source);
      return {
        ...summary(message),
        subject: parsed.subject || summary(message).subject,
        from: parsed.from?.text || summary(message).from,
        to: addressText(parsed.to) || summary(message).to,
        cc: addressText(parsed.cc),
        date: isoDate(parsed.date || message.internalDate),
        text: (parsed.text || "").slice(0, 100_000),
        html: typeof parsed.html === "string" ? cleanHtml(parsed.html) : "",
      } satisfies MailMessage;
    } finally {
      lock.release();
    }
  });
}

const RECIPIENT = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;

export function parseRecipients(value: string) {
  const people = value
    .split(/[,;]/)
    .map((item) => item.trim())
    .filter(Boolean)
    .map((item) => {
      const wrapped = item.match(/<([^>]+)>\s*$/);
      return (wrapped?.[1] || item).trim();
    });
  if (!people.length || people.length > 10 || people.some((item) => !RECIPIENT.test(item))) {
    throw new Error("Enter a valid email address");
  }
  return people.join(", ");
}

function headerValue(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim().slice(0, 500);
}

export async function sendMail(input: { to: string; cc?: string; subject: string; text: string; replyTo?: string }) {
  const mail = settings();
  if (!mail.configured) throw new Error("Mail is not configured");
  const to = parseRecipients(input.to);
  const cc = input.cc?.trim() ? parseRecipients(input.cc) : undefined;
  const subject = input.subject.trim().slice(0, 200);
  const text = input.text.trim().slice(0, 50_000);
  if (!subject || !text) throw new Error("Subject and message are required");
  const transport = nodemailer.createTransport({
    host: mail.smtpHost,
    port: mail.smtpPort,
    secure: mail.smtpPort === 465,
    auth: { user: mail.user, pass: mail.pass },
    connectionTimeout: 20000,
    greetingTimeout: 20000,
    socketTimeout: 30000,
  });
  await transport.sendMail({
    from: mail.from,
    to,
    cc,
    replyTo: input.replyTo ? headerValue(input.replyTo) : undefined,
    subject,
    text,
  });
}

export async function keepCopy(input: { from: string; subject: string; text: string }) {
  const mail = settings();
  const raw = [
    `From: ${headerValue(input.from)}`,
    `To: ${headerValue(mail.from)}`,
    `Subject: ${headerValue(input.subject)}`,
    `Date: ${new Date().toUTCString()}`,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=utf-8",
    "",
    input.text.replace(/\r?\n/g, "\r\n"),
  ].join("\r\n");
  await withClient(async (client) => {
    const lock = await client.getMailboxLock("INBOX");
    try {
      await client.append("INBOX", raw, ["\\Seen"]);
    } finally {
      lock.release();
    }
  });
}

export function publicMailError(error: unknown) {
  const message = error instanceof Error ? error.message : "";
  console.error("mail", message);
  if (/auth|invalid credentials|authentication failed|login failed/i.test(message)) {
    return "The mailbox rejected the login.";
  }
  if (/timeout|timed out|ETIMEDOUT|ECONNREFUSED/i.test(message)) return "The mailbox took too long to answer.";
  if (/certificate|altnames|self signed/i.test(message)) return "The mail server certificate was rejected.";
  if (
    message === "Unknown folder" ||
    message === "Unknown message" ||
    message === "Message not found" ||
    message === "Enter a valid email address" ||
    message === "Subject and message are required" ||
    message === "Mail is not configured"
  ) {
    return message;
  }
  return "The mailbox could not be reached.";
}
