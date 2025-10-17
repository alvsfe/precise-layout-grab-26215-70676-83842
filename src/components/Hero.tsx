import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, CheckCircle2, Clock } from "lucide-react";
import productHero from "@/assets/product-hero-natural.png";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-primary/5 via-background to-background py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
            Magnesium Breakthrough:
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-primary">
            The World's Only Formula With 7 Forms of Magnesium
          </h2>
          <div className="flex justify-center mb-6">
            <img
              src={productHero}
              alt="Magnesium Breakthrough Product"
              className="max-w-md w-full h-auto rounded-lg shadow-xl"
            />
          </div>
          <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            To reverse chronic deficiency, reduce stress and accelerate your metabolism.
          </p>
          <p className="text-lg text-foreground mb-8">
            You've seen the research. It works. 365-day guarantee or your money back
          </p>
        </div>

        <div className="text-center mb-12">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/90"
            onClick={() => document.getElementById('best-value')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Secure My Special Offer!
          </Button>
          <p className="text-sm text-muted-foreground mt-4 flex items-center justify-center gap-2">
            <Shield className="w-4 h-4" />
            100% SECURE CHECKOUT
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border">
            <Award className="w-12 h-12 text-primary mb-3" />
            <h3 className="font-semibold mb-2">FDA Approved</h3>
            <p className="text-sm text-muted-foreground">
              Manufactured in FDA registered facilities
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border">
            <CheckCircle2 className="w-12 h-12 text-primary mb-3" />
            <h3 className="font-semibold mb-2">GMP Certified</h3>
            <p className="text-sm text-muted-foreground">
              Good Manufacturing Practice certified
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border">
            <Shield className="w-12 h-12 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Third-Party Tested</h3>
            <p className="text-sm text-muted-foreground">
              Independently verified quality
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border">
            <Clock className="w-12 h-12 text-primary mb-3" />
            <h3 className="font-semibold mb-2">365-Day Guarantee</h3>
            <p className="text-sm text-muted-foreground">
              Full refund if not satisfied
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;