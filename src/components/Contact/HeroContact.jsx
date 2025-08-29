import ContentWrapper from "@/components/ContentWrapper";
import { ArrowRight } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import Reveal from "@/components/animations/Reveal";

const HeroContact = () => {
  return (
    <ContentWrapper>
      <header className="bg-white rounded-3xl overflow-hidden mt-10 sm:mt-11 md:mt-12 lg:mt-13 mb-7 sm:mb-8 md:mb-9 lg:mb-10 shadow-sm flex flex-col lg:flex-row">
        <Reveal direction="up" trigger="mount">
          <div className="p-8 md:p-12 lg:p-16 flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              Contact Us
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mb-8">
              Let’s talk about your goals and how we can help bring your ideas
              to life. Reach out with your project details, and we’ll reply
              within 48 hours with the next steps.
            </p>
            <HashLink
              smooth
              to="#message-form"
              className="group inline-flex items-center justify-center rounded-full text-base font-medium bg-[#071b31] text-white hover:bg-[#c0e0f6] hover:text-[#071b31] transition-all duration-300 ease-in-out h-12 px-8 py-3 shadow-sm w-full sm:w-auto"
            >
              Get in touch with us
              <ArrowRight className="group-hover:translate-x-1.5 transition-all duration-300 ease-in-out ml-2 h-5 w-5" />
            </HashLink>
          </div>
        </Reveal>
        <Reveal direction="right" trigger="mount">
          <div className="flex-1 hidden lg:block">
            <picture>
              <source
                type="image/webp"
                srcSet="/hero-contact.webp 1x, /hero-contact@2x.webp 2x, /hero-contact@3x.webp 3x"
              />
              <source
                type="image/jpeg"
                srcSet="/hero-contact.jpg 1x, /hero-contact@2x.jpg 2x, /hero-contact@3x.jpg 3x"
              />
              <img
                className="w-full h-full object-cover"
                src="/hero-contact.jpg"
                alt="Minimalist workspace with a wooden desk, an open laptop, and a wireless mouse next to a modern white chair"
              />
            </picture>
          </div>
        </Reveal>
      </header>
    </ContentWrapper>
  );
};

export default HeroContact;
