import ContentWrapper from "@/components/ContentWrapper";
import BlueGlow from "@/components/BlueGlow";
import Reveal from "@/components/animations/Reveal";
import Stagger from "@/components/animations/Stagger";

const Technologies = () => {
  return (
    <ContentWrapper>
      <section className="mb-7 sm:mb-8 md:mb-9 lg:mb-10">
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm p-8 md:p-12">
          <Reveal direction="down">
            <div className="mb-6 md:mb-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                Technologies we work with
              </h2>
              <p className="text-base md:text-lg text-gray-600 mt-3 mb-10">
                Our core platforms, with the flexibility to adapt to other
                technologies when your project needs it.
              </p>
            </div>
          </Reveal>

          <Stagger>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
              <Reveal direction="right">
                <BlueGlow>
                  <div className="flex items-center justify-center h-14 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 font-semibold">
                    ReactJS
                  </div>
                </BlueGlow>
              </Reveal>
              <Reveal direction="left">
                <BlueGlow>
                  <div className="flex items-center justify-center h-14 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 font-semibold">
                    NodeJS
                  </div>
                </BlueGlow>
              </Reveal>
              <Reveal direction="right">
                <BlueGlow>
                  <div className="flex items-center justify-center h-14 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 font-semibold">
                    ExpressJS
                  </div>
                </BlueGlow>
              </Reveal>
              <Reveal direction="left">
                <BlueGlow>
                  <div className="flex items-center justify-center h-14 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 font-semibold">
                    NextJS
                  </div>
                </BlueGlow>
              </Reveal>
              <Reveal direction="right">
                <BlueGlow>
                  <div className="flex items-center justify-center h-14 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 font-semibold">
                    MongoDB
                  </div>
                </BlueGlow>
              </Reveal>
              <Reveal direction="left">
                <BlueGlow>
                  <div className="flex items-center justify-center h-14 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 font-semibold">
                    Firebase
                  </div>
                </BlueGlow>
              </Reveal>
              <Reveal direction="right">
                <BlueGlow>
                  <div className="flex items-center justify-center h-14 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 font-semibold">
                    OpenAI
                  </div>
                </BlueGlow>
              </Reveal>
              <Reveal direction="left">
                <BlueGlow>
                  <div className="flex items-center justify-center h-14 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 font-semibold">
                    Google
                  </div>
                </BlueGlow>
              </Reveal>
              <Reveal direction="right">
                <BlueGlow>
                  <div className="flex items-center justify-center h-14 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 font-semibold">
                    Vercel
                  </div>
                </BlueGlow>
              </Reveal>
              <Reveal direction="left">
                <BlueGlow>
                  <div className="flex items-center justify-center h-14 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 font-semibold">
                    AWS
                  </div>
                </BlueGlow>
              </Reveal>
              <Reveal direction="right">
                <BlueGlow>
                  <div className="flex items-center justify-center h-14 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 font-semibold">
                    WordPress
                  </div>
                </BlueGlow>
              </Reveal>
              <Reveal direction="left">
                <BlueGlow>
                  <div className="flex items-center justify-center h-14 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 font-semibold">
                    Figma
                  </div>
                </BlueGlow>
              </Reveal>
            </div>
          </Stagger>
        </div>
      </section>
    </ContentWrapper>
  );
};

export default Technologies;
