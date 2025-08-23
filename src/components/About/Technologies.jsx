import ContentWrapper from "@/components/Home/ContentWrapper";
import BlueGlow from "@/components/Home/BlueGlow";

const Technologies = () => {
  return (
    <ContentWrapper>
      <section className="mb-7 sm:mb-8 md:mb-9 lg:mb-10">
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm p-8 md:p-12">
          <div className="mb-6 md:mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Technologies we work with
            </h2>
            <p className="text-base md:text-lg text-gray-600 mt-3 mb-10">
              Our core platforms, with the flexibility to adapt to other
              technologies when your project needs it.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            <BlueGlow>
              <div className="flex items-center justify-center h-14 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 font-semibold">
                ReactJS
              </div>
            </BlueGlow>
            <BlueGlow>
              <div className="flex items-center justify-center h-14 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 font-semibold">
                NodeJS
              </div>
            </BlueGlow>
            <BlueGlow>
              <div className="flex items-center justify-center h-14 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 font-semibold">
                ExpressJS
              </div>
            </BlueGlow>
            <BlueGlow>
              <div className="flex items-center justify-center h-14 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 font-semibold">
                NextJS
              </div>
            </BlueGlow>
            <BlueGlow>
              <div className="flex items-center justify-center h-14 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 font-semibold">
                MongoDB
              </div>
            </BlueGlow>
            <BlueGlow>
              <div className="flex items-center justify-center h-14 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 font-semibold">
                Firebase
              </div>
            </BlueGlow>
            <BlueGlow>
              <div className="flex items-center justify-center h-14 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 font-semibold">
                OpenAI
              </div>
            </BlueGlow>
            <BlueGlow>
              <div className="flex items-center justify-center h-14 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 font-semibold">
                Google
              </div>
            </BlueGlow>
            <BlueGlow>
              <div className="flex items-center justify-center h-14 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 font-semibold">
                Vercel
              </div>
            </BlueGlow>
            <BlueGlow>
              <div className="flex items-center justify-center h-14 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 font-semibold">
                AWS
              </div>
            </BlueGlow>
            <BlueGlow>
              <div className="flex items-center justify-center h-14 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 font-semibold">
                WordPress
              </div>
            </BlueGlow>
            <BlueGlow>
              <div className="flex items-center justify-center h-14 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 font-semibold">
                Figma
              </div>
            </BlueGlow>
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
};

export default Technologies;
