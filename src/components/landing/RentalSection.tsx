"use client";
import React from "react";
import { motion } from "framer-motion";
import { Package2, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/Card";
import SectionHeading from "./SectionHeading";

export default function RentalSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="space-y-6 pt-10"
    >
      <SectionHeading
        eyebrow="Official digital rental store"
        title="A platform-owned store that feels distinct from the marketplace"
        description="Nexora’s rental catalog is intentionally separated, giving the official store a polished product-led identity with stronger control and trust."
      />

      <div className="grid gap-4 lg:grid-cols-[1fr_1.1fr]">
        <Card className="p-6">
          <div className="mb-4 inline-flex rounded-2xl bg-secondary/70 p-3 text-primary">
            <Package2 className="size-5" />
          </div>
          <h3 className="text-title-sm font-semibold">Platform-managed products</h3>
          <p className="mt-3 text-body-md text-muted-foreground">
            Rental offerings such as hosting, premium tools, templates, and setup services can be presented with a clean retail feel.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {[
              "Premium AI tools",
              "Hosting and VPS",
              "Templates",
              "Domain setup",
            ].map((item) => (
              <div key={item} className="surface-panel px-4 py-3 text-body-md">
                {item}
              </div>
            ))}
          </div>
        </Card>

        <Card className="relative overflow-hidden p-6">
          <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1 text-caption">
              <ShieldCheck className="size-3.5 text-primary" />
              Official Nexora catalog
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="surface-card p-4">
                <div className="text-caption text-muted-foreground">Product trust</div>
                <div className="mt-1 text-body-md font-semibold">One source of truth</div>
              </div>
              <div className="surface-card p-4">
                <div className="text-caption text-muted-foreground">Checkout clarity</div>
                <div className="mt-1 text-body-md font-semibold">Focused purchase flow</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </motion.section>
  );
}
