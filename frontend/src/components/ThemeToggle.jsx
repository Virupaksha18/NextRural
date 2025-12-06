import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  // ✅ Apply theme instantly and persist
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // ✅ Sync theme if route changes (React Router)
  useEffect(() => {
    const handleStorage = () => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme && savedTheme !== theme) {
        setTheme(savedTheme);
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [theme]);

  return (
    <Button
      variant={theme === "dark" ? "outline" : "secondary"}
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className={`transition-all border ${
        theme === "dark"
          ? "border-gray-600 bg-gray-800 hover:bg-gray-700"
          : "border-gray-300 bg-white hover:bg-gray-100"
      }`}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 text-blue-600" />
      )}
    </Button>
  );
};

export default ThemeToggle;
