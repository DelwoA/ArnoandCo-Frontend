import ContentWrapper from "../ContentWrapper";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import BlueGlow from "../BlueGlow";

const PricingCards = () => {
  return (
    <ContentWrapper>
      <section className="bg-white rounded-3xl overflow-hidden mb-7 sm:mb-8 md:mb-9 lg:mb-10 shadow-sm">
        <div className="p-8 md:p-12">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Clear starting prices
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              Transparent pricing with no hidden fees
            </p>
          </div>

          <div className="grid grid-cols-1 min-[826px]:grid-cols-3 gap-6">
            {/* Card 1: Launch Website */}
            <BlueGlow>
              <div className="bg-gray-50 rounded-xl p-6 flex flex-col">
                <h3 className="text-xl font-bold text-black mb-2">
                  Launch Website
                </h3>
                <p className="text-2xl font-bold text-black mb-6">from $900</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">5 pages</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Contact form</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Mobile responsive</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">SEO setup</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Analytics integration</span>
                  </li>
                </ul>
                <div className="mt-auto">
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-black hover:underline font-medium"
                  >
                    Get a clear quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </BlueGlow>

            {/* Card 2: Custom App */}
            <BlueGlow>
              <div className="bg-gray-50 rounded-xl p-6 flex flex-col">
                <h3 className="text-xl font-bold text-black mb-2">
                  Custom App
                </h3>
                <p className="text-2xl font-bold text-black mb-6">
                  from $3,000
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Custom functionality</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">User accounts</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Payment processing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Admin dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">API integrations</span>
                  </li>
                </ul>
                <div className="mt-auto">
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-black hover:underline font-medium"
                  >
                    Get a clear quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </BlueGlow>

            {/* Card 3: Ongoing Growth */}
            <BlueGlow>
              <div className="bg-gray-50 rounded-xl p-6 flex flex-col">
                <h3 className="text-xl font-bold text-black mb-2">
                  Ongoing Growth
                </h3>
                <p className="text-2xl font-bold text-black mb-6">
                  from $200/mo
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Content updates</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">SEO optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      Performance monitoring
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Security updates</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Technical support</span>
                  </li>
                </ul>
                <div className="mt-auto">
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-black hover:underline font-medium"
                  >
                    Get a clear quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </BlueGlow>
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
};

export default PricingCards;
