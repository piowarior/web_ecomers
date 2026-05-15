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
import Footer from "@/components/landing/Footer";
import { PageContainer } from "@/components/layouts/PageContainer";
import MarketplaceStack from "@/components/landing/MarketplaceStack";
import ImmersiveStory from "@/components/landing/ImmersiveStory";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative w-full overflow-x-clip pb-10">
        <AnimatedBackdrop />
        <InteractiveCursor />
        <NavBar />

        <div className="relative w-full pt-16">
          <div className="relative isolate h-[220svh] w-full">
            <div className="sticky top-16 z-10">
              <LandingHero />
            </div>

            <div className="absolute inset-x-0 top-[100svh] z-20 w-full">
              <HeroShowreelSection />
            </div>
          </div>
        </div>
        <PageContainer className="space-y-24 py-20 sm:py-24 lg:py-32">
          <MarketplaceStack />
          <ImmersiveStory />
          <ServiceUniverse />
          <WorkspaceExperience />
          <CreatorShowcase />
          <FinalLaunchSection />
          <Footer />
        </PageContainer>
      </main>
    </SmoothScroll>
  );
}
