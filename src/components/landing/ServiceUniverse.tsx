"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Code2, Palette, Package, ArrowRight } from "lucide-react";

const categories = [
  { title: "AI Automation", icon: Bot, desc: "Agent workflows and business automations.", glow: "from-amber-100 via-white to-sky-100" },
  { title: "Web Development", icon: Code2, desc: "Landing pages, apps, and fullstack execution.", glow: "from-sky-100 via-white to-amber-50" },
  { title: "Design Services", icon: Palette, desc: "Brand systems and interface design polish.", glow: "from-violet-100 via-white to-rose-50" },
  { title: "Digital Rental", icon: Package, desc: "Official tools and product rentals.", glow: "from-emerald-100 via-white to-amber-50" },
];

export default function ServiceUniverse() {
  const [active, setActive] = useState(0);
  const ActiveIcon = categories[active].icon;

  return (
    <section id="universe" className="py-24 sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8 lg:px-12">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-caption uppercase tracking-[0.22em] text-muted-foreground">Service universe</p>
            <h2 className="mt-3 text-display-lg text-balance">Interactive category browsing with oversized cinematic spacing.</h2>
          </div>
          <div className="rounded-full border border-border bg-background/72 px-4 py-2 text-caption text-muted-foreground">
            Hover to expand
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {categories.map((cat, index) => {
              const isActive = index === active;
              return (
                <motion.button
                  key={cat.title}
                  type="button"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  data-cursor="focus"
                  className="group relative overflow-hidden rounded-3xl border border-border bg-background/76 p-5 text-left"
                  whileHover={{ scale: 1.015, y: -4 }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${cat.glow}`}
                    style={{ opacity: isActive ? 0.9 : 0.5 }}
                  />
                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div className="inline-flex rounded-2xl bg-white/75 p-3 text-primary shadow-sm">
                        <cat.icon className="size-5" />
                      </div>
                      <ArrowRight className="size-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                    <h3 className="mt-6 text-title-lg font-semibold">{cat.title}</h3>
                    <p className="mt-2 max-w-sm text-body-md text-muted-foreground">{cat.desc}</p>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <motion.div
            key={categories[active].title}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45 }}
            className="surface-card relative overflow-hidden p-5 sm:p-6"
            data-cursor="focus"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${categories[active].glow} opacity-75`} />
            <div className="relative space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-caption uppercase tracking-[0.2em] text-muted-foreground">Immersive preview</p>
                  <h3 className="mt-2 text-display-md text-balance">{categories[active].title}</h3>
                </div>
                <div className="rounded-full border border-border bg-background/72 px-3 py-2 text-caption text-muted-foreground">
                  live mode
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Layered motion composition",
                  "Premium interactions",
                  "Soft futuristic surfaces",
                  "High-fps friendly transforms",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-border bg-white/78 p-4">
                    <div className="text-body-md font-medium text-foreground">{item}</div>
                  </div>
                ))}
              </div>

              <div className="rounded-3xl border border-border bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(246,239,228,0.88))] p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-caption uppercase tracking-[0.18em] text-muted-foreground">Dynamic composition</p>
                    <div className="mt-2 text-title-md text-foreground">Hover state translated into a cinematic visual card.</div>
                  </div>
                  <div className="flex size-16 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                    <ActiveIcon className="size-7" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
