"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="pt-10"
    >
      <Card className="relative overflow-hidden p-6 sm:p-8 lg:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(234,202,157,0.34),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(140,168,210,0.18),transparent_35%)]" />
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1 text-caption">
              <Sparkles className="size-3.5 text-primary" />
              Ready to build the next layer
            </div>
            <h2 className="text-display-sm text-balance text-foreground md:text-display-md">
              A refined public face for a premium digital platform.
            </h2>
            <p className="text-body-lg text-muted-foreground">
              The landing page now establishes Nexora’s identity with a premium cream aesthetic, strong hierarchy, and modular composition.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button asChild className="rounded-full px-5 py-5">
              <Link href="#services">
                Explore categories
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-5 py-5">
              <Link href="#dashboard-preview">See dashboard preview</Link>
            </Button>
          </div>
        </div>
      </Card>
    </motion.section>
  );
}
