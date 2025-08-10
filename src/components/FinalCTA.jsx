import ContentWrapper from "./ContentWrapper";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <ContentWrapper>
      <section className="pb-10">
        <div className="bg-black rounded-3xl overflow-hidden shadow-sm text-center p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's make your business easy to find and easy to buy from
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Start with a conversation about your goals and how we can help you
            achieve them
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full text-base font-medium bg-[#FACC15] text-black hover:bg-[#F59E0B] transition-all h-12 px-8 py-3 shadow-sm w-full sm:w-auto"
          >
            Book a free consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </ContentWrapper>
  );
};

export default FinalCTA;
