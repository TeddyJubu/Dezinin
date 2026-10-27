"use client";

import { type CSSProperties, type FormEvent, useEffect, useState } from "react";

type Folder = { id: "inbox" | "sent"; path: string; label: string };
type Summary = { uid: number; subject: string; from: string; to: string; date: string; seen: boolean };
type Message = Summary & { cc: string; text: string; html: string };

const shell: CSSProperties = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  background: "#120f0e",
  color: "#e4e2df",
  fontFamily: "Montserrat, sans-serif",
};

function when(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }).format(date);
}

export function MailDesk() {
  const [address, setAddress] = useState("info@dezinin.com");
  const [configured, setConfigured] = useState(true);
  const [folders, setFolders] = useState<Folder[]>([]);
  const [folder, setFolder] = useState("inbox");
  const [messages, setMessages] = useState<Summary[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [message, setMessage] = useState<Message | null>(null);
  const [composing, setComposing] = useState(false);
  const [draft, setDraft] = useState({ to: "", cc: "", subject: "", text: "" });
  const [status, setStatus] = useState("Loading mail…");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  async function loadList(nextFolder = folder) {
    setError("");
    setMessages([]);
    setSelected(null);
    setMessage(null);
    setStatus("Loading mail…");
    const response = await fetch(`/api/mail?folder=${encodeURIComponent(nextFolder)}`);
    const body = await response.json();
    if (response.status === 401) {
      setConfigured(false);
      setStatus("Sign in to the editor to use mail.");
      return;
    }
    if (!response.ok) {
      setError(body.error || "The mailbox could not be reached.");
      setStatus("");
      return;
    }
    if (body.configured === false) {
      setConfigured(false);
      setStatus("This mailbox is not connected yet.");
      return;
    }
    setAddress(body.address || address);
    setConfigured(body.configured !== false);
    setFolders(body.folders || []);
    setMessages(body.messages || []);
    setStatus("");
  }

  useEffect(() => {
    void loadList("inbox");
  }, []);

  async function openMessage(uid: number) {
    setComposing(false);
    setSelected(uid);
    setMessage(null);
    setError("");
    const response = await fetch(`/api/mail?folder=${encodeURIComponent(folder)}&uid=${uid}`);
    const body = await response.json();
    if (!response.ok) {
      setError(body.error || "That message could not be opened.");
      return;
    }
    setMessage(body.message);
    setMessages((current) => current.map((item) => (item.uid === uid ? { ...item, seen: true } : item)));
  }

  function reply() {
    if (!message) return;
    const sender = message.from.match(/<([^>]+)>/)?.[1] || message.from;
    setDraft({
      to: sender,
      cc: "",
      subject: message.subject.startsWith("Re:") ? message.subject : `Re: ${message.subject}`,
      text: `\n\nOn ${when(message.date)}, ${message.from} wrote:\n${message.text}`,
    });
    setComposing(true);
  }

  async function onSend(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setError("");
    const response = await fetch("/api/mail", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(draft),
    });
    const body = await response.json();
    setSending(false);
    if (!response.ok) {
      setError(body.error || "The message was not sent.");
      return;
    }
    setComposing(false);
    setDraft({ to: "", cc: "", subject: "", text: "" });
    if (folder === "sent") void loadList("sent");
  }

  return (
    <main style={shell}>
      <header style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 16, padding: "18px 22px", borderBottom: "1px solid #2a2422" }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "#8b8988" }}>Mail</div>
          <div style={{ fontSize: 16 }}>{address}</div>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", flexWrap: "wrap", gap: 8 }}>
          {folders.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setFolder(item.id);
                setSelected(null);
                setMessage(null);
                setComposing(false);
                void loadList(item.id);
              }}
              style={tabStyle(folder === item.id)}
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => {
              setComposing(true);
              setDraft({ to: "", cc: "", subject: "", text: "" });
            }}
            style={{ ...tabStyle(true), background: "#fe4101", borderColor: "#fe4101", color: "#fff" }}
          >
            Compose
          </button>
        </div>
      </header>
      {!configured ? (
        <p style={{ padding: 28, color: "#a39e9b", maxWidth: 560, lineHeight: 1.6 }}>{status}</p>
      ) : (
        <div style={{ flex: 1, display: "grid", gridTemplateColumns: "minmax(240px, 320px) minmax(0, 1fr)", minHeight: 0 }}>
          <section style={{ borderRight: "1px solid #2a2422", overflow: "auto" }}>
            {status ? <p style={{ padding: 18, color: "#a39e9b" }}>{status}</p> : null}
            {!status && !messages.length ? <p style={{ padding: 18, color: "#a39e9b" }}>No messages.</p> : null}
            {messages.map((item) => (
              <button
                key={item.uid}
                type="button"
                onClick={() => void openMessage(item.uid)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: "14px 16px",
                  background: selected === item.uid ? "#221c1a" : "transparent",
                  color: "inherit",
                  border: 0,
                  borderBottom: "1px solid #2a2422",
                  cursor: "pointer",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", gap: 8, fontSize: 12, color: "#a39e9b" }}>
                  <span style={{ fontWeight: item.seen ? 500 : 700, color: "#f7f1ea" }}>{folder === "sent" ? item.to || "(no recipient)" : item.from || "(unknown)"}</span>
                  <span>{when(item.date)}</span>
                </div>
                <div style={{ marginTop: 4, fontWeight: item.seen ? 500 : 700 }}>{item.subject}</div>
              </button>
            ))}
          </section>
          <section style={{ overflow: "auto", padding: 22 }}>
            {error ? <p style={{ color: "#fe4101" }}>{error}</p> : null}
            {composing ? (
              <form onSubmit={onSend} style={{ display: "grid", gap: 12, maxWidth: 720 }}>
                <input required placeholder="To" value={draft.to} onChange={(event) => setDraft({ ...draft, to: event.target.value })} style={fieldStyle} />
                <input placeholder="Cc" value={draft.cc} onChange={(event) => setDraft({ ...draft, cc: event.target.value })} style={fieldStyle} />
                <input required placeholder="Subject" value={draft.subject} onChange={(event) => setDraft({ ...draft, subject: event.target.value })} style={fieldStyle} />
                <textarea required rows={12} placeholder="Message" value={draft.text} onChange={(event) => setDraft({ ...draft, text: event.target.value })} style={{ ...fieldStyle, resize: "vertical" }} />
                <div style={{ display: "flex", gap: 8 }}>
                  <button type="submit" disabled={sending} style={{ ...tabStyle(true), background: "#fe4101", borderColor: "#fe4101", color: "#fff" }}>
                    {sending ? "Sending…" : "Send"}
                  </button>
                  <button type="button" onClick={() => setComposing(false)} style={tabStyle(false)}>
                    Cancel
                  </button>
                </div>
              </form>
            ) : message ? (
              <article>
                <h1 style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.03em", margin: "0 0 8px" }}>{message.subject}</h1>
                <p style={{ color: "#a39e9b", margin: "0 0 4px" }}>From {message.from}</p>
                <p style={{ color: "#a39e9b", margin: "0 0 16px" }}>
                  To {message.to}
                  {message.cc ? ` · Cc ${message.cc}` : ""} · {when(message.date)}
                </p>
                <button type="button" onClick={reply} style={{ ...tabStyle(false), marginBottom: 18 }}>
                  Reply
                </button>
                {message.html ? (
                  <iframe title="Message" sandbox="" srcDoc={message.html} style={{ width: "100%", minHeight: 480, border: "1px solid #2a2422", background: "#fff" }} />
                ) : (
                  <pre style={{ whiteSpace: "pre-wrap", fontFamily: "inherit", lineHeight: 1.6 }}>{message.text}</pre>
                )}
              </article>
            ) : (
              <p style={{ color: "#8b8988" }}>Choose a message, or compose a new one.</p>
            )}
          </section>
        </div>
      )}
    </main>
  );
}

function tabStyle(active: boolean): CSSProperties {
  return {
    border: "1px solid #3a3330",
    background: active ? "#221c1a" : "transparent",
    color: active ? "#f7f1ea" : "#a39e9b",
    borderRadius: 999,
    padding: "8px 14px",
    cursor: "pointer",
    font: "inherit",
    fontSize: 13,
  };
}

const fieldStyle: CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  background: "#120f0e",
  color: "#e4e2df",
  border: "1px solid #3a3330",
  borderRadius: 12,
  padding: "12px 14px",
  font: "inherit",
};
