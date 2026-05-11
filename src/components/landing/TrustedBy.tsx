"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";

const logos = ["Framer", "Linear", "Vercel", "Stripe", "Clerk", "Supabase"];

export default function TrustedBy() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="pt-4"
    >
      <Card className="p-5 sm:p-6">
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-caption text-muted-foreground">Trusted by modern teams and operators</div>
            <div className="text-body-md font-semibold">Built for premium product experiences</div>
          </div>
          <div className="text-caption text-muted-foreground">Startup-style credibility</div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo) => (
            <div key={logo} className="surface-panel flex items-center justify-center py-4 text-body-md font-semibold text-foreground/75">
              {logo}
            </div>
          ))}
        </div>
      </Card>
    </motion.section>
  );
}
