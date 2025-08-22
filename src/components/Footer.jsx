import { Link } from "react-router-dom";
import { Mail, MessageSquare } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1380px]">
          <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand and contacts */}
            <div className="col-span-1 md:col-span-1">
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

            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                Services
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Web Applications
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Mobile Applications
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Artificial Intelligence
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Cloud Solutions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/portfolio"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Portfolio
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
            </div>

            {/* Policies */}
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                Policies
              </h3>
              <ul className="space-y-2">
                <li>
                  <details className="text-gray-400 text-sm">
                    <summary className="cursor-pointer hover:text-white">
                      Payment Structure
                    </summary>
                    <p className="mt-2 pl-4 text-xs text-gray-500">
                      50% upfront and 50% on project completion
                    </p>
                  </details>
                </li>
                <li>
                  <details className="text-gray-400 text-sm">
                    <summary className="cursor-pointer hover:text-white">
                      Refund Policy
                    </summary>
                    <p className="mt-2 pl-4 text-xs text-gray-500">
                      Eligible within 24 hours of advance payment
                    </p>
                  </details>
                </li>
                <li>
                  <details className="text-gray-400 text-sm">
                    <summary className="cursor-pointer hover:text-white">
                      Privacy Policy
                    </summary>
                    <p className="mt-2 pl-4 text-xs text-gray-500">
                      We prioritize your data security and privacy
                    </p>
                  </details>
                </li>
              </ul>
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
