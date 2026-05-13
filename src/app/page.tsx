import AnimatedBackdrop from "@/components/landing/AnimatedBackdrop";
import InteractiveCursor from "@/components/landing/InteractiveCursor";
import NavBar from "@/components/navigation/NavBar";
import SmoothScroll from "@/components/landing/SmoothScroll";
import LandingHero from "@/components/landing/LandingHero";
import LiveEcosystemPreview from "@/components/landing/LiveEcosystemPreview";
import ServiceUniverse from "@/components/landing/ServiceUniverse";
import WorkspaceExperience from "@/components/landing/WorkspaceExperience";
import CreatorShowcase from "@/components/landing/CreatorShowcase";
import FinalLaunchSection from "@/components/landing/FinalLaunchSection";
import Footer from "@/components/landing/Footer";
import { PageContainer } from "@/components/layouts/PageContainer";
import MarketplaceSection from "@/components/navigation/sections/MarketplaceSection";
import MarketplaceStack from "@/components/landing/MarketplaceStack";
import ImmersiveStory from "@/components/landing/ImmersiveStory";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative w-full overflow-x-clip pb-10">
        <AnimatedBackdrop />
        <InteractiveCursor />
        <NavBar />

        <LandingHero />
        <PageContainer className="space-y-24 py-16 sm:py-20 lg:py-28">
          <LiveEcosystemPreview />
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
