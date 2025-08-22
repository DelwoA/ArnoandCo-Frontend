import ContentWrapper from "@/components/Home/ContentWrapper";
// import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { HashLink as Link } from "react-router-hash-link";

const HeroContact = () => {
  return (
    <ContentWrapper>
      <header className="bg-white rounded-3xl overflow-hidden mt-10 sm:mt-11 md:mt-12 lg:mt-13 mb-7 sm:mb-8 md:mb-9 lg:mb-10 shadow-sm flex flex-col lg:flex-row">
        <div className="p-8 md:p-12 lg:p-16 flex-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 leading-tight">
            Contact Us
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl">
            Tell us a bit about your project or question.
          </p>
          <p className="text-base mb-8 md:text-lg text-gray-600 max-w-2xl">
            We usually reply within 1–2 business days.
          </p>
          <Link
            smooth
            to="#message-form"
            scroll={(el) => {
              const yOffset = -188; // adjust this number for your navbar height
              const y =
                el.getBoundingClientRect().top + window.pageYOffset + yOffset;
              window.scrollTo({ top: y, behavior: "smooth" });
            }}
            className="group inline-flex items-center justify-center rounded-full text-base font-medium bg-[#071b31] text-white hover:bg-[#c0e0f6] hover:text-[#071b31] transition-all duration-300 ease-in-out h-12 px-8 py-3 shadow-sm w-full sm:w-auto"
          >
            Get in touch with us
            <ArrowRight className="group-hover:translate-x-1.5 transition-all duration-300 ease-in-out ml-2 h-5 w-5" />
          </Link>
        </div>
        <div className="flex-1 hidden lg:block">
          <img
            className="w-full h-full object-cover"
            src="/hero-contact.jpg"
            alt=""
          />
        </div>
      </header>
    </ContentWrapper>
  );
};

export default HeroContact;
