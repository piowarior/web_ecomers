"use client";
import React from "react";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";
import { motion, AnimatePresence } from "framer-motion";

type Props = React.PropsWithChildren<{}>;

export function DashboardShell({ children }: Props) {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <div className="mx-auto flex max-w-6xl gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <Sidebar />

        <AnimatePresence mode="wait" initial={false}>
          <motion.main
            key={typeof children === "string" ? children : "dashboard-main"}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.28 }}
            className="w-full"
          >
            {children}
          </motion.main>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default DashboardShell;
