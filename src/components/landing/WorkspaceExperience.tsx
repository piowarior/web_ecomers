"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  Sparkles,
  Zap,
  Globe,
  Shield,
  Activity,
  Code2,
  Palette,
  type LucideIcon
} from "lucide-react";

/* ───────────────────── data ───────────────────── */

const cardsData = [
  {
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    title: "Interactive Components",
    desc: "Aesthetic UI templates built with maximum detail.",
    x: 10,
    y: 18,
  },
  {
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80",
    title: "Custom Workflows",
    desc: "Automated triggers executed sequentially.",
    x: 82,
    y: 22,
  },
  {
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=600&q=80",
    title: "Brand Visuals",
    desc: "Stunning graphics tailored for developer toolkits.",
    x: 12,
    y: 65,
  },
  {
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=600&q=80",
    title: "Growth Funnels",
    desc: "Embedded conversion tracking dashboards.",
    x: 80,
    y: 68,
  }
];

const repellingBadgesData = [
  { label: "Pipeline Synced", status: "Success", color: "bg-emerald-500", x: 20, y: 35 },
  { label: "OAuth verified", status: "Active", color: "bg-primary", x: 70, y: 45 },
  { label: "API call", status: "4ms latency", color: "bg-cyan-500", x: 25, y: 78 },
  { label: "Deployment complete", status: "v3.2.0 production", color: "bg-emerald-500", x: 68, y: 82 }
];

/* ───────────────────── RepellingBadge component ───────────────────── */

interface RepellingBadgeProps {
  label: string;
  status: string;
  color: string;
  x: number;
  y: number;
}

