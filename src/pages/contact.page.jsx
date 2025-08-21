import HeroContact from "@/components/Contact/HeroContact";
import ContentWrapper from "@/components/Home/ContentWrapper";
import MessageForm from "@/components/Contact/MessageForm";
import ConnectWithUs from "@/components/Contact/ConnectWithUs";
import WhyChoose from "@/components/Contact/WhyChoose";
import DirectContact from "@/components/Contact/DirectContact";

const ContactPage = () => {
  return (
    <>
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
