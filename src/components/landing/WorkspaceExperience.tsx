"use client";
import React from "react";
import { motion } from "framer-motion";

const metrics = [
  ["MRR", "$24.6k"],
  ["Projects", "28"],
  ["Automation", "93%"],
];

export default function WorkspaceExperience() {
  return (
    <section id="workspace" className="py-24">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-caption text-muted-foreground">Workspace simulation</p>
          <h2 className="text-display-sm text-balance">A preview system, not a real dashboard.</h2>
        </div>

        <motion.div
          whileHover={{ rotateX: 1.2, rotateY: -1.2, scale: 1.01 }}
          transition={{ duration: 0.35 }}
          data-cursor="focus"
          className="surface-card relative overflow-hidden p-4 sm:p-6"
        >
          <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.66),transparent_45%),radial-gradient(circle_at_82%_20%,rgba(145,118,201,0.18),transparent_24%)]" />
          <div className="relative grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
              <div className="grid gap-3 sm:grid-cols-3">
                {metrics.map(([label, value], index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 + index * 0.07 }}
                    className="surface-panel p-4"
                  >
                    <div className="text-caption text-muted-foreground">{label}</div>
                    <div className="mt-1 text-title-md font-semibold">{value}</div>
                  </motion.div>
                ))}
              </div>

              <div className="surface-panel p-4">
                <div className="mb-2 text-caption text-muted-foreground">Project timeline animation</div>
                <div className="space-y-2">
                  {[70, 52, 85].map((v, idx) => (
                    <div key={idx} className="h-2 overflow-hidden rounded-full bg-muted/60">
                      <motion.div
                        className="h-full rounded-full bg-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${v}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: idx * 0.12 }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="surface-panel p-4">
                <div className="mb-2 text-caption text-muted-foreground">Graph simulation</div>
                <svg viewBox="0 0 320 100" className="h-24 w-full">
                  <motion.path
                    d="M6 88 C55 76, 98 28, 138 52 C184 81, 226 8, 314 19"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="text-primary"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, ease: "easeInOut" }}
                  />
                </svg>
              </div>
            </div>

            <div className="space-y-3">
              {["Activity feed mock", "Workflow processed", "Client approved draft"].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="surface-panel p-4"
                >
                  <div className="text-body-md font-medium">{item}</div>
                  <div className="mt-1 text-caption text-muted-foreground">{`0${i + 1}m ago`}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
