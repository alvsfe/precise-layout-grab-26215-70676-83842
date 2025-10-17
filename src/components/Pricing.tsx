import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import paymentLogos from "@/assets/payment-logos.png";

const Pricing = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Invest In Your Health Today
          </h2>
          <p className="text-xl text-muted-foreground mb-2">
            Choose the perfect package for you. All with unconditional 365-day guarantee.
          </p>
          <p className="text-sm text-muted-foreground">
            Auty & Experien: Optimizing Humans Since 2004
          </p>
        </div>

        <div className="flex flex-col gap-8 mb-12 max-w-2xl mx-auto">
          {/* One Bottle */}
          <div className="bg-card p-8 rounded-2xl border-2 border-primary/50 hover:border-primary transition-all hover:shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-center">One Bottle</h3>
            <div className="text-center mb-6">
              <p className="text-lg mb-2">Magnesium Breakthrough</p>
              <p className="text-4xl font-bold text-primary mb-2">$35</p>
              <p className="text-2xl font-semibold mb-4">$35 TOTAL</p>
              <Badge variant="secondary" className="mb-2 text-lg px-4 py-1 bg-yellow-500 text-black font-bold">
                SUBSCRIBE & SAVE 12%
              </Badge>
              <p className="text-base font-semibold text-muted-foreground mb-2">Subscribe'N Save</p>
              <div className="flex items-center justify-center gap-2 text-base font-bold text-red-600">
                <Check className="w-5 h-5" />
                FREE SHIPPING (US)
              </div>
            </div>
            <Button className="w-full mb-4" size="lg" asChild>
              <a href="https://mr4ii.bemobtrcks.com/click/1?ns=c%3Dda6c1ffe-83de-45be-b5d4-07c3fde6d3b7..l%3D2..a%3D0..b%3D0" target="_blank" rel="noopener noreferrer">
                BUY MAGNESIUM BREAKTHROUGH SPECIAL OFFER
              </a>
            </Button>
            <img src={paymentLogos} alt="Secure Payment Options" className="w-full max-w-xs mx-auto mb-4" />
            <div className="text-center">
              <p className="text-lg font-bold text-red-600 mb-2">Secure checkout with:</p>
              <div className="flex justify-center gap-3 flex-wrap">
                <span className="font-bold text-lg text-red-600">VISA</span>
                <span className="font-bold text-lg text-red-600">MASTERCARD</span>
                <span className="font-bold text-lg text-red-600">AMEX</span>
                <span className="font-bold text-lg text-red-600">PAYPAL</span>
              </div>
            </div>
          </div>

          {/* Five Bottles - BEST VALUE */}
          <div id="best-value" className="bg-gradient-to-b from-primary/20 to-primary/5 p-8 rounded-2xl border-4 border-primary relative hover:shadow-2xl transition-all scroll-mt-20">
            <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground text-lg px-6 py-2">
              BEST VALUE
            </Badge>
            <h3 className="text-2xl font-bold mb-4 text-center mt-4">Five Bottles</h3>
            <div className="text-center mb-6">
              <p className="text-lg mb-2">Magnesium Breakthrough</p>
              <p className="text-4xl font-bold text-primary mb-2">$29</p>
              <p className="text-xl line-through text-muted-foreground mb-1">$175 TOTAL</p>
              <p className="text-3xl font-bold text-primary mb-4">$135 TOTAL</p>
              <Badge className="mb-2 text-lg px-4 py-1 bg-yellow-500 text-black font-bold">SUBSCRIBE & SAVE 27%</Badge>
              <p className="text-base font-semibold text-muted-foreground mb-2">Subscribe'N Save</p>
              <div className="flex items-center justify-center gap-2 text-base font-bold text-red-600">
                <Check className="w-5 h-5" />
                FREE SHIPPING (US)
              </div>
            </div>
            <Button className="w-full mb-4 bg-primary hover:bg-primary/90" size="lg" asChild>
              <a href="https://mr4ii.bemobtrcks.com/click/1?ns=c%3Dda6c1ffe-83de-45be-b5d4-07c3fde6d3b7..l%3D2..a%3D0..b%3D0" target="_blank" rel="noopener noreferrer">
                BUY MAGNESIUM BREAKTHROUGH SPECIAL OFFER
              </a>
            </Button>
            <img src={paymentLogos} alt="Secure Payment Options" className="w-full max-w-xs mx-auto mb-4" />
            <div className="text-center">
              <p className="text-lg font-bold text-red-600 mb-2">Secure checkout with:</p>
              <div className="flex justify-center gap-3 flex-wrap">
                <span className="font-bold text-lg text-red-600">VISA</span>
                <span className="font-bold text-lg text-red-600">MASTERCARD</span>
                <span className="font-bold text-lg text-red-600">AMEX</span>
                <span className="font-bold text-lg text-red-600">PAYPAL</span>
              </div>
            </div>
          </div>

          {/* Three Bottles */}
          <div className="bg-card p-8 rounded-2xl border-2 border-primary/50 hover:border-primary transition-all hover:shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-center">Three Bottles</h3>
            <div className="text-center mb-6">
              <p className="text-lg mb-2">Magnesium Breakthrough</p>
              <p className="text-4xl font-bold text-primary mb-2">$35</p>
              <p className="text-2xl font-semibold mb-4">$87 TOTAL</p>
              <Badge variant="secondary" className="mb-2 text-lg px-4 py-1 bg-yellow-500 text-black font-bold">
                SUBSCRIBE & SAVE 27%
              </Badge>
              <p className="text-base font-semibold text-muted-foreground mb-2">Subscribe'N Save</p>
              <div className="flex items-center justify-center gap-2 text-base font-bold text-red-600">
                <Check className="w-5 h-5" />
                FREE SHIPPING (US)
              </div>
            </div>
            <Button className="w-full mb-4" size="lg" asChild>
              <a href="https://mr4ii.bemobtrcks.com/click/1?ns=c%3Dda6c1ffe-83de-45be-b5d4-07c3fde6d3b7..l%3D2..a%3D0..b%3D0" target="_blank" rel="noopener noreferrer">
                BUY MAGNESIUM BREAKTHROUGH SPECIAL OFFER
              </a>
            </Button>
            <img src={paymentLogos} alt="Secure Payment Options" className="w-full max-w-xs mx-auto mb-4" />
            <div className="text-center">
              <p className="text-lg font-bold text-red-600 mb-2">Secure checkout with:</p>
              <div className="flex justify-center gap-3 flex-wrap">
                <span className="font-bold text-lg text-red-600">VISA</span>
                <span className="font-bold text-lg text-red-600">MASTERCARD</span>
                <span className="font-bold text-lg text-red-600">AMEX</span>
                <span className="font-bold text-lg text-red-600">PAYPAL</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card p-12 rounded-xl border-[6px] border-yellow-500 max-w-4xl mx-auto min-h-[200px] flex flex-col justify-center">
          <h3 className="text-3xl font-bold mb-6 text-center text-yellow-500">
            Unconditional 365-Day Guarantee
          </h3>
          <p className="text-center text-foreground text-lg leading-relaxed">
            If you buy just 1 bottle and are not completely satisfied you save 36 days to request
            a full refund (minus shipping and handling costs). If you are not satisfied, we will
            refund half of the shipping and handling costs).
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;