## Learned User Preferences

- Keep the public site’s visual design and motion matched to the original at https://dummy.dezinin.com/ when adding CMS, hosting, or editor work.
- Host this site on the user’s Vercel account and keep it there.
- Authenticate the production admin with Auth.js on a self-hosted backend, and do not use paid TinaCloud.
- White-label the admin with the Dezinin brand identity and remove TinaCMS branding.
- Keep version control in a local git repository and commit after every change. Do not push unless asked.
- Keep admin Back navigation inside the editor. Every collection Back button goes to Main page (`#/collections/edit/home/index`). Common settings and Main page must not share one preview route.

## Learned Workspace Facts

- This folder is the Dezinin Fashion Limited Next.js app (Node 22). Public pages read JSON in `content/` (`site`, `home`, `pages`, `newsletters`). `npm run dev` runs `tinacms dev` with Next on port 3000.
- Production is the Vercel project `dezinin` on the Triple Dev's projects team, at https://dezinin-five.vercel.app, with the editor at `/admin`.
- TinaCMS is the CMS. Production uses Auth.js (`next-auth` and `tinacms-authjs`) for admin login and Upstash Redis (`upstash-redis-level`) as the content index. The build is `tinacms build && node scripts/brand-admin.mjs && next build`.
- The original site with the intended layout and effects is https://dummy.dezinin.com/.
- Admin collection labels are "Common settings" (`site`) and "Main page" (`home`). Internal names and paths stay `content/site` and `content/home`. Do not set `ui.global`; Tina titles that sidebar group "Site" and uses it for Media Manager and Users.
- The homepage newsletter/lookbook section and the CMS Newsletters nav are removed. Newsletter JSON remains in `content/newsletters`, and existing lookbook URLs can still open.
