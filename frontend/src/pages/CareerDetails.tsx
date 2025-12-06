import { useParams } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

const CareerDetails = () => {
  const { id } = useParams(); // example: "agriculture"
  const { t } = useTranslation();

  // Temporary example data (you can later fetch from DB or API)
  const careerData: Record<string, any> = {
    agriculture: {
      title: t("pathways.agriculture.title"),
      description: t("pathways.agriculture.description"),
      details: t("pathways.agriculture.details", {
        defaultValue:
          "Agriculture careers include roles in crop science, soil management, and agri-business.",
      }),
    },
    healthcare: {
      title: t("pathways.healthcare.title"),
      description: t("pathways.healthcare.description"),
      details: t("pathways.healthcare.details", {
        defaultValue:
          "Healthcare careers include nursing, lab technicians, and community health workers.",
      }),
    },
    education: {
      title: t("pathways.education.title"),
      description: t("pathways.education.description"),
      details: t("pathways.education.details", {
        defaultValue:
          "Education careers include teaching, academic counseling, and curriculum design.",
      }),
    },
    tourism: {
      title: t("pathways.tourism.title"),
      description: t("pathways.tourism.description"),
      details: t("pathways.tourism.details", {
        defaultValue:
          "Tourism careers include hospitality, guiding, and travel planning.",
      }),
    },
  };

  const career = careerData[id || ""];

  if (!career) {
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center min-h-[60vh] text-xl font-semibold">
          {t("career.notFound", { defaultValue: "Career not found." })}
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
            <CardTitle>{career.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">{career.description}</p>
            <p>{career.details}</p>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default CareerDetails;
