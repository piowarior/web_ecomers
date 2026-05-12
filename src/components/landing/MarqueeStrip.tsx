"use client";
import React from "react";
import { motion } from "framer-motion";

const items = [
  "Framer energy",
  "Linear precision",
  "Raycast polish",
  "Supabase clarity",
  "Vercel speed",
  "Award-level storytelling",
];

export default function MarqueeStrip() {
  return (
    <div className="relative overflow-hidden border-y border-border/60 bg-background/50 py-4">
      <motion.div
        className="flex w-max items-center gap-3 whitespace-nowrap"
        animate={{ x: [0, -50 * items.length] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items, ...items].map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="surface-card flex items-center gap-2 rounded-full px-4 py-2 shadow-none"
          >
            <span className="size-2 rounded-full bg-primary" />
            <span className="text-body-md font-medium text-foreground">{item}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
