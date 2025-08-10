import ContentWrapper from "./ContentWrapper";
import { Gauge } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const FastSitesHelpSales = () => {
  return (
    <ContentWrapper>
      <section className="bg-white rounded-3xl overflow-hidden mb-10 shadow-sm">
        <div className="p-8 md:p-12">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Fast sites help sales
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              Speed is critical for keeping visitors engaged and converting
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-black mb-4">
                Target load time: under 3 seconds
              </h3>
              <p className="text-gray-700 mb-6">
                What that means: less waiting, more people stay on your site,
                and higher conversion rates
              </p>
              <div className="flex items-center justify-center">
                <Gauge className="h-24 w-24 text-green-500" />
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-black mb-4">
                Performance metrics we optimize
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Visual loading speed</span>
                    <span className="text-green-600 font-medium">
                      Excellent
                    </span>
                  </div>
                  <Progress
                    value={90}
                    className="h-3 bg-gray-200 [&_[data-slot=progress-indicator]]:bg-green-500"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    How quickly visitors see your content
                  </p>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Interactivity</span>
                    <span className="text-green-600 font-medium">
                      Very Good
                    </span>
                  </div>
                  <Progress
                    value={85}
                    className="h-3 bg-gray-200 [&_[data-slot=progress-indicator]]:bg-green-500"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    How quickly users can interact with your site
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
};

export default FastSitesHelpSales;
