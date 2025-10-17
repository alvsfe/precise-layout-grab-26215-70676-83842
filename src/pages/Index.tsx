import Hero from "@/components/Hero";
import DeficiencySection from "@/components/DeficiencySection";
import ScientificDiscovery from "@/components/ScientificDiscovery";
import ProductSpecs from "@/components/ProductSpecs";
import CommunityBonus from "@/components/CommunityBonus";
import Pricing from "@/components/Pricing";
import Experts from "@/components/Experts";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <DeficiencySection />
      <ScientificDiscovery />
      <ProductSpecs />
      <CommunityBonus />
      <Pricing />
      <Experts />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;