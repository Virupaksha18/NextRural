// src/components/MobileMenu.jsx
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";

const MobileMenu = ({ isOpen, onClose, isLoggedIn, onLogout }) => {
  const { t, i18n } = useTranslation();

  return (
    <div
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`fixed left-0 top-0 h-full w-64 bg-background shadow-lg border-r p-6 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button className="absolute top-4 right-4" onClick={onClose}>
          <X className="h-6 w-6" />
        </button>

        {/* Menu Items */}
        <nav className="flex flex-col gap-4 mt-10">
          <Link to="/" onClick={onClose}>{t("Home")}</Link>
          <Link to="/assessment" onClick={onClose}>{t("Assessment")}</Link>
          <Link to="/pathways" onClick={onClose}>{t("Careerpaths")}</Link>
          <Link to="/skills" onClick={onClose}>{t("Skills")}</Link>

          {/* Resources Dropdown → Show Schemes */}
          <Link to="/schemes" onClick={onClose}>{t("FindSchemes")}</Link>

          <Link to="/developers" onClick={onClose}>{t("developers.title")}</Link>
        </nav>

        {/* Auth / Logout */}
        <div className="mt-8 border-t pt-4">
          {!isLoggedIn ? (
            <>
              <Link to="/login" onClick={onClose} className="block mb-3">
                {t("Login")}
              </Link>
              <Link to="/signup" onClick={onClose} className="block">
                {t("Register")}
              </Link>
            </>
          ) : (
            <button
              onClick={() => {
                onLogout();
                onClose();
              }}
              className="text-red-600 w-full text-left"
            >
              {t("Logout")}
            </button>
          )}
        </div>

        {/* Language Switch */}
        <div className="mt-6 flex gap-3">
          <button
            className={`${i18n.language === "en" ? "font-bold underline" : ""}`}
            onClick={() => i18n.changeLanguage("en")}
          >
            English
          </button>
          <button
            className={`${i18n.language === "kn" ? "font-bold underline" : ""}`}
            onClick={() => i18n.changeLanguage("kn")}
          >
            ಕನ್ನಡ
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
