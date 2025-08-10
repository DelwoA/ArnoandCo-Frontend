import ContentWrapper from "./ContentWrapper";
import { X, Check } from "lucide-react";

const ComparisonCards = () => {
  const noWebsitePoints = [
    "Hard to find by potential customers",
    "Messages get lost or delayed",
    "No proof of quality or reputation",
    "Limited business hours for inquiries",
    "Manual appointment booking process",
  ];

  const withArnoPoints = [
    "Easy to find on Google searches",
    "Messages go directly to your inbox",
    "Reviews and testimonials on your site",
    "24/7 information and contact options",
    "Automated booking and scheduling",
  ];

  return (
    <ContentWrapper>
      <section className="mb-7 sm:mb-8 md:mb-9 lg:mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* No website */}
          <div className="bg-white rounded-3xl shadow-sm p-8 md:p-10">
            <h3 className="text-2xl font-bold text-black mb-6">No Website</h3>
            <ul className="space-y-4">
              {noWebsitePoints.map((point) => (
                <li key={point} className="flex items-start">
                  <div className="flex-shrink-0 bg-red-100 rounded-full p-1 mr-3">
                    <X className="h-5 w-5 text-red-600" />
                  </div>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-700 font-medium">
                Leads each month: <span className="text-red-600">1–2</span>
              </p>
            </div>
          </div>

          {/* With Arno & Co. */}
          <div className="bg-white rounded-3xl shadow-sm p-8 md:p-10">
            <h3 className="text-2xl font-bold text-black mb-6">
              Website with Arno & Co.
            </h3>
            <ul className="space-y-4">
              {withArnoPoints.map((point) => (
                <li key={point} className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 rounded-full p-1 mr-3">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-700 font-medium">
                Leads each month: <span className="text-green-600">3–10</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
};

export default ComparisonCards;
