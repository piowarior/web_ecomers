"use client";
import React from "react";

export default function DropdownMarketplace() {
  return (
    <div className="grid gap-3">
      <a href="#marketplace" className="block p-2 rounded hover:bg-neutral-50">
        Services Overview
      </a>
      <a href="#marketplace" className="block p-2 rounded hover:bg-neutral-50">
        Web Development
      </a>
      <a href="#marketplace" className="block p-2 rounded hover:bg-neutral-50">
        AI Automation
      </a>
      <a href="#marketplace" className="block p-2 rounded hover:bg-neutral-50">
        Design Services
      </a>
      <a href="/freelancers" className="block p-2 rounded hover:bg-neutral-50">
        Freelancer Listings
      </a>
      <div className="border-t pt-2 text-sm text-neutral-600">Project requests, proposals, and workflow links.</div>
    </div>
  );
}
