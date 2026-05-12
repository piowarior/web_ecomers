"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = React.PropsWithChildren<{ className?: string; delay?: number; id?: string }>;

export default function MotionSection({ children, className = "", delay = 0, id }: Props) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
