import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { StudentFeaturesSection } from "./components/StudentFeaturesSection";
import { CTASections } from "./components/CTASections";
import { TeacherFeaturesSection } from "./components/TeacherFeaturesSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { PricingSection } from "./components/PricingSection";
import { SocialProofSection } from "./components/SocialProofSection";
import { FAQSection } from "./components/FAQSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16"> {/* Add padding to account for fixed navigation */}
        <HeroSection />
        <StudentFeaturesSection />
        {/* Mid-page CTA after Student Features */}
        <CTASections />
        <TeacherFeaturesSection />
        <HowItWorksSection />
        <SocialProofSection />
        <PricingSection />
        <FAQSection />
        {/* Pre-footer CTA is included in CTASections */}
      </main>
      <Footer />
    </div>
  );
}