import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const TermsOfService = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <main className="container py-12 min-h-[calc(100vh-4rem-10rem)] flex justify-center items-center">
        <Card className="w-full max-w-4xl">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">
              {t("TermsTitle")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-muted-foreground leading-relaxed">
            <p>{t("TermsIntro")}</p>

            <section>
              <h2 className="font-semibold text-lg text-foreground mb-2">{t("Section1Title")}</h2>
              <p>{t("Section1Text")}</p>
            </section>

            <section>
              <h2 className="font-semibold text-lg text-foreground mb-2">{t("Section2Title")}</h2>
              <p>{t("Section2Text")}</p>
            </section>

            <section>
              <h2 className="font-semibold text-lg text-foreground mb-2">{t("Section3Title")}</h2>
              <p>{t("Section3Text")}</p>
            </section>

            <section>
              <h2 className="font-semibold text-lg text-foreground mb-2">{t("Section4Title")}</h2>
              <p>{t("Section4Text")}</p>
            </section>

            <p className="text-center text-sm mt-8">{t("TermsUpdated")}</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  );
};

export default TermsOfService;
