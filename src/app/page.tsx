import { HeroSection } from "@/components/sections/HeroSection";
import { QuickActions } from "@/components/sections/QuickActions";
import { BatteryFamily } from "@/components/sections/BatteryFamily";
import { FeatureShowcase } from "@/components/sections/FeatureShowcase";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { StrengthSection } from "@/components/sections/StrengthSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection, CTASection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <QuickActions />
      <BatteryFamily />
      <FeatureShowcase />
      <WhyChooseUs />
      <StrengthSection />
      <Testimonials />
      <CTASection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
