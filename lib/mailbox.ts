import { ImapFlow, type FetchMessageObject } from "imapflow";
import { simpleParser, type AddressObject } from "mailparser";
import nodemailer from "nodemailer";

const LIST_LIMIT = 40;

export type MailFolder = { id: "inbox" | "sent"; path: string; label: string };

export type MailSummary = {
  uid: number;
  seq: number;
  subject: string;
  from: string;
  to: string;
  date: string;
  seen: boolean;
};

export type MailListOptions = {
  before?: number;
  q?: string;
  unseen?: boolean;
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
    seq: message.seq,
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

function cleanQuery(value?: string) {
  return (value || "").replace(/[\u0000\r\n]/g, " ").trim().slice(0, 200);
}

async function fetchSummaries(client: ImapFlow, range: string) {
  const messages: MailSummary[] = [];
  for await (const message of client.fetch(range, { uid: true, flags: true, envelope: true, internalDate: true })) {
    messages.push(summary(message));
  }
  messages.sort((left, right) => right.seq - left.seq);
  return messages;
}

export async function listMailbox(requested = "inbox", options: MailListOptions = {}) {
  const q = cleanQuery(options.q);
  const unseen = options.unseen === true;
  const before = Number.isInteger(options.before) && options.before && options.before > 0 ? options.before : undefined;

  return withClient(async (client) => {
    const folders = pickFolders(await client.list());
    const folder = resolveFolder(folders, requested);
    const lock = await client.getMailboxLock(folder.path);
    try {
      const exists = client.mailbox && typeof client.mailbox === "object" ? client.mailbox.exists : 0;
      const address = settings().from;
      const empty = { address, folders, folder: folder.path, messages: [] as MailSummary[], hasMore: false };
      if (before !== undefined && before <= 1) return empty;

      if (q || unseen) {
        const query: { seen?: false; seq?: string; or?: Array<{ subject: string } | { from: string } | { to: string }> } = {};
        if (unseen) query.seen = false;
        if (before) query.seq = `1:${before - 1}`;
        if (q) {
          query.or = [{ subject: q }, { from: q }];
          if (folder.id === "sent") query.or.push({ to: q });
        }
        const found = await client.search(query);
        if (!Array.isArray(found)) throw new Error("The mailbox could not be reached.");
        const seqs = found.filter((seq) => seq > 0).sort((left, right) => left - right);
        const page = seqs.slice(-LIST_LIMIT);
        const messages = page.length ? await fetchSummaries(client, page.join(",")) : [];
        return { address, folders, folder: folder.path, messages, hasMore: seqs.length > LIST_LIMIT };
      }

      const end = before ? before - 1 : exists;
      if (!end || end < 1) return empty;
      const start = Math.max(1, end - LIST_LIMIT + 1);
      const messages = await fetchSummaries(client, `${start}:${end}`);
      return { address, folders, folder: folder.path, messages, hasMore: start > 1 };
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
