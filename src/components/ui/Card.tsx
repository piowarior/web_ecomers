"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = React.PropsWithChildren<{ className?: string; as?: string }>;

export function Card({ children, className = "" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      className={`surface-card motion-card motion-card-hover ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default Card;
