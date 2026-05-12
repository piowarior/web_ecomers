"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FinalLaunchSection() {
  return (
    <section id="cta" className="relative min-h-[100svh] overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_25%_35%,rgba(241,214,173,0.46),transparent_35%),radial-gradient(circle_at_75%_25%,rgba(137,168,216,0.26),transparent_30%),linear-gradient(180deg,rgba(255,252,246,0.5),rgba(255,252,246,0.9))]" />

      <div className="flex min-h-[78svh] flex-col items-center justify-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl text-balance text-[clamp(2.8rem,8vw,7rem)] leading-[0.9] tracking-[-0.04em]"
        >
          Enter Nexora Ecosystem
          <span className="block text-primary">Build Your Next Product</span>
          <span className="block">Launch Your Digital Presence</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Button asChild className="rounded-full px-6 py-5" data-magnet="true" data-cursor="hover">
            <Link href="#platform">
              Enter Ecosystem
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full px-6 py-5" data-magnet="true" data-cursor="hover">
            <Link href="#dashboard-preview">Explore Preview</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
