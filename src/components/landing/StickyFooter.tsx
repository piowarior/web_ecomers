"use client";

import React from "react";
import Footer from "@/components/landing/Footer";

/**
 * StickyFooter — Simple footer wrapper tanpa clip-path animation kompleks
 * Footer langsung ditampilkan tanpa efek berlapis
 */
export default function StickyFooter() {
  return (
    <div className="relative w-full">
      {/* Footer langsung tanpa animasi clip-path */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
