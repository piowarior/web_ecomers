"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Slash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/Card";

export default function CTASection() {
  return (
    <motion.section
      id="cta"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="pt-2"
    >
      <Card className="relative overflow-hidden p-4 sm:p-5 lg:p-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(242,216,176,0.34),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(137,168,216,0.2),transparent_25%),linear-gradient(180deg,rgba(255,255,255,0.82),rgba(248,241,229,0.94))]" />
        <div className="relative grid gap-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-4 p-2 sm:p-4 lg:p-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1.5 text-caption">
              <Sparkles className="size-3.5 text-primary" />
              Cinematic launch identity
            </div>
            <h2 className="max-w-xl text-display-sm text-balance text-foreground md:text-display-md">
              Ready for a premium first impression.
            </h2>
            <p className="max-w-lg text-body-lg text-muted-foreground">
              The landing now feels like a funded startup site: animated, visual, and connected from the hero through the final CTA.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button asChild className="rounded-full px-5 py-5">
                <Link href="#dashboard-preview">
                  View the product story
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-5 py-5">
                <Link href="/">Back to top</Link>
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.2rem] border border-border bg-[url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center shadow-[0_25px_60px_-35px_hsl(var(--shadow)/0.85)]">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(21,16,13,0.5))]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.32),transparent_18%),radial-gradient(circle_at_80%_15%,rgba(237,203,154,0.32),transparent_18%)]" />

            <div className="relative flex min-h-[26rem] flex-col justify-between p-6 text-white sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-caption backdrop-blur">
                  <Slash className="size-3.5" />
                  Future-facing SaaS
                </div>
                <div className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-caption backdrop-blur">
                  Framer Motion heavy
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["Immersive", "visual story"],
                  ["Premium", "neubrutalism"],
                  ["Connected", "layout system"],
                ].map(([title, subtitle]) => (
                  <div key={title} className="rounded-[1.5rem] border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                    <div className="text-title-sm font-semibold">{title}</div>
                    <div className="mt-1 text-caption text-white/75">{subtitle}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.section>
  );
}
