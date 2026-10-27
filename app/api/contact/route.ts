import { keepCopy, mailIsConfigured, publicMailError, sendMail } from "@/lib/mailbox";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  if (!mailIsConfigured()) return Response.json({ error: "Mail is not configured" }, { status: 503 });
  const body = (await request.json()) as {
    name?: string;
    company?: string;
    email?: string;
    phone?: string;
    interest?: string;
    message?: string;
    company_url?: string;
  };
  if (body.company_url) return Response.json({ ok: true });
  const name = String(body.name || "").trim().slice(0, 200);
  const email = String(body.email || "").trim().slice(0, 200);
  const message = String(body.message || "").trim().slice(0, 5000);
  if (!name || !EMAIL.test(email) || !message) {
    return Response.json({ error: "Name, email, and message are required." }, { status: 400 });
  }
  const text = [
    `Name: ${name}`,
    `Company: ${String(body.company || "").trim().slice(0, 200)}`,
    `Email: ${email}`,
    `Phone: ${String(body.phone || "").trim().slice(0, 80)}`,
    `Interest: ${String(body.interest || "").trim().slice(0, 200)}`,
    "",
    message,
  ].join("\n");
  const subject = `Dezinin enquiry from ${name}`;
  try {
    await keepCopy({ from: `${name} <${email}>`, subject, text });
    await sendMail({ to: process.env.MAIL_FROM || process.env.MAIL_USER || "info@dezinin.com", subject, text, replyTo: email }).catch((error) => {
      console.error("mail", error instanceof Error ? error.message : error);
    });
    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ error: publicMailError(error) }, { status: 502 });
  }
}
