"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AnimatedBackdrop() {
  const { scrollY } = useScroll();
  const gridY = useTransform(scrollY, [0, 2200], [0, 120]);
  const blob1 = useTransform(scrollY, [0, 1800], [0, 120]);
  const blob2 = useTransform(scrollY, [0, 1800], [0, -100]);

  return (
    <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
      <motion.div
        style={{ y: blob1 }}
        className="absolute left-[-10%] top-[-4%] h-136 w-136 rounded-full bg-[radial-gradient(circle,rgba(232,194,134,0.32),rgba(232,194,134,0.08),transparent_70%)] blur-2xl"
      />
      <motion.div
        style={{ y: blob2 }}
        className="absolute right-[-12%] top-[8%] h-144 w-xl rounded-full bg-[radial-gradient(circle,rgba(130,160,208,0.24),rgba(130,160,208,0.08),transparent_70%)] blur-2xl"
      />
      <motion.div
        style={{ y: gridY }}
        className="absolute inset-0 opacity-[0.16]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(120,102,70,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,102,70,0.12)_1px,transparent_1px)] bg-size-[72px_72px] mask-[radial-gradient(circle_at_center,black,transparent_75%)]" />
      </motion.div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_12%,rgba(241,214,173,0.2),transparent_32%),radial-gradient(circle_at_72%_18%,rgba(137,168,216,0.16),transparent_28%)]" />
      <div className="absolute inset-0 opacity-16 mix-blend-soft-light [background:repeating-linear-gradient(45deg,rgba(0,0,0,0.045)_0_1px,transparent_1px_4px)]" />
      <div className="absolute inset-x-0 top-0 h-170 bg-[linear-gradient(180deg,rgba(255,252,246,0.8),rgba(255,252,246,0.3),transparent)]" />
    </div>
  );
}
