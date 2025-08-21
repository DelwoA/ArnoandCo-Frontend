import ContentWrapper from "@/components/Home/ContentWrapper";

const HeroContact = () => {
  return (
    <ContentWrapper>
      <header className="bg-white rounded-3xl overflow-hidden mt-10 sm:mt-11 md:mt-12 lg:mt-13 mb-7 sm:mb-8 md:mb-9 lg:mb-10 shadow-sm flex flex-col lg:flex-row">
        <div className="p-8 md:p-12 lg:p-16 flex-1">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 leading-tight">
              Contact Us
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl">
              Tell us a bit about your project or question.
            </p>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl">
              We usually reply within 1–2 business days.
            </p>
          </div>
        </div>
        <div className="flex-1 hidden lg:block">
          <img
            className="w-full h-full object-cover"
            src="/hero-contact.jpg"
            alt=""
          />
        </div>
      </header>
    </ContentWrapper>
  );
};

export default HeroContact;
