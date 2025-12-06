import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Assessment = () => {
  const { t } = useTranslation();

  const questions = [
    {
  id: 1,
    type: "single",
    text: "Current Education Level",
    options: [
      { id: "3a", text: "10th Pass or Below", category: "low_edu" },
      { id: "3b", text: "12th Pass", category: "mid_edu" },
      { id: "3c", text: "Diploma/ITI", category: "tech_edu" },
      { id: "3d", text: "Graduate", category: "grad" },
      { id: "3e", text: "Post Graduate", category: "postgrad" },
      { id: "3f", text: "Currently Studying", category: "studying" }
    ]
  },
   {
    id: 2,
    type: "multi",
    text: "What interests you like the most? (Select at least 2)",
    options: [
      { id: "1a", text: "Technology & Computers", category: "tech" },
      { id: "1b", text: "Agriculture & Farming", category: "agriculture" },
      { id: "1c", text: "Business & Entrepreneurship", category: "business" },
      { id: "1d", text: "Engineering & Manufacturing", category: "engineering" },
      { id: "1e", text: "Healthcare & Medicine", category: "health" },
      { id: "1f", text: "Teaching & Education", category: "education" },
      { id: "1g", text: "Arts & Creative Work", category: "creative" },
      { id: "1h", text: "Banking & Finance", category: "finance" },
      { id: "1i", text: "Government & Public Service", category: "gov" },
      { id: "1j", text: "Sports & Fitness", category: "sports" }
    ]
  },
  {
    id: 3,
    type: "multi",
    text: "What are your strongest skills? (Select at least 2)",
    options: [
      { id: "4a", text: "Communication & Speaking", category: "communication" },
      { id: "4b", text: "Problem Solving", category: "problem" },
      { id: "4c", text: "Leadership & Management", category: "leadership" },
      { id: "4d", text: "Technical & Computer Skills", category: "technical" },
      { id: "4e", text: "Creativity & Design", category: "creative" },
      { id: "4f", text: "Analytical & Research", category: "analytical" },
      { id: "4g", text: "Physical & Manual Work", category: "physical" },
      { id: "4h", text: "Teamwork & Collaboration", category: "teamwork" },
      { id: "4i", text: "Writing & Documentation", category: "writing" },
      { id: "4j", text: "Language Skills", category: "language" }
    ]
  },
  {
    id: 4,
    type: "single",
    text: "Where would you like to work?",
    options: [
      { id: "5a", text: "Stay in Village", category: "village" },
      { id: "5b", text: "Nearby Town/City", category: "town" },
      { id: "5c", text: "Metro Cities", category: "metro" },
      { id: "5d", text: "Anywhere in India", category: "india" },
      { id: "5e", text: "Open to Abroad", category: "abroad" }
    ]
  },
    {
     id: 4,
    type: "single",
    text: "How comfortable are you with mobile or digital tools?",
    options: [
      { id: "5a", text: "Very comfortable → digital", category: "village" },
      { id: "5b", text: "Somewhat comfortable → digital", category: "town" },
      { id: "5c", text: "Need help but willing to learn → self_study", category: "metro" },
      { id: "5d", text: "Anywhere in India", category: "india" },
      { id: "5e", text: "Prefer offline/manual work → local_institutio", category: "abroad" }
    ]
  }
];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isComplete, setIsComplete] = useState(false);

  const handleNext = () => {
    if (selectedOption) {
      setAnswers({ ...answers, [currentQuestion]: selectedOption });

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setIsComplete(true);
      }
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[currentQuestion - 1] || null);
    }
  };

  const progress = ((currentQuestion) / questions.length) * 100;

  return (
    <>
      <Navbar />
      <div className="container py-12 min-h-[calc(100vh-4rem-10rem)]">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">{t("title")}</h1>

          {!isComplete ? (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">
                    {t("question")} {currentQuestion + 1} {t("of")} {questions.length}
                  </span>
                  <span className="text-sm font-medium">{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
                <CardTitle className="mt-4">{questions[currentQuestion].text}</CardTitle>
                <CardDescription>{t("choose_option")}</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup value={selectedOption || ""} onValueChange={setSelectedOption}>
                  {questions[currentQuestion].options.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2 py-2">
                      <RadioGroupItem value={option.id} id={option.id} />
                      <Label htmlFor={option.id} className="flex-grow cursor-pointer">
                        {option.text}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={handleBack} disabled={currentQuestion === 0}>
                  {t("back")}
                </Button>
                <Button onClick={handleNext} disabled={!selectedOption}>
                  {currentQuestion === questions.length - 1 ? t("finish") : t("next")}
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>{t("complete_title")}</CardTitle>
                <CardDescription>{t("complete_desc")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center mb-6">{t("complete_msg")}</p>
                <div className="flex justify-center">
                  <Button asChild>
                    <Link to="/pathways">{t("view_recommendations")}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Assessment;
