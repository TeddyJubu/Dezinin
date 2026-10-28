---
target: only the email pages
total_score: 18
max_score: 40
na_heuristics: 
p0_count: 1
p1_count: 3
target_identity: "file:/Users/teddyburtonburger/Desktop/Code-hub/Dezinin/components/mail-desk.tsx"
target_fingerprint: "sha256:0ad64f572a071f8c42b27fd7f5faf9375eaaefbce266d2ff4f58d760af172a22"
target_path: /Users/teddyburtonburger/Desktop/Code-hub/Dezinin/components/mail-desk.tsx
timestamp: 2026-10-27T19-23-38Z
slug: components-mail-desk-tsx
---
Method: dual-agent (A: cdd741c0-eb04-49e6-b3e5-6e9ed1851351 · B: 553fa2a9-1b2e-46e5-bff9-b48d3d7f2a40)

# Mail desk critique

Scope: `components/mail-desk.tsx` and `app/editor/mail/page.tsx`, judged on http://localhost:3000/editor/mail. The rest of the site was left alone.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Opening a row flashes the empty prompt, and a successful send ends in silence. |
| 2 | Match System / Real World | 2 | Dates omit the year, and senders stay in raw `Name <email>` form. |
| 3 | User Control and Freedom | 2 | Cancel exists. A folder change throws away a draft with no warning, and Seen cannot be undone. |
| 4 | Consistency and Standards | 2 | Tokens match the admin. Send and errors share the same orange, and focused Send has no outline. |
| 5 | Error Prevention | 2 | An empty To is blocked. There is no confirm before sending as the company address. |
| 6 | Recognition Rather Than Recall | 2 | Rows show sender, subject, and time. Filled compose fields lose their labels. |
| 7 | Flexibility and Efficiency | 1 | No search, no unread filter, no shortcut, and no way past the latest 40 messages. |
| 8 | Aesthetic and Minimalist Design | 2 | The chrome is quiet. The page is a 4,618px scroll with a white letter as the loudest object. |
| 9 | Error Recovery | 2 | A failed send keeps the draft and one orange sentence. There is no retry. |
| 10 | Help and Documentation | 1 | Nothing on the compose form says the message goes out as info@dezinin.com. |
| **Total** | | **18/40** | **Poor** |

Cognitive load: 7 of 8 checklist items fail. Only the small command set (Inbox, Sent, Compose, Reply, Send, Cancel) stays within working memory. The list, the reader, and the form all compete at once.

## Design Specificity Verdict

**LLM assessment.** Interchangeable webmail with Dezinin paint. The shell uses the admin tokens (`#120f0e`, `#fe4101`, Montserrat, the tracked `MAIL` eyebrow) and the live page does render Montserrat. That is the entire product signature. The structure is a generic two-pane client: pill folders, a 320px list, an empty reader, a boxed compose form. Nothing in the list rhythm, the reading pane, or the compose form is specific to a fashion house answering as info@dezinin.com. The message iframe is a white sheet (`background: #fff`, `minHeight: 480`) sitting in the dark room, and it outranks the subject.

**Deterministic scan.** `impeccable detect` on the two source files exited 0 and returned no findings. The live page was not clean. Injected `detect.js` reported `low-contrast` on the Compose button: white `#ffffff` on `#fe4101`, 3.5:1, 13px Montserrat, below the 4.5:1 bar for normal text. The design review measured Send the same way, at 3.52:1, so the two passes agree and the source scan missed it because the color is inline. The second hit, `overused-font` (Montserrat at 100% of text), is a false positive. One brand face on a single screen is the point.

**Visual overlays.** Injection succeeded. A visible overlay is on the mail tab: a “LOW CONTRAST TEXT” mark on Compose, and a top banner “OVERUSED FONT / Primary font: montserrat”. The live server on port 8400 was stopped.

## Overall Impression

The desk looks like it belongs in the editor until you try to use it. The single biggest opportunity is the moment of sending: say who the message is from, make the orange button readable, and leave a confirmation that the send happened.

## What's Working

- The dark shell, the eyebrow, and Montserrat actually match the admin, and Compose / Send use the same accent as the rest of the editor.
- Reply on a message prefills recipient, subject, and the quoted body in one step.
- The command set is small. Sent tells the truth with “No messages.” An empty Send is blocked before a request.

