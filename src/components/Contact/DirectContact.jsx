import { Mail, Phone } from "lucide-react";

const DirectContact = () => {
  return (
    <section className="rounded-2xl border border-black/5 shadow-sm p-6 bg-white">
      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-black">
        Direct Contact
      </h3>
      <div className="mt-4 space-y-4">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
            <Mail className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <p className="text-sm text-gray-600">Email</p>
            <a
              href="mailto:hello@arnoandco.com"
              className="text-[#071b31] font-medium hover:underline focus:underline focus:outline-none"
            >
              hello@arnoandco.com
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
            <Phone className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <p className="text-sm text-gray-600">Phone</p>
            <a
              href="tel:+94742391833"
              className="text-[#071b31] font-medium hover:underline focus:underline focus:outline-none"
            >
              +94 (74) 239 1833
            </a>
          </div>
        </div>

        <p className="text-sm text-gray-700 pt-2">
          We’ll get back to you within 48 hours.
        </p>
      </div>
    </section>
  );
};

export default DirectContact;
