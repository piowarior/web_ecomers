"use client";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  target: number;
  suffix: string;
  durationMs?: number;
};

export default function HeroStatTicker({ target, suffix, durationMs = 1100 }: Props) {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - progress, 3);
      const nextValue = Math.round(target * eased);
      setValue(nextValue);

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [durationMs, target]);

  return (
    <span>
      {value} {suffix}
    </span>
  );
}
