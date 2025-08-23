import ContentWrapper from "@/components/ContentWrapper";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const BottomCTA = () => {
  return (
    <ContentWrapper>
      <section className="pb-7 sm:pb-8 md:pb-9 lg:pb-10">
        <div className="bg-gradient-to-r from-[#bbdcf2] to-[#4b9bf0] rounded-3xl overflow-hidden shadow-sm text-center p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Ready to work together?
          </h2>
          <p className="text-xl text-slate-700 mb-8 max-w-3xl mx-auto">
            Let’s build something high‑impact—fast, stable, and designed for
            results.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full group text-base font-medium bg-black text-white hover:bg-gray-800 h-12 px-8 py-3 shadow-sm w-full sm:w-auto"
          >
            Book a free consultation
            <ArrowRight className="ml-1 h-5 w-5 group-hover:translate-x-1.5 transition-all duration-300 ease-in-out" />
          </Link>
        </div>
      </section>
    </ContentWrapper>
  );
};

export default BottomCTA;
