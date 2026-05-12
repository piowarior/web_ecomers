"use client";
import React from "react";
import { motion } from "framer-motion";
import { BriefcaseBusiness, BadgeCheck } from "lucide-react";
import { Card } from "@/components/ui/Card";
import SectionHeading from "./SectionHeading";

export default function EcosystemSection() {
  return (
    <motion.section
      id="ecosystem"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="space-y-6 pt-10"
    >
      <SectionHeading
        eyebrow="Marketplace ecosystem"
        title="A marketplace that feels structured, credible, and easy to navigate"
        description="The platform supports freelancers, service listings, custom requests, and professional delivery without visual clutter."
      />

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="p-6">
          <div className="mb-4 inline-flex rounded-2xl bg-secondary/70 p-3 text-primary">
            <BriefcaseBusiness className="size-5" />
          </div>
          <h3 className="text-title-sm font-semibold">Client and freelancer flow</h3>
          <p className="mt-3 text-body-md text-muted-foreground">
            Browse services, compare profiles, submit custom project requests, and keep work organized in a single polished surface.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="surface-panel p-4">
              <div className="text-caption text-muted-foreground">For clients</div>
              <div className="mt-1 text-body-md font-semibold">Discover and hire faster</div>
            </div>
            <div className="surface-panel p-4">
              <div className="text-caption text-muted-foreground">For freelancers</div>
              <div className="mt-1 text-body-md font-semibold">Present services clearly</div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="mb-4 inline-flex rounded-2xl bg-accent/30 p-3 text-primary">
            <BadgeCheck className="size-5" />
          </div>
          <h3 className="text-title-sm font-semibold">Designed for trust</h3>
          <p className="mt-3 text-body-md text-muted-foreground">
            The visual system emphasizes credibility, clarity, and premium spacing so the experience feels startup-level from the first scroll.
          </p>

          <div className="mt-6 space-y-3">
            {[
              "Clear service taxonomy",
              "Professional profile presentation",
              "Strong hierarchy for browsing and comparison",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-border bg-background/70 px-4 py-3 text-body-md">
                <span className="size-2 rounded-full bg-primary" />
                {item}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </motion.section>
  );
}
