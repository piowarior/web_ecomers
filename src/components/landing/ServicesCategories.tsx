"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code2, Bot, Palette, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import SectionHeading from "./SectionHeading";

const categories = [
  { title: "Web Development", desc: "Premium websites, product builds, and technical execution.", icon: Code2 },
  { title: "AI Automation", desc: "Workflow automation, agents, and smart operational tools.", icon: Bot },
  { title: "Design Services", desc: "Branding, UI systems, and polished interface design.", icon: Palette },
];

export default function ServicesCategories() {
  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="space-y-6 pt-10"
    >
      <SectionHeading
        eyebrow="Service categories"
        title="Focused categories for a clear marketplace identity"
        description="Nexora’s public story begins with a concise service taxonomy that feels easy to explore and premium to browse."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {categories.map(({ title, desc, icon: Icon }) => (
          <Card key={title} className="group p-6 transition-transform duration-300 hover:-translate-y-1">
            <div className="mb-5 inline-flex rounded-2xl bg-secondary/70 p-3 text-primary shadow-sm">
              <Icon className="size-5" />
            </div>
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-title-sm font-semibold">{title}</h3>
                <p className="mt-2 text-body-md text-muted-foreground">{desc}</p>
              </div>
              <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}
