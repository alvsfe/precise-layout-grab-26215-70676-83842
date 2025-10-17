import { AlertCircle, Heart, Brain } from "lucide-react";

const DeficiencySection = () => {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-white uppercase tracking-tight leading-tight">
            IS MAGNESIUM DEFICIENCY SABOTAGING YOUR HEALTH?
          </h2>
          <p className="text-xl text-white/90 italic max-w-3xl mx-auto font-medium border-l-4 border-red-600 pl-6 text-left">
            "If you don't have enough magnesium, your body simply cannot function optimally,
            setting the stage for deterioration of metabolic function."
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
          <div className="bg-black p-8 rounded-lg border-2 border-red-600/40 hover:border-red-600 transition-all duration-300">
            <div className="flex items-start gap-6">
              <AlertCircle className="w-16 h-16 text-red-600 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-black mb-3 text-red-600 uppercase tracking-wide">
                  METABOLIC DEFICIENCY
                </h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  Without enough magnesium, your body cannot function optimally, issues.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-black p-8 rounded-lg border-2 border-red-600/40 hover:border-red-600 transition-all duration-300">
            <div className="flex items-start gap-6">
              <Heart className="w-16 h-16 text-red-600 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-black mb-3 text-red-600 uppercase tracking-wide">
                  CARDIOVASCULAR RISK
                </h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  marker, directly impacting heart health and circulation.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-black p-8 rounded-lg border-2 border-red-600/40 hover:border-red-600 transition-all duration-300">
            <div className="flex items-start gap-6">
              <Brain className="w-16 h-16 text-red-600 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-black mb-3 text-red-600 uppercase tracking-wide">
                  STRESS AND CHRONIC FATIGUE
                </h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  Magnesium deficiency is directly linked to stress, anxiety and constant exhaustion,
                  creating a cycle of depleted energy and poor recovery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeficiencySection;