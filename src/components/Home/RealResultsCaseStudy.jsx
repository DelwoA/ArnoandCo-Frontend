import ContentWrapper from "./ContentWrapper";
import { ArrowRight } from "lucide-react";

const RealResultsCaseStudy = () => {
  const cases = [
    {
      problem: "No website or online menu.\nHard to find on Google.",
      solution:
        "Fast site with searchable menu, photos, hours, reviews.\nGoogle Business Profile to appear on Maps.",
      result: "+40% more inquiries in 60 days",
    },
    {
      problem:
        "5-step checkout, account required.\nHigh drop-off & abandoned carts.",
      solution:
        "2-step checkout with guest + address autofill.\nApple/Google/Shop Pay; upfront shipping & tax.",
      result: "25% fewer cart abandonments",
    },
    {
      problem: "Back-and-forth emails, double-bookings.\nNo reminders.",
      solution:
        "Online booking; calendar sync & time buffers.\nDeposits + automated confirmations & reminders.",
      result: "Saved 15 hours per week on admin tasks",
    },
  ];

  return (
    <ContentWrapper>
      <section className="bg-white rounded-3xl overflow-hidden mb-7 sm:mb-8 md:mb-9 lg:mb-10 shadow-sm">
        <div className="p-8 md:p-12">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Real results
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              How our solutions have helped real businesses
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {cases.map((c) => (
              <div
                key={c.result}
                className="bg-gray-50 rounded-xl p-6 hover:scale-[1.035] transition-all duration-300 h-full"
              >
                {/* 5-row grid keeps arrows aligned across cards at lg+ */}
                <div className="grid grid-rows-[auto_1.25rem_auto_1.25rem_auto] h-full">
                  {/* Problem (equalized height at lg) */}
                  <div className="space-y-2 lg:min-h-[96px]">
                    <h3 className="text-sm font-medium text-gray-500">
                      Problem
                    </h3>
                    <p className="text-black font-medium whitespace-pre-line">
                      {c.problem}
                    </p>
                  </div>

                  {/* Arrow row (fixed height) */}
                  <div className="flex items-center justify-center">
                    <ArrowRight className="h-5 w-5 text-gray-400" />
                  </div>

                  {/* What we did (equalized height at lg) */}
                  <div className="space-y-2 lg:min-h-[112px]">
                    <h3 className="text-sm font-medium text-gray-500">
                      What we did
                    </h3>
                    <p className="text-black font-medium whitespace-pre-line">
                      {c.solution}
                    </p>
                  </div>

                  {/* Arrow row (fixed height) */}
                  <div className="flex items-center justify-center">
                    <ArrowRight className="h-5 w-5 text-gray-400" />
                  </div>

                  {/* Result */}
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-gray-500">
                      Result
                    </h3>
                    <p className="text-[#2566a7] font-bold">{c.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
};

export default RealResultsCaseStudy;
