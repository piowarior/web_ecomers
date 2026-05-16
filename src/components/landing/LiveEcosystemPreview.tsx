"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  Activity,
  Bot,
  BriefcaseBusiness,
  UsersRound,
  Zap,
  Globe,
  Shield,
  Layers,
  Sparkles,
  TrendingUp,
  Rocket,
  Code2,
  Palette,
  MessageSquare,
  BarChart3,
  Cpu,
  Workflow,
  Database,
  CloudCog,
  LayoutDashboard,
  type LucideIcon,
} from "lucide-react";

/* ───────────────────── data ───────────────────── */

const cards = [
  { icon: BriefcaseBusiness, title: "Marketplace live", note: "New service ordered", time: "just now", color: "primary" },
  { icon: UsersRound, title: "Freelancer online", note: "4 talents available", time: "12s ago", color: "accent" },
  { icon: Activity, title: "Project created", note: "SaaS landing build", time: "25s ago", color: "primary" },
  { icon: Bot, title: "AI automation", note: "Workflow synced", time: "42s ago", color: "accent" },
  { icon: Zap, title: "Payment received", note: "$2,400 processed", time: "1m ago", color: "primary" },
  { icon: Globe, title: "Domain connected", note: "nexora.app verified", time: "2m ago", color: "accent" },
  { icon: Shield, title: "Security scan", note: "All checks passed", time: "3m ago", color: "primary" },
  { icon: Layers, title: "Stack deployed", note: "v3.2.0 → production", time: "4m ago", color: "accent" },
  { icon: Sparkles, title: "AI suggestion", note: "Copy improved +18%", time: "5m ago", color: "primary" },
  { icon: TrendingUp, title: "Traffic spike", note: "+340% from launch", time: "6m ago", color: "accent" },
  { icon: Rocket, title: "New launch", note: "Product Hunt live", time: "7m ago", color: "primary" },
  { icon: Code2, title: "Code review", note: "PR #421 approved", time: "8m ago", color: "accent" },
  { icon: Palette, title: "Design system", note: "Tokens synced", time: "9m ago", color: "primary" },
  { icon: MessageSquare, title: "Client message", note: "Feedback received", time: "10m ago", color: "accent" },
  { icon: BarChart3, title: "Analytics pulse", note: "12k sessions today", time: "11m ago", color: "primary" },
  { icon: Cpu, title: "Edge function", note: "Latency < 12ms", time: "12m ago", color: "accent" },
];

/* Floating texts — own speed layer */
const floatingTexts = [
  { text: "real-time sync", x: 4, y: 22 },
  { text: "zero downtime", x: 18, y: 75 },
  { text: "global CDN", x: 35, y: 18 },
  { text: "auto-scaling", x: 50, y: 80 },
  { text: "end-to-end encrypted", x: 65, y: 25 },
  { text: "multi-region", x: 82, y: 72 },
  { text: "event-driven", x: 98, y: 20 },
  { text: "serverless", x: 115, y: 78 },
  { text: "composable", x: 130, y: 22 },
  { text: "edge-first", x: 148, y: 76 },
  { text: "micro-services", x: 165, y: 24 },
  { text: "fault-tolerant", x: 180, y: 74 },
  { text: "blazing fast", x: 198, y: 20 },
  { text: "API-first", x: 215, y: 78 },
];

/* Floating icons — fastest layer */
const floatingIcons: { Icon: LucideIcon; x: number; y: number; size: number; baseRotate: number }[] = [
  { Icon: Sparkles, x: 6, y: 35, size: 7, baseRotate: 0 },
  { Icon: Zap, x: 16, y: 82, size: 6, baseRotate: 45 },
  { Icon: Globe, x: 28, y: 15, size: 8, baseRotate: 90 },
  { Icon: Shield, x: 38, y: 70, size: 6, baseRotate: 135 },
  { Icon: Rocket, x: 48, y: 30, size: 7, baseRotate: 180 },
  { Icon: Cpu, x: 58, y: 85, size: 6, baseRotate: 225 },
  { Icon: TrendingUp, x: 68, y: 20, size: 7, baseRotate: 270 },
  { Icon: Layers, x: 78, y: 75, size: 6, baseRotate: 315 },
  { Icon: Workflow, x: 88, y: 38, size: 8, baseRotate: 20 },
  { Icon: Database, x: 98, y: 80, size: 6, baseRotate: 60 },
  { Icon: CloudCog, x: 108, y: 25, size: 7, baseRotate: 100 },
  { Icon: Code2, x: 118, y: 72, size: 6, baseRotate: 140 },
  { Icon: LayoutDashboard, x: 128, y: 32, size: 7, baseRotate: 200 },
  { Icon: Activity, x: 138, y: 78, size: 6, baseRotate: 240 },
  { Icon: Bot, x: 148, y: 18, size: 8, baseRotate: 280 },
  { Icon: Palette, x: 158, y: 68, size: 6, baseRotate: 320 },
  { Icon: BriefcaseBusiness, x: 168, y: 40, size: 7, baseRotate: 30 },
  { Icon: UsersRound, x: 178, y: 85, size: 6, baseRotate: 70 },
  { Icon: MessageSquare, x: 188, y: 22, size: 7, baseRotate: 110 },
  { Icon: BarChart3, x: 198, y: 75, size: 6, baseRotate: 150 },
];

