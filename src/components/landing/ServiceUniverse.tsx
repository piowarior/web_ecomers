"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Code2, Palette, Package } from "lucide-react";

const categories = [
  { title: "AI Automation", icon: Bot, desc: "Agent workflows and business automations." },
  { title: "Web Development", icon: Code2, desc: "Landing pages, apps, and fullstack execution." },
  { title: "Design Services", icon: Palette, desc: "Brand systems and interface design polish." },
  { title: "Digital Rental", icon: Package, desc: "Official tools and product rentals." },
];

export default function ServiceUniverse() {
  const [active, setActive] = useState(0);

  return (
    <section id="universe" className="py-24">
      <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-caption text-muted-foreground">Service universe</p>
          <h2 className="text-display-sm text-balance">Scroll and expand each ecosystem category.</h2>
        </div>

        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3">
          {categories.map((cat, index) => {
            const isActive = index === active;
            return (
              <motion.button
                key={cat.title}
                type="button"
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                data-cursor="focus"
                className="surface-card snap-start overflow-hidden p-5 text-left"
                animate={{ width: isActive ? 360 : 280 }}
                whileHover={{ y: -6 }}
              >
                <motion.div
                  animate={{ y: isActive ? -6 : 0 }}
                  className="mb-5 inline-flex rounded-2xl bg-secondary/70 p-3 text-primary"
                >
                  <cat.icon className="size-5" />
                </motion.div>
                <h3 className="text-title-sm font-semibold">{cat.title}</h3>
                <p className="mt-2 text-body-md text-muted-foreground">{cat.desc}</p>
                <motion.div
                  className="mt-5 h-24 rounded-2xl bg-[linear-gradient(160deg,rgba(248,233,210,0.8),rgba(220,232,247,0.7))]"
                  animate={{ opacity: isActive ? 1 : 0.6 }}
                />
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
