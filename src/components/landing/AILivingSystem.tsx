"use client";
import React from "react";
import { motion } from "framer-motion";

const logs = [
  "Prompt received: automate onboarding sequence",
  "Agent planner created 6 execution nodes",
  "Task router assigned marketing workflows",
  "Response generated: sequence deployed",
];

const nodes = [
  { id: "Prompt", x: 14, y: 20 },
  { id: "Planner", x: 40, y: 45 },
  { id: "Tools", x: 66, y: 28 },
  { id: "Memory", x: 65, y: 67 },
  { id: "Output", x: 88, y: 48 },
];

export default function AILivingSystem() {
  return (
    <section id="ai-system" className="relative py-24">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-caption text-muted-foreground">AI living system preview</p>
          <h2 className="text-display-sm text-balance">Prompt to response. Visualized as a living network.</h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="surface-card relative overflow-hidden p-4 sm:p-6"
            data-cursor="focus"
          >
            <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.75),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(142,116,200,0.24),transparent_26%)]" />
            <div className="relative h-[22rem] rounded-3xl border border-border bg-background/60 p-4">
              <svg viewBox="0 0 100 80" className="h-full w-full">
                {nodes.map((node, idx) => {
                  const next = nodes[idx + 1];
                  if (!next) return null;
                  return (
                    <motion.line
                      key={`${node.id}-${next.id}`}
                      x1={node.x}
                      y1={node.y}
                      x2={next.x}
                      y2={next.y}
                      stroke="currentColor"
                      className="text-primary/60"
                      strokeWidth="1"
                      initial={{ pathLength: 0, opacity: 0.3 }}
                      whileInView={{ pathLength: 1, opacity: 0.9 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: idx * 0.08 }}
                    />
                  );
                })}

                {nodes.map((node, idx) => (
                  <g key={node.id}>
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r="3.8"
                      className="fill-primary/80"
                      initial={{ scale: 0.6, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + idx * 0.08 }}
                    />
                    <text x={node.x + 5} y={node.y + 1} className="fill-foreground text-[3.2px]">
                      {node.id}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="surface-card overflow-hidden p-4 sm:p-6"
            data-cursor="focus"
          >
            <div className="mb-3 rounded-2xl border border-border bg-background/75 px-3 py-2 text-caption text-muted-foreground">
              AI activity feed
            </div>
            <div className="space-y-3">
              {logs.map((log, idx) => (
                <motion.div
                  key={log}
                  initial={{ opacity: 0, x: 14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="rounded-2xl border border-border bg-background/70 p-3"
                >
                  <div className="text-caption text-muted-foreground">{`00:${idx + 11}`}</div>
                  <div className="mt-1 text-body-md">{log}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
