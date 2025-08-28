import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Mail, MessageSquare } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-10 sm:px-10 md:px-8">
        <div className="mx-auto max-w-[1380px]">
          <div className="py-12 grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand and contacts (left column of links) */}
            <div className="col-span-1 md:col-span-1 mb-8 sm:mb-10 lg:mb-0">
              <Link to="/" className="inline-block mb-2">
                <img
                  src="/logo-secondary-transparent.png"
                  alt="Arno & Co. Logo"
                  className="h-[72px]"
                />
              </Link>
              <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                Tailored web development services for businesses of all sizes.
              </p>
              <div className="mt-4 flex items-center gap-4">
                <a
                  href="mailto:hello@arnoandco.com"
                  className="text-gray-400 hover:text-white"
                >
                  <Mail size={20} />
                  <span className="sr-only">Email</span>
                </a>
                <a
                  href="https://wa.me/94742391833"
                  className="text-gray-400 hover:text-white"
                >
                  <MessageSquare size={20} />
                  <span className="sr-only">WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right columns (three separate grid columns) */}
            <div>
              {/* Company */}
              <nav aria-label="Company">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-5">
                  Company
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/"
                      className="text-gray-400 hover:text-white text-sm leading-relaxed"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="text-gray-400 hover:text-white text-sm leading-relaxed"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="text-gray-400 hover:text-white text-sm leading-relaxed"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              {/* Services */}
              <nav aria-label="Services">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-5">
                  Services
                </h3>
                <ul className="space-y-3">
                  <li>
                    <HashLink
                      smooth
                      to="/#websites"
                      className="text-gray-400 hover:text-white text-sm leading-relaxed"
                    >
                      Websites
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      smooth
                      to="/#web-applications"
                      className="text-gray-400 hover:text-white text-sm leading-relaxed"
                    >
                      Web Applications
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      smooth
                      to="/#mobile-applications"
                      className="text-gray-400 hover:text-white text-sm leading-relaxed"
                    >
                      Mobile Applications
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      smooth
                      to="/#ai-web-mobile-applications"
                      className="text-gray-400 hover:text-white text-sm leading-relaxed"
                    >
                      AI Web/Mobile Applications
                    </HashLink>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              {/* Policies */}
              <nav aria-label="Policies">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-5">
                  Policies
                </h3>
                <ul className="space-y-3">
                  <li>
                    <HashLink
                      smooth
                      to="/terms-and-conditions#"
                      className="text-gray-400 hover:text-white text-sm leading-relaxed"
                    >
                      Terms &amp; Conditions
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      smooth
                      to="/terms-and-conditions#privacy-policy"
                      className="text-gray-400 hover:text-white text-sm leading-relaxed"
                    >
                      Privacy Policy
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      smooth
                      to="/terms-and-conditions#payment-policy"
                      className="text-gray-400 hover:text-white text-sm leading-relaxed"
                    >
                      Payment Policy
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      smooth
                      to="/terms-and-conditions#refund-policy"
                      className="text-gray-400 hover:text-white text-sm leading-relaxed"
                    >
                      Refund Policy
                    </HashLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 pb-6 sm:pt-7">
            <p className="text-center text-gray-500 text-xs">
              © {currentYear} Arno & Co. LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
