import ContentWrapper from "@/components/Home/ContentWrapper";

const Trust = () => {
  return (
    <ContentWrapper>
      <section className="mb-7 sm:mb-8 md:mb-9 lg:mb-10">
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm p-8 md:p-12">
          <div className="mb-6 md:mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Trusted by forward‑thinking teams
            </h2>
            <p className="text-base md:text-lg text-gray-600 mt-2">
              Selected platforms we work with
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            <div className="flex items-center justify-center h-14 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 font-semibold">
              ReactJS
            </div>
            <div className="flex items-center justify-center h-14 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 font-semibold">
              NodeJS
            </div>
            <div className="flex items-center justify-center h-14 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 font-semibold">
              ExpressJS
            </div>
            <div className="flex items-center justify-center h-14 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 font-semibold">
              NextJS
            </div>
            <div className="flex items-center justify-center h-14 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 font-semibold">
              MongoDB
            </div>
            <div className="flex items-center justify-center h-14 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 font-semibold">
              Firebase
            </div>
            <div className="flex items-center justify-center h-14 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 font-semibold">
              OpenAI
            </div>
            <div className="flex items-center justify-center h-14 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 font-semibold">
              Google
            </div>
            <div className="flex items-center justify-center h-14 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 font-semibold">
              Vercel
            </div>
            <div className="flex items-center justify-center h-14 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 font-semibold">
              AWS
            </div>
            <div className="flex items-center justify-center h-14 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 font-semibold">
              WordPress
            </div>
            <div className="flex items-center justify-center h-14 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 font-semibold">
              Figma
            </div>
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
};

export default Trust;
