"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ContactSection } from "./contact-section";
import { PlusIcon, mediaUrl, sectionVisible, youtubeIdFrom, type HomeContent, type NewsletterContent, type SiteContent } from "./content";

const headlineClass = [
  "hero-text text-center z-20 pointer-events-none px-4",
  "hero-text-line-2 text-center z-20 pointer-events-none absolute opacity-0 px-4",
  "hero-text-line-3 text-center z-20 pointer-events-none absolute opacity-0 px-4",
];

function scatter(index: number, mobile: boolean) {
  const ring = Math.floor(index / 4);
  const reach = mobile ? 280 : 600;
  const lift = mobile ? 180 : 400;
  const slot = index % 4;
  const x = (slot === 0 || slot === 3 ? reach : -reach) + 8 * ring;
  const y = (slot < 2 ? -lift : lift) + 3 * ring;
  const rotation = [37, -53, -125, 155][slot] + 2 * ring;
  return { x, y, rotation, zIndex: ring };
}

function NewsletterStage({ headlines, items }: { headlines: HomeContent["headlines"]; items: NewsletterContent[] }) {
  const router = useRouter();
  const rootRef = useRef<HTMLElement>(null);
  const cloudRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const signature = items.map((item) => item._sys?.filename || item.title || "").join("\n");
  const lines = (headlines || []).filter((line) => line?.title).slice(0, 3);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const cloud = cloudRef.current;
    if (!root || !cloud) return;
    const cards = cardRefs.current.filter((card): card is HTMLAnchorElement => Boolean(card));
    if (!cards.length) return;

    gsap.registerPlugin(ScrollTrigger);
    const mobile = window.innerWidth < 768;
    const grid = { points: [] as { x: number; y: number }[] };

    const measure = () => {
      const columns = mobile ? 2 : 3;
      const width = window.innerWidth;
      const gap = (1.2 * width) / 100;
      const cardWidth = (0.9 * width - (columns + 1) * gap) / columns;
      const heights = Array(columns).fill(0);
      const centers = Array.from({ length: columns }, (_, index) => (index - (columns - 1) / 2) * (cardWidth + gap));
      const points = cards.map((card) => {
        const image = card.querySelector("img");
        const ratio = image && image.naturalWidth > 0 ? image.naturalHeight / image.naturalWidth : 1.25;
        const cardHeight = cardWidth * ratio;
        card.style.width = `${cardWidth}px`;
        card.style.height = `${cardHeight}px`;
        const column = heights.indexOf(Math.min(...heights));
        const point = { x: centers[column], y: heights[column] + cardHeight / 2 };
        heights[column] += cardHeight + gap;
        return point;
      });
      const total = Math.max(...heights);
      const view = window.innerHeight;
      points.forEach((point) => {
        point.y -= total / 2;
        point.y += view / 2;
        point.y += -80;
      });
      grid.points = points;
    };

    let removeMove = () => {};
    const ctx = gsap.context(() => {
      gsap.set(cards, {
        x: (index) => scatter(index, mobile).x,
        y: (index) => scatter(index, mobile).y,
        opacity: 1,
        scale: 1,
        rotation: (index) => scatter(index, mobile).rotation,
        zIndex: (index) => scatter(index, mobile).zIndex,
      });

      const moveX = gsap.quickTo(cloud, "x", { duration: 1.5, ease: "power2.out" });
      const moveY = gsap.quickTo(cloud, "y", { duration: 1.5, ease: "power2.out" });
      const onMove = (event: MouseEvent) => {
        if (mobile) return;
        moveX((event.clientX / window.innerWidth - 0.5) * 80);
        moveY((event.clientY / window.innerHeight - 0.5) * 80);
      };
      window.addEventListener("mousemove", onMove, { passive: true });
      removeMove = () => window.removeEventListener("mousemove", onMove);

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "+=380%",
          scrub: 0.5,
          pin: true,
          invalidateOnRefresh: true,
          anticipatePin: mobile ? 0 : 1,
        },
      });

      timeline.to(
        cards,
        {
          duration: 9.1,
          x: (index) => {
            const reach = 1 - index / cards.length;
            return 600 * reach * Math.cos((Math.PI / 180) * ((index % 4) * 90 + 360 * reach * 3));
          },
          y: (index) => {
            const reach = 1 - index / cards.length;
            return 600 * reach * Math.sin((Math.PI / 180) * ((index % 4) * 90 + 360 * reach * 3));
          },
          scale: 0,
          opacity: 0,
          rotation: 0,
          ease: "power2.in",
          stagger: { each: 0.02, from: "start" },
        },
        0,
      );
      timeline.to(".hero-text", { opacity: 0, scale: 0.5, filter: "blur(20px)", duration: 2, ease: "power2.inOut" }, 1);
      timeline.to(".hero-text-line-2", { opacity: 1, scale: 1, filter: "blur(0px)", duration: 2, ease: "power2.inOut" }, 3.7);
      timeline.to(".hero-text-line-2", { opacity: 0, scale: 0.5, filter: "blur(20px)", duration: 2, ease: "power2.inOut" }, 5.7);
      timeline.to(".hero-text-line-3", { opacity: 1, scale: 1, filter: "blur(0px)", duration: 2, ease: "power2.inOut" }, 7.4);

      measure();
      const pending = cards
        .map((card) => card.querySelector("img"))
        .filter((image): image is HTMLImageElement => image instanceof HTMLImageElement && !image.complete);
      const settle = () => {
        const y = window.scrollY;
        measure();
        ScrollTrigger.refresh();
        if (Math.abs(window.scrollY - y) > 1) window.scrollTo(0, y);
      };
      pending.forEach((image) => {
        image.addEventListener("load", settle, { once: true });
        image.addEventListener("error", settle, { once: true });
      });

      timeline.to(".hero-text-line-3", { opacity: 0, scale: 0.5, filter: "blur(20px)", duration: 2, ease: "power2.inOut" }, 9.4);
      timeline.to(cards, { x: 0, y: 0, scale: 0.3, opacity: 0, rotation: 0, ease: "none", duration: 0.7 }, 9.2);
      timeline.eventCallback("onUpdate", () => {
        const clickable = timeline.progress() > 0.9;
        cards.forEach((card) => {
          card.style.pointerEvents = clickable ? "auto" : "none";
        });
      });
      timeline.to(cards, {
        x: (index) => grid.points[index]?.x ?? 0,
        y: (index) => grid.points[index]?.y ?? 0,
        scale: 1,
        opacity: 1,
        rotation: 0,
        filter: "blur(0px)",
        ease: "power3.out",
        duration: 2.5,
        stagger: { each: 0.08, from: "start" },
      });

    }, root);

    return () => {
      removeMove();
      ctx.revert();
      ScrollTrigger.clearScrollMemory("manual");
    };
  }, [signature]);

  return (
    <section id="newsletter-section">
      <main ref={rootRef} className="relative bg-background overflow-hidden">
        <div className="h-screen w-full flex items-center justify-center relative">
          {lines.map((line, index) => (
            <div key={line.title} className={headlineClass[index]}>
              <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold text-foreground tracking-wide">{line.title}</h1>
              <p className="text-zinc-500 mt-2 md:mt-4 text-sm md:text-lg font-light tracking-[0.2em] uppercase">{line.subtitle}</p>
            </div>
          ))}
          <div ref={cloudRef} className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {items.map((item, index) => {
              const place = scatter(index, false);
              return (
                <Link
                  key={item._sys?.filename || item.title}
                  href={`/newsletters/${item._sys?.filename || ""}`}
                  prefetch={false}
                  scroll
                  onMouseEnter={() => {
                    const href = `/newsletters/${item._sys?.filename || ""}`;
                    if (!href.endsWith("/")) router.prefetch(href);
                  }}
                  ref={(node) => {
                    cardRefs.current[index] = node;
                  }}
                  className="group absolute w-32 sm:w-52 md:w-72 lg:w-96 overflow-hidden bg-zinc-900 will-change-transform cursor-pointer"
                  style={{
                    transform: `translate(${place.x}px, ${place.y}px) rotate(${place.rotation}deg)`,
                    zIndex: place.zIndex,
                    backfaceVisibility: "hidden",
                    pointerEvents: "none",
                  }}
                >
                  <img src={mediaUrl(item.cover)} alt={item.title || ""} className="w-full h-full object-cover opacity-100" loading="eager" />
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-orange-400 to-transparent p-4 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <h3 className="text-white text-lg font-bold leading-tight drop-shadow-md">{item.title}</h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="h-[45vh] md:h-[75vh]" />
      </main>
    </section>
  );
}

function RevealRow({ children }: { children: ReactNode }) {
  const { ref, shown } = useReveal();
  return (
    <article ref={ref} className={`project-row transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${shown ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
      {children}
    </article>
  );
}

function commandVideo(frame: HTMLIFrameElement | null, command: "playVideo" | "pauseVideo") {
  frame?.contentWindow?.postMessage(JSON.stringify({ event: "command", func: command, args: [] }), "*");
}

function GallerySlider({ title, videos }: { title?: string | null; videos: HomeContent["videos"] }) {
  const clips = (videos || []).flatMap((video) => {
    const id = youtubeIdFrom(video?.youtubeId);
    return id ? [{ ...video, youtubeId: id }] : [];
  });
  const slides = [...clips, ...clips, ...clips];
  const frames = useRef<Array<HTMLIFrameElement | null>>([]);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    frames.current.forEach((frame, index) => commandVideo(frame, index === active ? "playVideo" : "pauseVideo"));
  }, [active]);

  if (!clips.length) return null;

  return (
    <section id="video-slider" className="w-full flex flex-col items-center justify-center px-4 py-3 md:px-8 md:py-18">
      <h3 className="text-3xl md:text-5xl mb-8 font-semibold text-foreground text-center">{title}</h3>
      <div className="relative w-[85%] flex justify-center pt-12">
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          slidesPerView="auto"
          slideToClickedSlide
          coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5, slideShadows: false }}
          modules={[EffectCoverflow, Navigation]}
          className="videoSlider-module__5JS_Uq__swiperContainer"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            const prev = prevRef.current;
            const next = nextRef.current;
            const navigation = swiper.params.navigation;
            if (!prev || !next || !navigation || typeof navigation === "boolean") return;
            navigation.prevEl = prev;
            navigation.nextEl = next;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          onSlideChange={(swiper) => setActive(swiper.realIndex)}
        >
          {slides.map((video, index) => {
            const id = video.youtubeId || "";
            const playing = index === active;
            return (
              <SwiperSlide key={`${id}-${index}`}>
                <div className="videoSlider-module__5JS_Uq__videoWrapper">
                  <iframe
                    ref={(node) => {
                      frames.current[index] = node;
                    }}
                    src={`https://www.youtube-nocookie.com/embed/${id}?enablejsapi=1&mute=1&loop=1&playlist=${id}&controls=1&rel=0&playsinline=1`}
                    title={video.title || "Gallery video"}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    sandbox="allow-scripts allow-same-origin allow-presentation allow-popups allow-popups-to-escape-sandbox"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="videoSlider-module__5JS_Uq__slideVideo"
                    loading="lazy"
                    onLoad={() => {
                      if (playing) commandVideo(frames.current[index], "playVideo");
                    }}
                  />
                  {playing ? null : <div className="videoSlider-module__5JS_Uq__touchOverlay" />}
                </div>
              </SwiperSlide>
            );
          })}
          <button type="button" ref={prevRef} className="videoSlider-module__5JS_Uq__sliderArrow videoSlider-module__5JS_Uq__arrowLeft" aria-label="Previous video">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button type="button" ref={nextRef} className="videoSlider-module__5JS_Uq__sliderArrow videoSlider-module__5JS_Uq__arrowRight" aria-label="Next video">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </Swiper>
      </div>
    </section>
  );
}

