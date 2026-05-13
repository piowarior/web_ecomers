"use client";
import React from "react";
import { motion } from "framer-motion";

type GalleryItem = {
  title: string;
  img: string;
  size: string;
};

const rowOne: GalleryItem[] = [
  {
    title: "Studio Build",
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
    size: "h-32 w-44 sm:h-36 sm:w-56 lg:h-44 lg:w-72",
  },
  {
    title: "Design Lab",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    size: "h-36 w-56 sm:h-40 sm:w-72 lg:h-48 lg:w-96",
  },
  {
    title: "Dashboard UI",
    img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    size: "h-32 w-40 sm:h-36 sm:w-52 lg:h-44 lg:w-64",
  },
];

const rowTwo: GalleryItem[] = [
  {
    title: "Prototype Room",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    size: "h-40 w-52 sm:h-44 sm:w-68 lg:h-52 lg:w-84",
  },
  {
    title: "Brand Surface",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    size: "h-30 w-44 sm:h-34 sm:w-56 lg:h-40 lg:w-72",
  },
  {
    title: "Motion Stack",
    img: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=1200&q=80",
    size: "h-36 w-48 sm:h-40 sm:w-60 lg:h-46 lg:w-76",
  },
];

const rowThree: GalleryItem[] = [
  {
    title: "Workspace Feed",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
    size: "h-34 w-48 sm:h-38 sm:w-60 lg:h-46 lg:w-80",
  },
  {
    title: "AI Console",
    img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1200&q=80",
    size: "h-40 w-40 sm:h-44 sm:w-52 lg:h-50 lg:w-64",
  },
  {
    title: "Launch Board",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    size: "h-32 w-56 sm:h-36 sm:w-72 lg:h-44 lg:w-96",
  },
];

const rowFour: GalleryItem[] = [
  {
    title: "Ecosystem View",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    size: "h-36 w-56 sm:h-40 sm:w-72 lg:h-48 lg:w-[26rem]",
  },
  {
    title: "Rental Shelf",
    img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    size: "h-30 w-40 sm:h-34 sm:w-52 lg:h-40 lg:w-64",
  },
  {
    title: "Digital Ops",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    size: "h-34 w-44 sm:h-38 sm:w-56 lg:h-46 lg:w-72",
  },
];

function StaticRow({ items, align = "start" }: { items: GalleryItem[]; align?: "start" | "end" }) {
  return (
    <div className={`flex flex-wrap gap-3 sm:gap-4 ${align === "end" ? "justify-end" : "justify-start"}`}>
      {items.map((item) => (
        <article
          key={item.title}
          className={`group relative shrink-0 overflow-hidden rounded-xl border border-border/80 bg-card/90 ${item.size} transition-[transform,box-shadow,border-color] duration-500 will-change-transform hover:-translate-y-1 hover:rotate-[0.4deg] hover:border-border hover:shadow-[0_18px_45px_-28px_hsl(var(--shadow)/0.9)]`}
        >
          <img src={item.img} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_25%,rgba(14,10,8,0.56))]" />
          <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.24),transparent_36%)]" />
          <div className="absolute bottom-2 left-2 rounded-md bg-background/82 px-2 py-1 text-[11px] font-medium text-foreground backdrop-blur">
            {item.title}
          </div>
        </article>
      ))}
    </div>
  );
}

export default function HeroShowreelSection() {
  return (
    <section id="hero-showreel" className="relative z-20 -mt-12 w-full pb-10 sm:-mt-16 sm:pb-12 lg:-mt-20 lg:pb-14">
      <div className="relative h-[150vh] w-full">
        <motion.div
          initial={{ opacity: 0.92, y: 140, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
          className="sticky top-16 w-full"
        >
          <div className="w-full rounded-[1.2rem] border-y border-border/70 bg-[linear-gradient(180deg,rgba(255,251,245,0.93),rgba(255,247,236,0.99))] py-6 shadow-[0_24px_65px_-40px_hsl(var(--shadow)/0.86)] sm:py-8 lg:py-10">
            <div className="mx-auto w-[min(96%,92rem)] px-2 sm:px-4">
              <div className="mb-6 flex flex-wrap items-end justify-between gap-4 lg:mb-7">
                <div>
                  <p className="text-caption uppercase tracking-[0.22em] text-muted-foreground">Nexora visual stream</p>
                  <h2 className="mt-2 text-title-lg sm:text-display-md">Visual layer that rises and closes the hero.</h2>
                </div>
                <div className="rounded-full border border-border bg-background/72 px-3 py-1.5 text-caption text-muted-foreground">
                  Static gallery with premium hover
                </div>
              </div>

              <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                <StaticRow items={rowOne} />
                <StaticRow items={rowTwo} align="end" />
                <StaticRow items={rowThree} />
                <StaticRow items={rowFour} align="end" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
