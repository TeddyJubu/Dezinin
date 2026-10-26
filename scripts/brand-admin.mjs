import fs from "fs";

const htmlPath = "public/admin/index.html";
let html = fs.readFileSync(htmlPath, "utf8");
html = html.replaceAll("<title>TinaCMS</title>", "<title>DEZININ</title>");
html = html.replace(/href="\/admin\/assets\/favicon[^"]*"/, 'href="/favicon.ico"');
html = html.replaceAll("Failed loading TinaCMS assets", "Failed loading DEZININ");
html = html.replace(
  /Your TinaCMS configuration[\s\S]*?this page\./,
  "DEZININ could not load the editor.",
);
html = html.replace(", 2000)", ", 12000)");
html = html.replaceAll(
  'Please visit <a href="https://tina.io/docs/r/FAQ/#13-how-do-i-resolve-failed-loading-tinacms-assets-error">this doc</a> for help.',
  "Refresh the page. If it keeps happening, the editor assets did not load.",
);
html = html.replaceAll("#f5f5f5", "#120f0e");
html = html.replaceAll("#333", "#e4e2df");
html = html.replaceAll("#fff", "#1a1614");
html = html.replaceAll("#0077cc", "#fe4101");
fs.writeFileSync(htmlPath, html);
