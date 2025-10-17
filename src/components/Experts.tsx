import { Quote } from "lucide-react";

const Experts = () => {
  const experts = [
    {
      name: "Paul Chek",
      title: "Founder of the CHEK Institute",
      quote: '"Your body simply cannot function optimally.. setting the stage for deterioration of metabolic function."'
    },
    {
      name: "Dr. Joseph Mercola",
      title: "MD. Natural Health Expert",
      quote: '"Magnesium is crucial for optimal health. The body simply cannot function optimally without adequate levels, setting the stage for deterioration of metabolic function."'
    },
    {
      name: "Andrea Rosanoff",
      title: "Ph.D, in Nutrition",
      quote: '"The most important cardiovascular ratio in cells. Magnesium Breakthrough addresses this comprehensively."'
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Endorsed by World-Class Experts
          </h2>
          <p className="text-xl text-muted-foreground">
            Leading health professionals trust and recommend Magnesium Breakthrough
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experts.map((expert, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl border-2 hover:border-primary transition-colors"
            >
              <Quote className="w-10 h-10 text-primary mb-4" />
              <p className="text-muted-foreground mb-6 italic">{expert.quote}</p>
              <div className="border-t pt-4">
                <p className="font-bold text-lg text-foreground">{expert.name}</p>
                <p className="text-sm text-muted-foreground">{expert.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experts;