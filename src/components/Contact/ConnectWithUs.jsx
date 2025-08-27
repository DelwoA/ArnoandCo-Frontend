import WhatsAppIcon from "@/components/Contact/WhatsAppIcon";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import Stagger from "@/components/animations/Stagger";

const ConnectWithUs = () => {
  return (
    <section className="bg-white rounded-2xl border border-black/5 shadow-sm pt-6 pb-8 px-6.5 sm:pt-8 sm:pb-10 sm:px-8.5">
      <Reveal direction="up">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">
          Connect with Us
        </h3>
        <p className="text-gray-600 mt-1 text-sm mb-4">
          Follow us on social media for the latest updates, product
          announcements, and more.
        </p>
      </Reveal>

      <Stagger>
        <div className="space-y-3">
          {/* Facebook */}
          <Reveal direction="up">
            <Link
              to="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center py-4 px-5 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200 group"
            >
              <div className="max-[411px]:w-10 max-[411px]:h-10 w-12 h-12 max-[411px]:min-w-10 max-[411px]:min-h-10  min-w-12 min-h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <Facebook className="max-[411px]:w-5 max-[411px]:h-5 w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Facebook</h3>
                <p className="text-sm text-gray-600">Follow us on Facebook</p>
              </div>
            </Link>
          </Reveal>

          {/* Instagram */}
          <Reveal direction="up">
            <Link
              to="https://www.instagram.com/arnoandcohq/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center py-4 px-5 rounded-lg transition-colors duration-200 group bg-gradient-to-br from-fuchsia-50 via-pink-50 to-rose-50 hover:from-fuchsia-100 hover:via-pink-100 hover:to-rose-100"
            >
              <div className="max-[411px]:w-10 max-[411px]:h-10 w-12 h-12 max-[411px]:min-w-10 max-[411px]:min-h-10  min-w-12 min-h-12 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-fuchsia-500 via-pink-500 to-rose-500">
                <Instagram className="max-[411px]:w-5 max-[411px]:h-5 w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Instagram</h3>
                <p className="text-sm text-gray-600">Follow us on Instagram</p>
              </div>
            </Link>
          </Reveal>

          {/* LinkedIn */}
          <Reveal direction="up">
            <Link
              to="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center py-4 px-5 bg-sky-50 rounded-lg hover:bg-sky-100 transition-colors duration-200 group"
            >
              <div className="max-[411px]:w-10 max-[411px]:h-10 w-12 h-12 max-[411px]:min-w-10 max-[411px]:min-h-10  min-w-12 min-h-12 bg-[#0A66C2] rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <Linkedin className="max-[411px]:w-5 max-[411px]:h-5 w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">LinkedIn</h3>
                <p className="text-sm text-gray-600">Follow us on LinkedIn</p>
              </div>
            </Link>
          </Reveal>

          {/* WhatsApp */}
          <Reveal direction="up">
            <Link
              to="https://wa.me/94742391833"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center py-4 px-5 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200 group"
            >
              <div className="max-[411px]:w-10 max-[411px]:h-10 w-12 h-12 max-[411px]:min-w-10 max-[411px]:min-h-10  min-w-12 min-h-12 bg-green-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <WhatsAppIcon
                  size={24}
                  className="max-[411px]:w-5 max-[411px]:h-5 w-6 h-6 text-white"
                />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                <p className="text-sm text-gray-600">Chat with us instantly</p>
              </div>
            </Link>
          </Reveal>
        </div>
      </Stagger>
    </section>
  );
};

export default ConnectWithUs;
