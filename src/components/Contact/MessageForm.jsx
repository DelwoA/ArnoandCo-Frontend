import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const MessageForm = () => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!values.fullName.trim()) next.fullName = "Please enter your full name";
    if (
      !values.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)
    ) {
      next.email = "Enter a valid email address";
    }
    if (!values.phone.trim() || !/^\+?[0-9\s()\-]{7,}$/.test(values.phone)) {
      next.phone = "Include country code, e.g. +94 74 239 1833";
    }
    if (!values.subject.trim() || values.subject.trim().length < 3) {
      next.subject = "Subject must be at least 3 characters";
    }
    if (!values.message.trim() || values.message.trim().length < 10) {
      next.message = "Message must be at least 10 characters";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    // Simulate submission; keep console for now
    // eslint-disable-next-line no-console
    console.log("Contact submission", values);
    setValues(initialState);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
        Send us a message
      </h2>
      <p className="text-gray-600 mt-2 text-sm md:text-base">
        We’ll get back to you within 1–2 business days.
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Full Name
          </label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            value={values.fullName}
            onChange={handleChange}
            aria-invalid={errors.fullName ? "true" : "false"}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className="rounded-full bg-gray-50 border-gray-200 focus-visible:ring-[#c0e0f6] focus-visible:border-[#071b31]"
            placeholder="Jane Doe"
            required
          />
          {errors.fullName && (
            <p id="fullName-error" className="text-xs text-red-600 mt-1">
              {errors.fullName}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 min-[560px]:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
              className="rounded-full bg-gray-50 border-gray-200 focus-visible:ring-[#c0e0f6] focus-visible:border-[#071b31]"
              placeholder="jane@example.com"
              required
            />
            {errors.email && (
              <p id="email-error" className="text-xs text-red-600 mt-1">
                {errors.email}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              pattern="\+?[0-9\s()\-]{7,}"
              value={values.phone}
              onChange={handleChange}
              aria-invalid={errors.phone ? "true" : "false"}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className="rounded-full bg-gray-50 border-gray-200 focus-visible:ring-[#c0e0f6] focus-visible:border-[#071b31]"
              placeholder="+94 74 239 1833"
              required
            />
            {errors.phone && (
              <p id="phone-error" className="text-xs text-red-600 mt-1">
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Subject
          </label>
          <Input
            id="subject"
            name="subject"
            type="text"
            value={values.subject}
            onChange={handleChange}
            aria-invalid={errors.subject ? "true" : "false"}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            className="rounded-full bg-gray-50 border-gray-200 focus-visible:ring-[#c0e0f6] focus-visible:border-[#071b31]"
            placeholder="e.g., Website redesign inquiry"
            required
          />
          {errors.subject && (
            <p id="subject-error" className="text-xs text-red-600 mt-1">
              {errors.subject}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            value={values.message}
            onChange={handleChange}
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-error" : undefined}
            className="rounded-2xl bg-gray-50 border-gray-200 focus-visible:ring-[#c0e0f6] focus-visible:border-[#071b31] min-h-36"
            placeholder="Share a few details about your project, timeline, and goals."
            required
          />
          {errors.message && (
            <p id="message-error" className="text-xs text-red-600 mt-1">
              {errors.message}
            </p>
          )}
        </div>

        <div className="flex items-center gap-3 pt-2">
          <Button
            type="submit"
            className="rounded-full h-12 w-full text-base bg-[#071b31] text-white hover:bg-[#c0e0f6] hover:text-[#071b31] transition-all duration-200 ease-in-out shadow-sm"
          >
            <Send className="w-4 h-4 mr-1" />
            Send Message
          </Button>
          {submitted && (
            <span className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-full px-3 py-1">
              Thanks! We'll be in touch shortly.
            </span>
          )}
        </div>
      </form>
    </div>
  );
};

export default MessageForm;
