import type { Metadata } from "next";
import Script from "next/script";
import { PrefetchRoutes } from "@/components/prefetch-routes";
import { RouteScroll } from "@/components/route-scroll";
import { loadSite } from "@/lib/load-content";
import "./globals.css";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  try {
    const site = await loadSite();
    return {
      title: site.data.site.metaTitle || "DEZININ",
      description: site.data.site.metaDescription || "Your partner for 3D design, graphic design, and fabric sourcing.",
      icons: { icon: "/favicon.ico" },
    };
  } catch {
    return {
      title: "DEZININ",
      description: "Your partner for 3D design, graphic design, and fabric sourcing.",
      icons: { icon: "/favicon.ico" },
    };
  }
}

const themeScript = `(function(){try{var t=localStorage.getItem("theme")||"dark";if(t==="system"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}var root=document.documentElement;root.classList.remove("light","dark");root.classList.add(t);root.style.colorScheme=t;}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="dark montserrat_ce056a82-module__P5Z2va__className montserrat_ce056a82-module__P5Z2va__variable roboto_slab_8a1d1da1-module__amcAMW__variable"
      suppressHydrationWarning
    >
      <head>
        <link rel="stylesheet" href="/vendor/chunks/498085223e38c3eb.css" />
        <link rel="stylesheet" href="/vendor/chunks/78e649127915b55a.css" />
        <Script id="theme" strategy="beforeInteractive">
          {themeScript}
        </Script>
      </head>
      <body className="antialiased">
        <RouteScroll />
        <PrefetchRoutes hrefs={["/", "/design-lab", "/contact-us"]} />
        {children}
      </body>
    </html>
  );
}
