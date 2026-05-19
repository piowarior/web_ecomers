"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";

const quickLinks = [
  { label: "Marketplace", href: "#marketplace" },
  { label: "Rental Store", href: "#store" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Dashboard", href: "#dashboard" },
];

const socials = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
];

export default function StickyFooter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // Reveal animation: start from bottom, slide up with opacity
  const y = useTransform(scrollYProgress, [0, 0.4, 1], [120, 60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 0.3, 0.95, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 0.96, 1]);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Spacer for scroll trigger */}
      <div className="h-screen w-full" />

      {/* Fixed Sticky Footer Container */}
      <motion.footer
        style={{
          y,
          opacity,
          scale,
        }}
        className="fixed bottom-0 left-0 right-0 z-40 will-change-transform"
      >
        <div className="relative h-full w-full">
          {/* Background with gradient + blur */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/92 to-background/70 backdrop-blur-md" />
          
          {/* Decorative gradient overlay */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(241,214,173,0.1),transparent_40%),radial-gradient(circle_at_15%_80%,rgba(180,200,240,0.08),transparent_35%)]" />

          {/* Content */}
          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-8 sm:px-8 md:py-10 lg:px-12">
            <div className="grid gap-8 md:grid-cols-[1.5fr_1fr_1fr_auto]">
              {/* Branding + Description */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="space-y-3"
              >
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Nexora</h3>
                  <p className="text-sm text-muted-foreground">
                    Digital ecosystem for services, projects & rentals
                  </p>
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                className="space-y-2"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Platform</p>
                <div className="flex flex-col gap-1.5">
                  {quickLinks.slice(0, 2).map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="inline-flex items-center gap-1 text-sm text-foreground/80 transition-colors hover:text-primary"
                    >
                      {link.label}
                      <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* More Links */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-2"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Company</p>
                <div className="flex flex-col gap-1.5">
                  {quickLinks.slice(2, 4).map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="inline-flex items-center gap-1 text-sm text-foreground/80 transition-colors hover:text-primary"
                    >
                      {link.label}
                      <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Social Icons */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
                className="flex items-end gap-3"
              >
                {socials.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="rounded-full border border-border/50 bg-card/40 p-2.5 text-foreground/70 transition-all hover:border-border hover:bg-card/80 hover:text-primary"
                  >
                    <social.icon className="size-4" />
                  </Link>
                ))}
              </motion.div>
            </div>

            {/* Bottom divider + copyright */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 origin-left border-t border-border/30"
            />
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4 flex flex-col items-center justify-between gap-2 text-xs text-muted-foreground sm:flex-row"
            >
              <p>© 2026 Nexora. All rights reserved.</p>
              <div className="flex gap-4">
                <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
                <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
                <Link href="#" className="hover:text-foreground transition-colors">Cookies</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.footer>

      {/* Bottom spacing untuk push content */}
      <div className="h-48" />
    </div>
  );
}
