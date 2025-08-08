import ContentWrapper from "./ContentWrapper";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

const PricingCards = () => {
  const packages = [
    {
      title: "Launch Website",
      price: "from $2,500",
      features: [
        "5 pages",
        "Contact form",
        "Mobile responsive",
        "SEO setup",
        "Analytics integration",
      ],
    },
    {
      title: "Custom App",
      price: "from $5,000",
      features: [
        "Custom functionality",
        "User accounts",
        "Payment processing",
        "Admin dashboard",
        "API integrations",
      ],
    },
    {
      title: "Ongoing Growth",
      price: "from $500/mo",
      features: [
        "Content updates",
        "SEO optimization",
        "Performance monitoring",
        "Security updates",
        "Technical support",
      ],
    },
  ];

  return (
    <ContentWrapper>
      <section className="bg-white rounded-3xl overflow-hidden mt-13 mb-10 shadow-sm">
        <div className="p-8 md:p-12">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Clear starting prices
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              Transparent pricing with no hidden fees
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.title}
                className="bg-gray-50 rounded-xl p-6 flex flex-col"
              >
                <h3 className="text-xl font-bold text-black mb-2">
                  {pkg.title}
                </h3>
                <p className="text-2xl font-bold text-black mb-6">
                  {pkg.price}
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
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
            ))}
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
};

export default PricingCards;
