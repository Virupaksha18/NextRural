
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Search, GraduationCap, Briefcase, Book } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Resource {
  id: string;
  title: string;
  organization: string;
  description: string;
  eligibility: string;
  benefits: string[];
  applicationProcess: string;
  deadlines: string;
  type: "scheme" | "scholarship" | "exam" | "job";
  category: string[];
  icon: React.ElementType;
}

const resources: Resource[] = [
  {
    id: "scheme-1",
    title: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)",
    organization: "Ministry of Skill Development and Entrepreneurship",
    description: "A flagship scheme for skill development training to enable youth to take up industry-relevant skill training.",
    eligibility: "Indian nationals, school/college dropouts or unemployed youth aged 15-45 years.",
    benefits: [
      "Free skill training",
      "Certification",
      "Monetary reward upon successful completion",
      "Job placement assistance"
    ],
    applicationProcess: "Apply through nearby training centers or online portal.",
    deadlines: "Rolling admissions throughout the year",
    type: "scheme",
    category: ["Skill Development", "Training"],
    icon: Book
  },
  {
    id: "scheme-2",
    title: "Deen Dayal Upadhyaya Grameen Kaushalya Yojana",
    organization: "Ministry of Rural Development",
    description: "A placement-linked skill development program for rural youth from poor families.",
    eligibility: "Rural youth from poor families, age 15-35 years.",
    benefits: [
      "Free skill training",
      "Residential training option",
      "Post-placement support",
      "Career counseling"
    ],
    applicationProcess: "Apply through Gram Panchayat or Block Development Office.",
    deadlines: "Ongoing throughout the year",
    type: "scheme",
    category: ["Skill Development", "Rural Development"],
    icon: Book
  },
  {
    id: "scholarship-1",
    title: "National Scholarship Portal Schemes",
    organization: "Ministry of Education",
    description: "Various scholarship schemes for students from economically weaker sections and marginalized communities.",
    eligibility: "Varies by specific scheme; generally based on family income, academic performance, and social category.",
    benefits: [
      "Financial assistance for education",
      "Annual maintenance allowance",
      "Book allowance",
      "Disability allowance (if applicable)"
    ],
    applicationProcess: "Apply online through National Scholarship Portal (NSP).",
    deadlines: "Usually between August-November each year",
    type: "scholarship",
    category: ["Education", "Financial Aid"],
    icon: GraduationCap
  },
  {
    id: "exam-1",
    title: "ICAR All India Entrance Examination for Agriculture",
    organization: "Indian Council of Agricultural Research",
    description: "National level entrance exam for admission to undergraduate and postgraduate agricultural courses.",
    eligibility: "10+2 with PCM/PCB for UG; Bachelor's degree in relevant field for PG.",
    benefits: [
      "Admission to premium agricultural institutions",
      "Scholarship opportunities",
      "Quality education in agriculture"
    ],
    applicationProcess: "Apply online through the ICAR website during announcement period.",
    deadlines: "Usually March-April each year",
    type: "exam",
    category: ["Agriculture", "Education"],
    icon: GraduationCap
  },
  {
    id: "job-1",
    title: "Community Health Officer Program",
    organization: "National Health Mission",
    description: "Positions for Community Health Officers at Health and Wellness Centers under Ayushman Bharat.",
    eligibility: "B.Sc. Nursing or BAMS or equivalent qualification.",
    benefits: [
      "Fixed monthly compensation",
      "Performance-based incentives",
      "Rural healthcare experience",
      "Job stability"
    ],
    applicationProcess: "Apply through the State National Health Mission portal during recruitment drives.",
    deadlines: "Varies by state",
    type: "job",
    category: ["Healthcare", "Government"],
    icon: Briefcase
  },
  {
    id: "job-2",
    title: "Rural Banking Correspondence",
    organization: "Various Banks",
    description: "Banking correspondent positions to provide banking services in rural areas without bank branches.",
    eligibility: "10+2 pass, knowledge of local language, basic technical skills.",
    benefits: [
      "Commission-based earnings",
      "Local employment",
      "Flexible working hours",
      "Banking sector experience"
    ],
    applicationProcess: "Apply through nearby bank branches or their websites.",
    deadlines: "Rolling recruitment",
    type: "job",
    category: ["Finance", "Banking"],
    icon: Briefcase
  }
];

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  
  const filteredResources = resources.filter((resource) => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          resource.category.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesTab = activeTab === "all" || resource.type === activeTab;
    
    return matchesSearch && matchesTab;
  });
  
  return (
    <>
      <Navbar />
      <div className="container py-12 min-h-[calc(100vh-4rem-10rem)]">
        <h1 className="text-3xl font-bold mb-2 text-center">Government Opportunities</h1>
        <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
          Discover government schemes, scholarships, exams, and job opportunities relevant to your career path and location.
        </p>
        
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search opportunities..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full md:w-auto">
              <TabsList className="grid grid-cols-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="scheme">Schemes</TabsTrigger>
                <TabsTrigger value="scholarship">Scholarships</TabsTrigger>
                <TabsTrigger value="job">Jobs</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          <TabsContent value={activeTab} className="mt-0">
            <div className="space-y-4">
              {filteredResources.length > 0 ? (
                filteredResources.map((resource) => (
                  <Card key={resource.id}>
                    <CardHeader className="pb-2">
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                          <resource.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{resource.title}</CardTitle>
                          <CardDescription>{resource.organization}</CardDescription>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <Badge variant="outline" className="capitalize">{resource.type}</Badge>
                            {resource.category.map((cat) => (
                              <Badge key={cat} variant="secondary">{cat}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="description">
                          <AccordionTrigger>Description</AccordionTrigger>
                          <AccordionContent>
                            {resource.description}
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="eligibility">
                          <AccordionTrigger>Eligibility</AccordionTrigger>
                          <AccordionContent>
                            {resource.eligibility}
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="benefits">
                          <AccordionTrigger>Benefits</AccordionTrigger>
                          <AccordionContent>
                            <ul className="list-disc pl-5 space-y-1">
                              {resource.benefits.map((benefit, index) => (
                                <li key={index}>{benefit}</li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="application">
                          <AccordionTrigger>How to Apply</AccordionTrigger>
                          <AccordionContent>
                            <p className="mb-2">{resource.applicationProcess}</p>
                            <p><strong>Deadlines:</strong> {resource.deadlines}</p>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      <Button className="w-full mt-4">Apply Now</Button>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No resources found matching your search criteria.</p>
                </div>
              )}
            </div>
          </TabsContent>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Resources;
