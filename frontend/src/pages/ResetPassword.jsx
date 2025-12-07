import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const ResetPassword = () => {
  const { t } = useTranslation();
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setMessage(t("resetPassword.mismatch"));
    }

    try {
      await axios.post(`https://nextrural.onrender.com/api/auth/reset-password/${token}`, { password });
      setMessage(t("resetPassword.success"));
      setTimeout(() => navigate("/login"), 1500);
    } catch {
      setMessage(t("resetPassword.error"));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="p-8 rounded-lg shadow-md bg-card w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">{t("resetPassword.title")}</h2>

        <form onSubmit={handleReset} className="space-y-4">
          <input
            type="password"
            placeholder={t("resetPassword.newPassword")}
            className="w-full px-4 py-2 border rounded-md bg-background"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder={t("resetPassword.confirmPassword")}
            className="w-full px-4 py-2 border rounded-md bg-background"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <Button type="submit" className="w-full">
            {t("resetPassword.resetButton")}
          </Button>
        </form>

        {message && <p className="text-center mt-4 text-sm">{message}</p>}
      </div>
    </div>
  );
};

export default ResetPassword;
