import ContentWrapper from "./ContentWrapper";
import { Search, Tag, MapPin, Check } from "lucide-react";

const BeSeenOnGoogle = () => {
  const metrics = [
    {
      icon: Search,
      title: "Found pages",
      before: 0,
      after: 10,
      description: "Pages Google can actually index.",
    },
    {
      icon: Tag,
      title: "Keywords on page 1",
      before: 0,
      after: 8,
      description: "Search phrases where you now appear.",
    },
    {
      icon: MapPin,
      title: "On Google Maps",
      before: "No",
      after: "Yes",
      description: "Customers can tap for directions.",
    },
  ];

  return (
    <ContentWrapper>
      <section className="bg-white rounded-3xl overflow-hidden mt-13 mb-10 shadow-sm">
        <div className="p-8 md:p-12">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Be seen on Google
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              Here's what changes when Google can actually find you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {metrics.map((metric) => (
              <div
                key={metric.title}
                className="bg-gray-50 rounded-xl p-6 flex flex-col items-center"
              >
                <div className="bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center mb-4 ring-1 ring-blue-100">
                  <metric.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-black mb-3 text-center">
                  {metric.title}
                </h3>
                <div className="flex items-center justify-center space-x-3 mb-3">
                  <span className="text-gray-700 font-medium text-lg">
                    {metric.before}
                  </span>
                  <span className="text-gray-400">→</span>
                  <div className="flex items-center">
                    <span className="text-blue-600 font-bold text-lg">
                      {metric.after}
                    </span>
                    <Check className="h-4 w-4 text-blue-600 ml-1" />
                  </div>
                </div>
                <p className="text-sm text-slate-600 text-center">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
};

export default BeSeenOnGoogle;
