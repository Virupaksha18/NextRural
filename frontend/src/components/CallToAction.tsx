import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // ✅ import i18n hook

const CallToAction = () => {
  const { t } = useTranslation(); // ✅ translation hook

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <Card className="border-0 bg-gradient-to-br from-earth-100 to-earth-200 overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t("cta_title")}
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                {t("cta_description")}
              </p>
              <Button asChild size="lg" className="gap-2">
                <Link to="/assessment">
                  {t("cta_button")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CallToAction;
