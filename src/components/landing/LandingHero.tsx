import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroStatTicker from "@/components/landing/HeroStatTicker";

const floating = [
  { label: "Marketplace activity", target: 126, suffix: "events" },
  { label: "Freelancer online", target: 48, suffix: "active" },
  { label: "AI automations", target: 17, suffix: "running" },
];

export default function LandingHero() {
  return (
    <section className="relative z-10 min-h-svh overflow-hidden">
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_50%_15%,rgba(242,216,177,0.65),transparent_35%),radial-gradient(circle_at_85%_18%,rgba(140,170,216,0.24),transparent_35%)]" />

      <div className="absolute inset-0 -z-20 overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover transform-[translate3d(0,0,0)]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
        >
          <source src="/vidio/testbgvidio2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,14,10,0.12),rgba(18,14,10,0.74))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.12),transparent_20%),radial-gradient(circle_at_75%_18%,rgba(140,170,216,0.18),transparent_24%),radial-gradient(circle_at_50%_72%,rgba(241,214,173,0.15),transparent_26%)]" />
        <div className="absolute inset-0 opacity-20 [background:repeating-linear-gradient(45deg,rgba(255,255,255,0.03)_0_1px,transparent_1px_3px)]" />
      </div>

      <div className="absolute inset-0 z-10 flex min-h-svh items-center justify-center px-4">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/88 px-4 py-2 text-caption shadow-sm animate-rise-in">
            <Sparkles className="size-3.5 text-primary" />
            Interactive ecosystem showcase
          </div>

          <h1 className="animate-rise-in text-balance font-semibold tracking-[-0.06em] text-[clamp(4.2rem,15vw,10rem)] leading-[0.82] text-white" style={{ animationDelay: "70ms" }}>
            NEXORA
          </h1>

          <p className="mx-auto mt-6 max-w-3xl animate-rise-in text-body-lg text-white/80" style={{ animationDelay: "140ms" }}>
            Soft SaaS Marketplace Ecosystem for Digital Services
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 animate-rise-in" style={{ animationDelay: "210ms" }}>
            <Button asChild className="rounded-full px-6 py-5" data-magnet="true" data-cursor="hover">
              <Link href="#ecosystem-live">
                Enter Ecosystem
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-6 py-5" data-magnet="true" data-cursor="hover">
              <Link href="#dashboard-preview">Explore Preview</Link>
            </Button>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-3">
            {floating.map((item, index) => (
              <div
                key={item.label}
                className="surface-panel animate-rise-in bg-background/78 p-3"
                style={{ animationDelay: `${300 + index * 80}ms` }}
              >
                <div className="text-caption text-muted-foreground">{item.label}</div>
                <div className="mt-1 text-body-md font-semibold">
                  <HeroStatTicker target={item.target} suffix={item.suffix} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}