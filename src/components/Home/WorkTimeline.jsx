import ContentWrapper from "../ContentWrapper";

const WorkTimeline = () => {
  return (
    <ContentWrapper>
      <section className="bg-white rounded-3xl overflow-hidden mb-7 sm:mb-8 md:mb-9 lg:mb-10 shadow-sm">
        <div className="p-8 md:p-12">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              How we work
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              Our proven process for delivering quality results
            </p>
          </div>

          <div className="relative">
            {/* Desktop timeline */}
            <div className="hidden md:block">
              <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 w-4/5 translate-x-30" />
              <div className="grid grid-cols-5 gap-4 relative">
                <div className="text-center group">
                  <div className="flex flex-col items-center">
                    <div className="bg-blue-400 text-white rounded-full w-10 h-10 flex items-center justify-center z-10 mb-4 group-hover:scale-110 duration-200">
                      1
                    </div>
                    <h3 className="text-lg font-bold text-black">Discover</h3>
                    <span className="inline-block bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-sm my-2">
                      1 week
                    </span>
                    <p className="text-gray-600 text-sm">
                      Understand your needs and goals
                    </p>
                  </div>
                </div>
                <div className="text-center group">
                  <div className="flex flex-col items-center">
                    <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center z-10 mb-4 group-hover:scale-110 duration-300">
                      2
                    </div>
                    <h3 className="text-lg font-bold text-black">Design</h3>
                    <span className="inline-block bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-sm my-2">
                      1–2 weeks
                    </span>
                    <p className="text-gray-600 text-sm">
                      Create mockups and get your approval
                    </p>
                  </div>
                </div>
                <div className="text-center group">
                  <div className="flex flex-col items-center">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center z-10 mb-4 group-hover:scale-110 duration-300">
                      3
                    </div>
                    <h3 className="text-lg font-bold text-black">Build</h3>
                    <span className="inline-block bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-sm my-2">
                      2–6 weeks
                    </span>
                    <p className="text-gray-600 text-sm">
                      Develop your solution with regular updates
                    </p>
                  </div>
                </div>
                <div className="text-center group">
                  <div className="flex flex-col items-center">
                    <div className="bg-blue-700 text-white rounded-full w-10 h-10 flex items-center justify-center z-10 mb-4 group-hover:scale-110 duration-300">
                      4
                    </div>
                    <h3 className="text-lg font-bold text-black">Launch</h3>
                    <span className="inline-block bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-sm my-2">
                      1 week
                    </span>
                    <p className="text-gray-600 text-sm">
                      Test, optimize, and go live
                    </p>
                  </div>
                </div>
                <div className="text-center group">
                  <div className="flex flex-col items-center">
                    <div className="bg-blue-800 text-white rounded-full w-10 h-10 flex items-center justify-center z-10 mb-4 group-hover:scale-110 duration-300">
                      5
                    </div>
                    <h3 className="text-lg font-bold text-black">Improve</h3>
                    <span className="inline-block bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-sm my-2">
                      Ongoing
                    </span>
                    <p className="text-gray-600 text-sm">
                      Continuous updates and enhancements
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile timeline */}
            <div className="md:hidden space-y-8">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-blue-400 text-white rounded-full w-8 h-8 flex items-center justify-center">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black">Discover</h3>
                  <span className="inline-block bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-sm my-1">
                    1 week
                  </span>
                  <p className="text-gray-600 text-sm">
                    Understand your needs and goals
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black">Design</h3>
                  <span className="inline-block bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-sm my-1">
                    1–2 weeks
                  </span>
                  <p className="text-gray-600 text-sm">
                    Create mockups and get your approval
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black">Build</h3>
                  <span className="inline-block bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-sm my-1">
                    2–6 weeks
                  </span>
                  <p className="text-gray-600 text-sm">
                    Develop your solution with regular updates
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black">Launch</h3>
                  <span className="inline-block bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-sm my-1">
                    1 week
                  </span>
                  <p className="text-gray-600 text-sm">
                    Test, optimize, and go live
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-blue-800 text-white rounded-full w-8 h-8 flex items-center justify-center">
                    5
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black">Improve</h3>
                  <span className="inline-block bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-sm my-1">
                    Ongoing
                  </span>
                  <p className="text-gray-600 text-sm">
                    Continuous updates and enhancements
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 text-gray-700 font-medium">
            Most sites launch in 3–6 weeks
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
};

export default WorkTimeline;
