import { StrictMode } from "react";
import ScrollToTop from "@/components/ScrollToTop.jsx";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RootLayout from "@/layout/root.layout.jsx";
import MainLayout from "@/layout/main.layout.jsx";

import HomePage from "@/pages/home.page.jsx";
import AboutPage from "@/pages/about.page.jsx";
// import PortfolioPage from "@/pages/portfolio.page.jsx";
import ContactPage from "@/pages/contact.page.jsx";
import GetStartedComingSoonPage from "@/pages/get-started-coming-soon.page.jsx";
import LimitedSpecialComingSoonPage from "@/pages/limited-special-coming-soon.page.jsx";
import NotFoundPage from "@/pages/404.page.jsx";
import TermsAndConditionsPage from "@/pages/terms-and-conditions.page.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<RootLayout />}>
          <Route element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            {/* <Route path="/portfolio" element={<PortfolioPage />} /> */}
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="/get-started-now"
              element={<GetStartedComingSoonPage />}
            />
            <Route
              path="/limited-special"
              element={<LimitedSpecialComingSoonPage />}
            />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditionsPage />}
            />
          </Route>

          {/* 404 Page - Catch all unmatched routes */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
