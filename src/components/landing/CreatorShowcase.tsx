"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Star, Users } from "lucide-react";

const creators = [
  {
    name: "Ari Nova",
    role: "Web Engineer",
    tags: ["Next.js", "SaaS"],
    rating: "4.9",
    accent: "from-amber-100 via-white to-sky-100",
  },
  {
    name: "Maya Lin",
    role: "AI Builder",
    tags: ["Automation", "Agents"],
    rating: "4.8",
    accent: "from-sky-100 via-white to-amber-50",
  },
  {
    name: "Niko Rae",
    role: "Product Designer",
    tags: ["UI Systems", "Brand"],
    rating: "4.95",
    accent: "from-violet-100 via-white to-rose-50",
  },
];

export default function CreatorShowcase() {
  return (
    <section id="creators" className="py-24 sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8 lg:px-12">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-caption uppercase tracking-[0.22em] text-muted-foreground">Creator energy</p>
            <h2 className="mt-3 text-display-lg text-balance">Floating portfolio cards, activity, and social proof.</h2>
          </div>
          <div className="rounded-full border border-border bg-background/72 px-4 py-2 text-caption text-muted-foreground">
            creator network
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-4 md:grid-cols-3">
            {creators.map((creator, index) => (
              <motion.article
                key={creator.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                whileHover={{ scale: 1.02, y: -6 }}
                data-cursor="focus"
                className="surface-card group overflow-hidden"
              >
                <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${creator.accent}`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.38),transparent_28%),linear-gradient(180deg,transparent,rgba(18,14,12,0.2))]" />
                  <div className="absolute inset-0 flex items-end justify-between p-4">
                    <div className="rounded-full border border-white/30 bg-white/20 px-3 py-1 text-caption text-white backdrop-blur-md">
                      portfolio
                    </div>
                    <div className="rounded-full bg-background/80 px-3 py-1 text-caption text-foreground">{creator.rating}</div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-body-md font-semibold">{creator.name}</div>
                      <div className="text-caption text-muted-foreground">{creator.role}</div>
                    </div>
                    <ArrowUpRight className="size-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {creator.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-border bg-background/72 px-2.5 py-1 text-caption text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="surface-card overflow-hidden p-5 sm:p-6"
            data-cursor="focus"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-caption uppercase tracking-[0.2em] text-muted-foreground">Creator feed</p>
                <h3 className="mt-2 text-title-lg">A visual feed that feels alive.</h3>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-border bg-background/72 px-3 py-2 text-caption text-muted-foreground">
                <Users className="size-3.5 text-primary" />
                148 talents
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {[
                "Niko Rae just published a new design system case study",
                "Maya Lin shipped an onboarding automation package",
                "Ari Nova updated a premium landing page prototype",
              ].map((item, index) => (
                <div key={item} className="rounded-3xl border border-border bg-background/76 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-body-md">{item}</p>
                    <span className="rounded-full bg-primary/10 px-2 py-1 text-caption text-primary">0{index + 1}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-3xl border border-border bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(242,233,218,0.78))] p-5">
              <div className="flex items-center gap-2 text-caption uppercase tracking-[0.18em] text-muted-foreground">
                <Star className="size-3.5 text-primary" />
                Social proof
              </div>
              <div className="mt-3 text-title-md">Premium creators are presented as a live ecosystem, not a static directory.</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
