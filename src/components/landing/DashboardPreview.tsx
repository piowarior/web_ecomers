"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Layers3, LayoutDashboard, Sparkles } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";
import SectionHeading from "./SectionHeading";

type SidebarEntry = {
  icon: React.ElementType;
  label: string;
};

const signals = [
  { label: "Revenue", value: "$24.6k" },
  { label: "Projects", value: "18" },
  { label: "Momentum", value: "High" },
];

const feed = [
  "New custom project request",
  "Marketplace listing approved",
  "Rental product updated",
];

const sidebarEntries: SidebarEntry[] = [
  { icon: LayoutDashboard, label: "Overview" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Layers3, label: "Projects" },
  { icon: Sparkles, label: "Studio" },
];

export default function DashboardPreview() {
  return (
    <motion.section
      id="dashboard-preview"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-6"
    >
      <SectionHeading
        eyebrow="Product preview"
        title="A dashboard mockup that feels like the next screen after the marketing site"
        description="Instead of another card grid, this block stages the product shell as a large visual artifact with layered motion and a more realistic SaaS composition."
      />

      <Card className="relative overflow-hidden p-4 sm:p-5 lg:p-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(245,229,201,0.45),transparent_35%),radial-gradient(circle_at_85%_15%,rgba(135,165,214,0.18),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.66),rgba(248,241,229,0.8))]" />
        <div className="relative grid gap-4 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="surface-panel overflow-hidden p-4 sm:p-5">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
                N
              </div>
              <div>
                <div className="text-body-md font-semibold">Nexora OS</div>
                <div className="text-caption text-muted-foreground">Workspace control center</div>
              </div>
            </div>

            <div className="space-y-2">
              {sidebarEntries.map(({ icon: Icon, label }, index) => (
                <div key={label} className={`flex items-center gap-3 rounded-2xl px-3 py-3 text-body-md ${index === 0 ? "bg-background shadow-sm" : "text-muted-foreground"}`}>
                  <Icon className="size-4" />
                  {label}
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.7rem] border border-border bg-background/80 p-4 shadow-sm">
              <div className="text-caption text-muted-foreground">Workspace summary</div>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {signals.map((signal) => (
                  <div key={signal.label} className="rounded-2xl bg-secondary/50 p-3 text-center">
                    <div className="text-title-sm font-semibold">{signal.value}</div>
                    <div className="text-caption text-muted-foreground">{signal.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="grid gap-4 xl:grid-cols-[1.12fr_0.88fr]">
              <motion.div
                whileHover={{ y: -5, rotate: -0.5 }}
                className="relative overflow-hidden rounded-[2rem] border border-border bg-background/70 p-4 shadow-sm"
              >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.7),transparent_45%),radial-gradient(circle_at_70%_20%,rgba(137,168,216,0.14),transparent_28%)]" />
                <div className="relative space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-caption text-muted-foreground">Activity feed</div>
                      <div className="text-body-md font-semibold">Recent product movement</div>
                    </div>
                    <div className="rounded-full bg-secondary/70 px-3 py-1 text-caption">Live</div>
                  </div>

                  <div className="space-y-3">
                    {feed.map((item, index) => (
                      <div key={item} className="flex items-center gap-3 rounded-2xl bg-background/80 px-4 py-3">
                        <div className="size-2 rounded-full bg-primary" />
                        <div className="flex-1 text-body-md">{item}</div>
                        <div className="text-caption text-muted-foreground">0{index + 1}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, rotate: 0.5 }}
                className="relative overflow-hidden rounded-[2rem] border border-border bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.82),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(234,204,152,0.6),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.75),rgba(244,236,223,0.98))] p-4 shadow-sm"
              >
                <div className="relative h-full min-h-[16rem] overflow-hidden rounded-[1.7rem] border border-white/60 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center">
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(26,20,16,0.58))]" />
                  <div className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-caption backdrop-blur">Dashboard preview</div>
                  <div className="absolute bottom-4 left-4 right-4 grid gap-2 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/30 bg-white/20 p-3 text-white backdrop-blur">
                      <div className="text-caption text-white/70">Launch signal</div>
                      <div className="mt-1 text-title-md font-semibold">+28% retention</div>
                    </div>
                    <div className="rounded-2xl border border-white/30 bg-white/20 p-3 text-white backdrop-blur">
                      <div className="text-caption text-white/70">Next milestone</div>
                      <div className="mt-1 text-title-md font-semibold">Revenue ops</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.18fr_0.82fr]">
              <div className="surface-panel p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-caption text-muted-foreground">Product guidance</div>
                    <div className="text-body-md font-semibold">Dashboard shell, hero, and activity context all feel connected.</div>
                  </div>
                  <Button asChild variant="outline" className="rounded-full px-4 py-4">
                    <Link href="#cta">
                      See launch CTA
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="surface-panel p-4">
                <div className="text-caption text-muted-foreground">Visual language</div>
                <div className="mt-2 text-body-md font-semibold">Soft neubrutalism + futuristic SaaS</div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.section>
  );
}
