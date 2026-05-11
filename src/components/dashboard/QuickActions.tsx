"use client";
import React from "react";
import { Card } from "@/components/ui/Card";
import { PlusCircle, UploadCloud, UserPlus } from "lucide-react";

export default function QuickActions() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      <Card className="flex items-center justify-between gap-4 p-4">
        <div>
          <div className="text-caption text-muted-foreground">Create</div>
          <div className="text-body-md font-semibold">New Project</div>
        </div>
        <div className="rounded-md bg-muted/40 p-2">
          <PlusCircle className="size-5" />
        </div>
      </Card>

      <Card className="flex items-center justify-between gap-4 p-4">
        <div>
          <div className="text-caption text-muted-foreground">Upload</div>
          <div className="text-body-md font-semibold">Assets</div>
        </div>
        <div className="rounded-md bg-muted/40 p-2">
          <UploadCloud className="size-5" />
        </div>
      </Card>

      <Card className="flex items-center justify-between gap-4 p-4">
        <div>
          <div className="text-caption text-muted-foreground">Invite</div>
          <div className="text-body-md font-semibold">Team Member</div>
        </div>
        <div className="rounded-md bg-muted/40 p-2">
          <UserPlus className="size-5" />
        </div>
      </Card>
    </div>
  );
}
