import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { toast } from "sonner";

const ContactUs = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ For now, just show a success toast (later you can integrate backend)
    toast.success(t("MessageSent"));
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <main className="container py-12 min-h-[calc(100vh-4rem-10rem)]">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold">{t("ContactUs")}</CardTitle>
              <p className="text-muted-foreground mt-2">
                {t("ContactSubtitle")}
              </p>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-medium">{t("Name")}</label>
                  <Input
                    id="name"
                    name="name"
                    placeholder={t("EnterName")}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="font-medium">{t("Email")}</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t("EnterEmail")}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="font-medium">{t("Message")}</label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={t("EnterMessage")}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" className="w-full mt-4">
                  {t("SendMessage")}
                </Button>
              </form>

              <div className="mt-8 text-center text-muted-foreground">
                <p>{t("YouCanAlsoReach")}</p>
                <a href="mailto:support@nextrural.org" className="text-primary underline">
                  support@nextrural.org
                </a>
                <p className="mt-2">{t("OrCall")} +91 98765 43210</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;
