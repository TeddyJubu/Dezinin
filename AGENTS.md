## Learned User Preferences

- Keep the public site’s visual design and motion matched to the original at https://dummy.dezinin.com/ when adding CMS, hosting, or editor work.
- Host this site on the user’s Vercel account and keep it there.
- Authenticate the production admin with Auth.js on a self-hosted backend, and do not use paid TinaCloud.
- White-label the admin with the Dezinin brand identity and remove TinaCMS branding.
- Keep version control in a local git repository and commit after every change. Do not push unless asked.
- Keep the admin sidebar permanently open. It lists Basic settings, Main page, Other pages, Media Manager, Users, and Mail. The editor home is the Basic settings form. Do not add dashboard cards for those destinations, and do not let the sidebar collapse.
- Keep admin Back navigation inside the editor and do not use `history.back()`. From the Main page field list, Back goes to Basic settings (`#/collections/edit/site/global`). A nested item such as an FAQ question returns to that page’s field list first. Other pages documents return to the Other pages list. Basic settings and Main page must not share one preview route.

## Learned Workspace Facts

- This folder is the Dezinin Fashion Limited Next.js app (Node 22). Public pages read JSON in `content/` (`site`, `home`, `pages`, `newsletters`). `npm run dev` runs `tinacms dev` with Next on port 3000.
- Production is the Vercel project `dezinin` on the Triple Dev's projects team, at https://dezinin-five.vercel.app, with the editor at `/admin`. Deploys use the Vercel CLI; the local repo has no git remote.
- TinaCMS is the CMS. Production uses Auth.js (`next-auth` and `tinacms-authjs`) for admin login and Upstash Redis (`upstash-redis-level`) as the content index. The build is `tinacms build && node scripts/brand-admin.mjs && next build`.
- The original site with the intended layout and effects is https://dummy.dezinin.com/.
- The site collection schema label is "Common settings" (`content/site`). The sidebar shows that link as "Basic settings", and the dashboard route is `#/collections/edit/site/global`. Home stays "Main page" (`content/home`). Do not set `ui.global`.
- The homepage newsletter/lookbook section and the CMS Newsletters nav are removed. Newsletter JSON remains in `content/newsletters`, and existing lookbook URLs can still open.
- In the admin editor, the Partner logos list (`data-test=list-partners` on the home collection) shows three logos per row. That layout is editor-only; the public site layout is unchanged.
- Production uploads use the custom media store in `tina/media-store.ts` and the Vercel Blob store `dezinin-media` through `/api/media`. Local dev still uses Tina’s repo media under `public`. Files already in the repo stay there. The self-hosted editor cannot use Tina’s repo media store.
