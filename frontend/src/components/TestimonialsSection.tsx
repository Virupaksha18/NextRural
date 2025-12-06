import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";
import { useTranslation } from "react-i18next"; // ✅ import

interface Testimonial {
  quote: string;
  name: string;
  location: string;
  outcome: string;
}

const TestimonialsSection = () => {
  const { t } = useTranslation(); // ✅ initialize i18n

  const testimonials: Testimonial[] = [
    {
      quote: t("testimonial1_quote"),
      name: t("testimonial1_name"),
      location: t("testimonial1_location"),
      outcome: t("testimonial1_outcome")
    },
    {
      quote: t("testimonial2_quote"),
      name: t("testimonial2_name"),
      location: t("testimonial2_location"),
      outcome: t("testimonial2_outcome")
    },
    {
      quote: t("testimonial3_quote"),
      name: t("testimonial3_name"),
      location: t("testimonial3_location"),
      outcome: t("testimonial3_outcome")
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="flex items-center justify-center mb-12">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <Users className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            {t("testimonials_title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-earth-500">★</span>
                  ))}
                </div>
                <blockquote className="mb-4 italic text-muted-foreground">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex flex-col">
                  <span className="font-semibold">{testimonial.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {testimonial.location} • {testimonial.outcome}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
