import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Book, Compass, MapPin, Users, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

interface Pathway {
  id: string;
  icon: React.ElementType;
  suitability: number;
}

const pathways: Pathway[] = [
  { id: "agriculture", icon: MapPin, suitability: 95 },
  { id: "healthcare", icon: Users, suitability: 88 },
  { id: "education", icon: GraduationCap, suitability: 75 },
  { id: "tourism", icon: Compass, suitability: 70 },
];

const Pathways = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <div className="container py-12 min-h-[calc(100vh-4rem-10rem)]">
        <h1 className="text-3xl font-bold mb-2 text-center">
          {t("pathways.heading")}
        </h1>
        <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
          {t("pathways.subheading")}
        </p>

        <Tabs defaultValue="recommended" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 mb-8">
            <TabsTrigger value="recommended">
              {t("pathways.recommended")}
            </TabsTrigger>
            <TabsTrigger value="all">{t("pathways.all")}</TabsTrigger>
          </TabsList>

          {/* Recommended Pathways */}
          <TabsContent value="recommended" className="space-y-6">
            {pathways.slice(0, 3).map((pathway) => (
              <Card key={pathway.id} className="overflow-hidden">
                <CardHeader className="flex flex-row items-center gap-4 bg-muted/30">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <pathway.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="flex items-center">
                      {t(`pathways.${pathway.id}.title`)}
                      <Badge className="ml-2 bg-earth-500" variant="secondary">
                        {pathway.suitability}% Match
                      </Badge>
                    </CardTitle>
                    <CardDescription>
                      {t(`pathways.${pathway.id}.description`)}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="grid gap-6 p-6 sm:grid-cols-2">
                  <div>
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Book className="h-4 w-4 text-muted-foreground" />
                      {t("pathways.skills")}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <Badge key={i} variant="outline">
                          {t(`pathways.${pathway.id}.skills.${i}`)}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    {/* <h3 className="font-medium mb-2 flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-muted-foreground" />
                      {t("pathways.education")}
                    </h3> */}
                    <p className="text-sm text-muted-foreground">
                      {t(`pathways.${pathway.id}.education`)}
                    </p>
                  </div>
                </CardContent>

                <CardFooter className="flex justify-between bg-muted/30 px-6 py-4">
                  {/* ✅ Updated "View Details" button */}
                  <Link to={`/career/${pathway.id}`}>
                    <Button variant="outline">{t("pathways.viewDetails")}</Button>
                  </Link>

                  <Button asChild>
                    <Link to={`/skills?pathway=${pathway.id}`}>
                      {t("pathways.exploreSkills")}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>

          {/* All Pathways */}
          <TabsContent value="all" className="space-y-6">
            {pathways.map((pathway) => (
              <Card key={pathway.id} className="overflow-hidden">
                <CardHeader className="flex flex-row items-center gap-4 bg-muted/30">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <pathway.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>
                      {t(`pathways.${pathway.id}.title`)}
                    </CardTitle>
                    <CardDescription>
                      {t(`pathways.${pathway.id}.description`)}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="grid gap-6 p-6 sm:grid-cols-2">
                  <div>
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Book className="h-4 w-4 text-muted-foreground" />
                      {t("pathways.skills")}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <Badge key={i} variant="outline">
                          {t(`pathways.${pathway.id}.skills.${i}`)}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    {/* <h3 className="font-medium mb-2 flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-muted-foreground" />
                      {t("pathways.education")}
                    </h3> */}
                    <p className="text-sm text-muted-foreground">
                      {t(`pathways.${pathway.id}.education`)}
                    </p>
                  </div>
                </CardContent>

                <CardFooter className="flex justify-between bg-muted/30 px-6 py-4">
                  {/* ✅ Updated "View Details" button */}
                  <Link to={`/career/${pathway.id}`}>
                    <Button variant="outline">{t("pathways.viewDetails")}</Button>
                  </Link>

                  <Button asChild>
                    <Link to={`/skills?pathway=${pathway.id}`}>
                      {t("pathways.exploreSkills")}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </>
  );
};

export default Pathways;
