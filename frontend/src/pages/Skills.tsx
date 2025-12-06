import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search, GraduationCap, Book, Earth } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

interface SkillResource {
  id: string;
  titleKey: string;
  providerKey: string;
  typeKey: string;
  formatKey: string;
  durationKey: string;
  locationKey: string;
  link: string;
  categoryKeys: string[];
  levelKey: string;
  icon: React.ElementType;
}

const resources: SkillResource[] = [
  {
    id: "agri-1",
    titleKey: "skills.resources.agri1.title",
    providerKey: "skills.resources.agri1.provider",
    typeKey: "skills.resources.agri1.type",
    formatKey: "skills.resources.agri1.format",
    durationKey: "skills.resources.agri1.duration",
    locationKey: "skills.resources.agri1.location",
    link: "#",
    categoryKeys: [
      "skills.resources.agriculture",
      "skills.resources.sustainable",
    ],
    levelKey: "skills.resources.beginner",
    icon: Earth,
  },
  {
    id: "agri-2",
    titleKey: "skills.resources.agri2.title",
    providerKey: "skills.resources.agri2.provider",
    typeKey: "skills.resources.agri2.type",
    formatKey: "skills.resources.agri2.format",
    durationKey: "skills.resources.agri2.duration",
    locationKey: "skills.resources.agri2.location",
    link: "#",
    categoryKeys: ["skills.resources.agriculture", "skills.resources.water"],
    levelKey: "skills.resources.beginner",
    icon: Earth,
  },
  {
    id: "health-1",
    titleKey: "skills.resources.health1.title",
    providerKey: "skills.resources.health1.provider",
    typeKey: "skills.resources.health1.type",
    formatKey: "skills.resources.health1.format",
    durationKey: "skills.resources.health1.duration",
    locationKey: "skills.resources.health1.location",
    link: "#",
    categoryKeys: ["skills.resources.healthcare", "skills.resources.community"],
    levelKey: "skills.resources.intermediate",
    icon: Book,
  },
  {
    id: "edu-1",
    titleKey: "skills.resources.edu1.title",
    providerKey: "skills.resources.edu1.provider",
    typeKey: "skills.resources.edu1.type",
    formatKey: "skills.resources.edu1.format",
    durationKey: "skills.resources.edu1.duration",
    locationKey: "skills.resources.edu1.location",
    link: "#",
    categoryKeys: ["skills.resources.education", "skills.resources.teaching"],
    levelKey: "skills.resources.intermediate",
    icon: GraduationCap,
  },
  {
    id: "tech-1",
    titleKey: "skills.resources.tech1.title",
    providerKey: "skills.resources.tech1.provider",
    typeKey: "skills.resources.tech1.type",
    formatKey: "skills.resources.tech1.format",
    durationKey: "skills.resources.tech1.duration",
    locationKey: "skills.resources.tech1.location",
    link: "#",
    categoryKeys: ["skills.resources.digital", "skills.resources.technology"],
    levelKey: "skills.resources.beginner",
    icon: Book,
  },
  {
    id: "tour-1",
    titleKey: "skills.resources.tour1.title",
    providerKey: "skills.resources.tour1.provider",
    typeKey: "skills.resources.tour1.type",
    formatKey: "skills.resources.tour1.format",
    durationKey: "skills.resources.tour1.duration",
    locationKey: "skills.resources.tour1.location",
    link: "#",
    categoryKeys: ["skills.resources.tourism", "skills.resources.hospitality"],
    levelKey: "skills.resources.beginner",
    icon: Earth,
  },
];

const Skills = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = Array.from(
    new Set(resources.flatMap((r) => r.categoryKeys))
  );

  const filteredResources = resources.filter((r) => {
    const matchesSearch =
      t(r.titleKey).toLowerCase().includes(searchTerm.toLowerCase()) ||
      t(r.providerKey).toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.categoryKeys.some((cat) =>
        t(cat).toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "all" || r.categoryKeys.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />
      <div className="container py-12 min-h-[calc(100vh-4rem-10rem)]">
        <h1 className="text-3xl font-bold mb-2 text-center">
          {t("skills.heading")}
        </h1>
        <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
          {t("skills.subheading")}
        </p>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={t("skills.searchPlaceholder")}
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
              <TabsList>
                <TabsTrigger value="all">{t("skills.all")}</TabsTrigger>
                {categories.map((cat) => (
                  <TabsTrigger value={cat} key={cat}>
                    {t(cat)}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <Tabs value={selectedCategory}>
            <TabsContent value={selectedCategory}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredResources.length > 0 ? (
                  filteredResources.map((r) => (
                    <Card key={r.id}>
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <r.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">
                              {t(r.titleKey)}
                            </CardTitle>
                            <CardDescription>
                              {t(r.providerKey)}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex justify-between text-sm">
                            <span>{t("skills.type")}:</span>
                            <span className="font-medium">{t(r.typeKey)}</span>
                          </div>

                          <div className="flex justify-between text-sm">
                            <span>{t("skills.format")}:</span>
                            <span className="font-medium">
                              {t(r.formatKey)}
                            </span>
                          </div>

                          <div className="flex justify-between text-sm">
                            <span>{t("skills.duration")}:</span>
                            <span className="font-medium">
                              {t(r.durationKey)}
                            </span>
                          </div>

                          <div className="flex justify-between text-sm">
                            <span>{t("skills.location")}:</span>
                            <span className="font-medium">
                              {t(r.locationKey)}
                            </span>
                          </div>

                          <div className="flex flex-wrap gap-2 pt-2">
                            {r.categoryKeys.map((cat) => (
                              <Badge key={cat} variant="outline">
                                {t(cat)}
                              </Badge>
                            ))}
                            <Badge variant="secondary">{t(r.levelKey)}</Badge>
                          </div>

                          <Button asChild className="w-full mt-4">
                            <Link to={`/skills/${r.id}`}>
                              {t("skills.learnMore")}
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <p className="text-muted-foreground text-center col-span-3">
                    {t("skills.noResults")}
                  </p>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Skills;
