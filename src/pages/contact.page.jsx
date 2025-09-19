import HeroContact from "@/components/Contact/HeroContact";
import ContentWrapper from "@/components/ContentWrapper";
import MessageForm from "@/components/Contact/MessageForm";
import ConnectWithUs from "@/components/Contact/ConnectWithUs";
import WhyChoose from "@/components/Contact/WhyChoose";
import DirectContact from "@/components/Contact/DirectContact";

const ContactPage = () => {
  return (
    <>
      <title>
        Contact Us - Arno & Co. | Start Your Website, App, or AI Project
      </title>
      <meta
        name="description"
        content="Contact Arno & Co. (Arno and Co.) to start your website, app, or AI project. Fast replies (48h). Serving small businesses in Sri Lanka and across the USA."
      />
      <link rel="canonical" href="https://www.arnoandco.com/contact" />

      {/* Open Graph for Facebook / LinkedIn / WhatsApp */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Arno & Co." />
      <meta
        property="og:title"
        content="Contact Us - Arno & Co. | Start Your Website, App, or AI Project"
      />
      <meta
        property="og:description"
        content="Contact Arno & Co. (Arno and Co.) to start your website, app, or AI project. Fast replies (48h). Serving small businesses in Sri Lanka and across the USA."
      />
      <meta property="og:url" content="https://www.arnoandco.com/contact" />

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
        content="Contact Us - Arno & Co. | Start Your Website, App, or AI Project"
      />
      <meta
        name="twitter:description"
        content="Contact Arno & Co. (Arno and Co.) to start your website, app, or AI project. Fast replies (48h). Serving small businesses in Sri Lanka and across the USA."
      />
      <meta
        name="twitter:image"
        content="https://www.arnoandco.com/logo-url-preview.jpg"
      />
      <meta property="og:locale" content="en_US" />

      <HeroContact />
      <ContentWrapper>
        <section className="bg-white rounded-3xl overflow-hidden mb-7 sm:mb-8 md:mb-9 lg:mb-12 shadow-sm">
          <div className="p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 min-[980px]:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-8 lg:gap-13.5">
              <div>
                <MessageForm />
                <WhyChoose />
              </div>
              <div className="space-y-6">
                <ConnectWithUs />

                <DirectContact />
              </div>
            </div>
          </div>
        </section>
      </ContentWrapper>
    </>
  );
};

export default ContactPage;
