import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { API_URL } from "@/api/config";

const ForgotPassword = () => {
  const { t, i18n } = useTranslation(); // ✅ Added i18n
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
       await axios.post(`${API_URL}/api/auth/forgot-password`, { email, lang: i18n.language });


      setMessage(t("forgotPassword.success"));
    } catch (err) {
      setMessage(t("forgotPassword.error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="p-8 rounded-lg shadow-md bg-card w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-3">
          {t("forgotPassword.title")}
        </h2>
        <p className="text-center text-muted-foreground mb-6">
          {t("forgotPassword.description")}
        </p>

        <form onSubmit={handleForgotPassword} className="space-y-4">
          <input
            type="email"
            placeholder={t("forgotPassword.emailPlaceholder")}
            className="w-full px-4 py-2 border rounded-md bg-background"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "..." : t("forgotPassword.sendButton")}
          </Button>
        </form>

        {message && <p className="text-center mt-4 text-sm">{message}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
