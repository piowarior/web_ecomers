"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, CalendarDays, ClipboardList, PanelLeft } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";
import SectionHeading from "./SectionHeading";

const widgets = [
  { title: "Analytics", value: "12.4k", icon: BarChart3 },
  { title: "Tasks", value: "18", icon: ClipboardList },
  { title: "Sessions", value: "1.2k", icon: CalendarDays },
];

export default function DashboardPreview() {
  return (
    <motion.section
      id="dashboard-preview"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="space-y-6 pt-10"
    >
      <SectionHeading
        eyebrow="Dashboard preview"
        title="A sneak peek at the product shell your users will live in"
        description="The landing page hints at the dashboard experience with a polished mockup, consistent tokens, and strong hierarchy."
      />

      <Card className="overflow-hidden p-5 sm:p-6">
        <div className="grid gap-4 lg:grid-cols-[260px_1fr]">
          <div className="surface-panel p-4">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-primary/90" />
              <div>
                <div className="text-body-md font-semibold">Nexora</div>
                <div className="text-caption text-muted-foreground">Dashboard shell</div>
              </div>
            </div>

            <div className="space-y-2">
              {[
                "Overview",
                "Analytics",
                "Projects",
                "Messages",
              ].map((item, index) => (
                <div key={item} className={`flex items-center gap-3 rounded-2xl px-3 py-2.5 text-body-md ${index === 0 ? "bg-background shadow-sm" : "text-muted-foreground"}`}>
                  <PanelLeft className="size-4" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-3">
              {widgets.map(({ title, value, icon: Icon }) => (
                <div key={title} className="surface-card p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-caption text-muted-foreground">{title}</div>
                      <div className="mt-1 text-title-sm font-semibold">{value}</div>
                    </div>
                    <Icon className="size-4 text-primary" />
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
              <div className="surface-panel p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <div className="text-caption text-muted-foreground">Workspace summary</div>
                    <div className="text-body-md font-semibold">Activity and progress at a glance</div>
                  </div>
                  <div className="rounded-full bg-secondary/60 px-3 py-1 text-caption">Live</div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl bg-background/85 p-4">
                    <div className="text-caption text-muted-foreground">Revenue</div>
                    <div className="mt-1 text-title-md font-semibold">$24.6k</div>
                  </div>
                  <div className="rounded-3xl bg-background/85 p-4">
                    <div className="text-caption text-muted-foreground">Projects</div>
                    <div className="mt-1 text-title-md font-semibold">8 active</div>
                  </div>
                </div>
              </div>

              <div className="surface-panel p-4">
                <div className="text-caption text-muted-foreground">Quick actions</div>
                <div className="mt-3 space-y-2">
                  {[
                    "Open project board",
                    "Review recent activity",
                    "Create new listing",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-border bg-background/70 px-4 py-3 text-body-md">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-border bg-background/80 p-4">
              <div>
                <div className="text-body-md font-semibold">The dashboard experience mirrors the brand.</div>
                <div className="text-caption text-muted-foreground">Designed to match the same soft neubrutalism language as the public site.</div>
              </div>
              <Button asChild variant="outline" className="rounded-full px-4 py-4">
                <Link href="/">
                  View homepage shell
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </motion.section>
  );
}
