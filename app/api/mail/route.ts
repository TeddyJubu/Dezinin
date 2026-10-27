import { editorIsSignedIn } from "@/lib/editor-session";
import { listMailbox, mailAddress, mailIsConfigured, publicMailError, readMessage, sendMail } from "@/lib/mailbox";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

async function allowed() {
  if (process.env.TINA_PUBLIC_IS_LOCAL === "true") return true;
  return editorIsSignedIn();
}

export async function GET(request: Request) {
  if (!(await allowed())) return Response.json({ error: "Unauthorized" }, { status: 401 });
  if (!mailIsConfigured()) return Response.json({ configured: false, address: mailAddress() });
  const url = new URL(request.url);
  const folder = url.searchParams.get("folder") || "inbox";
  const uid = Number(url.searchParams.get("uid") || 0);
  try {
    if (uid) {
      const message = await readMessage(folder, uid);
      return Response.json({ configured: true, address: mailAddress(), message });
    }
    return Response.json({ configured: true, ...(await listMailbox(folder)) });
  } catch (error) {
    return Response.json({ error: publicMailError(error) }, { status: 502 });
  }
}

export async function POST(request: Request) {
  if (!(await allowed())) return Response.json({ error: "Unauthorized" }, { status: 401 });
  if (!mailIsConfigured()) return Response.json({ error: "Mail is not configured" }, { status: 503 });
  const body = (await request.json()) as { to?: string; cc?: string; subject?: string; text?: string; replyTo?: string };
  try {
    await sendMail({
      to: body.to || "",
      cc: body.cc,
      subject: body.subject || "",
      text: body.text || "",
      replyTo: body.replyTo,
    });
    return Response.json({ ok: true });
  } catch (error) {
    const message = publicMailError(error);
    const status = message === "Enter a valid email address" || message === "Subject and message are required" ? 400 : 502;
    return Response.json({ error: message }, { status });
  }
}
