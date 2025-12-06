import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

const HelpCenter = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <main className="container py-12 min-h-[calc(100vh-4rem-10rem)]">
        <h1 className="text-3xl font-bold text-center mb-8">
          {t("HelpCenter")}
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>{t("AccountIssues")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-muted-foreground">
              <p>{t("ForgotPasswordText")}</p>
              <p>{t("UpdateProfileText")}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t("TechnicalSupport")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-muted-foreground">
              <p>{t("FacingErrorText")}</p>
              <p>{t("BrowserSupportText")}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t("CareerGuidanceHelp")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-muted-foreground">
              <p>{t("AssessmentHelpText")}</p>
              <p>{t("PathwayHelpText")}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t("ContactSupport")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-muted-foreground">
              <p>{t("EmailUs")} <a href="mailto:support@nextrural.org" className="text-primary underline">support@nextrural.org</a></p>
              <p>{t("ResponseTime")}</p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HelpCenter;
