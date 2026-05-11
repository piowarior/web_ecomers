"use client";
import React from "react";
import { Card } from "@/components/ui/Card";
import { Activity, Users, DollarSign } from "lucide-react";

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <Card className="p-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="text-caption text-muted-foreground">{label}</div>
          <div className="text-title-md mt-1 font-semibold">{value}</div>
        </div>
        <div className="rounded-md bg-muted/40 p-2">{icon}</div>
      </div>
    </Card>
  );
}

export default function AnalyticsGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <Stat icon={<Users className="size-5" />} label="Active Users" value="3,421" />
      <Stat icon={<Activity className="size-5" />} label="Active Sessions" value="1,234" />
      <Stat icon={<DollarSign className="size-5" />} label="MRR" value="$12,340" />
    </div>
  );
}
