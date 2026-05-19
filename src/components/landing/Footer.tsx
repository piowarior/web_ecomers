"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Globe, Mail, Share2, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const footerGroups = [
  {
    title: "Platform",
    links: [
      { label: "Marketplace", href: "#marketplace-stack" },
      { label: "Rental Store", href: "#platform" },
      { label: "Custom Projects", href: "#cta" },
      { label: "Dashboard", href: "#" },
    ],
  },
  {
    title: "Ecosystem",
    links: [
      { label: "Live Preview", href: "#ecosystem-live" },
      { label: "Service Universe", href: "#" },
      { label: "Creator Network", href: "#" },
      { label: "Workspace", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Nexora", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog & Updates", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Settings", href: "#" },
      { label: "Compliance", href: "#" },
    ],
  },
] as const;

const socials = [
  { label: "Community", href: "#", icon: Users },
  { label: "Website", href: "#", icon: Globe },
  { label: "Share", href: "#", icon: Share2 },
] as const;

type FooterProps = {
  className?: string;
};

export default function Footer({ className }: FooterProps) {
  return (
    <footer
      aria-label="Site footer"
      className={cn(
        "relative flex w-full flex-col overflow-hidden",
        className,
      )}
      style={{
        background: `linear-gradient(165deg,
          oklch(0.93 0.045 285) 0%,
          oklch(0.91 0.05 265) 28%,
          oklch(0.89 0.055 245) 55%,
          oklch(0.87 0.06 230) 78%,
          oklch(0.85 0.055 220) 100%
        )`,
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(255,248,238,0.55),transparent_32%),radial-gradient(circle_at_88%_12%,rgba(180,200,240,0.35),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.12),transparent_45%)]" />

      <div className="relative z-10 flex min-h-0 flex-1 flex-col px-5 pb-0 pt-8 sm:px-8 sm:pt-10 lg:px-12 lg:pt-12">
        <div className="grid shrink-0 gap-8 border-b border-[rgba(70,58,40,0.14)] pb-8 lg:grid-cols-[1.15fr_1.85fr] lg:items-start lg:gap-12 lg:pb-10">
          <div className="space-y-4">
            <div>
              <p className="text-caption uppercase tracking-[0.28em] text-[oklch(0.42_0.06_265)]">
                Nexora ecosystem
              </p>
              <h2 className="mt-2 text-title-lg font-semibold tracking-tight text-[oklch(0.22_0.04_265)]">
                Marketplace, rentals, and project ops in one place.
              </h2>
            </div>
            <p className="max-w-md text-body-md text-[oklch(0.38_0.04_265)]">
              Hire freelancers, launch custom digital work, and rent official platform products — with a
              dashboard built for modern SaaS workflows.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {socials.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex items-center gap-2 rounded-full border border-[rgba(70,58,40,0.16)] bg-[rgba(255,252,245,0.55)] px-3.5 py-2 text-caption text-[oklch(0.35_0.04_265)] backdrop-blur-sm transition-colors hover:text-[oklch(0.22_0.04_265)]"
                >
                  <Icon className="size-3.5" />
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {footerGroups.map((group) => (
              <div key={group.title} className="space-y-3">
                <h3 className="text-caption font-semibold uppercase tracking-[0.2em] text-[oklch(0.4_0.05_265)]">
                  {group.title}
                </h3>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-1 text-body-sm text-[oklch(0.36_0.04_265)] transition-colors hover:text-[oklch(0.2_0.05_265)]"
                      >
                        {link.label}
                        <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-70" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto grid shrink-0 gap-4 py-5 sm:grid-cols-[1fr_auto] sm:items-end sm:gap-6 sm:py-6">
          <div className="space-y-1.5">
            <p className="inline-flex items-center gap-2 text-body-sm text-[oklch(0.36_0.04_265)]">
              <Mail className="size-3.5" />
              hello@nexora.app
            </p>
            <p className="text-caption text-[oklch(0.45_0.04_265)]">
              Jakarta · Remote-first · Available for global digital teams
            </p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-caption text-[oklch(0.42_0.04_265)] sm:justify-end">
            <span>© 2026 Nexora</span>
            <span>All rights reserved</span>
            <span>Built for premium digital operations</span>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none relative z-0 flex h-[clamp(5.5rem,22%,9rem)] w-full shrink-0 items-end justify-center overflow-hidden"
        style={{
          maskImage: "linear-gradient(180deg, transparent 0%, black 35%, black 100%)",
          WebkitMaskImage: "linear-gradient(180deg, transparent 0%, black 35%, black 100%)",
        }}
      >
        <span
          className="select-none translate-y-[22%] bg-[linear-gradient(180deg,oklch(0.78_0.07_265),oklch(0.62_0.09_240))] bg-clip-text text-[clamp(4.5rem,17vw,11.5rem)] font-bold leading-[0.82] tracking-[-0.06em] text-transparent"
          style={{ WebkitTextStroke: "1px rgba(255,252,245,0.08)" }}
        >
          NEXORA
        </span>
      </div>
    </footer>
  );
}
