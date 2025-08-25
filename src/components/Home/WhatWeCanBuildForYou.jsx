import { useState } from "react";
import { Check, X, ArrowRight } from "lucide-react";
import Modal from "../Modal";
import ContentWrapper from "../ContentWrapper";
import BlueGlow from "../BlueGlow";

const WhatWeCanBuildForYou = () => {
  const [openWebsites, setOpenWebsites] = useState(false);
  const [openWebApps, setOpenWebApps] = useState(false);
  const [openMobileApps, setOpenMobileApps] = useState(false);
  const [openAIApps, setOpenAIApps] = useState(false);

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
            {/* 01 - Websites */}
            <BlueGlow
              rounded="rounded-2xl"
              scale={openWebsites ? "transform-none" : "hover:scale-105"}
            >
              <div
                id="websites"
                className="group relative overflow-hidden bg-gray-50 rounded-2xl p-6 flex flex-col border border-gray-200 cursor-pointer scroll-mt-31"
                onClick={(e) => {
                  e.stopPropagation();
                  if (openWebsites) return;
                  setOpenWebsites(true);
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    e.stopPropagation();
                    if (openWebsites) return;
                    setOpenWebsites(true);
                  }
                }}
              >
                <div className="flex justify-end mb-4">
                  <span className="text-3xl font-bold text-black">01</span>
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">Websites</h3>
                <p className="text-gray-700 mb-4">
                  Professional websites that represent your brand and make it
                  easy for customers to contact you.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      Responsive on phones, tablets, and desktops
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      SEO-friendly pages and clean structure
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      Fast loading for less drop-off
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      Contact forms and lead capture
                    </span>
                  </li>
                </ul>
                <div className="mt-auto">
                  <button
                    type="button"
                    onClick={() => setOpenWebsites(true)}
                    className="inline-flex items-center text-black group-hover:underline font-medium"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>

                {openWebsites && (
                  <Modal
                    open={openWebsites}
                    onClose={() => setOpenWebsites(false)}
                  >
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-2xl font-bold text-black">
                            Websites
                          </h3>
                          <button
                            type="button"
                            onClick={() => setOpenWebsites(false)}
                            className="text-gray-500 hover:text-gray-700"
                            aria-label="Close dialog"
                          >
                            <X className="h-5 w-5" />
                          </button>
                        </div>
                        <p className="text-gray-700 mb-4">
                          Professional websites that represent your brand and
                          make it easy for customers to contact you.
                        </p>
                        <div className="mb-4">
                          <h4 className="font-medium text-black mb-2">
                            What we deliver:
                          </h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">
                                Responsive on phones, tablets, and desktops
                              </span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">
                                SEO-friendly pages and clean structure
                              </span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">
                                Fast loading for less drop-off
                              </span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">
                                Contact forms and lead capture
                              </span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">
                                Optional blog/CMS to edit content yourself
                              </span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">
                                Analytics and visitor tracking set up
                              </span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">
                                Secure hosting guidance, backups, and basic
                                protection
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="mt-6">
                          <button
                            type="button"
                            onClick={() => setOpenWebsites(false)}
                            className="inline-flex items-center justify-center rounded-full text-sm font-medium bg-black text-white hover:bg-gray-900 transition-colors h-9 px-5"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </Modal>
                )}
              </div>
            </BlueGlow>

            {/* 02 - Web Applications */}
            <BlueGlow rounded="rounded-2xl">
              <div
                id="web-applications"
                className="group relative overflow-hidden bg-gray-50 rounded-2xl p-6 flex flex-col border border-gray-200 cursor-pointer scroll-mt-31"
                onClick={(e) => {
                  e.stopPropagation();
                  if (openWebApps) return;
                  setOpenWebApps(true);
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    e.stopPropagation();
                    if (openWebApps) return;
                    setOpenWebApps(true);
                  }
                }}
              >
                <div className="flex justify-end mb-4">
                  <span className="text-3xl font-bold text-black">02</span>
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">
                  Web Applications
                </h3>
                <p className="text-gray-700 mb-4">
                  Custom web tools and dashboards that save time and help you
                  run the business.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">User logins and roles</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      Admin dashboards and reports
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      Online payments and subscriptions (Stripe)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      File and image handling (Cloudinary)
                    </span>
                  </li>
                </ul>
                <div className="mt-auto">
                  <button
                    type="button"
                    onClick={() => setOpenWebApps(true)}
                    className="inline-flex items-center text-black group-hover:underline font-medium"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>

                {openWebApps && (
                  <Modal
                    open={openWebApps}
                    onClose={() => setOpenWebApps(false)}
                  >
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-2xl font-bold text-black">
                            Web Applications
                          </h3>
                          <button
                            type="button"
                            onClick={() => setOpenWebApps(false)}
                            className="text-gray-500 hover:text-gray-700"
                            aria-label="Close dialog"
                          >
                            <X className="h-5 w-5" />
                          </button>
                        </div>
                        <p className="text-gray-700 mb-4">
                          Custom web tools and dashboards that save time and
                          help you run the business.
                        </p>
                        <div className="mb-4">
                          <h4 className="font-medium text-black mb-2">
                            What we deliver:
                          </h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">
                                User logins and roles
                              </span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">
                                Admin dashboards and reports
                              </span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">
                                Online payments and subscriptions (Stripe)
                              </span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">
                                File and image handling (Cloudinary)
                              </span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">
                                Email and notifications (Brevo/Nodemailer)
                              </span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">
                                Integrations with your existing systems and APIs
                              </span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">
                                Audit logs and basic permissions
                              </span>
                            </li>
                          </ul>
                        </div>
                        <p className="text-gray-700 italic">
                          Examples: quotes, bookings, internal tools
                        </p>
                        <div className="mt-6">
                          <button
                            type="button"
                            onClick={() => setOpenWebApps(false)}
                            className="inline-flex items-center justify-center rounded-full text-sm font-medium bg-black text-white hover:bg-gray-900 transition-colors h-9 px-5"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </Modal>
                )}
              </div>
            </BlueGlow>

            {/* 03 - Mobile Applications */}
            <BlueGlow rounded="rounded-2xl">
              <div
                id="mobile-applications"
                className="group relative overflow-hidden bg-gray-50 rounded-2xl p-6 flex flex-col border border-gray-200 cursor-pointer scroll-mt-55"
                onClick={(e) => {
                  e.stopPropagation();
                  if (openMobileApps) return;
                  setOpenMobileApps(true);
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    e.stopPropagation();
                    if (openMobileApps) return;
                    setOpenMobileApps(true);
                  }
                }}
              >
                <div className="flex justify-end mb-4">
                  <span className="text-3xl font-bold text-black">03</span>
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">
                  Mobile Applications
                </h3>
                <p className="text-gray-700 mb-4">
                  User-friendly apps that work smoothly and look clean.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      Cross-platform or PWA approach based on need
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      Clear, simple screens for easy use
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      Push notifications for updates
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      Offline-friendly where helpful
                    </span>
                  </li>
                </ul>
                <div className="mt-auto">
                  <button
                    type="button"
                    onClick={() => setOpenMobileApps(true)}
                    className="inline-flex items-center text-black group-hover:underline font-medium"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>

                {openMobileApps && (
                  <Modal
                    open={openMobileApps}
                    onClose={() => setOpenMobileApps(false)}
                  >
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-2xl font-bold text-black">
                            Mobile Applications
                          </h3>
                          <button
                            type="button"
                            onClick={() => setOpenMobileApps(false)}
                            className="text-gray-500 hover:text-gray-700"
                            aria-label="Close dialog"
                          >
                            <X className="h-5 w-5" />
                          </button>
                        </div>
                        <p className="text-gray-700 mb-4">
                          User-friendly apps that work smoothly and look clean.
                        </p>
                        <div className="mb-4">
                          <h4 className="font-medium text-black mb-2">
                            What we deliver:
                          </h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">
                                Cross-platform or PWA approach based on need
                              </span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">
                                Clear, simple screens for easy use
                              </span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">
                                Push notifications for updates
                              </span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">
                                Offline-friendly where helpful
                              </span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">
                                App store submission guidance if required
                              </span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">
                                Basic analytics for usage
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="mt-6">
                          <button
                            type="button"
                            onClick={() => setOpenMobileApps(false)}
                            className="inline-flex items-center justify-center rounded-full text-sm font-medium bg-black text-white hover:bg-gray-900 transition-colors h-9 px-5"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </Modal>
                )}
              </div>
            </BlueGlow>

            {/* 04 - AI Web/Mobile Applications */}
            <BlueGlow rounded="rounded-2xl">
              <div
                id="ai-web-mobile-applications"
                className="group relative overflow-hidden bg-gray-50 rounded-2xl p-6 flex flex-col border border-gray-200 cursor-pointer scroll-mt-55"
                onClick={(e) => {
                  e.stopPropagation();
                  if (openAIApps) return;
                  setOpenAIApps(true);
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    e.stopPropagation();
                    if (openAIApps) return;
                    setOpenAIApps(true);
                  }
                }}
              >
                <div className="flex justify-end mb-4">
                  <span className="text-3xl font-bold text-black">04</span>
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">
                  AI Web/Mobile Applications
                </h3>
                <p className="text-gray-700 mb-4">
                  Smart features to make your site or app more helpful and
                  automated.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      Smart search and recommendations
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      Chat assistants for FAQs and support
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      Automatic data entry/classification from forms
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      Content help (summaries, drafts) where appropriate
                    </span>
                  </li>
                </ul>
                <div className="mt-auto">
                  <button
                    type="button"
                    onClick={() => setOpenAIApps(true)}
                    className="inline-flex items-center text-black group-hover:underline font-medium"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>

                {openAIApps && (
                  <Modal open={openAIApps} onClose={() => setOpenAIApps(false)}>
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-2xl font-bold text-black">
                            AI Web/Mobile Applications
                          </h3>
                          <button
                            type="button"
                            onClick={() => setOpenAIApps(false)}
                            className="text-gray-500 hover:text-gray-700"
                            aria-label="Close dialog"
                          >
                            <X className="h-5 w-5" />
                          </button>
                        </div>
                        <p className="text-gray-700 mb-4">
                          Smart features to make your site or app more helpful
                          and automated.
                        </p>
                        <div className="mb-4">
                          <h4 className="font-medium text-black mb-2">
                            What we deliver:
                          </h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">
                                Smart search and recommendations
                              </span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">
                                Chat assistants for FAQs and support
                              </span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">
                                Automatic data entry/classification from forms
                              </span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">
                                Content help (summaries, drafts) where
                                appropriate
                              </span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">
                                Voice or text processing when needed
                              </span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">
                                Clear metrics and opt-in controls
                              </span>
                            </li>
                          </ul>
                        </div>
                        <p className="text-gray-700 italic">
                          Example: find the right product faster
                        </p>
                        <div className="mt-6">
                          <button
                            type="button"
                            onClick={() => setOpenAIApps(false)}
                            className="inline-flex items-center justify-center rounded-full text-sm font-medium bg-black text-white hover:bg-gray-900 transition-colors h-9 px-5"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </Modal>
                )}
              </div>
            </BlueGlow>
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
};

export default WhatWeCanBuildForYou;
