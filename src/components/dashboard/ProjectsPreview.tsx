"use client";
import React from "react";
import { Card } from "@/components/ui/Card";

const projects = [
  { id: 1, name: "Nexora Website", desc: "Marketing site revamp" },
  { id: 2, name: "AI Automations", desc: "Integrate task automations" },
  { id: 3, name: "Design System", desc: "Tokens and components" },
];

export default function ProjectsPreview() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
      {projects.map((p) => (
        <Card key={p.id} className="p-4">
          <div className="mb-2 flex items-center justify-between">
            <div className="text-body-md font-semibold">{p.name}</div>
            <div className="text-caption text-muted-foreground">Active</div>
          </div>
          <div className="text-caption text-muted-foreground">{p.desc}</div>
        </Card>
      ))}
    </div>
  );
}
