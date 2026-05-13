"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FinalLaunchSection() {
  return (
    <section id="cta" className="relative min-h-svh overflow-hidden py-24 sm:py-28 lg:py-32">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_25%_35%,rgba(241,214,173,0.34),transparent_35%),radial-gradient(circle_at_75%_25%,rgba(137,168,216,0.22),transparent_30%),linear-gradient(180deg,rgba(255,252,246,0.48),rgba(255,252,246,0.9))]" />
      <div className="absolute inset-0 -z-10 opacity-15 [background:repeating-linear-gradient(45deg,rgba(0,0,0,0.04)_0_1px,transparent_1px_4px)]" />

      <div className="flex min-h-[82svh] flex-col items-center justify-center text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/72 px-4 py-2 text-caption uppercase tracking-[0.24em] text-muted-foreground backdrop-blur-xl">
          <Sparkles className="size-3.5 text-primary" />
          Final cinematic launch
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl text-balance text-[clamp(3.2rem,8.5vw,7.8rem)] leading-[0.88] tracking-[-0.06em]"
        >
          Launch Your Digital Presence
          <span className="block text-primary">Build Inside The Nexora Ecosystem</span>
          <span className="block">Start Your Digital Operation</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mx-auto mt-6 max-w-3xl text-body-lg text-muted-foreground"
        >
          A premium closing scene for the homepage, designed like a product launch rather than a contact section.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Button asChild className="rounded-full px-6 py-5" data-magnet="true" data-cursor="hover">
            <Link href="#platform">
              Launch Now
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full px-6 py-5" data-magnet="true" data-cursor="hover">
            <Link href="#ecosystem-live">See the ecosystem live</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
