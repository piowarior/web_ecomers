"use client";
import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorMode = "default" | "hover" | "focus";

export default function InteractiveCursor() {
  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);
  const ringX = useSpring(dotX, { stiffness: 250, damping: 24, mass: 0.3 });
  const ringY = useSpring(dotY, { stiffness: 250, damping: 24, mass: 0.3 });
  const modeRef = useRef<CursorMode>("default");
  const [, force] = React.useReducer((x) => x + 1, 0);

  useEffect(() => {
    const updateMode = (mode: CursorMode) => {
      modeRef.current = mode;
      force();
    };

    const onMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const interactiveSelector = "a, button, [data-cursor='hover']";
    const focusSelector = "[data-cursor='focus']";
    const magnetSelector = "[data-magnet='true']";

    const enterHover = () => updateMode("hover");
    const leaveHover = () => updateMode("default");
    const enterFocus = () => updateMode("focus");

    document.querySelectorAll(interactiveSelector).forEach((el) => {
      el.addEventListener("mouseenter", enterHover);
      el.addEventListener("mouseleave", leaveHover);
    });

    document.querySelectorAll(focusSelector).forEach((el) => {
      el.addEventListener("mouseenter", enterFocus);
      el.addEventListener("mouseleave", leaveHover);
    });

    document.querySelectorAll(magnetSelector).forEach((el) => {
      const element = el as HTMLElement;

      const move = (event: Event) => {
        const e = event as MouseEvent;
        const rect = element.getBoundingClientRect();
        const dx = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
        const dy = (e.clientY - (rect.top + rect.height / 2)) / rect.height;
        element.style.transform = `translate3d(${dx * 10}px, ${dy * 10}px, 0)`;
      };

      const leave = () => {
        element.style.transform = "translate3d(0,0,0)";
      };

      element.addEventListener("mousemove", move);
      element.addEventListener("mouseleave", leave);
    });

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.querySelectorAll(interactiveSelector).forEach((el) => {
        el.removeEventListener("mouseenter", enterHover);
        el.removeEventListener("mouseleave", leaveHover);
      });
      document.querySelectorAll(focusSelector).forEach((el) => {
        el.removeEventListener("mouseenter", enterFocus);
        el.removeEventListener("mouseleave", leaveHover);
      });
    };
  }, [dotX, dotY]);

  const scale = modeRef.current === "default" ? 1 : modeRef.current === "hover" ? 1.6 : 2.3;
  const ringOpacity = modeRef.current === "default" ? 0.55 : 0.95;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-2.5 w-2.5 rounded-full bg-primary md:block"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[89] hidden rounded-full border border-primary/40 bg-accent/15 blur-[0.3px] md:block"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%", width: 34, height: 34 }}
        animate={{ scale, opacity: ringOpacity }}
        transition={{ type: "spring", stiffness: 320, damping: 25 }}
      />
    </>
  );
}
