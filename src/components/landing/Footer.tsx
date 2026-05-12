import React from "react";
import Link from "next/link";

const links = ["Platform", "Marketplace", "Studio", "Launch"];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden pb-8 pt-8 sm:pb-10 sm:pt-10">
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(120,102,70,0.4),transparent)]" />
      <div className="surface-card relative overflow-hidden px-5 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(245,226,194,0.45),transparent_28%),radial-gradient(circle_at_85%_10%,rgba(137,168,216,0.16),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.6),rgba(248,241,229,0.82))]" />

        <div className="relative grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="space-y-3">
            <div className="text-title-md font-semibold">Nexora</div>
            <p className="max-w-xl text-body-md text-muted-foreground">
              A premium digital ecosystem for marketplace services, official rentals, and product-led SaaS storytelling.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 lg:justify-end">
            {links.map((link) => (
              <Link
                key={link}
                href="#"
                className="rounded-full border border-border bg-background/70 px-4 py-2 text-caption text-muted-foreground transition-colors hover:text-foreground"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>

        <div className="relative mt-6 flex flex-col gap-2 border-t border-border/70 pt-5 text-caption text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Nexora</span>
          <span>Soft neubrutalism. Futuristic SaaS energy.</span>
        </div>
      </div>
    </footer>
  );
}
