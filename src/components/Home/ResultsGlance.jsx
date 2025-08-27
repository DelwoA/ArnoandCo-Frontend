import { Search, Timer, Smartphone, Globe } from "lucide-react";
import ContentWrapper from "../ContentWrapper";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import BlueGlow from "../BlueGlow";
import Reveal from "@/components/animations/Reveal";
import Stagger from "@/components/animations/Stagger";

const ResultsGlance = () => {
  return (
    <ContentWrapper>
      <section className="bg-white rounded-3xl overflow-hidden mb-7 sm:mb-8 md:mb-9 lg:mb-10 shadow-sm">
        <div className="p-8 md:p-12">
          <Reveal direction="left">
            <div className="mb-8 md:mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">
                Results at a glance
              </h2>
              <p className="text-base md:text-lg text-gray-600 mt-2">
                Key metrics that show why a strong digital presence matters
              </p>
            </div>
          </Reveal>
          <Stagger>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6">
              {/* Card 1 */}
              <Reveal direction="down">
                <BlueGlow rounded="rounded-2xl">
                  <Card className="group relative bg-slate-50 px-5 pt-8 rounded-2xl border border-slate-200/70 overflow-hidden min-h-[220px] md:min-h-[240px] text-center">
                    <CardHeader className="justify-items-center items-center px-0">
                      <div className="inline-flex items-center justify-center mb-2.5 w-11 h-11 rounded-full bg-[#c0e0f6]/60 border border-[#9dcaf0] transition-[box-shadow] duration-300 group-hover:shadow-[0_6px_14px_-6px_rgba(2,132,199,0.25)]">
                        <Search
                          size={22}
                          className="text-[#071b31] transition-colors duration-200"
                        />
                      </div>
                      <CardTitle className="mt-2 text-2xl md:text-[28px] leading-tight font-extrabold text-slate-900 tracking-tight">
                        6 out of 10
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 px-0 mt-0">
                      <p className="text-sm md:text-base text-slate-600 leading-normal">
                        customers check online first
                      </p>
                    </CardContent>
                  </Card>
                </BlueGlow>
              </Reveal>

              {/* Card 2 */}
              <Reveal direction="down">
                <BlueGlow rounded="rounded-2xl">
                  <Card className="group relative bg-slate-50 px-5 pt-8 rounded-2xl border border-slate-200/70 overflow-hidden min-h-[220px] md:min-h-[240px] text-center">
                    <CardHeader className="justify-items-center items-center px-0">
                      <div className="inline-flex items-center justify-center mb-2.5 w-11 h-11 rounded-full bg-[#c0e0f6]/60 border border-[#9dcaf0] transition-[box-shadow] duration-300 group-hover:shadow-[0_6px_14px_-6px_rgba(2,132,199,0.25)]">
                        <Timer
                          size={22}
                          className="text-[#071b31] transition-colors duration-200"
                        />
                      </div>
                      <CardTitle className="mt-2 text-2xl md:text-[28px] leading-tight font-extrabold text-slate-900 tracking-tight">
                        3 seconds
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 px-0 mt-0">
                      <p className="text-sm md:text-base text-slate-600 leading-normal">
                        site load time before visitors leave
                      </p>
                    </CardContent>
                  </Card>
                </BlueGlow>
              </Reveal>

              {/* Card 3 */}
              <Reveal direction="down">
                <BlueGlow rounded="rounded-2xl">
                  <Card className="group relative bg-slate-50 px-5 pt-8 rounded-2xl border border-slate-200/70 overflow-hidden min-h-[220px] md:min-h-[240px] text-center">
                    <CardHeader className="justify-items-center items-center px-0">
                      <div className="inline-flex items-center justify-center mb-2.5 w-11 h-11 rounded-full bg-[#c0e0f6]/60 border border-[#9dcaf0] transition-[box-shadow] duration-300 group-hover:shadow-[0_6px_14px_-6px_rgba(2,132,199,0.25)]">
                        <Smartphone
                          size={22}
                          className="text-[#071b31] transition-colors duration-200"
                        />
                      </div>
                      <CardTitle className="mt-2 text-2xl md:text-[28px] leading-tight font-extrabold text-slate-900 tracking-tight">
                        58%
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 px-0 mt-0">
                      <p className="text-sm md:text-base text-slate-600 leading-normal">
                        of all web visits are on mobile devices
                      </p>
                    </CardContent>
                  </Card>
                </BlueGlow>
              </Reveal>

              {/* Card 4 */}
              <Reveal direction="down">
                <BlueGlow rounded="rounded-2xl">
                  <Card className="group relative bg-slate-50 px-5 pt-8 rounded-2xl border border-slate-200/70 overflow-hidden min-h-[220px] md:min-h-[240px] text-center">
                    <CardHeader className="justify-items-center items-center px-0">
                      <div className="inline-flex items-center justify-center mb-2.5 w-11 h-11 rounded-full bg-[#c0e0f6]/60 border border-[#9dcaf0] transition-[box-shadow] duration-300 group-hover:shadow-[0_6px_14px_-6px_rgba(2,132,199,0.25)]">
                        <Globe
                          size={22}
                          className="text-[#071b31] transition-colors duration-200"
                        />
                      </div>
                      <CardTitle className="mt-2 text-2xl md:text-[28px] leading-tight font-extrabold text-slate-900 tracking-tight">
                        67%
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 px-0 mt-0">
                      <p className="text-sm md:text-base text-slate-600 leading-normal">
                        of purchase decisions are influenced by online presence
                      </p>
                    </CardContent>
                  </Card>
                </BlueGlow>
              </Reveal>
            </div>
          </Stagger>
        </div>
      </section>
    </ContentWrapper>
  );
};

export default ResultsGlance;
