import { Search, Timer, Smartphone, Globe } from "lucide-react";
import ContentWrapper from "./ContentWrapper";
import { Card, CardContent } from "./ui/card";

const ResultsGlance = () => {
  const stats = [
    {
      icon: (
        <Search
          size={32}
          className="text-blue-500 group-hover:opacity-90 transition-opacity"
        />
      ),
      number: "6 out of 10",
      description: "customers check online first",
      source: "Source: Google Consumer Insights",
    },
    {
      icon: (
        <Timer
          size={32}
          className="text-blue-500 group-hover:opacity-90 transition-opacity"
        />
      ),
      number: "3 seconds",
      description: "site load time before visitors leave",
      source: "Source: Google/SOASTA Research",
    },
    {
      icon: (
        <Smartphone
          size={32}
          className="text-blue-500 group-hover:opacity-90 transition-opacity"
        />
      ),
      number: "58%",
      description: "of all web visits are on mobile devices",
      source: "Source: Statista Global Report",
    },
    {
      icon: (
        <Globe
          size={32}
          className="text-blue-500 group-hover:opacity-90 transition-opacity"
        />
      ),
      number: "67%",
      description: "of purchase decisions are influenced by online presence",
      source: "Source: BrightLocal Consumer Survey",
    },
  ];

  return (
    <ContentWrapper>
      <section className="bg-white rounded-3xl overflow-hidden mt-13 mb-10 shadow-sm">
        <div className="p-8 md:p-12">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Results at a glance
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              Key metrics that show why a strong digital presence matters
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <Card
                key={stat.number}
                className="group bg-gray-50 rounded-xl overflow-hidden min-h-[280px] flex flex-col items-center p-6 md:p-8 transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex flex-col items-center space-y-4 flex-1">
                  <div className="relative flex items-center justify-center mb-2">
                    <div className="absolute w-[48px] h-[48px] rounded-full bg-blue-50 border border-blue-100 group-hover:shadow-[0_0_8px_rgba(59,130,246,0.3)] transition-shadow"></div>
                    <div className="z-10">{stat.icon}</div>
                  </div>
                  <CardContent className="p-0 space-y-2 text-center flex flex-col items-center">
                    <div className="text-xl md:text-2xl font-extrabold text-black">
                      {stat.number}
                    </div>
                    <p className="text-xs md:text-sm text-slate-600">
                      {stat.description}
                    </p>
                  </CardContent>
                </div>
                <div className="mt-4 text-center w-full">
                  <p className="text-xs text-slate-500 italic">{stat.source}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
};

export default ResultsGlance;
