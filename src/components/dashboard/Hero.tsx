"use client";
import React from "react";
import { Card } from "@/components/ui/Card";
import AnalyticsGrid from "@/components/dashboard/AnalyticsGrid";
import QuickActions from "@/components/dashboard/QuickActions";

export default function Hero() {
  return (
    <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px]">
      <Card className="p-6">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-title-lg font-semibold">Good morning, Designer 👋</h2>
            <p className="text-body-md text-muted-foreground mt-1">Here's what's happening in your workspace today.</p>
          </div>
          <div className="text-caption text-muted-foreground">Workspace • Nexora</div>
        </div>

        <AnalyticsGrid />
      </Card>

      <div className="space-y-4">
        <QuickActions />
        <Card className="p-4">
          <div className="text-caption text-muted-foreground">Workspace Summary</div>
          <div className="mt-2 text-body-md font-semibold">Team: 12 • Projects: 8 • Storage: 24GB</div>
        </Card>
      </div>
    </div>
  );
}
