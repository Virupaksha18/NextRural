import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const skillsData: Record<string, any> = {
  "agri-1": {
    titleKey: "skills.resources.agri1.title",
    descriptionKey: "skills.resources.agri1.desc",
    detailsKey: "skills.resources.agri1.details"
  },
  "agri-2": {
    titleKey: "skills.resources.agri2.title",
    descriptionKey: "skills.resources.agri2.desc",
    detailsKey: "skills.resources.agri2.details"
  },
  "health-1": {
    titleKey: "skills.resources.health1.title",
    descriptionKey: "skills.resources.health1.desc",
    detailsKey: "skills.resources.health1.details"
  },
  "edu-1": {
    titleKey: "skills.resources.edu1.title",
    descriptionKey: "skills.resources.edu1.desc",
    detailsKey: "skills.resources.edu1.details"
  },
  "tech-1": {
    titleKey: "skills.resources.tech1.title",
    descriptionKey: "skills.resources.tech1.desc",
    detailsKey: "skills.resources.tech1.details"
  },
  "tour-1": {
    titleKey: "skills.resources.tour1.title",
    descriptionKey: "skills.resources.tour1.desc",
    detailsKey: "skills.resources.tour1.details"
  }
};

const SkillDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const meta = id ? skillsData[id] : null;

  if (!meta) {
    return (
      <>
        <Navbar />
        <div className="container py-12 min-h-[calc(100vh-4rem-10rem)] flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">{t("skills.notFound", "Skill not found.")}</h2>
            <Link to="/skills">
              <Button variant="outline">{t("skills.backToSkills", "Back to Skills")}</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container py-12 min-h-[calc(100vh-4rem-10rem)]">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>{t(meta.titleKey)}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">{t(meta.descriptionKey)}</p>
            <p>{t(meta.detailsKey)}</p>

            <div className="mt-6">
              <Link to="/skills">
                <Button variant="outline">{t("skills.backToSkills", "Back to Skills")}</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default SkillDetails;