function useReveal() {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setShown(true);
        observer.disconnect();
      },
      { rootMargin: "-12% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return { ref, shown };
}

export function HomeView({
  home,
  site,
  newsletters,
}: {
  home: HomeContent;
  site: SiteContent;
  newsletters: NewsletterContent[];
}) {
  const filters = (home.filters || []).filter(Boolean) as string[];
  const [filter, setFilter] = useState(filters[0] || "ALL");
  const [openProject, setOpenProject] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState(0);
  const projects = (home.projects || []).filter((project) => {
    if (!filter || filter === "ALL") return true;
    return (project.categories || []).includes(filter);
  });
  const partners = (home.partners || []).filter((logo): logo is string => Boolean(logo));

  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden">
      {sectionVisible(home.showHero) && <section id="hero" className="relative h-screen">
        <div className="relative w-full h-full overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video autoPlay muted loop playsInline className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover">
              <source src={mediaUrl(home.heroVideo)} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          </div>
        </div>
      </section>}

      {sectionVisible(home.showPartners) && <section id="partner-slider" className="bg-brand-black py-2 md:py-6 my-8 md:my-28">
        <div className="mx-auto max-w-6xl px-4">
          <h3 className="text-3xl md:text-5xl mb-10 md:mb-16 font-semibold text-foreground text-center">{home.experienceTitle}</h3>
          <div className="grid" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "2.5rem 1.5rem" }}>
            {partners.map((logo) => (
              <div key={logo} className="flex items-center justify-center">
                <img alt="" src={mediaUrl(logo)} className="w-auto max-w-full object-contain" style={{ height: "clamp(4.5rem, 8vw, 8rem)" }} />
              </div>
            ))}
          </div>
        </div>
      </section>}

      {sectionVisible(home.showProjects) && <section className="w-full py-16 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap gap-6">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={filter === item}
                onClick={() => setFilter(item)}
                className={`relative pb-1 text-xs uppercase tracking-[0.2em] transition-colors duration-300 md:text-sm ${filter === item ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                {item}
                <span className={`absolute bottom-0 left-0 h-px w-full origin-left bg-brand-orange transition-transform duration-500 ${filter === item ? "scale-x-100" : "scale-x-0"}`} />
              </button>
            ))}
          </div>
          <div className="mt-14 flex flex-col gap-20 md:mt-24 md:gap-32">
            {projects.map((project, index) => {
              const open = openProject === index;
              return (
                <RevealRow key={project.title}>
                  <div className="group relative grid gap-6 md:grid-cols-2 md:items-center md:gap-12 lg:gap-20">
                    <div className={index % 2 ? "md:order-2" : ""}>
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img alt={project.title || ""} src={mediaUrl(project.image)} className="object-cover absolute inset-0 h-full w-full transition-transform duration-[1200ms] group-hover:scale-[1.06]" />
                        <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/0" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-4">
                        <span className="font-robotoSlab text-sm tabular-nums text-brand-orange">{project.number}</span>
                        <span className="h-px w-12 bg-muted-foreground transition-all duration-500 group-hover:w-20 group-hover:bg-brand-orange md:w-16" />
                      </div>
                      <h3 className="mt-5 text-3xl font-bold uppercase leading-[1.05] tracking-tight text-foreground transition-colors duration-300 group-hover:text-brand-orange md:mt-7 md:text-5xl lg:text-6xl">
                        {project.title}
                      </h3>
                      <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground md:mt-5 md:text-sm">
                        {(project.categories || []).filter(Boolean).join("  /  ")}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-foreground md:mt-8">
                        <span className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-500 ${open ? "rotate-45 border-brand-orange text-brand-orange" : "border-muted-foreground group-hover:border-brand-orange group-hover:text-brand-orange"}`}>
                          <PlusIcon />
                        </span>
                        Details
                      </span>
                    </div>
                    <button type="button" aria-expanded={open} className="absolute inset-0 z-10 cursor-pointer" onClick={() => setOpenProject(open ? null : index)}>
                      <span className="sr-only">Expand {project.title}</span>
                    </button>
                  </div>
                  <div className="grid transition-[grid-template-rows] duration-500" style={{ gridTemplateRows: open ? "1fr" : "0fr" }}>
                    <div className="overflow-hidden">
                      <div className="grid md:grid-cols-2 md:gap-12 lg:gap-20">
                        <p className={`mb-0 mt-6 max-w-xl border-t border-border pt-6 text-base leading-relaxed text-muted-foreground md:mt-8 md:text-lg ${index % 2 ? "" : "md:col-start-2"}`}>
                          {project.summary}
                        </p>
                      </div>
                    </div>
                  </div>
                </RevealRow>
              );
            })}
          </div>
        </div>
      </section>}

      {sectionVisible(home.showGallery) && <GallerySlider title={home.galleryTitle} videos={home.videos} />}

      {sectionVisible(home.showFaq) && <section className="w-full py-16 md:py-28">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl md:text-5xl mb-10 md:mb-16 font-semibold text-foreground">{home.faqTitle}</h2>
          {(home.faqs || []).map((faq, index) => {
            const open = openFaq === index;
            return (
              <div key={faq.question} className="border-b border-border">
                <button type="button" aria-expanded={open} onClick={() => setOpenFaq(open ? -1 : index)} className="group flex w-full items-center gap-4 py-6 text-left md:py-8">
                  <span className="font-robotoSlab text-sm tabular-nums text-brand-orange">{String(index + 1).padStart(2, "0")}</span>
                  <span className="flex-1 text-lg font-semibold uppercase tracking-tight text-foreground transition-colors duration-300 group-hover:text-brand-orange md:text-xl">{faq.question}</span>
                  <span className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${open ? "rotate-45 border-brand-orange text-brand-orange" : "border-muted-foreground group-hover:border-brand-orange group-hover:text-brand-orange"}`}>
                    <PlusIcon />
                  </span>
                </button>
                <div className="grid transition-[grid-template-rows] duration-500" style={{ gridTemplateRows: open ? "1fr" : "0fr" }}>
                  <div className="overflow-hidden">
                    <p className="mb-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:mb-8 md:text-lg">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>}

      {sectionVisible(home.showContact) && <ContactSection contact={home.contact} socials={site.socials} />}
    </main>
  );
}
