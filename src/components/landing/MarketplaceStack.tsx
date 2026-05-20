"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Bot, Palette, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stack = [
  {
    icon: Code2,
    title: "Web Development Service",
    note: "High-converting product pages and scalable frontend systems built with modern frameworks.",
    features: ["Next.js & React", "Performance-first", "SEO optimized"],
    stat: { label: "Projects delivered", value: "2,400+" },
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    color: "bg-[linear-gradient(140deg,rgba(251,236,210,0.9),rgba(255,255,255,0.84))]",
  },
  {
    icon: Bot,
    title: "AI Automation Service",
    note: "Workflow orchestration and intelligent task automation that scales with your business needs.",
    features: ["LLM integration", "Custom agents", "Data pipelines"],
    stat: { label: "Workflows running", value: "890+" },
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    color: "bg-[linear-gradient(140deg,rgba(226,237,250,0.9),rgba(255,255,255,0.84))]",
  },
  {
    icon: Palette,
    title: "Design & Brand Service",
    note: "UI systems, visual identity, and premium interface direction for products that stand out.",
    features: ["Design systems", "Brand identity", "Motion design"],
    stat: { label: "Brands crafted", value: "560+" },
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    color: "bg-[linear-gradient(140deg,rgba(245,234,249,0.88),rgba(255,255,255,0.84))]",
  },
  {
    icon: Rocket,
    title: "Growth & Launch Service",
    note: "End-to-end launch strategy from MVP to market with analytics, SEO, and conversion optimization.",
    features: ["Launch strategy", "Analytics setup", "Growth loops"],
    stat: { label: "Launches shipped", value: "340+" },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    color: "bg-[linear-gradient(140deg,rgba(220,243,234,0.88),rgba(255,255,255,0.84))]",
  },
];

