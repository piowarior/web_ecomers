"use client";
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

type GalleryItem = {
  title: string;
  img: string;
  size: string;
};

const rowOne: GalleryItem[] = [
  {
    title: "Studio Build",
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
    size: "h-64 w-96 sm:h-72 sm:w-[26rem] lg:h-80 lg:w-[32rem]",
  },
  {
    title: "Design Lab",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    size: "h-72 w-[26rem] sm:h-80 sm:w-[32rem] lg:h-96 lg:w-[40rem]",
  },
  {
    title: "Dashboard UI",
    img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    size: "h-64 w-96 sm:h-72 sm:w-[26rem] lg:h-80 lg:w-[32rem]",
  },
];

const rowTwo: GalleryItem[] = [
  {
    title: "Prototype Room",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    size: "h-72 w-[26rem] sm:h-80 sm:w-[32rem] lg:h-96 lg:w-[40rem]",
  },
  {
    title: "Brand Surface",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    size: "h-64 w-96 sm:h-72 sm:w-[26rem] lg:h-80 lg:w-[32rem]",
  },
  {
    title: "Motion Stack",
    img: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=1200&q=80",
    size: "h-72 w-[26rem] sm:h-80 sm:w-[32rem] lg:h-96 lg:w-[40rem]",
  },
];

const rowThree: GalleryItem[] = [
  {
    title: "Workspace Feed",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
    size: "h-72 w-[26rem] sm:h-80 sm:w-[32rem] lg:h-96 lg:w-[40rem]",
  },
  {
    title: "AI Console",
    img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1200&q=80",
    size: "h-64 w-96 sm:h-72 sm:w-[26rem] lg:h-80 lg:w-[32rem]",
  },
  {
    title: "Launch Board",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    size: "h-72 w-[26rem] sm:h-80 sm:w-[32rem] lg:h-96 lg:w-[40rem]",
  },
];

const rowFour: GalleryItem[] = [
  {
    title: "Ecosystem View",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    size: "h-72 w-[26rem] sm:h-80 sm:w-[32rem] lg:h-96 lg:w-[40rem]",
  },
  {
    title: "Rental Shelf",
    img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    size: "h-64 w-96 sm:h-72 sm:w-[26rem] lg:h-80 lg:w-[32rem]",
  },
  {
    title: "Digital Ops",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    size: "h-72 w-[26rem] sm:h-80 sm:w-[32rem] lg:h-96 lg:w-[40rem]",
  },
];

function StaticRow({ items, align = "start", scrollProgress }: { items: GalleryItem[]; align?: "start" | "end"; scrollProgress?: any }) {
  const x = useTransform(
    scrollProgress || { get current() { return 0; } },
    [0, 1],
    align === "end" ? [200, -200] : [-200, 200]
  );

  return (
    <div className={`flex justify-center w-full`}>
      <motion.div
        style={{ x: scrollProgress ? x : 0 }}
        className={`flex gap-4 sm:gap-6 lg:gap-8 ${align === "end" ? "justify-end" : "justify-start"}`}
      >
      {items.map((item) => (
        <article
          key={item.title}
          className={`group relative shrink-0 overflow-hidden rounded-lg border border-border/70 bg-card/90 ${item.size} transition-[transform,box-shadow,border-color] duration-500 will-change-transform hover:-translate-y-1 hover:border-border hover:shadow-[0_16px_40px_-24px_hsl(var(--shadow)/0.88)]`}
        >
          <img src={item.img} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_25%,rgba(14,10,8,0.56))]" />
          <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.24),transparent_36%)]" />
          <div className="absolute bottom-2 left-2 rounded-md bg-background/82 px-2 py-1 text-[11px] font-medium text-foreground backdrop-blur">
            {item.title}
          </div>
        </article>
      ))}
      </motion.div>
    </div>
  );
}

export default function HeroShowreelSection() {
  const container = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Animasi halus saat section masuk dan keluar
  const y = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [100, 0, 0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.95, 1, 1, 0.95]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.45, 1], [0, 0.35, 0.9]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.45, 1], [1, 0.9, 0.7]);

  // Logika "Film Strip": Menggeser konten ke atas saat scroll agar baris bawah terlihat
  const internalScrollY = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "-60%"]);

  return (
    <section
      ref={container}
      id="ecosystem-live"
      // Height ditingkatkan menjadi 300vh agar sticky tertahan lebih lama
      className="relative h-[300vh] w-full z-20 bg-background"
    >
      {/* Pembungkus Sticky: Mengunci tampilan di layar selama user scroll 300vh */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-start justify-center pt-20">
        <motion.div
          style={{ y, scale }}
          className="relative w-full h-full"
        >
          <motion.div
            style={{ opacity: overlayOpacity }}
            className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(180deg,transparent,rgba(255,248,238,0.4)_50%,rgba(255,248,238,1) 95%)]"
          />

          <div className="w-[min(100vw,92rem)] mx-auto rounded-[2.5rem] border border-border/60 bg-card/50 backdrop-blur-xl py-10 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.1)] overflow-hidden lg:py-14">
            <div className="relative z-10 mx-auto w-[min(100%,88rem)] px-6 sm:px-10 lg:px-16">
              <motion.div
                style={{ opacity: headerOpacity }}
                className="mb-8 sticky flex flex-wrap items-end justify-between gap-4 lg:mb-10"
              >
                <div>
                  <p className="text-caption uppercase tracking-[0.3em] text-primary/80 font-bold">Nexora visual stream</p>
                  <h2 className="mt-3 text-display-sm leading-[1.1] md:text-display-md text-balance">
                    Visual layer rises and merges <br /> with the ecosystem.
                  </h2>
                </div>
                <div className="rounded-full border border-border/80 bg-background/40 px-4 py-2 text-caption text-muted-foreground backdrop-blur-md">
                  Cinematic gallery scroll
                </div>
              </motion.div>

              {/* Kontainer Baris: Bergerak ke atas seiring scroll Progress */}
              <motion.div 
                style={{ y: internalScrollY }}
                className="space-y-4 overflow-hidden sm:space-y-6 lg:space-y-8"
              >
                <StaticRow items={rowOne} scrollProgress={scrollYProgress} />
                <StaticRow items={rowTwo} align="end" scrollProgress={scrollYProgress} />
                <StaticRow items={rowThree} scrollProgress={scrollYProgress} />
                <StaticRow items={rowFour} align="end" scrollProgress={scrollYProgress} />
              </motion.div>

              <motion.div 
                style={{ opacity: useTransform(scrollYProgress, [0.7, 0.9], [0, 1]) }}
                className="mt-12 rounded-2xl border border-border/50 bg-background/30 p-5 text-center text-caption text-muted-foreground backdrop-blur-sm"
              >
                Continue scrolling to explore workspace, marketplace, and rental stack.
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
