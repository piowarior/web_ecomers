import AnimatedBackdrop from "@/components/landing/AnimatedBackdrop";
import InteractiveCursor from "@/components/landing/InteractiveCursor";
import NavBar from "@/components/navigation/NavBar";
import SmoothScroll from "@/components/landing/SmoothScroll";
import LandingHero from "@/components/landing/LandingHero";
import HeroShowreelSection from "@/components/landing/HeroShowreelSection";
import ServiceUniverse from "@/components/landing/ServiceUniverse";
import WorkspaceExperience from "@/components/landing/WorkspaceExperience";
import CreatorShowcase from "@/components/landing/CreatorShowcase";
import FinalLaunchSection from "@/components/landing/FinalLaunchSection";
import StickyFooter from "@/components/landing/StickyFooter";
import { PageContainer } from "@/components/layouts/PageContainer";
import MarketplaceStack from "@/components/landing/MarketplaceStack";
import ImmersiveStory from "@/components/landing/ImmersiveStory";
import LiveEcosystemPreview from "@/components/landing/LiveEcosystemPreview";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative w-full overflow-x-clip">
        <AnimatedBackdrop />
        <InteractiveCursor />
        <NavBar />

        {/* ── Hero area ── */}
        <div className="relative w-full pt-16">
          <div className="relative  h-[380svh] w-full">
            <div className="sticky top-16 z-10">
              <LandingHero />
            </div>

            <div className="absolute inset-x-0 top-[100svh] z-20 w-full">
              <HeroShowreelSection />
            </div>
          </div>
        </div>

        {/* ── Section flow with continuous blended gradients ──
             Each band's bottom color matches the next band's top color
             so there are zero visible "cuts" between sections. */}

        {/* Band 1 — warm cream (hero transition → warm amber) */}
        <div
          className="relative w-full"
          style={{
            background: `linear-gradient(180deg,
              oklch(0.976 0.014 76.5) 0%,
              oklch(0.972 0.022 78) 30%,
              oklch(0.968 0.025 80) 70%,
              oklch(0.97 0.018 85) 100%
            )`,
          }}
        >
          <LiveEcosystemPreview />
        </div>

        {/* Band 2 — warm amber → cool blue */}
        <div
          className="relative w-full"
          style={{
            background: `linear-gradient(180deg,
              oklch(0.97 0.018 85) 0%,
              oklch(0.971 0.02 90) 25%,
              oklch(0.973 0.016 160) 60%,
              oklch(0.972 0.018 200) 100%
            )`,
          }}
        >
          {/* MarketplaceStack handles its own max-width + padding internally */}
          <MarketplaceStack />
          <PageContainer className="space-y-24 py-20 sm:py-24 lg:py-32">
            <ImmersiveStory />
          </PageContainer>
        </div>

        {/* Band 3 — cool blue → soft lavender */}
        <div
          className="relative w-full"
          style={{
            background: `linear-gradient(180deg,
              oklch(0.972 0.018 200) 0%,
              oklch(0.971 0.022 230) 30%,
              oklch(0.973 0.018 260) 65%,
              oklch(0.972 0.02 290) 100%
            )`,
          }}
        >
          <PageContainer className="space-y-24 py-20 sm:py-24 lg:py-32">
            <ServiceUniverse />
            <WorkspaceExperience />
          </PageContainer>
        </div>

        {/* Band 4 — lavender → golden warm */}
        <div
          className="relative w-full"
          style={{
            background: `linear-gradient(180deg,
              oklch(0.972 0.02 290) 0%,
              oklch(0.971 0.022 320) 20%,
              oklch(0.97 0.025 40) 55%,
              oklch(0.968 0.028 60) 80%,
              oklch(0.966 0.03 70) 100%
            )`,
          }}
        >
          <PageContainer className="space-y-24 py-20 sm:py-24 lg:py-32">
            <CreatorShowcase />
          </PageContainer>
        </div>

        {/* Band 5 — Final Launch + sticky footer */}
        <div
          className="relative w-full overflow-visible"
          style={{
            background: `linear-gradient(180deg,
              oklch(0.966 0.03 70) 0%,
              oklch(0.964 0.032 65) 30%,
              oklch(0.96 0.028 72) 60%,
              oklch(0.958 0.025 76) 100%
            )`,
          }}
        >
          <PageContainer className="space-y-24 py-20 sm:py-24 lg:py-32">
            <FinalLaunchSection />
          </PageContainer>
          {/* Extended padding untuk footer reveal effect — diperbesar untuk cukup scroll */}
          <div className="h-[120vh] w-full" />
        </div>

        {/* StickyFooter dengan reveal effect */}
        <StickyFooter />
      </main>
    </SmoothScroll>
  );
}
