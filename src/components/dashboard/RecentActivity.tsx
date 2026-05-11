"use client";
import React from "react";
import { Card } from "@/components/ui/Card";

const items = [
  { id: 1, title: "Deployed landing page", time: "2h ago" },
  { id: 2, title: "User onboarding flow updated", time: "6h ago" },
  { id: 3, title: "Payment integration test", time: "1d ago" },
];

export default function RecentActivity() {
  return (
    <Card className="p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-body-md font-semibold">Recent Activity</h3>
        <div className="text-caption text-muted-foreground">See all</div>
      </div>

      <ul className="space-y-3">
        {items.map((it) => (
          <li key={it.id} className="flex items-center justify-between">
            <div>
              <div className="text-body-md">{it.title}</div>
              <div className="text-caption text-muted-foreground">{it.time}</div>
            </div>
            <div className="text-caption text-muted-foreground">Done</div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
