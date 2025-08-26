import ContentWrapper from "../ContentWrapper";
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
            className="group inline-flex items-center justify-center rounded-full text-base font-medium bg-[#071b31] text-white hover:bg-[#c0e0f6] hover:text-[#071b31] transition-all duration-300 ease-in-out h-12 px-8 py-3 shadow-sm w-full sm:w-auto"
          >
            Book a free consultation
            <ArrowRight className="group-hover:translate-x-1.5 transition-all duration-300 ease-in-out ml-2 h-5 w-5" />
          </Link>
        </div>
        <div className="flex-1 hidden lg:block">
          <picture>
            <source
              type="image/webp"
              srcSet="/hero.webp 1x, /hero@2x.webp 2x, /hero@3x.webp 3x"
            />
            <source
              type="image/jpeg"
              srcSet="/hero.jpg 1x, /hero@2x.jpg 2x, /hero@3x.jpg 3x"
            />
            <img
              className="w-full h-full object-cover"
              src="/hero.jpg"
              alt="Team of four people in a modern office having a brainstorming session with a whiteboard covered in sticky notes"
            />
          </picture>
        </div>
      </main>
    </ContentWrapper>
  );
};

export default Hero;
