"use client";
import { create } from "zustand";

export type SidebarState = {
  open: boolean;
  toggle: (v?: boolean) => void;
  close: () => void;
  openMenu: () => void;
};

export const useSidebarStore = create<SidebarState>((set) => ({
  open: false,
  toggle: (v) =>
    set((s) => ({ open: typeof v === "boolean" ? v : !s.open })),
  close: () => set({ open: false }),
  openMenu: () => set({ open: true }),
}));

export default useSidebarStore;
