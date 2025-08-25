import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Mail, MessageSquare } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1380px]">
          <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-30">
            {/* Brand and contacts (left column of links) */}
            <div className="col-span-1 md:col-span-1 ml-5">
              <Link to="/" className="inline-block mb-2">
                <img
                  src="/logo-secondary-transparent.png"
                  alt="Arno & Co. Logo"
                  className="h-[72px]"
                />
              </Link>
              <p className="text-gray-400 text-sm mt-2">
                Tailored web development services for businesses of all sizes.
              </p>
              <div className="mt-4 flex space-x-4">
                <a
                  href="mailto:hello@company.com"
                  className="text-gray-400 hover:text-white"
                >
                  <Mail size={20} />
                  <span className="sr-only">Email</span>
                </a>
                <a
                  href="https://wa.me/1234567890"
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
              <nav aria-label="Company" className="ml-8">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                  Company
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/"
                      className="text-gray-400 hover:text-white text-sm"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="text-gray-400 hover:text-white text-sm"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="text-gray-400 hover:text-white text-sm"
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
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                  Services
                </h3>
                <ul className="space-y-2">
                  <li>
                    <HashLink
                      smooth
                      to="/#websites"
                      className="text-gray-400 hover:text-white text-sm"
                    >
                      Websites
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      smooth
                      to="/#web-applications"
                      className="text-gray-400 hover:text-white text-sm"
                    >
                      Web Applications
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      smooth
                      to="/#mobile-applications"
                      className="text-gray-400 hover:text-white text-sm"
                    >
                      Mobile Applications
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      smooth
                      to="/#ai-web-mobile-applications"
                      className="text-gray-400 hover:text-white text-sm"
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
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                  Policies
                </h3>
                <ul className="space-y-2">
                  <li>
                    <HashLink
                      smooth
                      to="/terms-and-conditions#"
                      className="text-gray-400 hover:text-white text-sm"
                    >
                      Terms &amp; Conditions
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      smooth
                      to="/terms-and-conditions#privacy-policy"
                      className="text-gray-400 hover:text-white text-sm"
                    >
                      Privacy Policy
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      smooth
                      to="/terms-and-conditions#payment-policy"
                      className="text-gray-400 hover:text-white text-sm"
                    >
                      Payment Policy
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      smooth
                      to="/terms-and-conditions#refund-policy"
                      className="text-gray-400 hover:text-white text-sm"
                    >
                      Refund Policy
                    </HashLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="border-t border-gray-800 py-6">
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
