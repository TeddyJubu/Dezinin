## Learned User Preferences

- Keep the public site’s visual design and motion matched to the original at https://dummy.dezinin.com/ when adding CMS, hosting, or editor work.
- Host this site on the user’s Vercel account and keep it there.
- Authenticate the production admin with Auth.js on a self-hosted backend, and do not use paid TinaCloud.
- White-label the admin with the Dezinin brand identity and remove TinaCMS branding.
- Keep version control in a local git repository and commit after every change. Do not push unless asked.
- Keep the admin sidebar permanently open. It lists Basic settings, Main page, Moodboard, Other pages, Media Manager, Users, and Mail, each with its own icon (gear, house, board, stacked pages, image, person, envelope). The editor home is the Basic settings form. Do not add dashboard cards for those destinations, and do not let the sidebar collapse.
- Keep admin Back navigation inside the editor and do not use `history.back()`. From the Main page field list, Back goes to Basic settings (`#/collections/edit/site/global`). A nested item such as an FAQ question returns to that page’s field list first. Other pages documents return to the Other pages list. Basic settings and Main page must not share one preview route.
- On the admin Mail desk, use Inter with 15px body copy, an envelope icon on the Mail sidebar tab, and slightly grey read messages so they differ from unread.
- On collection headers, label the create button Create New and leave Add Folder as it is. Hide Tina’s unconfigured-search callout; this admin is self-hosted and does not use TinaCloud search.
- Keep public mail for `@dezinin.com` on Zoho. Do not change MX, SPF, or the Zoho verification record to feed the editor mailbox.
- Leave `old folder (ignore normally)` alone. Do not use it as a source for site work, and do not commit it.

## Learned Workspace Facts

- This folder is the Dezinin Fashion Limited Next.js app (Node 22). Public pages read JSON in `content/` (`site`, `home`, `pages`, `newsletters`). `npm run dev` runs `tinacms dev` with Next on port 3000.
- Production is the Vercel project `dezinin` on the Triple Dev's projects team, at https://dezinin-five.vercel.app, with the editor at `/admin`. Deploys use the Vercel CLI. The local repo tracks the GitHub repository `TeddyJubu/Dezinin` on `origin/main`.
- TinaCMS is the CMS. Production uses Auth.js (`next-auth` and `tinacms-authjs`) for admin login and Upstash Redis (`upstash-redis-level`) as the content index. The build is `tinacms build && node scripts/brand-admin.mjs && next build`.
- The original site with the intended layout and effects is https://dummy.dezinin.com/.
- The site collection schema label is "Common settings" (`content/site`). The sidebar shows that link as "Basic settings", and the dashboard route is `#/collections/edit/site/global`. Home stays "Main page" (`content/home`). Do not set `ui.global`.
- The homepage lookbook sits between the hero and the partner logos. Main page edits the Lookbook switch and the three headlines. The Moodboard sidebar list edits each card’s title, order, cover, and PDF, and that list is a grid of pocket cards with the cover peeking out. The lookbook page fills the window under the title. Existing lookbook URLs can still open. Other pages stay a table.
- In the admin editor, the Partner logos list (`data-test=list-partners` on the home collection) shows three logos per row. On the public homepage those logos are a continuous sliding strip that pauses on hover and stays still when reduced motion is requested.
- In the admin editor, image previews and PDF file cards show delete and upload controls only on hover or focus. PDF cards show the file name without the folder path. Keep the always-visible round button beside those previews hidden.
- Production uploads use the custom media store in `tina/media-store.ts` and the Vercel Blob store `dezinin-media` through `/api/media`. The media manager lists `icons`, `images`, `pdf`, and `video`. A new upload from the library root goes into `images`, `pdf`, or `video` by file type; an upload from inside a folder stays in that folder. Existing public URLs stay where they are. Local dev still uses Tina’s repo media under `public`. Files already in the repo stay there. The self-hosted editor cannot use Tina’s repo media store.
- Main page project categories are a dropdown of the existing project filters (`tina/category-select.tsx`).
- The admin Mail desk is `/editor/mail`. It reads and sends as `info@dezinin.com` through `lib/mailbox.ts` over IMAP and SMTP on `mail.dezinin.com`, the cPanel mailbox on the dezinin.com Web Host BD account, not on Vercel. After SMTP accepts a message, the app appends a Sent copy over IMAP. Public mail for `@dezinin.com` is delivered to Zoho, so the desk does not list new internet mail to that address. Copying only `info@dezinin.com` into that cPanel mailbox needs Zoho IMAP for that one address, which is not configured yet. The public contact form uses the same helper. Mailbox login stays in environment variables.
