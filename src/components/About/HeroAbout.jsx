import ContentWrapper from "@/components/Home/ContentWrapper";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroAbout = () => {
  return (
    <ContentWrapper>
      <header className="bg-white rounded-3xl overflow-hidden mt-10 sm:mt-11 md:mt-12 lg:mt-13 mb-7 sm:mb-8 md:mb-9 lg:mb-10 shadow-sm flex flex-col lg:flex-row">
        <div className="p-8 md:p-12 lg:p-16 flex-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
            About Us
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl">
            We’re a focused team of engineers and designers dedicated to
            crafting websites, web apps, and AI-powered tools that are fast,
            reliable, and a pleasure to use.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center rounded-full text-base font-medium bg-[#071b31] text-white hover:bg-[#c0e0f6] hover:text-[#071b31] transition-all duration-300 ease-in-out h-12 px-8 py-3 shadow-sm w-full sm:w-auto"
          >
            Talk to us
            <ArrowRight className="group-hover:translate-x-1.5 transition-all duration-300 ease-in-out ml-2 h-5 w-5" />
          </Link>
        </div>
        <div className="flex-1 hidden lg:block">
          <img
            className="w-full h-full object-cover"
            src="/hero-about.jpg"
            alt="Our team collaborating in a modern workspace"
          />
        </div>
      </header>
    </ContentWrapper>
  );
};

export default HeroAbout;
