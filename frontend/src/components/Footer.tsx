import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // ✅ import

const Footer = () => {
  const { t } = useTranslation(); // ✅ initialize translation

  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-base font-semibold mb-2">{t("footer_title")}</h3>
            <p className="text-sm text-muted-foreground">
              {t("footer_tagline")}
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2">{t("footer_features")}</h3>
            <ul className="space-y-2">
              <li><Link to="/assessment" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("footer_career_assessment")}</Link></li>
              <li><Link to="/pathways" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("footer_career_pathways")}</Link></li>
              <li><Link to="/skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("footer_skill_development")}</Link></li>
              <li><Link to="/resources" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("footer_government_schemes")}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2">{t("footer_support")}</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("footer_help_center")}</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("footer_contact_us")}</Link></li>
              <li><Link to="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("footer_faq")}</Link></li>
              <li><Link to="/feedback" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("footer_feedback")}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2">{t("footer_legal")}</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("footer_terms")}</Link></li>
              <li><Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("footer_privacy")}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} {t("footer_copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
