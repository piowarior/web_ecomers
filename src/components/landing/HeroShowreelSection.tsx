"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Activity, Bot, BriefcaseBusiness, UsersRound } from "lucide-react";

type MosaicItem = {
  title: string;
  image: string;
  className: string;
};

const mosaicItems: MosaicItem[] = [
  {
    title: "Studio Build",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1400&q=80",
    className: "col-span-2 row-span-2 lg:col-span-3",
  },
  {
    title: "Design Lab",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
    className: "col-span-2 row-span-3 lg:col-span-4",
  },
  {
    title: "UI System",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1400&q=80",
    className: "col-span-2 row-span-2 lg:col-span-3",
  },
  {
    title: "Prototype Room",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    className: "col-span-2 row-span-3 lg:col-span-2",
  },
  {
    title: "Motion Stack",
    image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=1400&q=80",
    className: "col-span-2 row-span-2 lg:col-span-3",
  },
  {
    title: "Brand Surface",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    className: "col-span-2 row-span-2 lg:col-span-2",
  },
  {
    title: "Workspace Feed",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80",
    className: "col-span-2 row-span-2 lg:col-span-3",
  },
  {
    title: "AI Console",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1400&q=80",
    className: "col-span-2 row-span-2 lg:col-span-2",
  },
  {
    title: "Ecosystem View",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    className: "col-span-2 row-span-3 lg:col-span-4",
  },
  {
    title: "Creator Lane",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    className: "col-span-2 row-span-2 lg:col-span-2",
  },
];

const events = [
  { icon: BriefcaseBusiness, title: "Marketplace activity live", note: "New service ordered", time: "just now" },
  { icon: UsersRound, title: "Freelancer online", note: "4 talents available", time: "12s ago" },
  { icon: Activity, title: "Project created", note: "SaaS landing build", time: "25s ago" },
  { icon: Bot, title: "AI automation running", note: "Workflow synced", time: "42s ago" },
];

function MosaicCard({ item }: { item: MosaicItem }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-lg border border-border/70 bg-card/90 ${item.className} transition-transform duration-500 will-change-transform hover:-translate-y-1 hover:scale-[1.015]`}
    >
      <img
        src={item.image}
        alt={item.title}
        className="h-full w-full object-cover transition-transform duration-700 will-change-transform group-hover:scale-[1.08] group-hover:translate-x-1"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_18%,rgba(14,10,8,0.64))]" />
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_72%_18%,rgba(255,255,255,0.34),transparent_42%)]" />
      <div className="pointer-events-none absolute -inset-x-10 top-0 h-10 -translate-y-12 rotate-6 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition duration-700 group-hover:translate-y-44 group-hover:opacity-90" />
      <div className="absolute bottom-1.5 left-1.5 rounded-md bg-background/86 px-2 py-1 text-[11px] font-medium text-foreground backdrop-blur">
        {item.title}
      </div>
    </article>
  );
}

function LivePanel() {
  return (
    <section id="ecosystem-live" className="flex h-full w-screen items-center px-4 sm:px-6 lg:px-10">
      <div className="w-full rounded-xl border border-border/70 bg-[linear-gradient(180deg,rgba(255,252,246,0.96),rgba(255,247,236,0.99))] p-5 shadow-[0_30px_90px_-52px_hsl(var(--shadow)/0.92)] sm:p-7 lg:p-9">
        <div className="mx-auto w-full max-w-[90rem]">
          <div className="mb-7 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-caption text-muted-foreground">Live ecosystem simulation</p>
              <h2 className="text-display-md text-balance">Realtime signal across the Nexora network.</h2>
            </div>
            <div className="rounded-full border border-border bg-background/72 px-4 py-2 text-caption text-muted-foreground">
              Updated every second
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-4">
            {events.map((event, index) => (
              <article
                key={event.title}
                data-cursor="focus"
                className="surface-card group relative overflow-hidden p-5 transition-transform duration-500 hover:-translate-y-2 hover:scale-[1.02]"
                style={{ transitionDelay: `${index * 30}ms` }}
              >
                <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,0.62),transparent_45%)]" />
                <div className="relative">
                  <div className="mb-4 inline-flex rounded-xl bg-secondary/70 p-3 text-primary">
                    <event.icon className="size-5" />
                  </div>
                  <h3 className="text-body-md font-semibold">{event.title}</h3>
                  <p className="mt-2 text-caption text-muted-foreground">{event.note}</p>
                  <div className="mt-4 flex items-center justify-between text-caption">
                    <span className="text-muted-foreground">{event.time}</span>
                    <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">live</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HeroShowreelSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const revealRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current || !revealRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.set(revealRef.current, { y: 160, scale: 0.985 });
      gsap.set(trackRef.current, { xPercent: 0 });

      gsap.to(revealRef.current, {
        y: 0,
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 88%",
          end: "top top",
          scrub: 1,
        },
      });

      gsap.to(trackRef.current, {
        xPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=220%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full pt-24 sm:pt-32 lg:pt-40">
      <div className="relative h-[320svh]">
        <div className="sticky top-0 h-svh overflow-hidden">
          <div ref={trackRef} className="flex h-full w-[200vw] will-change-transform">
            <section className="flex h-full w-screen items-center px-4 sm:px-6 lg:px-10">
              <div
                ref={revealRef}
                className="w-full rounded-xl border border-border/70 bg-[linear-gradient(180deg,rgba(255,251,245,0.95),rgba(255,247,236,0.99))] p-5 shadow-[0_30px_90px_-52px_hsl(var(--shadow)/0.92)] sm:p-7 lg:p-9"
              >
                <div className="mx-auto w-full max-w-[92rem]">
                  <div className="mb-6 flex flex-wrap items-end justify-between gap-4 lg:mb-7">
                    <div>
                      <p className="text-caption uppercase tracking-[0.22em] text-muted-foreground">Nexora visual stream</p>
                      <h2 className="mt-2 text-title-lg sm:text-display-md">Visual layer rises from below before entering the live ecosystem lane.</h2>
                    </div>
                    <div className="rounded-full border border-border bg-background/72 px-3 py-1.5 text-caption text-muted-foreground">
                      Dense cinematic mosaic
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-1.5 sm:grid-cols-6 sm:gap-2 lg:grid-cols-12 lg:auto-rows-[4rem]">
                    {mosaicItems.map((item) => (
                      <MosaicCard key={item.title} item={item} />
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <LivePanel />
          </div>
        </div>
      </div>
    </section>
  );
}
