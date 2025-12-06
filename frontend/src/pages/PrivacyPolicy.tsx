import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <main className="container py-12 min-h-[calc(100vh-4rem-10rem)] flex justify-center items-center">
        <Card className="w-full max-w-4xl">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">
              {t("PrivacyTitle")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-muted-foreground leading-relaxed">
            <p>{t("PrivacyIntro")}</p>

            <section>
              <h2 className="font-semibold text-lg text-foreground mb-2">{t("Section1TitleP")}</h2>
              <p>{t("Section1TextP")}</p>
            </section>

            <section>
              <h2 className="font-semibold text-lg text-foreground mb-2">{t("Section2TitleP")}</h2>
              <p>{t("Section2TextP")}</p>
            </section>

            <section>
              <h2 className="font-semibold text-lg text-foreground mb-2">{t("Section3TitleP")}</h2>
              <p>{t("Section3TextP")}</p>
            </section>

            <section>
              <h2 className="font-semibold text-lg text-foreground mb-2">{t("Section4TitleP")}</h2>
              <p>{t("Section4TextP")}</p>
            </section>

            <p className="text-center text-sm mt-8">{t("PrivacyUpdated")}</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
