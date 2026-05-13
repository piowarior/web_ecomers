"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const floating = [
  { label: "Marketplace activity", value: "126 events" },
  { label: "Freelancer online", value: "48 active" },
  { label: "AI automations", value: "17 running" },
];

export default function LandingHero() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 55]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_50%_15%,rgba(242,216,177,0.65),transparent_35%),radial-gradient(circle_at_85%_18%,rgba(140,170,216,0.24),transparent_35%)]" />

      <div className="absolute inset-0 -z-20 overflow-hidden">
        <motion.video
          style={{ y: visualY }}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=80"
        >
          <source src="https://videos.pexels.com/video-files/3130184/3130184-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </motion.video>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,14,10,0.2),rgba(18,14,10,0.58))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.12),transparent_20%),radial-gradient(circle_at_75%_18%,rgba(140,170,216,0.18),transparent_24%),radial-gradient(circle_at_50%_72%,rgba(241,214,173,0.15),transparent_26%)]" />
        <div className="absolute inset-0 opacity-20 [background:repeating-linear-gradient(45deg,rgba(255,255,255,0.03)_0_1px,transparent_1px_3px)]" />
      </div>

      <div className="absolute inset-0 z-10 flex min-h-[100svh] items-center justify-center px-4">
        <motion.div style={{ y: titleY }} className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/88 px-4 py-2 text-caption shadow-sm backdrop-blur"
          >
            <Sparkles className="size-3.5 text-primary" />
            Interactive ecosystem showcase
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-balance font-semibold tracking-[-0.06em] text-[clamp(4.2rem,15vw,10rem)] leading-[0.82] text-white"
          >
            NEXORA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14 }}
            className="mx-auto mt-6 max-w-3xl text-body-lg text-white/80"
          >
            Soft SaaS Marketplace Ecosystem for Digital Services
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Button asChild className="rounded-full px-6 py-5" data-magnet="true" data-cursor="hover">
              <Link href="#ecosystem-live">
                Enter Ecosystem
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-6 py-5" data-magnet="true" data-cursor="hover">
              <Link href="#dashboard-preview">Explore Preview</Link>
            </Button>
          </motion.div>

          <div className="mt-12 grid gap-3 sm:grid-cols-3">
            {floating.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32 + index * 0.06 }}
                className="surface-panel bg-background/78 p-3"
              >
                <div className="text-caption text-muted-foreground">{item.label}</div>
                <div className="mt-1 text-body-md font-semibold">{item.value}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
