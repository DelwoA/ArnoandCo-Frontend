import { useState } from "react";
import { Check, X, ArrowRight } from "lucide-react";
import ContentWrapper from "../ContentWrapper";
import BlueGlow from "../BlueGlow";

const WhatWeCanBuildForYou = () => {
  const [openDialog, setOpenDialog] = useState(null);

  const services = [
    {
      number: "01",
      title: "Websites",
      description:
        "Professional websites that represent your brand and make it easy for customers to contact you.",
      features: [
        "Responsive on phones, tablets, and desktops",
        "SEO-friendly pages and clean structure",
        "Fast loading for less drop-off",
        "Contact forms and lead capture",
        "Optional blog/CMS to edit content yourself",
        "Analytics and visitor tracking set up",
        "Secure hosting guidance, backups, and basic protection",
      ],
    },
    {
      number: "02",
      title: "Web Applications",
      description:
        "Custom web tools and dashboards that save time and help you run the business.",
      features: [
        "User logins and roles",
        "Admin dashboards and reports",
        "Online payments and subscriptions (Stripe)",
        "File and image handling (Cloudinary)",
        "Email and notifications (Brevo/Nodemailer)",
        "Integrations with your existing systems and APIs",
        "Audit logs and basic permissions",
      ],
      example: "Examples: quotes, bookings, internal tools",
    },
    {
      number: "03",
      title: "Mobile Applications",
      description: "User-friendly apps that work smoothly and look clean.",
      features: [
        "Cross-platform or PWA approach based on need",
        "Clear, simple screens for easy use",
        "Push notifications for updates",
        "Offline-friendly where helpful",
        "App store submission guidance if required",
        "Basic analytics for usage",
      ],
    },
    {
      number: "04",
      title: "AI Web/Mobile Applications",
      description:
        "Smart features to make your site or app more helpful and automated.",
      features: [
        "Smart search and recommendations",
        "Chat assistants for FAQs and support",
        "Automatic data entry/classification from forms",
        "Content help (summaries, drafts) where appropriate",
        "Voice or text processing when needed",
        "Clear metrics and opt-in controls",
      ],
      example: "Example: find the right product faster",
    },
  ];

  return (
    <ContentWrapper>
      {/* Outer section dimensions are intentionally untouched */}
      <section className="bg-white rounded-3xl overflow-hidden mb-7 sm:mb-8 md:mb-9 lg:mb-10 shadow-sm flex flex-col lg:flex-row">
        {/* Inner container to control padding and grid without affecting outer layout */}
        <div className="p-8 md:p-12 lg:p-16 w-full">
          <div className="mb-8 md:mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
              What we can build for you
            </h2>
            <p className="text-base md:text-lg text-gray-600 mt-2">
              Tailored digital solutions to help your business grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <BlueGlow key={service.title} rounded="rounded-2xl">
                <div className="group relative overflow-hidden bg-gray-50 rounded-2xl p-6 flex flex-col border border-gray-200">
                  <div className="flex justify-end mb-4">
                    <span className="text-3xl font-bold text-black">
                      {service.number}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <button
                      type="button"
                      onClick={() => setOpenDialog(index)}
                      className="inline-flex items-center text-black hover:underline font-medium"
                    >
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>

                  {openDialog === index && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-2xl font-bold text-black">
                            {service.title}
                          </h3>
                          <button
                            type="button"
                            onClick={() => setOpenDialog(null)}
                            className="text-gray-500 hover:text-gray-700"
                            aria-label="Close dialog"
                          >
                            <X className="h-5 w-5" />
                          </button>
                        </div>
                        <p className="text-gray-700 mb-4">
                          {service.description}
                        </p>
                        <div className="mb-4">
                          <h4 className="font-medium text-black mb-2">
                            What we deliver:
                          </h4>
                          <ul className="space-y-2">
                            {service.features.map((feature) => (
                              <li key={feature} className="flex items-start">
                                <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {service.example && (
                          <p className="text-gray-700 italic">
                            {service.example}
                          </p>
                        )}
                        <div className="mt-6">
                          <button
                            type="button"
                            onClick={() => setOpenDialog(null)}
                            className="inline-flex items-center justify-center rounded-full text-sm font-medium bg-black text-white hover:bg-gray-900 transition-colors h-9 px-5"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </BlueGlow>
            ))}
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
};

export default WhatWeCanBuildForYou;