function RepellingBadge({ label, status, color, x, y }: RepellingBadgeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const springX = useSpring(offsetX, { stiffness: 100, damping: 15 });
  const springY = useSpring(offsetY, { stiffness: 100, damping: 15 });

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = cx - e.clientX;
    const dy = cy - e.clientY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 150) {
      // Repel away from cursor (max 60px force)
      const force = ((150 - dist) / 150) * 60;
      offsetX.set((dx / dist) * force);
      offsetY.set((dy / dist) * force);
    } else {
      offsetX.set(0);
      offsetY.set(0);
    }
  };

  const handlePointerLeave = () => {
    offsetX.set(0);
    offsetY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        x: springX,
        y: springY,
      }}
      className="absolute cursor-default z-20"
    >
      <div className="surface-card flex items-center gap-2.5 px-4 py-2 border border-border/80 bg-card/90 shadow-md rounded-2xl neubrutal-outline whitespace-nowrap">
        <span className="relative flex h-2 w-2">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${color}`}></span>
          <span className={`relative inline-flex rounded-full h-2 w-2 ${color}`}></span>
        </span>
        <div className="flex flex-col items-start leading-none text-left">
          <span className="text-[10px] font-semibold text-foreground uppercase tracking-wider">{label}</span>
          <span className="text-[9px] text-muted-foreground mt-0.5">{status}</span>
        </div>
      </div>
    </motion.div>
  );
}

/* ───────────────────── Main component ───────────────────── */

export default function WorkspaceExperience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const smoothProgress = useRef(0);

  /* vertical scroll progress with lerp for absolute buttery smoothing */
  useEffect(() => {
    let rafId: number;
    const LERP = 0.08;
    const tick = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionHeight = sectionRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;
        const scrolled = -rect.top;
        const maxScroll = sectionHeight - viewportHeight;
        const target = Math.max(0, Math.min(1, scrolled / maxScroll));

        smoothProgress.current += (target - smoothProgress.current) * LERP;
        if (Math.abs(target - smoothProgress.current) < 0.0001) {
          smoothProgress.current = target;
        }
        setProgress(smoothProgress.current);
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="workspace"
      className="relative w-full"
      style={{ height: "400vh" }}
    >
      {/* Sticky Frame viewport */}
      <div className="sticky top-16 flex h-[calc(100vh-4rem)] w-full flex-col overflow-hidden">
        
        {/* Header - Banner layout matching other soft-cream neobrutalist designs */}
        <div className="relative z-30 shrink-0 border-b border-border/40 bg-background/60 backdrop-blur-xl">
          <div className="mx-auto flex w-full max-w-[1400px] flex-col items-start justify-between gap-3 px-6 py-5 sm:px-10 md:flex-row md:items-center">
            <div>
              <p className="text-caption text-muted-foreground uppercase tracking-[0.22em]">Workspace experience</p>
              <h2 className="text-display-sm text-balance">This is what using Nexora feels like.</h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full border border-border bg-background/70 px-4 py-2 text-caption text-muted-foreground backdrop-blur-sm">
                realtime feedback
              </div>
              <div className="flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-caption text-muted-foreground backdrop-blur-sm">
                <span>progress</span>
                <div className="h-1 w-16 overflow-hidden rounded-full bg-muted sm:w-20">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${progress * 100}%` }}
                  />
                </div>
                <span className="tabular-nums text-xs">{Math.round(progress * 100)}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── CANVAS AREA ─── */}
        <div className="relative flex-1 overflow-hidden bg-transparent">

          {/* Curved drawing SVG path */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none -z-10" 
            viewBox="0 0 100 1000" 
            preserveAspectRatio="none"
          >
            <path
              d="M 50 0 C 15 250, 85 500, 20 750, 50 1000"
              fill="none"
              stroke="oklch(0.59 0.083 55.9 / 0.05)"
              strokeWidth="6"
            />
            <path
              d="M 50 0 C 15 250, 85 500, 20 750, 50 1000"
              fill="none"
              stroke="url(#canvas-svg-gradient)"
              strokeWidth="3.5"
              strokeDasharray="1500"
              strokeDashoffset={1500 - progress * 1500}
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="canvas-svg-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="var(--primary)" />
                <stop offset="100%" stopColor="oklch(0.67 0.069 238.8)" />
              </linearGradient>
            </defs>
          </svg>

          {/* 1. 3D TEXT "HOW DO YOU FEEL" - centers dynamically and twists */}
          {progress < 0.76 && (
            <motion.div
              style={{
                opacity: Math.max(0, Math.min(1, (0.76 - progress) / 0.12)),
                scale: 1 - progress * 0.15,
                y: -progress * 80
              }}
              className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10"
            >
              <div className="flex flex-col gap-2 md:gap-4 justify-center items-center select-none perspective-[1200px]">
                {["HOW", "DO", "YOU", "FEEL"].map((word, wordIdx) => (
                  <div key={wordIdx} className="flex gap-2 sm:gap-3 md:gap-4">
                    {word.split("").map((letter, charIdx) => {
                      const globalIdx = wordIdx * 10 + charIdx;
                      // Each character spins in its own dynamic rotation speed and axes
                      const rotX = progress * (240 + globalIdx * 35);
                      const rotY = progress * (360 - globalIdx * 50);
                      const rotZ = progress * (80 + globalIdx * 15);

                      return (
                        <motion.span
                          key={charIdx}
                          style={{
                            rotateX: rotX,
                            rotateY: rotY,
                            rotateZ: rotZ,
                            transformStyle: "preserve-3d",
                            display: "inline-block"
                          }}
                          className="text-display-sm sm:text-display-md md:text-[5rem] lg:text-[6.5rem] font-black tracking-tighter text-foreground/80 dark:text-foreground/90 uppercase"
                        >
                          {letter}
                        </motion.span>
                      );
                    })}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* 2. Repelling status widgets (Dodging logs) */}
          {repellingBadgesData.map((badge, idx) => {
            const opacity = Math.max(0, Math.min(1, (0.80 - progress) / 0.15));
            if (opacity <= 0) return null;
            return (
              <div 
                key={idx}
                style={{ opacity }}
                className="transition-opacity duration-300 pointer-events-auto"
              >
                <RepellingBadge {...badge} />
              </div>
            );
          })}

          {/* 3. Central card dashboard layout (Grand finale, fades in at end of scroll) */}
          {progress >= 0.70 && (
            <motion.div
              style={{
                opacity: Math.max(0, Math.min(1, (progress - 0.70) / 0.15)),
                scale: 0.88 + 0.12 * Math.max(0, Math.min(1, (progress - 0.70) / 0.15)),
              }}
              className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
            >
              {/* Massive back watermarked text */}
              <div className="absolute select-none font-black tracking-[-0.06em] text-foreground/[0.035] dark:text-foreground/[0.015] text-[6rem] sm:text-[8rem] md:text-[10rem] uppercase leading-none pointer-events-none -z-20 text-center">
                NEXORA<br/>WORKSPACE
              </div>

              {/* Elevated Neobrutalist central controller card */}
              <div className="surface-card w-[21rem] sm:w-[25rem] md:w-[28rem] p-6 bg-card/95 border border-border/80 shadow-[0_25px_60px_-15px_hsl(var(--shadow)/0.4)] neubrutal-outline pointer-events-auto">
                <div className="flex items-center justify-between border-b border-border/50 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-caption font-semibold uppercase tracking-wider">Ecosystem Control</span>
                  </div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest">Workspace live</div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl bg-muted/30 p-4 border border-border/30 text-left">
                    <div className="text-caption text-muted-foreground uppercase tracking-wider">Operational Status</div>
                    <div className="text-title-lg font-bold text-foreground mt-1 flex items-baseline gap-1.5">
                      Optimal <span className="text-xs font-normal text-emerald-500">All channels active</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-muted/20 p-3 border border-border/20 text-left">
                      <div className="text-[10px] text-muted-foreground">Automation Health</div>
                      <div className="text-body-lg font-semibold mt-0.5 text-foreground">98.9%</div>
                    </div>
                    <div className="rounded-2xl bg-muted/20 p-3 border border-border/20 text-left">
                      <div className="text-[10px] text-muted-foreground">Core Response</div>
                      <div className="text-body-lg font-semibold mt-0.5 text-foreground">&lt; 8ms</div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-primary/20 bg-primary/5 p-3 text-left">
                    <div className="text-[10px] text-primary font-semibold uppercase tracking-wider">Activity Feed</div>
                    <div className="text-xs text-muted-foreground mt-1.5 font-mono leading-relaxed truncate">
                      → Workspace fully loaded. UI system active.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* 4. Floating / Orbiting Image cards surrounding the center */}
          {cardsData.map((card, idx) => {
            const centerX = 50;
            const centerY = 50;
            // 4 cards organized at angles 45, 135, 225, 315 degrees
            const angle = (idx * 2 * Math.PI) / cardsData.length + Math.PI / 4;
            const radius = 35; // percent radius

            // Orbit targets
            const orbitX = centerX + Math.cos(angle) * radius;
            const orbitY = centerY + Math.sin(angle) * radius * 0.95; // slightly oval layout

            // Blend from floating to orbiting
            const blend = Math.max(0, Math.min(1, (progress - 0.70) / 0.20));

            const currentX = card.x * (1 - blend) + orbitX * blend;
            const currentY = card.y * (1 - blend) + orbitY * blend;

            // Staggered slow kinetic scroll-driven rotation
            const scrollRotate = progress * 120 + idx * 25;

            return (
              <motion.article
                key={idx}
                style={{
                  left: `${currentX}%`,
                  top: `${currentY}%`,
                  x: "-50%",
                  y: "-50%",
                  rotate: scrollRotate,
                  scale: 0.9 + blend * 0.1,
                }}
                className="absolute w-[11rem] sm:w-[13rem] md:w-[14.5rem] surface-card p-3 bg-card/95 border border-border/80 shadow-md neubrutal-outline pointer-events-auto cursor-pointer z-20 hover:scale-[1.03] transition-transform duration-300"
              >
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-muted">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                </div>
                <div className="mt-2 text-left">
                  <h4 className="text-xs font-bold text-foreground leading-tight">{card.title}</h4>
                  <p className="text-[10px] text-muted-foreground mt-1 leading-snug line-clamp-2">{card.desc}</p>
                </div>
              </motion.article>
            );
          })}

        </div>
      </div>
    </section>
  );
}
