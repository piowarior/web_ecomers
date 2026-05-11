import { PageContainer } from "@/components/layouts/PageContainer";
import { Section } from "@/components/layouts/Section";
import LandingHero from "@/components/landing/LandingHero";
import TrustedBy from "@/components/landing/TrustedBy";
import ServicesCategories from "@/components/landing/ServicesCategories";
import EcosystemSection from "@/components/landing/EcosystemSection";
import RentalSection from "@/components/landing/RentalSection";
import FeatureHighlights from "@/components/landing/FeatureHighlights";
import DashboardPreview from "@/components/landing/DashboardPreview";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="relative mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
      <PageContainer>
        <LandingHero />

        <Section>
          <TrustedBy />
        </Section>

        <Section>
          <ServicesCategories />
        </Section>

        <Section>
          <EcosystemSection />
        </Section>

        <Section>
          <RentalSection />
        </Section>

        <Section>
          <FeatureHighlights />
        </Section>

        <Section>
          <DashboardPreview />
        </Section>

        <Section>
          <CTASection />
        </Section>

        <Footer />
      </PageContainer>
    </main>
  );
}