/* Large background text — on card layer */
const bgTexts = [
  { text: "NEXORA", x: 15, y: 48 },
  { text: "ECOSYSTEM", x: 55, y: 52 },
  { text: "LIVE", x: 95, y: 48 },
  { text: "NETWORK", x: 135, y: 52 },
  { text: "SIGNAL", x: 175, y: 48 },
];

/* Card positions — scattered but tidy */
const cardPositions = [
  { left: 2, top: 15 },
  { left: 8, top: 58 },
  { left: 18, top: 28 },
  { left: 24, top: 68 },
  { left: 34, top: 14 },
  { left: 40, top: 55 },
  { left: 50, top: 25 },
  { left: 56, top: 65 },
  { left: 66, top: 16 },
  { left: 72, top: 58 },
  { left: 82, top: 30 },
  { left: 88, top: 70 },
  { left: 98, top: 15 },
  { left: 104, top: 55 },
  { left: 114, top: 26 },
  { left: 120, top: 66 },
];

/* ── Scroll speed multipliers ──
   Cards    = 1.0× (base)
   Texts    = 1.35× (medium)
   Icons    = 1.7× (fastest)
*/
const CARD_SPEED = 1.0;
const TEXT_SPEED = 1.35;
const ICON_SPEED = 1.7;
const BASE_TRANSLATE = -120; // vw at 100% scroll

/* ───────────────────── FloatingIcon sub-component ───────────────────── */

function FloatingIcon({
  Icon,
  x,
  y,
  size,
  baseRotate,
  index,
}: {
  Icon: LucideIcon;
  x: number;
  y: number;
  size: number;
  baseRotate: number;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const springX = useSpring(offsetX, { stiffness: 120, damping: 20 });
  const springY = useSpring(offsetY, { stiffness: 120, damping: 20 });

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = cx - e.clientX;
      const dy = cy - e.clientY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        const force = ((120 - dist) / 120) * 40;
        offsetX.set((dx / dist) * force);
        offsetY.set((dy / dist) * force);
      }
    },
    [offsetX, offsetY],
  );

  const handlePointerLeave = useCallback(() => {
    offsetX.set(0);
    offsetY.set(0);
  }, [offsetX, offsetY]);

  const px = size * 4;

  return (
    <motion.div
      ref={ref}
      className="absolute cursor-default text-muted-foreground/20"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        x: springX,
        y: springY,
      }}
      animate={{
        rotate: [baseRotate, baseRotate + 360],
      }}
      transition={{
        rotate: {
          duration: 18 + index * 2,
          repeat: Infinity,
          ease: "linear",
        },
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <Icon style={{ width: `${px}px`, height: `${px}px` }} />
    </motion.div>
  );
}

/* ───────────────────── Main component ───────────────────── */

