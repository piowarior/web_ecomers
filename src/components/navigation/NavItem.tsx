"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type NavItemProps = {
  label: string;
  children?: React.ReactNode;
  href?: string;
};

export default function NavItem({ label, children, href }: NavItemProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative"
    >
      <a
        href={href ?? "#"}
        className="px-3 py-2 rounded-md text-sm font-medium text-neutral-900 hover:bg-neutral-100"
        aria-expanded={open}
        aria-haspopup={!!children}
      >
        {label}
      </a>

      <AnimatePresence>
        {open && children ? (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="absolute left-0 mt-2 w-72 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-neutral-100 z-40"
          >
            <div className="p-4">{children}</div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
