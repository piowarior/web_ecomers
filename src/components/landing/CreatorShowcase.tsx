"use client";
import React from "react";
import { motion } from "framer-motion";

const creators = [
  {
    name: "Ari Nova",
    role: "Web Engineer",
    tags: ["Next.js", "SaaS"],
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=480&q=80",
  },
  {
    name: "Maya Lin",
    role: "AI Builder",
    tags: ["Automation", "Agents"],
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=480&q=80",
  },
  {
    name: "Niko Rae",
    role: "Product Designer",
    tags: ["UI Systems", "Brand"],
    rating: "4.95",
    image: "https://images.unsplash.com/photo-1502767089025-6572583495b0?auto=format&fit=crop&w=480&q=80",
  },
];

export default function CreatorShowcase() {
  return (
    <section id="creators" className="py-20 sm:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-caption text-muted-foreground">Creator / freelancer energy</p>
        <h2 className="text-display-sm text-balance">Floating talent cards with premium motion feel.</h2>
      </div>

      <div className="overflow-x-auto pb-2">
        <div className="grid min-w-max grid-flow-col gap-4 pr-4">
          {creators.map((creator, index) => (
            <motion.article
              key={creator.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ scale: 1.04, y: -10 }}
              data-cursor="focus"
              className="surface-card group w-[19rem] overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={creator.image}
                  alt={creator.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(22,17,14,0.56))]" />
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-body-md font-semibold">{creator.name}</div>
                    <div className="text-caption text-muted-foreground">{creator.role}</div>
                  </div>
                  <div className="rounded-full bg-primary/10 px-2 py-1 text-caption text-primary">{creator.rating}</div>
                </div>

                <div className="mt-3 flex gap-2">
                  {creator.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-border bg-background/70 px-2 py-1 text-caption text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
