"use client";
import React from "react";
import { motion } from "framer-motion";
import { Activity, ChartNoAxesCombined, CircleCheckBig, Clock3, MoveUpRight } from "lucide-react";

const metrics = [
  ["MRR", "$24.6k"],
  ["Projects", "28"],
  ["Automation", "93%"],
];

export default function WorkspaceExperience() {
  return (
    <section id="workspace" className="py-24 sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8 lg:px-12">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-caption uppercase tracking-[0.22em] text-muted-foreground">Workspace experience</p>
            <h2 className="mt-3 text-display-lg text-balance">This is what using Nexora feels like.</h2>
          </div>
          <div className="rounded-full border border-border bg-background/72 px-4 py-2 text-caption text-muted-foreground">
            realtime analytics
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          data-cursor="focus"
          className="surface-card relative overflow-hidden p-5 sm:p-6"
        >
          <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.66),transparent_42%),radial-gradient(circle_at_82%_20%,rgba(145,118,201,0.18),transparent_24%),radial-gradient(circle_at_20%_82%,rgba(241,214,173,0.16),transparent_22%)]" />
          <div className="relative grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-5">
              <div className="grid gap-3 sm:grid-cols-3">
                {metrics.map(([label, value], index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: 0.04 + index * 0.05, duration: 0.42 }}
                    className="rounded-3xl border border-border bg-background/76 p-4"
                  >
                    <div className="text-caption uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
                    <div className="mt-2 text-title-md">{value}</div>
                  </motion.div>
                ))}
              </div>

              <div className="grid gap-4 md:grid-cols-[0.95fr_1.05fr]">
                <div className="rounded-3xl border border-border bg-background/76 p-5">
                  <div className="flex items-center gap-2 text-caption uppercase tracking-[0.18em] text-muted-foreground">
                    <Activity className="size-3.5 text-primary" />
                    Project pulse
                  </div>
                  <div className="mt-4 space-y-3">
                    {[76, 52, 88].map((v, idx) => (
                      <div key={idx} className="h-2 overflow-hidden rounded-full bg-muted/60">
                        <div
                          className="h-full origin-left rounded-full bg-primary"
                          style={{ transform: `scaleX(${v / 100}) translateZ(0)` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-border bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(238,231,219,0.76))] p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-caption uppercase tracking-[0.18em] text-muted-foreground">Dashboard preview</div>
                      <div className="mt-2 text-title-md">Pipeline moving without lag spikes.</div>
                    </div>
                    <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                      <ChartNoAxesCombined className="size-6" />
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-4 gap-2">
                    {[32, 58, 44, 76].map((value, idx) => (
                      <div key={idx} className="flex h-28 items-end overflow-hidden rounded-2xl bg-background/72 p-2">
                        <div className="w-full origin-bottom rounded-xl bg-primary/85" style={{ transform: `scaleY(${value / 100}) translateZ(0)` }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {[
                { icon: CircleCheckBig, title: "Client approved draft", time: "04m ago" },
                { icon: Clock3, title: "Automation finished", time: "12m ago" },
                { icon: MoveUpRight, title: "Dashboard updated", time: "18m ago" },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.06, duration: 0.42 }}
                  className="rounded-3xl border border-border bg-background/76 p-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                      <item.icon className="size-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-body-md font-medium">{item.title}</div>
                      <div className="text-caption text-muted-foreground">{item.time}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
