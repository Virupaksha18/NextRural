import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

const SchemeMatcher = () => {
  const { t } = useTranslation();
  const [userInput, setUserInput] = useState("");
  const [schemes, setSchemes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleMatch = async () => {
    setLoading(true);
    setError("");
    setSchemes([]);

    try {
      const res = await fetch("https://nextrural.onrender.com/api/match-schemes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userInput }),
      });

      if (!res.ok) throw new Error("Server error");

      const data = await res.json();
      setSchemes(data);
    } catch (err) {
      console.error(err);
      setError(t("schemer.error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container py-12 min-h-[calc(100vh-4rem-10rem)]">
        <h1 className="text-3xl font-bold text-center mb-4">
          {t("schemer.title")}
        </h1>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          {t("schemer.subtitle")}
        </p>

        <div className="max-w-2xl mx-auto flex flex-col gap-4 mb-10">
          <Input
            placeholder={t("schemer.placeholder")}
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <Button
            onClick={handleMatch}
            disabled={!userInput || loading}
            className="w-full"
          >
            {loading ? t("schemer.loading") : t("schemer.button")}
          </Button>
        </div>

        {error && <p className="text-center text-red-500 mb-8">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schemes.map((s, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>{s.name}</CardTitle>
                <CardDescription>{s.category || t("schemer.general")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-3 text-sm text-muted-foreground">
                  {s.description}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a href={s.link || "#"} target="_blank" rel="noopener noreferrer">
                    {t("schemer.viewDetails")}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {!loading && schemes.length === 0 && !error && (
          <p className="text-center text-muted-foreground mt-8">
            {t("schemer.noResults")}
          </p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default SchemeMatcher;
