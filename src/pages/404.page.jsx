import { Link } from "react-router-dom";
import { ArrowRight, Home, Info, Briefcase, Mail } from "lucide-react";
import ContentWrapper from "@/components/ContentWrapper";

const NotFoundPage = () => {
  return (
    <section className="flex items-center justify-center px-4 sm:px-6 lg:px-8 h-screen">
      <div className="flex-1">
        <ContentWrapper>
          <div className="pt-10 sm:pt-12 lg:pt-14 mb-14">
            <div className="bg-white rounded-3xl shadow-sm ring-1 ring-black/5 overflow-hidden">
              <div className="px-6 sm:px-10 lg:px-16 pt-13 pb-15 md:pt-13 md:pb-16 lg:pt-20 lg:pb-24">
                {/* Visual 404 marker */}
                <div className="mb-6 sm:mb-8">
                  <span className="inline-block text-6xl sm:text-7xl md:text-8xl font-extrabold leading-none bg-gradient-to-br from-[#071b31] via-[#0b2a4b] to-[#c0e0f6] bg-clip-text text-transparent select-none">
                    404
                  </span>
                </div>
                {/* Headline & Message */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight leading-tight">
                  Page not found
                </h1>
                <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl">
                  This page doesn’t exist or may have been moved. Let’s get you
                  back on track.
                </p>
                {/* Primary actions */}
                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
                  {/* Home - primary */}
                  <Link
                    to="/"
                    className="group inline-flex items-center justify-center rounded-full text-base font-medium bg-[#071b31] text-white hover:bg-slate-700 hover:text-white transition-all duration-300 ease-in-out h-12 px-6 sm:px-8 shadow-sm w-full sm:w-auto"
                  >
                    <Home className="h-5 w-5 mr-2 opacity-90" />
                    Go to Home
                    <ArrowRight className="group-hover:translate-x-1.5 transition-all duration-300 ease-in-out ml-2 h-5 w-5" />
                  </Link>
                  {/* About */}
                  <Link
                    to="/about"
                    className="inline-flex items-center justify-center rounded-full h-12 px-6 sm:px-8 text-base font-medium text-[#071b31] bg-white hover:bg-[#c0e0f6] hover:text-[#071b31] ring-1 ring-black/10 hover:ring-[#c0e0f6]/70 transition-all duration-300 ease-in-out shadow-sm w-full sm:w-auto"
                  >
                    <Info className="h-5 w-5 mr-2 opacity-90" />
                    About us
                  </Link>
                  {/* Products/Services - map to an existing route */}
                  {/* <Link
                    to="/limited-special"
                    className="inline-flex items-center justify-center rounded-full h-12 px-6 sm:px-8 text-base font-medium text-[#071b31] bg-white hover:bg-[#c0e0f6] hover:text-[#071b31] ring-1 ring-black/10 hover:ring-[#c0e0f6]/70 transition-all duration-300 ease-in-out shadow-sm w-full sm:w-auto"
                  >
                    <Briefcase className="h-5 w-5 mr-2 opacity-90" />
                    View Services
                  </Link> */}
                  {/* Contact */}
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-full h-12 px-6 sm:px-8 text-base font-medium text-[#071b31] bg-white hover:bg-[#c0e0f6] hover:text-[#071b31] ring-1 ring-black/10 hover:ring-[#c0e0f6]/70 transition-all duration-300 ease-in-out shadow-sm w-full sm:w-auto"
                  >
                    <Mail className="h-5 w-5 mr-2 opacity-90" />
                    Contact us
                  </Link>
                </div>
                {/* Helpful bit */}
                <p className="mt-6 text-sm text-gray-500">
                  If you typed the address, please check the spelling. Need
                  help?{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:hello@arnoandco.com"
                    className="underline decoration-[#c0e0f6] underline-offset-4 hover:text-[#071b31] transition-colors"
                  >
                    Report a broken link
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </ContentWrapper>
      </div>
    </section>
  );
};

export default NotFoundPage;
