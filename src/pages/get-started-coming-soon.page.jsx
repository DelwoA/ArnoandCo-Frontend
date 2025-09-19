import { Link } from "react-router-dom";
import ContentWrapper from "@/components/ContentWrapper.jsx";
import { Sparkles, CheckCircle, Mail, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const GetStartedComingSoonPage = () => {
  return (
    <>
      <title>
        Get Started — Fast Project Kickoff (Coming Soon) | Arno & Co.
      </title>
      <meta
        name="description"
        content="Get started in minutes with Arno & Co. — a simple, secure platform to share goals, align scope, and launch projects fast with clear updates."
      />
      {/* When the feature is live, add: */}
      {/* <title>Get Started — Kick Off Your Project in Minutes | Arno & Co.</title>
      <meta
        name="description"
        content="Start your website, app, or AI project in minutes. Share goals and files, align on scope, and move with clear next steps in a secure workspace."
      /> */}

      {/* <meta name="robots" content="noindex,follow" /> */}
      <link rel="canonical" href="https://www.arnoandco.com/get-started-now" />

      {/* Open Graph for Facebook / LinkedIn / WhatsApp */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Arno & Co." />
      <meta
        property="og:title"
        content="Get Started — Fast Project Kickoff (Coming Soon) | Arno & Co."
      />
      <meta
        property="og:description"
        content="Get started in minutes with Arno & Co. — a simple, secure platform to share goals, align scope, and launch projects fast with clear updates."
      />
      <meta
        property="og:url"
        content="https://www.arnoandco.com/get-started-now"
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
        content="Get Started — Fast Project Kickoff (Coming Soon) | Arno & Co."
      />
      <meta
        name="twitter:description"
        content="Get started in minutes with Arno & Co. — a simple, secure platform to share goals, align scope, and launch projects fast with clear updates."
      />
      <meta
        name="twitter:image"
        content="https://www.arnoandco.com/logo-url-preview.jpg"
      />
      <meta property="og:locale" content="en_US" />

      <main>
        <ContentWrapper>
          <section className="mt-15 md:mt-16 lg:mt-20 mx-7">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-7 xl:gap-14">
              {/* Left: Copy */}
              <div>
                <Badge className="inline-flex items-center gap-2 px-4 py-1 h-8 rounded-full border-0 ring-0 ring-offset-0 bg-gradient-to-r from-blue-400 to-blue-600 text-white text-sm font-semibold">
                  <Sparkles className="!w-4 !h-4" /> Coming soon
                </Badge>

                <h1 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
                  Get started in minutes
                </h1>
                <p className="mt-3 text-slate-600 text-base md:text-lg max-w-[60ch]">
                  We’re cooking something great — a fast way to share what you
                  need, align on scope, and move forward with clarity. A
                  private, modern space to collaborate and get work underway —
                  simple, secure, and designed for momentum.
                </p>

                <ul className="mt-6 space-y-3 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-0.5 text-slate-500" />
                    Share your goals and files in one place
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-0.5 text-slate-500" />
                    Move fast with a guided kickoff and clear next steps
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-0.5 text-slate-500" />
                    Track progress with transparent updates
                  </li>
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  {/* Go to Home Button */}
                  <Link
                    to="/"
                    className="group inline-flex items-center justify-center rounded-full text-base font-medium bg-[#071b31] text-white hover:bg-slate-700 hover:text-white transition-all duration-300 ease-in-out h-12 px-6 sm:px-8 py-3 shadow-sm"
                  >
                    Go to Home
                    <ArrowRight className="group-hover:translate-x-1.5 transition-all duration-300 ease-in-out ml-2 h-5 w-5" />
                  </Link>

                  {/* Notify me Button */}
                  <a
                    href="mailto:hello@arnoandco.com?subject=Notify%20me%20about%20Get%20Started"
                    className="inline-flex items-center justify-center rounded-full h-12 px-6 sm:px-8 text-base font-medium text-[#071b31] bg-white hover:bg-[#c0e0f6] hover:text-[#071b31] ring-1 ring-black/10 hover:ring-[#c0e0f6]/70 transition-all duration-300 ease-in-out shadow-sm"
                  >
                    <Mail className="w-4 h-4 mr-2" /> Notify me
                  </a>
                </div>
              </div>

              {/* Right: Hero image styling consistent with other pages */}
              <div className="hidden lg:block">
                <picture>
                  <source
                    type="image/webp"
                    srcSet="/get-started-now-coming-soon.webp 1x, /get-started-now-coming-soon@2x.webp 2x, /get-started-now-coming-soon@3x.webp 3x"
                  />
                  <source
                    type="image/jpeg"
                    srcSet="/get-started-now-coming-soon.jpg 1x, /get-started-now-coming-soon@2x.jpg 2x, /get-started-now-coming-soon@3x.jpg 3x"
                  />
                  <img
                    className="w-full h-[460px] object-cover rounded-2xl"
                    src="/get-started-now-coming-soon.jpg"
                    alt="Loading screen graphic with a progress bar and the word 'Loading...' in pixelated font on a dark background"
                  />
                </picture>
              </div>
            </div>
          </section>
        </ContentWrapper>
      </main>
    </>
  );
};

export default GetStartedComingSoonPage;
