"use client";
import React from "react";
import { motion } from "framer-motion";

const stack = [
  {
    title: "Web Development Service",
    note: "High-converting product pages and scalable frontend systems.",
    color: "bg-[linear-gradient(140deg,rgba(251,236,210,0.9),rgba(255,255,255,0.84))]",
  },
  {
    title: "AI Automation Service",
    note: "Workflow orchestration and task automation with modern tooling.",
    color: "bg-[linear-gradient(140deg,rgba(226,237,250,0.9),rgba(255,255,255,0.84))]",
  },
  {
    title: "Design Service",
    note: "UI systems, visual identity, and premium interface direction.",
    color: "bg-[linear-gradient(140deg,rgba(245,234,249,0.88),rgba(255,255,255,0.84))]",
  },
];

export default function MarketplaceStack() {
  return (
    <section id="marketplace-stack" className="py-20 sm:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-caption text-muted-foreground">Marketplace motion stack</p>
        <h2 className="text-display-sm text-balance">Scroll through layered service depth.</h2>
      </div>

      <div className="relative space-y-6">
        {stack.map((card, index) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.08, duration: 0.55 }}
            whileHover={{ y: -8, scale: 1.01 }}
            data-cursor="focus"
            className={`surface-card sticky top-24 p-6 sm:p-8 ${card.color}`}
            style={{ zIndex: 20 + index }}
          >
            <div className="grid gap-6 md:grid-cols-[1fr_0.7fr] md:items-center">
              <div>
                <div className="text-caption text-muted-foreground">Tier 0{index + 1}</div>
                <h3 className="mt-2 text-display-sm leading-[1.02]">{card.title}</h3>
                <p className="mt-3 max-w-xl text-body-lg text-muted-foreground">{card.note}</p>
              </div>
              <div className="rounded-3xl border border-border bg-background/75 p-4">
                <div className="text-caption text-muted-foreground">Service signal</div>
                <div className="mt-2 text-title-md font-semibold">High demand</div>
                <div className="mt-4 h-28 rounded-2xl bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(230,220,205,0.52))]" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      </div>
    </section>
  );
}
