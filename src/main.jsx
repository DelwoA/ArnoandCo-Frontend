import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/home.page.jsx";
import AboutPage from "@/pages/about.page.jsx";
import PortfolioPage from "@/pages/portfolio.page.jsx";
import ContactPage from "@/pages/contact.page.jsx";
import GetStartedNowPage from "@/pages/get-started-now.page.jsx";
import LimitedSpecialPage from "@/pages/limited-special.page.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/get-started-now" element={<GetStartedNowPage />} />
        <Route path="/limited-special" element={<LimitedSpecialPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
