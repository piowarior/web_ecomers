import React from "react";

type Props = {
  title: string;
  subtitle?: string;
};

export function DashboardHeader({ title, subtitle }: Props) {
  return (
    <header className="mb-4 flex items-end justify-between">
      <div>
        <h1 className="text-title-lg font-semibold">{title}</h1>
        {subtitle ? <p className="text-caption text-muted-foreground">{subtitle}</p> : null}
      </div>
    </header>
  );
}

export default DashboardHeader;
