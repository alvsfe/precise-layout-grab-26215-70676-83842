const ProductSpecs = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
          PRODUCT TECHNICAL SPECIFICATIONS
        </h2>

        <div className="bg-card p-8 rounded-xl border-2 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-b pb-3">
                <p className="text-sm text-muted-foreground mb-1">Product:</p>
                <p className="font-semibold text-lg">Magnesium Breakthrough Version 4.0</p>
              </div>
              <div className="border-b pb-3">
                <p className="text-sm text-muted-foreground mb-1">Quantity:</p>
                <p className="font-semibold text-lg">90 vegan capsules</p>
              </div>
              <div className="border-b pb-3">
                <p className="text-sm text-muted-foreground mb-1">Duration:</p>
                <p className="font-semibold text-lg">30 days (dose: 3 capsules/day)</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-b pb-3">
                <p className="text-sm text-muted-foreground mb-1">Usage:</p>
                <p className="font-semibold text-lg">Daily capsules, preferably at night</p>
              </div>
              <div className="border-b pb-3">
                <p className="text-sm text-muted-foreground mb-1">Free of:</p>
                <p className="font-semibold text-lg">Gluten, soy, dairy, GMO</p>
              </div>
              <div className="border-b pb-3">
                <p className="text-sm text-muted-foreground mb-1">Suitable for:</p>
                <p className="font-semibold text-lg">Vegans and vegetarians</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSpecs;