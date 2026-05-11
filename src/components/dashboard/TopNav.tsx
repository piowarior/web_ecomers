"use client";
import React from "react";
import { motion } from "framer-motion";
import { Menu, Search, Bell } from "lucide-react";
import useSidebarStore, { type SidebarState } from "@/stores/useSidebarStore";

export default function TopNav() {
  const toggle = useSidebarStore((s: SidebarState) => s.toggle);

  return (
    <motion.header
      initial={{ y: -8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.28 }}
      className="sticky top-0 z-30 w-full bg-background/60 backdrop-blur-sm border-b border-border"
      aria-label="Top navigation"
    >
      <div className="mx-auto flex w-full max-w-6xl items-center gap-4 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <button
            className="inline-flex items-center justify-center rounded-md p-2 md:hidden"
            onClick={() => toggle()}
            aria-label="Open sidebar"
          >
            <Menu className="size-5 text-foreground" />
          </button>
          <div className="hidden md:flex md:items-center md:gap-3">
            <div className="text-title-md font-semibold">Dashboard</div>
            <span className="text-caption text-muted-foreground">/ Workspace</span>
          </div>
        </div>

        <div className="mx-4 flex flex-1 items-center gap-3">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              placeholder="Search projects, files, people..."
              className="w-full rounded-lg border border-border bg-popover/60 py-2 pl-10 pr-3 text-body-md placeholder:text-muted-foreground"
            />
          </div>
        </div>

        <div className="ml-auto flex items-center gap-3">
          <button className="rounded-lg p-2" aria-label="Notifications">
            <Bell className="size-5 text-foreground" />
          </button>

          <div className="hidden items-center gap-3 rounded-full bg-surface px-2 py-1 md:flex">
            <div className="h-9 w-9 rounded-full bg-primary" />
            <div className="text-body-md">Designer</div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
