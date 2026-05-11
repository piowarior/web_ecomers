"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Home, FileText, Layers, PieChart } from "lucide-react";
import useSidebarStore, { type SidebarState } from "@/stores/useSidebarStore";
import { NavItem } from "./NavItem";

export default function Sidebar() {
  const open = useSidebarStore((s: SidebarState) => s.open);
  const toggle = useSidebarStore((s: SidebarState) => s.toggle);

  return (
    <>
      {/* Mobile floating button */}
      <div className="md:hidden fixed bottom-6 left-6 z-40">
        <button
          aria-label="Toggle menu"
          onClick={() => toggle()}
          className="rounded-full bg-popover/95 p-3 shadow-lg"
        >
          <Menu className="size-5 text-foreground" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: -260, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -260, opacity: 0 }}
            transition={{ type: "tween", duration: 0.25 }}
            className="fixed inset-y-0 left-0 z-50 w-72 overflow-y-auto bg-surface/95 p-4 shadow-2xl md:hidden"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary" />
              <div>
                <div className="text-title-md font-semibold">Nexora</div>
                <div className="text-caption text-muted-foreground">Studio</div>
              </div>
            </div>

            <nav aria-label="Mobile navigation">
              <ul className="space-y-1">
                <NavItem icon={Home} href="/">Home</NavItem>
                <NavItem icon={PieChart}>Analytics</NavItem>
                <NavItem icon={Layers}>Projects</NavItem>
                <NavItem icon={FileText}>Docs</NavItem>
              </ul>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Desktop persistent sidebar */}
      <aside className="hidden md:flex md:w-72 md:flex-col md:shrink-0">
        <div className="sticky top-6 flex h-[calc(100vh-48px)] flex-col gap-6 overflow-auto p-4">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-12 w-12 rounded-lg bg-primary shadow-md" />
            <div>
              <div className="text-title-md font-semibold">Nexora</div>
              <div className="text-caption text-muted-foreground">Workspace</div>
            </div>
          </div>

          <nav aria-label="Main navigation" className="flex-1">
            <ul className="space-y-2">
              <NavItem icon={Home} href="/">Overview</NavItem>
              <NavItem icon={PieChart}>Analytics</NavItem>
              <NavItem icon={Layers}>Projects</NavItem>
              <NavItem icon={FileText}>Docs</NavItem>
            </ul>
          </nav>

          <div className="pt-4">
            <div className="text-caption text-muted-foreground">v0.1.0</div>
          </div>
        </div>
      </aside>
    </>
  );
}
