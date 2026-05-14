"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

export default function ParallaxSection() {
  const container = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    // start when top of container hits bottom of viewport, end when bottom hits top
    offset: ["start end", "end start"],
  });

  // translate image vertically for a cinematic parallax feel
  const y = useTransform(scrollYProgress, [0, 1], ["-8vh", "12vh"]);

  return (
    <section
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      aria-label="Nexora visual stream parallax"
    >
      <div className="relative z-10 max-w-5xl px-4 text-center">
        <h2 className="text-display-sm text-white/92 mb-4">Nexora visual stream</h2>
        <p className="text-muted-foreground">Live cinematic preview of the ecosystem.</p>
      </div>

      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full pointer-events-none -z-10">
        <motion.div
          style={{ y, willChange: "transform" }}
          className="relative w-full h-full [transform:translate3d(0,0,0)]"
        >
          <Image src="/images/parallax.svg" alt="parallax background" fill style={{ objectFit: "cover" }} priority />
        </motion.div>
      </div>
    </section>
  );
}
