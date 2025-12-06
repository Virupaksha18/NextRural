import { Compass, Book, GraduationCap, MapPin } from "lucide-react";
import FeatureCard from "./FeatureCard";
import { useTranslation } from "react-i18next"; // ✅ import translation hook

const FeaturesSection = () => {
  const { t } = useTranslation(); // ✅ initialize translation

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("features_title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("features_description")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={Compass}
            title={t("feature1_title")}
            description={t("feature1_desc")}
          />
          <FeatureCard
            icon={GraduationCap}
            title={t("feature2_title")}
            description={t("feature2_desc")}
            className="md:animate-fade-in"
          />
          <FeatureCard
            icon={Book}
            title={t("feature3_title")}
            description={t("feature3_desc")}
            className="md:animate-fade-in"
          />
          <FeatureCard
            icon={MapPin}
            title={t("feature4_title")}
            description={t("feature4_desc")}
            className="md:animate-fade-in"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