export default function LiveEcosystemPreview() {
  const [counter, setCounter] = useState(1240);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollX, setScrollX] = useState(0);

  /* live counter */
  useEffect(() => {
    const id = setInterval(() => {
      setCounter((v) => v + Math.floor(Math.random() * 3));
    }, 1200);
    return () => clearInterval(id);
  }, []);

  /* horizontal scroll driven by vertical scroll */
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrolled = -rect.top;
      const maxScroll = sectionHeight - viewportHeight;
      const progress = Math.max(0, Math.min(1, scrolled / maxScroll));
      setScrollX(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cardTranslate = scrollX * BASE_TRANSLATE * CARD_SPEED;
  const textTranslate = scrollX * BASE_TRANSLATE * TEXT_SPEED;
  const iconTranslate = scrollX * BASE_TRANSLATE * ICON_SPEED;

  return (
    <section
      ref={sectionRef}
      id="ecosystem-live"
      className="relative"
      style={{ height: "300vh" }}
    >
      {/* ── Sticky viewport ── */}
      <div className="sticky top-0 flex h-screen w-full flex-col overflow-hidden bg-background">
        {/* ─── HEADER ─── separated, with border + bg, vertically centered content */}
        <div className="relative z-30 shrink-0 border-b border-border/60 bg-background">
          <div className="mx-auto flex w-full max-w-[1400px] flex-col items-start justify-between gap-3 px-6 py-5 sm:px-10 md:flex-row md:items-center md:py-6">
            <div>
              <p className="text-caption text-muted-foreground">Live ecosystem simulation</p>
              <h2 className="text-display-sm text-balance">
                Realtime signal across the Nexora network.
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full border border-border bg-background/70 px-4 py-2 text-caption text-muted-foreground backdrop-blur-sm">
                ecosystem updates:{" "}
                <span className="font-semibold tabular-nums text-foreground">{counter}</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-2 text-caption text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                live
              </div>
            </div>
          </div>
        </div>

        {/* ─── CANVAS AREA ─── fills remaining height */}
        <div className="relative flex-1 overflow-hidden">
          {/* Edge fade gradients */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />

          {/* ── Layer 1: Cards (slowest — base speed) ── */}
          <div
            className="absolute inset-0 will-change-transform"
            style={{
              transform: `translate3d(${cardTranslate}vw, 0, 0)`,
              transition: "transform 0.08s linear",
              width: "220vw",
            }}
          >
            {/* Large background text (same layer as cards) */}
            {bgTexts.map((bg) => (
              <div
                key={bg.text}
                className="absolute select-none whitespace-nowrap"
                style={{
                  left: `${bg.x}%`,
                  top: `${bg.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <span
                  className="text-[6rem] font-black tracking-[-0.05em] text-foreground/[0.025] sm:text-[8rem] md:text-[10rem]"
                  style={{ fontFamily: "var(--font-display, inherit)" }}
                >
                  {bg.text}
                </span>
              </div>
            ))}

            {/* Cards */}
            {cards.map((card, index) => {
              const pos = cardPositions[index];
              return (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 50, scale: 0.88 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    delay: index * 0.06,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 90,
                    damping: 14,
                  }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  data-cursor="focus"
                  className="surface-card group absolute w-[14rem] overflow-hidden p-5 sm:w-[16rem] md:w-[17rem]"
                  style={{
                    left: `${pos.left}%`,
                    top: `${pos.top}%`,
                  }}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,0.55),transparent_45%)] opacity-80" />
                  <div className="relative">
                    <div
                      className={`mb-3 inline-flex rounded-2xl p-3 ${
                        card.color === "accent"
                          ? "bg-accent/15 text-accent-foreground"
                          : "bg-secondary/70 text-primary"
                      }`}
                    >
                      <card.icon className="size-5" />
                    </div>
                    <h3 className="text-body-md font-semibold">{card.title}</h3>
                    <p className="mt-1.5 text-caption text-muted-foreground">{card.note}</p>
                    <div className="mt-3 flex items-center justify-between text-caption">
                      <span className="text-muted-foreground">{card.time}</span>
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 text-primary">
                        live
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* ── Layer 2: Floating text labels (medium speed) ── */}
          <div
            className="pointer-events-none absolute inset-0 will-change-transform"
            style={{
              transform: `translate3d(${textTranslate}vw, 0, 0)`,
              transition: "transform 0.06s linear",
              width: "260vw",
            }}
          >
            {floatingTexts.map((ft, i) => (
              <div
                key={ft.text}
                className="absolute select-none"
                style={{
                  left: `${ft.x}%`,
                  top: `${ft.y}%`,
                }}
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.6 }}
                  className="inline-block rounded-full border border-border/50 bg-background/60 px-4 py-1.5 text-caption font-medium tracking-wide text-muted-foreground backdrop-blur-sm"
                >
                  {ft.text}
                </motion.span>
              </div>
            ))}
          </div>

          {/* ── Layer 3: Floating icons (fastest speed + rotation + hover dodge) ── */}
          <div
            className="absolute inset-0 will-change-transform"
            style={{
              transform: `translate3d(${iconTranslate}vw, 0, 0)`,
              transition: "transform 0.04s linear",
              width: "300vw",
            }}
          >
            {floatingIcons.map((fi, i) => (
              <FloatingIcon
                key={`icon-${i}`}
                Icon={fi.Icon}
                x={fi.x}
                y={fi.y}
                size={fi.size}
                baseRotate={fi.baseRotate}
                index={i}
              />
            ))}
          </div>

          {/* Scroll progress indicator */}
          <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2">
            <div className="flex items-center gap-3 rounded-full border border-border bg-background/80 px-5 py-2.5 text-caption text-muted-foreground backdrop-blur-sm">
              <span className="hidden sm:inline">scroll to explore</span>
              <div className="h-1 w-20 overflow-hidden rounded-full bg-muted sm:w-28">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-100"
                  style={{ width: `${scrollX * 100}%` }}
                />
              </div>
              <span className="tabular-nums">{Math.round(scrollX * 100)}%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
