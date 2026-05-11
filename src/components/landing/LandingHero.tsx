"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/Card";

const metrics = [
  { label: "Digital services", value: "30+" },
  { label: "Dashboard modules", value: "12" },
  { label: "Brand feel", value: "Premium" },
];

export default function LandingHero() {
  return (
    <section className="relative overflow-hidden pt-10 sm:pt-14 lg:pt-20">
      <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_top,rgba(232,194,134,0.34),transparent_55%),radial-gradient(circle_at_82%_18%,rgba(130,160,208,0.16),transparent_42%)]" />

      <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/90 px-3 py-1.5 text-caption shadow-sm">
            <Sparkles className="size-3.5 text-primary" />
            Modern digital ecosystem for services and rentals
          </div>

          <h1 className="max-w-3xl text-display-xl text-balance text-foreground md:text-[4.5rem] md:leading-[0.96]">
            A premium SaaS platform for digital services, projects, and rentals.
          </h1>

          <p className="text-body-lg max-w-2xl text-muted-foreground">
            Nexora combines a marketplace ecosystem and an official rental store in one polished
            startup-style experience. Built to feel fast, trustworthy, and visually elevated.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button asChild className="rounded-full px-5 py-5 text-sm shadow-lg shadow-primary/10">
              <Link href="#dashboard-preview">
                Explore the platform
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-5 py-5 text-sm">
              <Link href="#services">See service categories</Link>
            </Button>
          </div>

          <div className="grid max-w-xl grid-cols-3 gap-3">
            {metrics.map((metric) => (
              <Card key={metric.label} className="p-4">
                <div className="text-title-md font-semibold">{metric.value}</div>
                <div className="text-caption text-muted-foreground">{metric.label}</div>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
          className="relative"
        >
          <div className="absolute -left-6 top-10 h-28 w-28 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute -right-4 bottom-10 h-36 w-36 rounded-full bg-accent/20 blur-3xl" />

          <Card className="relative overflow-hidden border-border/70 p-5 sm:p-6">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.6),transparent_40%)]" />
            <div className="relative space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-caption text-muted-foreground">Nexora overview</div>
                  <div className="text-title-md font-semibold">Marketplace + rental store</div>
                </div>
                <div className="rounded-full border border-border bg-secondary/70 px-3 py-1 text-caption">
                  Live preview
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="surface-panel p-4">
                  <div className="text-caption text-muted-foreground">Marketplace</div>
                  <div className="mt-2 text-body-md font-semibold">Hire talent and order custom work</div>
                  <div className="mt-3 h-20 rounded-2xl bg-[linear-gradient(180deg,rgba(217,190,150,0.35),rgba(255,255,255,0.2))]" />
                </div>
                <div className="surface-panel p-4">
                  <div className="text-caption text-muted-foreground">Rental store</div>
                  <div className="mt-2 text-body-md font-semibold">Platform-owned digital products</div>
                  <div className="mt-3 h-20 rounded-2xl bg-[linear-gradient(180deg,rgba(144,166,199,0.32),rgba(255,255,255,0.2))]" />
                </div>
              </div>

              <div className="surface-panel grid grid-cols-3 gap-3 p-4 text-center">
                <div>
                  <div className="text-title-sm font-semibold">Fast</div>
                  <div className="text-caption text-muted-foreground">UX</div>
                </div>
                <div>
                  <div className="text-title-sm font-semibold">Soft</div>
                  <div className="text-caption text-muted-foreground">Branding</div>
                </div>
                <div>
                  <div className="text-title-sm font-semibold">Clear</div>
                  <div className="text-caption text-muted-foreground">Hierarchy</div>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-border bg-background/80 p-4">
                <LayoutDashboard className="size-5 text-primary" />
                <div>
                  <div className="text-body-md font-semibold">Dashboard-ready architecture</div>
                  <div className="text-caption text-muted-foreground">Public marketing now, product shell ready next.</div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
