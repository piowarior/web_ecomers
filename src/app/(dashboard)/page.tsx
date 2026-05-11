import React from "react";
import { PageContainer } from "@/components/layouts/PageContainer";
import { Section } from "@/components/layouts/Section";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function DashboardPage() {
  return (
    <PageContainer>
      <Section>
        <DashboardHeader title="Welcome" subtitle="Overview of your workspace" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="surface-card p-4">Card A</div>
          <div className="surface-card p-4">Card B</div>
          <div className="surface-card p-4">Card C</div>
        </div>
      </Section>
    </PageContainer>
  );
}
