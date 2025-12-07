import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

const SignUp = () => {
  const { t } = useTranslation(); // ✅ Hook for bilingual support
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    education: "",
    location: "",
    district: "",
    state: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("https://nextrural.onrender.com/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(t("AccountCreated"));
        console.log("Registered user:", data);

        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);

        setFormData({
          name: "",
          email: "",
          password: "",
          age: "",
          gender: "",
          education: "",
          location: "",
          district: "",
          state: "",
        });
      } else {
        toast.error(`${t("RegistrationFailed")}: ${data.message || ""}`);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(t("ServerError"));
    }
  };

  return (
    <>
      <Navbar />
      <div className="container py-12 min-h-[calc(100vh-4rem-10rem)]">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{t("CreateAccount")}</CardTitle>
              <CardDescription>
                {t("SignUpSubtitle")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{t("FullName")}</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder={t("EnterFullName")}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{t("Email")}</Label>
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
                  <Label htmlFor="password">{t("Password")}</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder={t("CreatePassword")}
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="age">{t("Age")}</Label>
                    <Input
                      id="age"
                      name="age"
                      type="number"
                      placeholder={t("EnterAge")}
                      min="13"
                      max="100"
                      value={formData.age}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>{t("Gender")}</Label>
                    <RadioGroup
                      defaultValue={formData.gender}
                      onValueChange={handleSelectChange("gender")}
                      className="flex"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male">{t("Male")}</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female">{t("Female")}</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="education">{t("Education")}</Label>
                  <Select onValueChange={handleSelectChange("education")}>
                    <SelectTrigger>
                      <SelectValue placeholder={t("SelectEducation")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="below_10">{t("Below10")}</SelectItem>
                      <SelectItem value="10th_pass">{t("10thPass")}</SelectItem>
                      <SelectItem value="12th_pass">{t("12thPass")}</SelectItem>
                      <SelectItem value="diploma">{t("Diploma")}</SelectItem>
                      <SelectItem value="graduate">{t("Graduate")}</SelectItem>
                      <SelectItem value="postgraduate">{t("Postgraduate")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="state">{t("State")}</Label>
                  <Select onValueChange={handleSelectChange("state")}>
                    <SelectTrigger>
                      <SelectValue placeholder={t("SelectState")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="andhra_pradesh">{t("Andhra")}</SelectItem>
                      <SelectItem value="bihar">{t("Bihar")}</SelectItem>
                      <SelectItem value="gujarat">{t("Gujarat")}</SelectItem>
                      <SelectItem value="haryana">{t("Haryana")}</SelectItem>
                      <SelectItem value="karnataka">{t("Karnataka")}</SelectItem>
                      <SelectItem value="madhya_pradesh">{t("MadhyaPradesh")}</SelectItem>
                      <SelectItem value="maharashtra">{t("Maharashtra")}</SelectItem>
                      <SelectItem value="punjab">{t("Punjab")}</SelectItem>
                      <SelectItem value="rajasthan">{t("Rajasthan")}</SelectItem>
                      <SelectItem value="uttar_pradesh">{t("UttarPradesh")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="district">{t("District")}</Label>
                  <Input
                    id="district"
                    name="district"
                    placeholder={t("EnterDistrict")}
                    value={formData.district}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" className="w-full mt-6">
                  {t("CreateAccount")}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex justify-center flex-col space-y-2 text-center">
              <div className="text-sm text-muted-foreground">
                {t("AgreeTerms")}{" "}
                <Link to="/terms" className="underline text-primary">
                  {t("Terms")}
                </Link>{" "}
                {t("And")}{" "}
                <Link to="/privacy" className="underline text-primary">
                  {t("Privacy")}
                </Link>
              </div>
              <div className="text-sm">
                {t("AlreadyAccount")}{" "}
                <Link to="/login" className="underline text-primary">
                  {t("Login")}
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
