import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Compass } from "lucide-react";
import { useTranslation } from "react-i18next"; // ✅ import translation hook
import logo from "@/assets/logo.png";

const HeroSection = () => {
  const { t } = useTranslation(); // ✅ initialize translations

  return (
    <section className="relative overflow-hidden bg-earth-100 py-16 md:py-24">
      <div
        className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))]"
        style={
          {
            "--tw-gradient-from": "rgb(var(--primary) / 0.2)",
            "--tw-gradient-to": "transparent",
            "--tw-gradient-stops":
              "var(--tw-gradient-from), var(--tw-gradient-to)",
          } as React.CSSProperties
        }
      />

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6">
              {t("hero_title")}
              <span className="block text-primary">{t("hero_subtitle")}</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0">
              {t("hero_description")}
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Button asChild size="lg">
                <Link to="/assessment">{t("start_assessment")}</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/pathways">{t("explore_pathways")}</Link>
              </Button>
              {/* ⭐ New AI Features Button */}
  <Button asChild variant="outline"size="lg">
    <Link to="/ai-features">Explore more Features</Link>
  </Button>
            </div>
          </div>

          <div className="flex-1 w-full max-w-xl lg:max-w-none">
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg relative">
                <img
                  src={logo}
                  alt="Career Guidance Logo"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center">
                 
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
