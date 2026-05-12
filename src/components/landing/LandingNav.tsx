"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Compass, Sparkles, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  ["Ecosystem", "#ecosystem-live"],
  ["Universe", "#universe"],
  ["Workspace", "#workspace"],
  ["Creators", "#creators"],
  ["AI System", "#ai-system"],
];

export default function LandingNav() {
  return (
    <motion.header
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-40 pt-4"
    >
      <div className="surface-card mx-auto flex w-[calc(100%-2rem)] items-center gap-4 px-4 py-3 shadow-[0_18px_50px_-32px_hsl(var(--shadow)/0.65)] backdrop-blur-2xl sm:px-6 lg:w-[calc(100%-3rem)] lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
            N
          </div>
          <div>
            <div className="text-body-md font-semibold leading-none">Nexora</div>
            <div className="text-caption text-muted-foreground">Soft SaaS marketplace</div>
          </div>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 md:flex">
          {links.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="rounded-full px-4 py-2 text-body-md text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 md:ml-0">
          <div className="hidden items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-2 text-caption text-muted-foreground lg:flex">
            <Sparkles className="size-3.5 text-primary" />
            Live motion system
          </div>
          <Button asChild variant="outline" className="hidden rounded-full px-4 py-4 sm:inline-flex" data-magnet="true" data-cursor="hover">
            <Link href="#dashboard-preview">
              <LayoutDashboard className="size-4" />
              Explore Preview
            </Link>
          </Button>
          <Button asChild className="rounded-full px-4 py-4" data-magnet="true" data-cursor="hover">
            <Link href="#cta">
              <Compass className="size-4" />
              Enter Ecosystem
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
