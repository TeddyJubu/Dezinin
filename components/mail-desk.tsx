"use client";

import { type CSSProperties, type FormEvent, useEffect, useRef, useState } from "react";

type Folder = { id: "inbox" | "sent"; path: string; label: string };
type Summary = { uid: number; seq: number; subject: string; from: string; to: string; date: string; seen: boolean };
type Message = Summary & { cc: string; text: string; html: string };

const deskCss = `
.mail-desk {
  height: 100dvh;
  min-height: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: #120f0e;
  color: #e4e2df;
  font-family: var(--font-inter), Inter, sans-serif;
  font-size: 15px;
  line-height: 1.5;
}
body:has(main.mail-desk) {
  margin: 0;
  height: 100dvh;
  overflow: hidden;
  background: #120f0e;
}
.mail-desk button:focus-visible {
  outline: 2px solid #fe4101 !important;
  outline-offset: 2px;
}
.mail-grid {
  flex: 1;
  min-height: 0;
  display: grid;
  grid-template-columns: minmax(240px, 320px) minmax(0, 1fr);
}
.mail-list,
.mail-reader {
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.mail-list { border-right: 1px solid #2a2422; }
.mail-scroll {
  flex: 1;
  min-height: 0;
  overflow: auto;
}
.mail-back-wrap { display: none; }
@media (max-width: 719px) {
  .mail-grid { grid-template-columns: minmax(0, 1fr); }
  .mail-list { border-right: 0; }
  .mail-desk[data-reading="false"] .mail-reader { display: none; }
  .mail-desk[data-reading="true"] .mail-list { display: none; }
  .mail-desk[data-reading="true"] .mail-back-wrap {
    display: block;
    flex-shrink: 0;
    padding: 12px 22px 0;
  }
}
`;

