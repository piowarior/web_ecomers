"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = React.PropsWithChildren<{ className?: string; as?: string }>;

export function Card({ children, className = "" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28 }}
      className={`surface-card ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default Card;
