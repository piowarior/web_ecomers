"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code2, Bot, Palette, Rocket } from "lucide-react";

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
  return (
    <section id="marketplace-stack" className="py-32 sm:py-40 lg:py-48">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Header — NOT sticky, scrolls away normally */}
        <div className="mb-16">
          <p className="text-caption text-muted-foreground">Marketplace motion stack</p>
          <h2 className="text-display-sm text-balance">Scroll through layered service depth.</h2>
          <p className="mt-3 max-w-xl text-body-lg text-muted-foreground">
            Each service card stacks as you scroll, revealing the depth of the Nexora ecosystem.
          </p>
        </div>

        {/* Stack container — tall enough for cards to fold one by one */}
        <div className="relative space-y-8" style={{ minHeight: `${stack.length * 55 + 30}vh` }}>
          {stack.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.06, duration: 0.6 }}
              whileHover={{ scale: 1.008 }}
              data-cursor="focus"
              className={`surface-card sticky overflow-hidden p-0 ${card.color}`}
              style={{
                /* Stick just below the navbar (4rem) + small offset per card for stacking effect */
                top: `calc(5rem + ${index * 1.5}rem)`,
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
