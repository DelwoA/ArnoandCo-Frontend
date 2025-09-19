import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";

const LimitedSpecialPage = () => {
  return (
    <>
      <title>Limited Special — Digital Products & Bundles | Arno & Co.</title>
      <meta
        name="description"
        content="Limited-time offers from Arno & Co.—websites, apps, and AI digital bundles built fast and affordable. Join the waitlist or claim today's deal."
      />
      <meta name="robots" content="noindex,follow" />
      <link rel="canonical" href="https://www.arnoandco.com/limited-special" />

      {/* Open Graph for Facebook / LinkedIn / WhatsApp */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Arno & Co." />
      <meta
        property="og:title"
        content="Limited Special — Digital Products & Bundles | Arno & Co."
      />
      <meta
        property="og:description"
        content="Limited-time offers from Arno & Co.—websites, apps, and AI digital bundles built fast and affordable. Join the waitlist or claim today's deal."
      />
      <meta
        property="og:url"
        content="https://www.arnoandco.com/limited-special"
      />

      {/* Recommended image: 1200×630 PNG/JPG; absolute URL */}
      <meta
        property="og:image"
        content="https://www.arnoandco.com/logo-url-preview.jpg"
      />
      <meta property="og:image:alt" content="Arno & Co. Logo." />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Limited Special — Digital Products & Bundles | Arno & Co."
      />
      <meta
        name="twitter:description"
        content="Limited-time offers from Arno & Co.—websites, apps, and AI digital bundles built fast and affordable. Join the waitlist or claim today's deal."
      />
      <meta
        name="twitter:image"
        content="https://www.arnoandco.com/logo-url-preview.jpg"
      />
      <meta property="og:locale" content="en_US" />

      <main className="px-4 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-[1344px] mt-15 md:mt-18 lg:mt-20">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
              No limited specials right now
            </h1>
            <p className="mt-3 text-slate-600 text-sm sm:text-base md:text-lg">
              We’ll announce the next one here — check back soon.
            </p>

            <div className="mt-8 flex items-center justify-center gap-3">
              <Link
                to="/"
                className="inline-flex items-center px-5 sm:px-6 py-3 text-sm sm:text-base rounded-full bg-[#071b31] text-white hover:bg-slate-700 hover:text-white transition-all duration-300 ease-in-out"
              >
                Go to Home
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-5 py-3 text-sm sm:text-base sm:px-5 sm:py-3 rounded-full border text-[#071b31] bg-white hover:bg-[#c0e0f6] hover:text-[#071b31] ring-1 ring-black/10 hover:ring-[#c0e0f6]/70 transition-all duration-300 ease-in-out"
              >
                <Mail className="w-4 h-4 mr-2" /> Contact us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default LimitedSpecialPage;
