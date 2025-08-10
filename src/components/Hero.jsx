import ContentWrapper from "./ContentWrapper";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <ContentWrapper>
      <main className="bg-white rounded-3xl overflow-hidden mt-10 sm:mt-11 md:mt-12 lg:mt-13 mb-7 sm:mb-8 md:mb-9 lg:mb-10 shadow-sm flex flex-col lg:flex-row">
        <div className="p-8 md:p-12 lg:p-16 flex-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
            We build great digital products and AI solutions.
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl">
            We partner with enterprises, startups, and governments worldwide to
            develop cutting-edge technology products and Artificial Intelligence
            solutions that help them achieve their goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full text-base font-medium bg-[#FACC15] text-black hover:bg-[#F59E0B] transition-all h-12 px-8 py-3 shadow-sm w-full sm:w-auto"
          >
            Book a free consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
        <div className="flex-1 hidden lg:block">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
            alt="Digital solutions"
          />
        </div>
      </main>
    </ContentWrapper>
  );
};

export default Hero;
