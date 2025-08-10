import ContentWrapper from "./ContentWrapper";
import { ArrowRight } from "lucide-react";

const RealResultsCaseStudy = () => {
  const cases = [
    {
      problem: "Local restaurant with no online presence",
      solution: "Created website with online menu and reservation system",
      result: "+38% more inquiries in 60 days",
    },
    {
      problem: "E-commerce store with complicated checkout",
      solution: "Simplified checkout process from 5 steps to 2",
      result: "22% fewer cart abandonments",
    },
    {
      problem: "Service business with manual booking process",
      solution: "Implemented automated scheduling system",
      result: "Saved 15 hours per week on admin tasks",
    },
  ];

  return (
    <ContentWrapper>
      <section className="bg-white rounded-3xl overflow-hidden mb-10 shadow-sm">
        <div className="p-8 md:p-12">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Real results
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              How our solutions have helped real businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cases.map((caseStudy) => (
              <div key={caseStudy.result} className="bg-gray-50 rounded-xl p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">
                      Problem
                    </h3>
                    <p className="text-black font-medium">
                      {caseStudy.problem}
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <ArrowRight className="h-5 w-5 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">
                      What we did
                    </h3>
                    <p className="text-black font-medium">
                      {caseStudy.solution}
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <ArrowRight className="h-5 w-5 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">
                      Result
                    </h3>
                    <p className="text-blue-600 font-bold">
                      {caseStudy.result}
                    </p>
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
