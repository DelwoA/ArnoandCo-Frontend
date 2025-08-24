import { Link } from "react-router-dom";
import ContentWrapper from "@/components/ContentWrapper.jsx";
import { Sparkles, CheckCircle, Mail, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const GetStartedComingSoonPage = () => {
  return (
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
                need, align on scope, and move forward with clarity. A private,
                modern space to collaborate and get work underway — simple,
                secure, and designed for momentum.
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
              <img
                className="w-full h-[460px] object-cover rounded-2xl"
                src="get-started-now-coming-soon.jpg"
                alt="Get started coming soon"
              />
            </div>
          </div>
        </section>
      </ContentWrapper>
    </main>
  );
};

export default GetStartedComingSoonPage;
