import React from "react";
import Link from "next/link";

const columns = [
  {
    title: "Platform",
    links: ["Marketplace", "Rental store", "Projects", "Dashboard"],
  },
  {
    title: "About",
    links: ["Company", "Design system", "Contact", "Privacy"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/80 py-10 sm:py-12">
      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="max-w-xl space-y-3">
          <div className="text-title-md font-semibold">Nexora</div>
          <p className="text-body-md text-muted-foreground">
            A premium digital ecosystem for services, projects, and rentals.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {columns.map((column) => (
            <div key={column.title}>
              <div className="text-body-md font-semibold">{column.title}</div>
              <div className="mt-3 space-y-2 text-body-md text-muted-foreground">
                {column.links.map((link) => (
                  <Link key={link} href="#" className="block transition-colors hover:text-foreground">
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-2 border-t border-border/70 pt-6 text-caption text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 Nexora</span>
        <span>Soft neubrutalism cream SaaS identity</span>
      </div>
    </footer>
  );
}
