import { Badge } from "@/components/ui/badge";
import { Users, GraduationCap, TrendingUp, Video, AlertTriangle } from "lucide-react";

const CommunityBonus = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-accent text-accent-foreground text-xl px-8 py-3">
            EXCLUSIVE BONUS INCLUDED
          </Badge>
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            IMMEDIATE ACCESS TO BIOTRIBE COMMUNITY
          </h2>
          <p className="text-xl text-muted-foreground">
            The internet's most valuable health community - COMPLETELY FREE with your purchase
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card p-8 rounded-xl border-2 hover:border-primary transition-colors">
            <Users className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-foreground">
              INTERACTION WITH RENOWNED EXPERTS
            </h3>
            <p className="text-muted-foreground">
              Direct access to Matt Gallant, Wade Lightheart, Mr. Noots and leading authorities
              in health and biological optimization
            </p>
          </div>

          <div className="bg-card p-8 rounded-xl border-2 hover:border-primary transition-colors">
            <GraduationCap className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-foreground">
              ELITE EDUCATION AT NO COST
            </h3>
            <p className="text-muted-foreground">
              Learn from experts who charge thousands of dollars per consulting hour -
              completely free for members
            </p>
          </div>

          <div className="bg-card p-8 rounded-xl border-2 hover:border-primary transition-colors">
            <TrendingUp className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-foreground">
              HIGH-PERFORMANCE COMMUNITY
            </h3>
            <p className="text-muted-foreground">
              Connect with individuals focused on optimized health and continuous development
            </p>
          </div>

          <div className="bg-card p-8 rounded-xl border-2 hover:border-primary transition-colors">
            <Video className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-foreground">
              EXCLUSIVE WEEKLY CONTENT
            </h3>
            <p className="text-muted-foreground">
              Deep analysis of advanced topics and live Q&A sessions
              EVERY WEEK
            </p>
          </div>
        </div>

        <div className="bg-destructive/10 border-2 border-destructive/30 p-8 rounded-xl">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold mb-3 text-destructive">
                IMPORTANT ALERT:
              </h3>
              <p className="text-lg text-foreground">
                Health communities exist that charge hundreds of dollars annually for inferior content.
                This is an unrestricted benefit included for free.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityBonus;