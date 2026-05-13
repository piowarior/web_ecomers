import AnimatedBackdrop from "@/components/landing/AnimatedBackdrop";
import InteractiveCursor from "@/components/landing/InteractiveCursor";
import NavBar from "@/components/navigation/NavBar";
import SmoothScroll from "@/components/landing/SmoothScroll";
import LandingHero from "@/components/landing/LandingHero";
import LiveEcosystemPreview from "@/components/landing/LiveEcosystemPreview";
import ServiceUniverse from "@/components/landing/ServiceUniverse";
import WorkspaceExperience from "@/components/landing/WorkspaceExperience";
import CreatorShowcase from "@/components/landing/CreatorShowcase";
import MarketplaceStack from "@/components/landing/MarketplaceStack";
import AILivingSystem from "@/components/landing/AILivingSystem";
import FinalLaunchSection from "@/components/landing/FinalLaunchSection";
import Footer from "@/components/landing/Footer";
import { PageContainer } from "@/components/layouts/PageContainer";
import MarketplaceSection from "@/components/navigation/sections/MarketplaceSection";
import ProductSection from "@/components/navigation/sections/ProductSection";
import StoreSection from "@/components/navigation/sections/StoreSection";
import EcosystemSection from "@/components/navigation/sections/EcosystemSection";
import ConnectSection from "@/components/navigation/sections/ConnectSection";
import ExploreSection from "@/components/navigation/sections/ExploreSection";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative w-full overflow-x-clip pb-10">
        <AnimatedBackdrop />
        <InteractiveCursor />
        <NavBar />

        <LandingHero />
        <PageContainer className="space-y-24 py-16 sm:py-20 lg:py-24">
          <MarketplaceSection />
          <ProductSection />
          <StoreSection />
          <EcosystemSection />
          <ExploreSection />
          <ConnectSection />
          <LiveEcosystemPreview />
          <ServiceUniverse />
          <WorkspaceExperience />
          <CreatorShowcase />
          <section id="platform">
            <MarketplaceStack />
          </section>
          <AILivingSystem />
          <FinalLaunchSection />
          <Footer />
        </PageContainer>
      </main>
    </SmoothScroll>
  );
}
