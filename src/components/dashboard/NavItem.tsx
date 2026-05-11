"use client";
import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type Props = {
  icon?: LucideIcon;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
};

export function NavItem({ icon: Icon, children, href, onClick }: Props) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -6 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.22 }}
    >
      <a
        href={href ?? "#"}
        onClick={onClick}
        className="flex items-center gap-3 rounded-md px-3 py-2 text-body-md text-foreground hover:bg-muted/60 hover:neubrutal-outline"
      >
        {Icon ? <Icon className="size-4 text-muted-foreground" /> : null}
        <span>{children}</span>
      </a>
    </motion.li>
  );
}

export default NavItem;
