"use client";
import React from "react";
import NavItem from "./NavItem";
import DropdownMarketplace from "./dropdowns/DropdownMarketplace";
import DropdownProduct from "./dropdowns/DropdownProduct";
import DropdownStore from "./dropdowns/DropdownStore";
import DropdownEcosystem from "./dropdowns/DropdownEcosystem";
import DropdownConnect from "./dropdowns/DropdownConnect";
import DropdownExplore from "./dropdowns/DropdownExplore";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-cream-10/60 border-b border-neutral-100">
      <nav className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="#" className="font-semibold text-lg text-neutral-900">
            Nexora
          </a>

          <div className="hidden md:flex items-center gap-1">
            <NavItem label="Marketplace">
              <DropdownMarketplace />
            </NavItem>
            <NavItem label="Product">
              <DropdownProduct />
            </NavItem>
            <NavItem label="Store">
              <DropdownStore />
            </NavItem>
            <NavItem label="Ecosystem">
              <DropdownEcosystem />
            </NavItem>
            <NavItem label="Connect">
              <DropdownConnect />
            </NavItem>
            <NavItem label="Explore">
              <DropdownExplore />
            </NavItem>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#connect"
            className="px-3 py-2 rounded-md bg-orange-50 text-white font-medium shadow-sm hover:translate-y-[-1px] transition-transform"
          >
            Connect
          </a>
        </div>
      </nav>
    </header>
  );
}