export default function MarketplaceStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const stackContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToCard = (index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const targetScroll = scrollTop + rect.top - (368 + index * 24);

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const stackContainer = stackContainerRef.current;
    const cardElements = cardRefs.current;
    if (!section || !header || !stackContainer) return;

    const ctx = gsap.context(() => {
      // Smooth header fade out saat scroll ke marketplace stack cards
      ScrollTrigger.create({
        trigger: stackContainer,
        start: "top 10%",
        end: "top -100%",
        scrub: 0.6,
        onUpdate: (self) => {
          // Smooth fade out dan slide up
          gsap.to(header, {
            opacity: 1 - self.progress,
            y: -60 * self.progress,
            pointerEvents: self.progress > 0.5 ? "none" : "auto",
            duration: 0,
          });
        },
        invalidateOnRefresh: true,
      });

      // Track active card index based on viewport position relative to its sticky top
      const updateActiveCard = () => {
        let active = 0;
        cardElements.forEach((card, index) => {
          if (!card) return;
          const rect = card.getBoundingClientRect();
          const stickyTop = 368 + index * 24;
          if (rect.top <= stickyTop + 8) {
            active = index;
          }
        });
        setActiveIndex(active);
      };

      ScrollTrigger.create({
        trigger: stackContainer,
        start: "top top",
        end: "bottom bottom",
        onUpdate: updateActiveCard,
        invalidateOnRefresh: true,
      });

      // Default state: sticky at top
      gsap.set(header, { position: "sticky", top: "4rem", opacity: 1, y: 0 });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="marketplace-stack" className="py-32 sm:py-40 lg:py-48">
      <div ref={containerRef} className="mx-auto w-full max-w-300 px-4 sm:px-6 lg:px-8">

        {/* Stack container — tall enough for cards to fold one by one */}
        <div ref={stackContainerRef} className="relative space-y-8" style={{ minHeight: `${stack.length * 55 + 30}vh` }}>
          {/* Header — Sticky saat animasi melipat, normal scroll setelah selesai */}
          <div 
            ref={headerRef} 
            className="sticky top-0 z-40 mb-16 rounded-3xl border border-border/80 bg-card/95 backdrop-blur-md p-6 sm:p-8 lg:px-10 lg:py-8 shadow-[0_12px_26px_-22px_hsl(var(--shadow)/0.88)] neubrutal-outline overflow-hidden"
          >
            {/* Ambient Warm Cream/Amber Background Glows */}
            <div className="absolute -top-12 -left-20 w-80 h-80 rounded-full bg-amber-500/10 blur-[100px] pointer-events-none -z-10 dark:bg-amber-400/5" />
            <div className="absolute -bottom-8 right-10 w-60 h-60 rounded-full bg-primary/10 blur-[80px] pointer-events-none -z-10 dark:bg-primary/5" />

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 w-full">
              {/* Left Column — Title & Desc */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3.5 py-1.5 text-[10px] font-semibold tracking-wider uppercase text-foreground backdrop-blur-md shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
                  </span>
                  Marketplace motion stack
                </div>
                <h2 className="mt-4 text-display-sm sm:text-display-md font-bold tracking-tight text-balance leading-none">
                  Scroll through <span className="bg-gradient-to-r from-foreground via-primary to-amber-600 bg-clip-text text-transparent dark:from-foreground dark:via-primary dark:to-amber-400">layered service depth.</span>
                </h2>
                <p className="mt-3.5 max-w-xl text-body-lg text-muted-foreground">
                  Each service card stacks as you scroll, revealing the depth of the Nexora ecosystem.
                </p>
                
                {/* Mobile indicators */}
                <div className="flex lg:hidden items-center gap-2.5 mt-5">
                  {stack.map((item, index) => {
                    const isActive = activeIndex === index;
                    return (
                      <button
                        key={item.title}
                        onClick={() => scrollToCard(index)}
                        className="flex items-center gap-1 focus:outline-none"
                        aria-label={`Go to tier ${index + 1}`}
                      >
                        <span className={`h-1.5 rounded-full transition-all duration-500 ${
                          isActive 
                            ? "w-8 bg-gradient-to-r from-primary to-amber-500" 
                            : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                        }`} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Column — Interactive Progress Navigator */}
              <div className="hidden lg:flex items-center justify-end gap-3 max-w-md ml-auto">
                {stack.map((item, index) => {
                  const isActive = activeIndex === index;
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.title}
                      onClick={() => scrollToCard(index)}
                      className={`group relative flex flex-col items-start gap-1 p-3.5 rounded-2xl border transition-all duration-300 text-left cursor-pointer ${
                        isActive
                          ? "border-primary bg-background shadow-[0_8px_20px_-8px_oklch(0.59_0.083_55.9_/_0.25)] scale-[1.03]"
                          : "border-border/50 bg-background/30 hover:border-border hover:bg-background/60"
                      }`}
                    >
                      {/* Glow behind active item */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/5 via-amber-500/5 to-transparent blur-md -z-10 animate-pulse" />
                      )}
                      
                      {/* Active top line */}
                      <div className={`absolute top-0 inset-x-4 h-[2px] rounded-full transition-all duration-300 ${
                        isActive 
                          ? "bg-gradient-to-r from-primary to-amber-500 opacity-100" 
                          : "bg-transparent opacity-0 group-hover:bg-border/60 group-hover:opacity-100"
                      }`} />

                      <div className="flex items-center gap-2">
                        <div className={`rounded-xl p-1.5 transition-colors duration-300 ${
                          isActive ? "bg-primary/10 text-primary" : "bg-muted/50 text-muted-foreground group-hover:text-foreground"
                        }`}>
                          <Icon className="size-4" />
                        </div>
                        <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                          0{index + 1}
                        </span>
                      </div>
                      <div className="mt-1">
                        <div className={`text-xs font-semibold transition-colors duration-300 ${
                          isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                        }`}>
                          {item.title.split(" ")[0]}
                        </div>
                        <div className="text-[9px] text-muted-foreground mt-0.5 whitespace-nowrap">
                          {index === 0 ? "Development" : index === 1 ? "Automation" : index === 2 ? "Branding" : "Launch"}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          {stack.map((card, index) => (
            <motion.article
              key={card.title}
              ref={(el: any) => {
                cardRefs.current[index] = el;
              }}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.06, duration: 0.6 }}
              whileHover={{ scale: 1.008 }}
              data-cursor="focus"
              className={`surface-card sticky overflow-hidden p-0 ${card.color}`}
              style={{
                /* Stick di bawah sticky header — animasi melipat mulai dari sini */
                top: `calc(23rem + ${index * 1.5}rem)`,
                zIndex: 20 + index,
              }}
            >
              <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                {/* Left — text content */}
                <div className="p-8 sm:p-10 lg:p-12">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-secondary/70 p-2.5 text-primary">
                      <card.icon className="size-5" />
                    </div>
                    <span className="text-caption text-muted-foreground">Tier 0{index + 1}</span>
                  </div>
                  <h3 className="mt-5 text-display-sm leading-[1.02]">{card.title}</h3>
                  <p className="mt-4 max-w-lg text-body-lg text-muted-foreground">{card.note}</p>

                  {/* Features */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {card.features.map((f) => (
                      <span
                        key={f}
                        className="rounded-full border border-border/60 bg-background/50 px-3 py-1.5 text-caption text-muted-foreground backdrop-blur-sm"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Stat */}
                  <div className="mt-8 rounded-2xl border border-border/50 bg-background/60 p-5 backdrop-blur-sm">
                    <div className="text-caption text-muted-foreground">{card.stat.label}</div>
                    <div className="mt-1 text-display-sm font-semibold text-foreground">{card.stat.value}</div>
                  </div>
                </div>

                {/* Right — image */}
                <div className="relative hidden min-h-[24rem] lg:block">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/30" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
