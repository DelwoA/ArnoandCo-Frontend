import ContentWrapper from "@/components/ContentWrapper";
import { Check } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Mission = () => {
  return (
    <ContentWrapper>
      <section className="bg-white rounded-3xl overflow-hidden mb-7 sm:mb-8 md:mb-9 lg:mb-10 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
          <div>
            <div className="mb-4">
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mt-1">Why we build</p>
            </div>
            <div className="max-w-3xl">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-green-100 rounded-full p-1 mr-3 mt-1">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  We started with a clear goal to deliver modern, dependable
                  digital products that help businesses grow.
                </p>
              </div>
              <div className="flex items-start mt-5">
                <div className="flex-shrink-0 bg-green-100 rounded-full p-1 mr-3 mt-1">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Today, we design and build from the ground up—combining
                  thoughtful UX (User Experience) with solid engineering so
                  every release is stable, scalable, and fast.
                </p>
              </div>
              <div className="flex items-start mt-5">
                <div className="flex-shrink-0 bg-green-100 rounded-full p-1 mr-3 mt-1">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Our approach is simple: understand the problem, choose the
                  right technology, ship quality, and keep improving. It’s a
                  partnership built on clarity, transparency, and results.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <DotLottieReact
              className="w-110 md:min-w-[622px] md:w-full object-cover md:px-18 lg:px-10 pt-5 md:pt-10"
              src="https://lottie.host/6acd3fa8-e536-4654-bc2a-8ac055ce1fe6/4wJ7EmGUM3.lottie"
              loop
              autoplay
            />
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
};

export default Mission;
