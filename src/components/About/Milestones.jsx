import ContentWrapper from "@/components/Home/ContentWrapper";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Milestones = () => {
  return (
    <ContentWrapper>
      <section className="bg-white rounded-3xl overflow-hidden mb-7 sm:mb-8 md:mb-9 lg:mb-10 shadow-sm">
        <div className="p-8 md:p-12">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Milestones
            </h2>
            <p className="text-base md:text-lg text-gray-600 mt-1">
              A few highlights from our journey
            </p>
          </div>

          {/* Desktop two-column timeline */}
          <div className="hidden md:grid grid-cols-2 gap-x-8 relative">
            {/* Center timeline line and dots for md+ */}
            <div
              className="hidden md:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-gray-500"
              aria-hidden="true"
            />
            <div
              className="hidden md:flex absolute inset-y-8 left-1/2 -translate-x-1/2 flex-col items-center justify-between"
              aria-hidden="true"
            >
              <span className="w-3 h-3 rounded-full bg-blue-400" />
              <span className="w-3 h-3 rounded-full bg-blue-500" />
              <span className="w-3 h-3 rounded-full bg-blue-600" />
              <span className="w-3 h-3 rounded-full bg-blue-700" />
            </div>
            <div className="pr-6 text-right space-y-8">
              <div>
                <h3 className="text-lg font-bold text-black">
                  Founded with a clear vision
                </h3>
                <p className="text-gray-600 mt-1">
                  Established Arno & Co. to build fast, reliable digital
                  products.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-black">
                  Launched our first platform
                </h3>
                <p className="text-gray-600 mt-1">
                  Delivered a client‑ready product with modern UX and
                  performance.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-black">
                  Expanded capabilities
                </h3>
                <p className="text-gray-600 mt-1">
                  Introduced AI‑assisted features and scalable architecture
                  patterns.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-black">
                  Partnerships and growth
                </h3>
                <p className="text-gray-600 mt-1">
                  Built long‑term collaborations focused on measurable outcomes.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <DotLottieReact
                className="min-w-[608px] w-full object-cover scale-116"
                src="https://lottie.host/0919a9b4-40e2-4372-b29e-90eca0ba4414/JPMfRhpGG0.lottie"
                loop
                autoplay
              />
            </div>

            <div className="pl-6" />
          </div>

          {/* Mobile vertical list */}
          <div className="md:hidden space-y-6">
            <div>
              <h3 className="text-lg font-bold text-black">
                Founded with a clear vision
              </h3>
              <p className="text-gray-600 mt-1">
                Established Arno & Co. to build fast, reliable digital products.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-black">
                Launched our first platform
              </h3>
              <p className="text-gray-600 mt-1">
                Delivered a client‑ready product with modern UX and performance.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-black">
                Expanded capabilities
              </h3>
              <p className="text-gray-600 mt-1">
                Introduced AI‑assisted features and scalable architecture
                patterns.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-black">
                Partnerships and growth
              </h3>
              <p className="text-gray-600 mt-1">
                Built long‑term collaborations focused on measurable outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
};

export default Milestones;