function when(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function displayName(value: string) {
  const people = value.match(/(?:[^,<]*<[^>]+>|[^,]+)/g) || [];
  return people
    .map((person) => {
      const trimmed = person.trim();
      const named = trimmed.match(/^(.*?)\s*<[^>]+>\s*$/);
      if (!named) return trimmed;
      const name = named[1].replace(/^"|"$/g, "").trim();
      return name || trimmed.match(/<([^>]+)>/)?.[1] || "";
    })
    .filter(Boolean)
    .join(", ");
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

function accentStyle(): CSSProperties {
  return { ...tabStyle(true), background: "#fe4101", borderColor: "#fe4101", color: "#120f0e" };
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

const labelStyle: CSSProperties = {
  display: "grid",
  gap: 6,
  color: "#a39e9b",
  fontSize: 15,
};

export function MailDesk({ fontClassName = "" }: { fontClassName?: string }) {
  const [address, setAddress] = useState("info@dezinin.com");
  const [configured, setConfigured] = useState(true);
  const [folders, setFolders] = useState<Folder[]>([]);
  const [folder, setFolder] = useState<Folder["id"]>("inbox");
  const [listedFolder, setListedFolder] = useState<Folder["id"]>("inbox");
  const [messages, setMessages] = useState<Summary[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [message, setMessage] = useState<Message | null>(null);
  const [composing, setComposing] = useState(false);
  const [draft, setDraft] = useState({ to: "", cc: "", subject: "", text: "" });
  const [status, setStatus] = useState("Loading mail…");
  const [error, setError] = useState("");
  const [sentNotice, setSentNotice] = useState("");
  const [sending, setSending] = useState(false);
  const [sendFailed, setSendFailed] = useState(false);
  const [opening, setOpening] = useState(false);
  const [listLoading, setListLoading] = useState(false);
  const [loadingOlder, setLoadingOlder] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [query, setQuery] = useState("");
  const [activeQuery, setActiveQuery] = useState("");
  const [unreadOnly, setUnreadOnly] = useState(false);
  const [formatted, setFormatted] = useState(false);
  const loadSeq = useRef(0);
  const openSeq = useRef(0);
  const olderLock = useRef(false);

  async function loadList(options?: { folder?: Folder["id"]; q?: string; unseen?: boolean; before?: number; append?: boolean }) {
    const append = Boolean(options?.append && options.before);
    if (append && olderLock.current) return;
    const seq = ++loadSeq.current;
    const nextFolder = options?.folder ?? folder;
    const q = (options?.q ?? activeQuery).trim();
    const unseen = options?.unseen ?? unreadOnly;
    if (append) {
      olderLock.current = true;
      setLoadingOlder(true);
    } else {
      openSeq.current += 1;
      setListLoading(true);
      setStatus("Loading mail…");
      setSelected(null);
      setMessage(null);
      setOpening(false);
    }
    setError("");
    try {
      const params = new URLSearchParams({ folder: nextFolder });
      if (q) params.set("q", q);
      if (unseen) params.set("unseen", "1");
      if (append && options?.before) params.set("before", String(options.before));
      const response = await fetch(`/api/mail?${params.toString()}`);
      const body = await response.json();
      if (seq !== loadSeq.current) return;
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
      setAddress(body.address || "info@dezinin.com");
      setConfigured(true);
      setFolders(body.folders || []);
      setHasMore(Boolean(body.hasMore));
      const incoming = (body.messages || []) as Summary[];
      if (append) {
        setMessages((current) => {
          const ids = new Set(current.map((item) => item.uid));
          return [...current, ...incoming.filter((item) => !ids.has(item.uid))];
        });
      } else {
        setListedFolder(nextFolder);
        setMessages(incoming);
      }
      setStatus("");
    } catch {
      if (seq !== loadSeq.current) return;
      setError("The mailbox could not be reached.");
      setStatus("");
    } finally {
      if (append) olderLock.current = false;
      if (seq === loadSeq.current) {
        setListLoading(false);
        setLoadingOlder(false);
      }
    }
  }

  useEffect(() => {
    void loadList({ folder: "inbox", q: "", unseen: false });
  }, []);

  async function openMessage(uid: number) {
    const seq = ++openSeq.current;
    setComposing(false);
    setSelected(uid);
    setMessage(null);
    setFormatted(false);
    setOpening(true);
    setError("");
    const response = await fetch(`/api/mail?folder=${encodeURIComponent(folder)}&uid=${uid}`);
    const body = await response.json();
    if (seq !== openSeq.current) return;
    setOpening(false);
    if (!response.ok) {
      setError(body.error || "That message could not be opened.");
      return;
    }
    setMessage(body.message);
    setMessages((current) => current.map((item) => (item.uid === uid ? { ...item, seen: true } : item)));
  }

  function showList() {
    openSeq.current += 1;
    setComposing(false);
    setSelected(null);
    setMessage(null);
    setOpening(false);
    setFormatted(false);
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
    setSendFailed(false);
    setError("");
    setComposing(true);
  }

  async function sendDraft() {
    setSending(true);
    setError("");
    setSendFailed(false);
    setSentNotice("");
    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(draft),
      });
      const body = await response.json().catch(() => ({}));
      if (!response.ok) {
        setError(body.error || "The message was not sent.");
        setSendFailed(true);
        return;
      }
      setComposing(false);
      setDraft({ to: "", cc: "", subject: "", text: "" });
      setSentNotice(body.saved === false ? `Sent as ${address}. A copy was not saved in Sent.` : `Sent as ${address}.`);
      if (folder === "sent") void loadList({ folder: "sent" });
    } catch {
      setError("The message was not sent.");
      setSendFailed(true);
    } finally {
      setSending(false);
    }
  }

  function onSend(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendDraft();
  }

  function onSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = query.trim();
    setQuery(next);
    setActiveQuery(next);
    void loadList({ q: next });
  }

  function loadOlder() {
    const oldest = messages.reduce((min, item) => (item.seq > 0 ? Math.min(min, item.seq) : min), Number.POSITIVE_INFINITY);
    if (!Number.isFinite(oldest)) return;
    void loadList({ append: true, before: oldest });
  }

  const folderLabel = folders.find((item) => item.id === folder)?.label || (folder === "sent" ? "Sent" : "Inbox");
  const reading = composing || selected !== null;

  return (
    <main className={`mail-desk ${fontClassName}`.trim()} data-reading={reading ? "true" : "false"}>
      <style>{deskCss}</style>
      <header style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 16, padding: "18px 22px", borderBottom: "1px solid #2a2422", flexShrink: 0 }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "#8b8988" }}>Mail</div>
          <div style={{ fontSize: 16 }}>{address}</div>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", flexWrap: "wrap", gap: 8 }}>
          {folders.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-current={folder === item.id ? "page" : undefined}
              onClick={() => {
                setFolder(item.id);
                setComposing(false);
                void loadList({ folder: item.id });
              }}
              style={tabStyle(folder === item.id)}
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => {
              openSeq.current += 1;
              setComposing(true);
              setSelected(null);
              setMessage(null);
              setOpening(false);
              setDraft({ to: "", cc: "", subject: "", text: "" });
              setSendFailed(false);
              setError("");
            }}
            style={accentStyle()}
          >
            Compose
          </button>
        </div>
        <div aria-live="polite" style={{ flexBasis: "100%", fontSize: 13, display: "grid", gap: 4 }}>
          {error ? <span style={{ color: "#fe4101" }}>{error}</span> : null}
          {status ? <span style={{ color: "#a39e9b" }}>{status}</span> : null}
          {sentNotice ? <span style={{ color: "#e4e2df" }}>{sentNotice}</span> : null}
        </div>
      </header>
      {!configured ? (
        <p style={{ padding: 28, color: "#a39e9b", maxWidth: 560, lineHeight: 1.6 }}>{status}</p>
      ) : (
        <div className="mail-grid">
          <section className="mail-list">
            <form onSubmit={onSearch} style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "end", padding: 12, borderBottom: "1px solid #2a2422", flexShrink: 0 }}>
              <label style={{ ...labelStyle, flex: "1 1 140px", minWidth: 0 }}>
                Search
                <input value={query} onChange={(event) => setQuery(event.target.value)} style={{ ...fieldStyle, padding: "8px 12px" }} />
              </label>
              <button type="submit" style={tabStyle(false)}>
                Search
              </button>
              <button
                type="button"
                aria-pressed={unreadOnly}
                onClick={() => {
                  const next = !unreadOnly;
                  setUnreadOnly(next);
                  void loadList({ unseen: next });
                }}
                style={tabStyle(unreadOnly)}
              >
                Unread
              </button>
            </form>
            <div className="mail-scroll">
              {!listLoading && !messages.length ? <p style={{ padding: 18, color: "#a39e9b" }}>No messages.</p> : null}
              {messages.map((item) => {
                const party = displayName(listedFolder === "sent" ? item.to : item.from) || (listedFolder === "sent" ? "(no recipient)" : "(unknown)");
                const active = selected === item.uid;
                return (
                  <button
                    key={item.uid}
                    type="button"
                    onClick={() => void openMessage(item.uid)}
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "left",
                      padding: "14px 16px",
                      background: active ? "#221c1a" : "transparent",
                      color: "inherit",
                      border: 0,
                      borderBottom: "1px solid #2a2422",
                      borderLeft: active ? "3px solid #fe4101" : "3px solid transparent",
                      cursor: "pointer",
                      font: "inherit",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, color: item.seen ? "#8b8988" : "#a39e9b" }}>
                      <span style={{ fontWeight: item.seen ? 500 : 700, color: item.seen ? "#a39e9b" : "#f7f1ea", minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{party}</span>
                      <span style={{ whiteSpace: "nowrap", flexShrink: 0 }}>{when(item.date)}</span>
                    </div>
                    <div style={{ marginTop: 4, fontWeight: item.seen ? 500 : 700, color: item.seen ? "#a39e9b" : "#f7f1ea" }}>{item.subject}</div>
                  </button>
                );
              })}
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "12px 16px", borderTop: "1px solid #2a2422", color: "#8b8988", fontSize: 12, flexShrink: 0 }}>
              <span>Latest 40</span>
              {hasMore ? (
                <button type="button" onClick={loadOlder} disabled={loadingOlder} style={tabStyle(false)}>
                  {loadingOlder ? "Loading…" : "Load older"}
                </button>
              ) : null}
            </div>
          </section>
          <section className="mail-reader">
            <div className="mail-back-wrap">
              <button type="button" onClick={showList} style={tabStyle(false)}>
                Back to {folderLabel}
              </button>
            </div>
            <div className="mail-scroll" style={{ padding: 22 }}>
              {composing ? (
                <form onSubmit={onSend} style={{ display: "grid", gap: 12, maxWidth: 720 }}>
                  <p style={{ margin: 0, color: "#f7f1ea" }}>From {address}</p>
                  <label style={labelStyle}>
                    To
                    <input required value={draft.to} onChange={(event) => setDraft({ ...draft, to: event.target.value })} style={fieldStyle} />
                  </label>
                  <label style={labelStyle}>
                    Cc
                    <input value={draft.cc} onChange={(event) => setDraft({ ...draft, cc: event.target.value })} style={fieldStyle} />
                  </label>
                  <label style={labelStyle}>
                    Subject
                    <input required value={draft.subject} onChange={(event) => setDraft({ ...draft, subject: event.target.value })} style={fieldStyle} />
                  </label>
                  <label style={labelStyle}>
                    Message
                    <textarea required rows={12} value={draft.text} onChange={(event) => setDraft({ ...draft, text: event.target.value })} style={{ ...fieldStyle, resize: "vertical" }} />
                  </label>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <button type="submit" disabled={sending} style={accentStyle()}>
                      {sending ? "Sending…" : "Send"}
                    </button>
                    {sendFailed ? (
                      <button type="button" disabled={sending} onClick={() => void sendDraft()} style={tabStyle(false)}>
                        Retry
                      </button>
                    ) : null}
                    <button type="button" onClick={() => setComposing(false)} style={tabStyle(false)}>
                      Cancel
                    </button>
                  </div>
                </form>
              ) : opening ? (
                <p aria-live="polite" style={{ color: "#8b8988" }}>Opening…</p>
              ) : message ? (
                <article>
                  <h1 style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.03em", margin: "0 0 8px" }}>{message.subject}</h1>
                  <p style={{ color: "#a39e9b", margin: "0 0 4px" }}>From {message.from}</p>
                  <p style={{ color: "#a39e9b", margin: "0 0 16px" }}>
                    To {message.to}
                    {message.cc ? ` · Cc ${message.cc}` : ""} · <span style={{ whiteSpace: "nowrap" }}>{when(message.date)}</span>
                  </p>
                  <button type="button" onClick={reply} style={{ ...tabStyle(false), marginBottom: 18 }}>
                    Reply
                  </button>
                  <pre style={{ whiteSpace: "pre-wrap", fontFamily: "inherit", fontSize: 15, lineHeight: 1.6, margin: 0 }}>{message.text}</pre>
                  {message.html ? (
                    <button type="button" onClick={() => setFormatted((value) => !value)} style={{ ...tabStyle(false), marginTop: 18 }}>
                      {formatted ? "Hide formatted message" : "Show formatted message"}
                    </button>
                  ) : null}
                  {formatted && message.html ? (
                    <iframe title="Formatted message" sandbox="" srcDoc={message.html} style={{ width: "100%", minHeight: 480, marginTop: 12, border: "1px solid #2a2422", background: "#fff" }} />
                  ) : null}
                </article>
              ) : listLoading || selected !== null ? null : (
                <p style={{ color: "#8b8988" }}>Choose a message, or compose a new one.</p>
              )}
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
