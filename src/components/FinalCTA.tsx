import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const FinalCTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-primary/10">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-6 text-foreground">
          It's Time to Experience Biological Optimization
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Join thousands who have already transformed their lives with the world's only complete
          7-form magnesium formula. Our mission is to end physical and mental suffering.
        </p>
        <Button 
          size="lg" 
          className="text-xl px-12 py-8 mb-4 bg-primary hover:bg-primary/90"
          onClick={() => document.getElementById('best-value')?.scrollIntoView({ behavior: 'smooth' })}
        >
          BUY MAGNESIUM BREAKTHROUGH SPECIAL OFFER
        </Button>
        <p className="text-sm text-muted-foreground">
          <Badge variant="secondary">Limited time offer</Badge>
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;