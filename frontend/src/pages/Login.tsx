import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import { login } from "@/api/auth";

const Login = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); // ✅ Move hook here (top level)

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = formData;
    const result = await login(email, password);

    if (result.message === "Login successful") {
      toast.success(t("LoginSuccess")); // ✅ Translated
      localStorage.setItem("token", result.token);
      localStorage.setItem("user", JSON.stringify(result.user));
      setTimeout(() => navigate("/"), 1500);
    } else {
      toast.error(t("LoginFailed")); // ✅ Translated
    }
  };

  return (
    <>
      <Navbar />
      <div className="container py-12 min-h-[calc(100vh-4rem-10rem)] flex items-center justify-center">
        <div className="w-full max-w-md">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{t("WelcomeBack")}</CardTitle>
              <CardDescription>{t("LoginSubtitle")}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
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
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">{t("Password")}</Label>
                    <Link
                      to="/forgot-password"
                      className="text-sm text-primary hover:underline"
                    >
                      {t("ForgotPassword")}
                    </Link>
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder={t("EnterPassword")}
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" className="w-full mt-6">
                  {t("Login")}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex justify-center">
              <div className="text-sm">
                {t("NoAccount")}{" "}
                <Link to="/signup" className="underline text-primary hover:text-primary/80">
                  {t("SignUp")}
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

export default Login;
