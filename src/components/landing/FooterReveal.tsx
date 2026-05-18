"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/components/landing/Footer";

type Props = {
  children: React.ReactNode;
};

const LIFT_RATIO = 0.7;

/**
 * 1. PageContainer + Final Launch scroll normal.
 * 2. Tirai menutupi footer.
 * 3. Scroll mentok → footer pin sticky di bawah, terbuka clip dari bawah ke atas, tirai naik.
 */
export default function FooterReveal({ children }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);
  const footerSlotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const curtain = curtainRef.current;
    const footerSlot = footerSlotRef.current;

    if (!section || !curtain || !footerSlot) return;

    const liftPx = () => window.innerHeight * LIFT_RATIO;

    const ctx = gsap.context(() => {
      gsap.set(footerSlot, { clipPath: "inset(0 0 100% 0)" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: curtain,
          start: "bottom bottom",
          end: () => `+=${liftPx()}`,
          scrub: 0.65,
          pin: footerSlot,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        footerSlot,
        { clipPath: "inset(0 0 0% 0)", ease: "none" },
        0,
      );
      tl.to(curtain, { y: () => -liftPx(), ease: "none" }, 0);
    }, section);

    const onRefresh = () => ScrollTrigger.refresh();
    onRefresh();
    window.addEventListener("resize", onRefresh);

    return () => {
      window.removeEventListener("resize", onRefresh);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full">
      <div ref={curtainRef} className="relative z-[30] w-full will-change-transform">
        {children}
        <div
          className="footer-reveal-cover h-[70svh] w-full min-h-[28rem]"
          aria-hidden
        />
      </div>

      <div
        ref={footerSlotRef}
        className="relative z-[10] h-[70svh] w-full min-h-[28rem] overflow-hidden will-change-[clip-path]"
      >
        <Footer />
      </div>
    </div>
  );
}