## Priority Issues

### [P0] At phone width the compose column collapses to a sliver

The grid is `minmax(240px, 320px)` plus the remainder. At 390px that is a 320px list and a 70px reader. The compose content box is about 26px wide, so Subject and Message read as “Sub” and “Mes”, and Send is clipped.

**Why it matters:** An editor on a phone cannot read or answer a message. The primary task is impossible.

**Fix:** Under 720px, stack the panes. Opening a row or Compose hides the list and shows a back control to Inbox or Sent.

**Suggested command:** /impeccable adapt

### [P1] A real enquiry is buried in a flat 40-row list

There is no search and no unread filter. The list is hard-capped at 40 (`LIST_LIMIT`) and never says so. Older mail is simply absent.

**Why it matters:** The job of this desk is finding the one message that is not spam. A wall of cold email with no way to narrow it makes that a scan, not a search.

**Fix:** A search field in the header, an Unread toggle, and a footer line “Latest 40” with Load older.

**Suggested command:** /impeccable layout

### [P1] The page scrolls as one document

Measured height was 4,618px. The header is `position: static`. Both columns grow together, so the reader scrolls away with the list. Opening a row and switching folders also flash “Choose a message, or compose a new one.”

**Why it matters:** The editor loses the message they just opened, and the folder change looks like the mailbox emptied.

**Fix:** Lock the shell to `100dvh`, scroll each pane on its own, keep the previous list until the next fetch returns, and put “Opening…” in the reader.

**Suggested command:** /impeccable layout

### [P1] Compose does not say who you are, and Send is hard to read

Placeholders are the only labels, so once To and Subject have values the form is unlabeled boxes. There is no From line. Send is white on `#fe4101` at about 3.5:1. A successful send only closes the form.

**Why it matters:** This address is the company. Sending into silence, from a button that fails contrast, is the highest-stakes moment on the screen and the least explained.

**Fix:** Persistent labels, a line “From info@dezinin.com” above To, dark text on the orange button, and a status that stays: “Sent as info@dezinin.com.”

**Suggested command:** /impeccable clarify

### [P2] The reader looks like a printout dropped on the desk

Rows show raw angle-bracket addresses. Dates wrap and omit the year across a list that crosses a year boundary. The selected row is `#221c1a` on `#120f0e` (about 1.14:1). HTML mail is a 480px white iframe even for a short letter.

**Why it matters:** The thing you came to read is the least considered object, and the selected row is nearly invisible.

**Fix:** Display names, dates that do not wrap and include the year, an accent selection bar, and plain text by default with “Show formatted message” for the iframe.

**Suggested command:** /impeccable typeset

## Persona Red Flags

**Alex (power user).** No search, no shortcuts, no bulk action, no way past the 40-message cap. Every row is its own tab stop. Reply does not keep a thread id. Seen cannot be undone.

**Sam (keyboard and screen reader).** Focused Send has `outline-style: none`. To, Cc, Subject, and Message are named only by placeholders. Inbox and Sent have no `aria-current`. “Loading mail…” is not a live region. The iframe’s accessible name is “Message”. Selection is a 1.14:1 color change. Send text fails 4.5:1.

**Riley (edge cases).** Dates cross a year with no year. Long subjects wrap to three lines. Sent is an empty column beside the empty prompt. Switching folders while a draft is open drops the form. The reply body duplicates the quote and then the original From / Sent / Subject block. At 390px the fields are sliced.

## Minor Observations

- Compose stays orange whether or not the form is open, so it never shows “you are composing.”
- Rows have no hover, and addresses are not truncated, so the time wraps under the date.
- Short letters still get a 480px white frame.
- The standalone page has no control back to the editor. In the product this view is the admin iframe. That shell was not part of this pass.
- Not verified: a real send, the server error sentence, the signed-out and unconfigured states, and a screen reader. Native validation on an empty To did focus the field.

## Questions to Consider

- The only reason this desk exists is to answer as info@dezinin.com. Why does the compose form never say that?
- Forty cold emails and a white sheet in a black room: what here could only belong to Dezinin?
- The second after Send is silence. Who is that silence protecting?
