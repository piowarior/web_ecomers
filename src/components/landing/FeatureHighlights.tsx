"use client";
import React from "react";
import { motion } from "framer-motion";
import { Layers3, Sparkles, LayoutGrid, WandSparkles } from "lucide-react";
import { Card } from "@/components/ui/Card";
import SectionHeading from "./SectionHeading";

const highlights = [
  { icon: Layers3, title: "Layered cards", desc: "Tactile panels with depth and gentle shadows." },
  { icon: Sparkles, title: "Soft aesthetic", desc: "Cream palette, rounded corners, and warm spacing." },
  { icon: LayoutGrid, title: "Responsive grid", desc: "Sections reflow cleanly across all screen sizes." },
  { icon: WandSparkles, title: "Motion polish", desc: "Subtle Framer Motion reveals that feel premium." },
];

export default function FeatureHighlights() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="space-y-6 pt-10"
    >
      <SectionHeading
        eyebrow="Feature highlights"
        title="Subtle, premium touches that shape the visual identity"
        description="Each block is designed to reinforce the startup feel without turning into a generic template layout."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {highlights.map(({ icon: Icon, title, desc }) => (
          <Card key={title} className="p-6">
            <div className="mb-4 inline-flex rounded-2xl bg-secondary/70 p-3 text-primary">
              <Icon className="size-5" />
            </div>
            <h3 className="text-title-sm font-semibold">{title}</h3>
            <p className="mt-3 text-body-md text-muted-foreground">{desc}</p>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}
