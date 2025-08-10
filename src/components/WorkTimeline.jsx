import ContentWrapper from "./ContentWrapper";

const WorkTimeline = () => {
  const steps = [
    {
      name: "Discover",
      time: "1 week",
      description: "Understand your needs and goals",
    },
    {
      name: "Design",
      time: "1–2 weeks",
      description: "Create mockups and get your approval",
    },
    {
      name: "Build",
      time: "2–6 weeks",
      description: "Develop your solution with regular updates",
    },
    {
      name: "Launch",
      time: "1 week",
      description: "Test, optimize, and go live",
    },
    {
      name: "Improve",
      time: "Ongoing",
      description: "Continuous updates and enhancements",
    },
  ];

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
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2" />
              <div className="grid grid-cols-5 gap-4 relative">
                {steps.map((step, index) => (
                  <div key={step.name} className="text-center">
                    <div className="flex flex-col items-center">
                      <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center z-10 mb-4">
                        {index + 1}
                      </div>
                      <h3 className="text-lg font-bold text-black">
                        {step.name}
                      </h3>
                      <span className="inline-block bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-sm my-2">
                        {step.time}
                      </span>
                      <p className="text-gray-600 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile timeline */}
            <div className="md:hidden space-y-8">
              {steps.map((step, index) => (
                <div key={step.name} className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black">
                      {step.name}
                    </h3>
                    <span className="inline-block bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-sm my-1">
                      {step.time}
                    </span>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
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
