"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Globe, Package, WandSparkles } from "lucide-react";
import { Card } from "@/components/ui/Card";

const cards = [
  {
    title: "Marketplace ecosystem",
    copy: "Open service discovery with portfolio-driven presentation.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Official rental studio",
    copy: "A platform-owned product shelf with premium retail clarity.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
  },
];

const miniCards = [
  { icon: Globe, label: "Global feel" },
  { icon: Package, label: "Product-led" },
  { icon: WandSparkles, label: "Motion rich" },
];

export default function ImmersiveStory() {
  return (
    <motion.section
      id="platform"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]"
    >
      <Card className="relative overflow-hidden p-6 sm:p-7 lg:p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(247,227,194,0.55),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(136,165,210,0.22),transparent_34%)]" />
        <div className="relative space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1.5 text-caption">
            <Sparkles className="size-3.5 text-primary" />
            Designed as a connected launch story
          </div>
          <h2 className="max-w-md text-display-sm text-balance text-foreground md:text-display-md">
            Two systems. One premium identity.
          </h2>
          <p className="max-w-md text-body-lg text-muted-foreground">
            The marketplace and rental store feel distinct, but they live inside the same cinematic visual system.
          </p>

          <div className="grid gap-3 pt-2">
            {miniCards.map(({ icon: Icon, label }) => (
              <div key={label} className="surface-panel flex items-center gap-3 px-4 py-3">
                <div className="rounded-2xl bg-secondary/70 p-2 text-primary">
                  <Icon className="size-4" />
                </div>
                <span className="text-body-md font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            whileHover={{ y: -8, rotate: index === 0 ? -0.7 : 0.7 }}
          >
            <Card className="group relative h-full overflow-hidden p-0">
              <div className="relative h-[34rem] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_10%,rgba(18,14,10,0.08)_55%,rgba(18,14,10,0.48)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.3),transparent_25%),radial-gradient(circle_at_75%_12%,rgba(255,255,255,0.18),transparent_18%)]" />

                <div className="absolute left-4 top-4 rounded-full bg-white/75 px-3 py-1 text-caption text-foreground shadow-sm backdrop-blur">
                  {index === 0 ? "Marketplace" : "Rental"}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <div className="flex items-end justify-between gap-4">
                    <div className="max-w-sm">
                      <div className="text-title-md font-semibold text-white drop-shadow-md">{card.title}</div>
                      <p className="mt-2 text-body-md text-white/80 drop-shadow-md">{card.copy}</p>
                    </div>
                    <div className="rounded-full border border-white/35 bg-white/15 p-3 text-white backdrop-blur-sm">
                      <ArrowUpRight className="size-5" />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
