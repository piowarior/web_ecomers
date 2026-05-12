"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Activity, Bot, BriefcaseBusiness, UsersRound } from "lucide-react";

const events = [
  { icon: BriefcaseBusiness, title: "Marketplace activity live", note: "New service ordered", time: "just now" },
  { icon: UsersRound, title: "Freelancer online", note: "4 talents available", time: "12s ago" },
  { icon: Activity, title: "Project created", note: "SaaS landing build", time: "25s ago" },
  { icon: Bot, title: "AI automation running", note: "Workflow synced", time: "42s ago" },
];

export default function LiveEcosystemPreview() {
  const [counter, setCounter] = useState(1240);

  useEffect(() => {
    const id = setInterval(() => {
      setCounter((v) => v + Math.floor(Math.random() * 3));
    }, 1200);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="ecosystem-live" className="relative py-20 sm:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-caption text-muted-foreground">Live ecosystem simulation</p>
            <h2 className="text-display-sm text-balance">Realtime signal across the Nexora network.</h2>
          </div>
          <div className="rounded-full border border-border bg-background/70 px-4 py-2 text-caption text-muted-foreground">
            Updated every second
          </div>
        </div>

        <div className="relative min-h-[32rem]">
          {events.map((event, index) => (
            <motion.article
              key={event.title}
              initial={{ opacity: 0, y: 26, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              whileHover={{ y: -8, scale: 1.02 }}
              animate={{ y: [0, -4, 0] }}
              style={{
                position: "absolute",
                left: `${index * 22}%`,
                top: `${(index % 2) * 36 + (index > 1 ? 10 : 0)}%`,
              }}
              data-cursor="focus"
              className="surface-card group w-[15rem] overflow-hidden p-5 md:w-[18rem]"
            >
              <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,0.55),transparent_45%)] opacity-80" />
              <div className="relative">
                <div className="mb-4 inline-flex rounded-2xl bg-secondary/70 p-3 text-primary">
                  <event.icon className="size-5" />
                </div>
                <h3 className="text-body-md font-semibold">{event.title}</h3>
                <p className="mt-2 text-caption text-muted-foreground">{event.note}</p>
                <div className="mt-4 flex items-center justify-between text-caption">
                  <span className="text-muted-foreground">{event.time}</span>
                  <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">live</span>
                </div>
              </div>
            </motion.article>
          ))}

          <div className="absolute bottom-2 right-2 rounded-2xl border border-border bg-background/80 px-4 py-3 text-caption text-muted-foreground md:right-10">
            ecosystem updates: {counter}
          </div>
        </div>
      </div>
    </section>
  );
}
