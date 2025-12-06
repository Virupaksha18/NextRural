import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Compass, Menu, ChevronDown } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { useRef } from "react"; // also add this to Navbar import



const Navbar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showResources, setShowResources] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <header className="border-b bg-background/95 backdrop-blur sticky top-0 z-40">
      <div className="container flex h-16 items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Compass className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">{t("Career-Guidance")}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
  <Link to="/assessment" className="nav-link">{t("Assessment")}</Link>
  <Link to="/pathways" className="nav-link">{t("Careerpaths")}</Link>
  <Link to="/skills" className="nav-link">{t("Skills")}</Link>

  {/* Resources Dropdown (Click only version from earlier) */}
  <div className="relative" ref={dropdownRef}>
    <button
      onClick={() => setShowResources((prev) => !prev)}
      className="nav-link flex items-center gap-1"
    >
      {t("Resources")}
      <ChevronDown
        className={`h-4 w-4 transition-transform duration-200 ${showResources ? "rotate-180" : ""}`}
      />
    </button>

    <div
      className={`absolute left-0 mt-2 w-44 bg-card border rounded-md shadow-lg p-2 z-50 transition-all duration-200 origin-top
      ${showResources ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}`}
    >
      {isLoggedIn ? (
        <Link
          to="/schemes"
          className="block px-3 py-2 rounded hover:bg-primary/10 transition"
          onClick={() => setShowResources(false)}
        >
          {t("FindSchemes")}
        </Link>
        
      ) : (
        <p className="text-sm text-muted-foreground px-3 py-2">
          {t("PleaseLoginToAccess")}
        </p>
      )}
    </div>
  </div>
  <Link to="/ai-features" className="nav-link">
    {t("AI-Features")}
  </Link>

  <Link to="/developers" className="nav-link">
    {t("developers.title")}
  </Link>
</nav>

        {/* Language Switch */}
        <div className="hidden md:flex items-center gap-2">
          <Button
            variant={i18n.language === "en" ? "default" : "outline"}
            size="sm"
            onClick={() => i18n.changeLanguage("en")}
          >
            English
          </Button>

          <Button
            variant={i18n.language === "kn" ? "default" : "outline"}
            size="sm"
            onClick={() => i18n.changeLanguage("kn")}
          >
            ಕನ್ನಡ
          </Button>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {!isLoggedIn ? (
            <>
              <Button asChild variant="outline" size="sm">
                <Link to="/login">{t("Login")}</Link>
              </Button>
              <Button asChild size="sm">
                <Link to="/signup">{t("Register")}</Link>
              </Button>
            </>
          ) : (
            <Button onClick={handleLogout} variant="destructive" size="sm">
              {t("Logout")}
            </Button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(true)}>
          <Menu className="h-6 w-6" />
        </button>

        <MobileMenu
          isOpen={menuOpen}
          onClose={() => setMenuOpen(false)}
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
        />

      </div>
    </header>
  );
};

export default Navbar;
