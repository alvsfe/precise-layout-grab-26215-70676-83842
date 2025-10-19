import { Badge } from "@/components/ui/badge";
import magnesiumChelate from "@/assets/magnesium-chelate.jpg";
import magnesiumCitrate from "@/assets/magnesium-citrate.jpg";
import magnesiumBisglycinate from "@/assets/magnesium-bisglycinate.jpg";
import magnesiumMalate from "@/assets/magnesium-malate.jpg";
import magnesiumAspartate from "@/assets/magnesium-aspartate.jpg";
import magnesiumTaurate from "@/assets/magnesium-taurate.jpg";
import magnesiumOrotate from "@/assets/magnesium-orotate.jpg";

const ScientificDiscovery = () => {
  const magnesiumForms = [
    {
      name: "MAGNESIUM CHELATE",
      level: "HIGH",
      image: magnesiumChelate,
      benefits: [
        "Accelerated muscle recovery",
        "Deep tissue repair",
        "Superior athletic performance"
      ]
    },
    {
      name: "MAGNESIUM CITRATE",
      level: "VERY HIGH",
      image: magnesiumCitrate,
      benefits: [
        "Optimized digestion",
        "Cellular detoxification",
        "Intestinal regularity"
      ]
    },
    {
      name: "MAGNESIUM BISGLYCINATE",
      level: "VERY HIGH",
      image: magnesiumBisglycinate,
      benefits: [
        "Maximum absorption guaranteed",
        "Zero digestive discomfort",
        "Effective cellular replenishment"
      ]
    },
    {
      name: "MAGNESIUM MALATE",
      level: "HIGH",
      image: magnesiumMalate,
      benefits: [
        "Mitochondrial energy production",
        "Combats chronic fatigue",
        "Increased physical resistance"
      ]
    },
    {
      name: "MAGNESIUM ASPARTATE",
      level: "HIGH",
      image: magnesiumAspartate,
      benefits: [
        "Accelerated energy metabolism",
        "Post-workout recovery",
        "Neuromuscular function"
      ]
    },
    {
      name: "MAGNESIUM TAURATE",
      level: "HIGH",
      image: magnesiumTaurate,
      benefits: [
        "Critical cardiovascular protection",
        "Regulated blood pressure",
        "Normalized heart rhythm"
      ]
    },
    {
      name: "MAGNESIUM OROTATE",
      level: "VERY HIGH",
      image: magnesiumOrotate,
      benefits: [
        "Proven heart health",
        "ATP cellular energy",
        "Optimized DNA synthesis"
      ]
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 md:mb-12">
          <Badge className="mb-4 bg-primary text-primary-foreground text-sm md:text-base px-4 md:px-6 py-1 md:py-2">
            SCIENTIFIC DISCOVERY
          </Badge>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-foreground px-2 leading-tight">
            STUDY REVEALS: 7 ESSENTIAL MAGNESIUM FORMS FOR OPTIMAL CELLULAR FUNCTION
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-4xl mx-auto px-4">
            Researchers confirm: conventional supplements with only 1-2 forms are insufficient. 
            The human body requires all 7 forms to function optimally.
          </p>
        </div>

        {/* Mobile cards view */}
        <div className="block md:hidden space-y-8 mb-8">
          {magnesiumForms.map((form, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border shadow-md">
              <img 
                src={form.image} 
                alt={form.name}
                className="w-full h-48 object-cover rounded-lg mb-5"
              />
              <h3 className="font-bold text-lg mb-4 text-center">{form.name}</h3>
              <div className="flex justify-center mb-5">
                <Badge
                  variant={form.level === "VERY HIGH" ? "default" : "secondary"}
                  className={`text-sm px-4 py-1 ${form.level === "VERY HIGH" ? "bg-primary" : ""}`}
                >
                  {form.level}
                </Badge>
              </div>
              <ul className="space-y-3">
                {form.benefits.map((benefit, idx) => (
                  <li key={idx} className="text-sm flex items-start gap-3 pl-2">
                    <span className="text-primary text-lg mt-0.5">•</span>
                    <span className="flex-1">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Desktop table view */}
        <div className="hidden md:block overflow-x-auto mb-12">
          <table className="w-full border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="p-3 md:p-4 text-left font-bold text-sm md:text-base">Image</th>
                <th className="p-3 md:p-4 text-left font-bold text-sm md:text-base">Magnesium Form</th>
                <th className="p-3 md:p-4 text-left font-bold text-sm md:text-base">Level</th>
                <th className="p-3 md:p-4 text-left font-bold text-sm md:text-base">Benefits</th>
              </tr>
            </thead>
            <tbody>
              {magnesiumForms.map((form, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-muted/30" : "bg-card"}
                >
                  <td className="p-3 md:p-4">
                    <img 
                      src={form.image} 
                      alt={form.name}
                      className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-lg"
                    />
                  </td>
                  <td className="p-3 md:p-4 font-semibold text-sm md:text-base">{form.name}</td>
                  <td className="p-3 md:p-4">
                    <Badge
                      variant={form.level === "VERY HIGH" ? "default" : "secondary"}
                      className={`text-xs ${form.level === "VERY HIGH" ? "bg-primary" : ""}`}
                    >
                      {form.level}
                    </Badge>
                  </td>
                  <td className="p-3 md:p-4">
                    <ul className="list-disc list-inside space-y-1">
                      {form.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-xs md:text-sm">{benefit}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-6 md:p-12 rounded-2xl text-center">
          <Badge className="mb-4 bg-accent text-accent-foreground text-sm md:text-base px-4 md:px-6 py-1 md:py-2">
            PATENTED FORMULA
          </Badge>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-foreground">
            MAGNESIUM BREAKTHROUGH:
          </h3>
          <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-primary">
            UNPRECEDENTED SCIENTIFIC TECHNOLOGY
          </h4>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Scientifically calculated formulation. Unlike conventional supplements with 1-2 generic forms, 
            this was developed for measurable results.
          </p>
          <p className="text-xs sm:text-sm text-foreground mt-4 md:mt-6 font-medium px-4">
            Proven Maximum Bioavailability - Magnesium glycinate with over 90% absorption
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScientificDiscovery;