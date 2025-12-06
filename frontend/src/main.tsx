import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./context/ThemeProvider";
import "./i18n"; // ✅ initializes i18n

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n"; // ✅ import configured i18n instance

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <ThemeProvider>
    
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
</ThemeProvider>
    
  </React.StrictMode>
);
