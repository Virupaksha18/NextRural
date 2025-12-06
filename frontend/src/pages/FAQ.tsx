import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <main className="container py-12 min-h-[calc(100vh-4rem-10rem)]">
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold">{t("FAQTitle")}</CardTitle>
              <p className="text-muted-foreground mt-2">{t("FAQSubtitle")}</p>
            </CardHeader>

            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="q1">
                  <AccordionTrigger>{t("FAQ1Q")}</AccordionTrigger>
                  <AccordionContent>{t("FAQ1A")}</AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2">
                  <AccordionTrigger>{t("FAQ2Q")}</AccordionTrigger>
                  <AccordionContent>{t("FAQ2A")}</AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3">
                  <AccordionTrigger>{t("FAQ3Q")}</AccordionTrigger>
                  <AccordionContent>{t("FAQ3A")}</AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4">
                  <AccordionTrigger>{t("FAQ4Q")}</AccordionTrigger>
                  <AccordionContent>{t("FAQ4A")}</AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5">
                  <AccordionTrigger>{t("FAQ5Q")}</AccordionTrigger>
                  <AccordionContent>{t("FAQ5A")}</AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FAQ;
