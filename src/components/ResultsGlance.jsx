import { Search, Timer, Smartphone, Globe } from "lucide-react";
import ContentWrapper from "./ContentWrapper";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

const ResultsGlance = () => {
  return (
    <ContentWrapper>
      <section className="bg-white rounded-3xl overflow-hidden mb-7 sm:mb-8 md:mb-9 lg:mb-10 shadow-sm">
        <div className="p-8 md:p-12">
          <div className="mb-8 md:mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">
              Results at a glance
            </h2>
            <p className="text-base md:text-lg text-gray-600 mt-2">
              Key metrics that show why a strong digital presence matters
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {/* Card 1 */}
            <Card className="group relative bg-slate-50 p-5 rounded-2xl border border-slate-200/70 overflow-hidden min-h-[220px] md:min-h-[240px] text-center transition-all duration-300 hover:-translate-y-[3px] hover:shadow-sm">
              <CardHeader className="justify-items-center items-center px-0 pt-5 md:pt-6">
                <div className="relative inline-flex items-center justify-center mb-2.5">
                  <div className="absolute w-11 h-11 rounded-full bg-sky-50 ring-1 ring-sky-100 transition-[box-shadow] duration-300 group-hover:shadow-[0_6px_14px_-6px_rgba(2,132,199,0.25)]"></div>
                  <Search
                    size={22}
                    className="z-10 text-sky-600 transition-colors duration-200 group-hover:text-sky-700"
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
              <CardFooter className="justify-center px-0 mt-6 pb-5 md:pb-6">
                <p className="text-[11px] md:text-xs text-slate-500/90 italic">
                  Source: Google Consumer Insights
                </p>
              </CardFooter>
            </Card>

            {/* Card 2 */}
            <Card className="group relative bg-slate-50 p-5 rounded-2xl border border-slate-200/70 overflow-hidden min-h-[220px] md:min-h-[240px] text-center transition-all duration-300 hover:-translate-y-[3px] hover:shadow-sm">
              <CardHeader className="justify-items-center items-center px-0 pt-5 md:pt-6">
                <div className="relative inline-flex items-center justify-center mb-2.5">
                  <div className="absolute w-11 h-11 rounded-full bg-sky-50 ring-1 ring-sky-100 transition-[box-shadow] duration-300 group-hover:shadow-[0_6px_14px_-6px_rgba(2,132,199,0.25)]"></div>
                  <Timer
                    size={22}
                    className="z-10 text-sky-600 transition-colors duration-200 group-hover:text-sky-700"
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
              <CardFooter className="justify-center px-0 mt-6 pb-5 md:pb-6">
                <p className="text-[11px] md:text-xs text-slate-500/90 italic">
                  Source: Google/SOASTA Research
                </p>
              </CardFooter>
            </Card>

            {/* Card 3 */}
            <Card className="group relative bg-slate-50 p-5 rounded-2xl border border-slate-200/70 overflow-hidden min-h-[220px] md:min-h-[240px] text-center transition-all duration-300 hover:-translate-y-[3px] hover:shadow-sm">
              <CardHeader className="justify-items-center items-center px-0 pt-5 md:pt-6">
                <div className="relative inline-flex items-center justify-center mb-2.5">
                  <div className="absolute w-11 h-11 rounded-full bg-sky-50 ring-1 ring-sky-100 transition-[box-shadow] duration-300 group-hover:shadow-[0_6px_14px_-6px_rgba(2,132,199,0.25)]"></div>
                  <Smartphone
                    size={22}
                    className="z-10 text-sky-600 transition-colors duration-200 group-hover:text-sky-700"
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
              <CardFooter className="justify-center px-0 mt-0 pb-5 md:pb-6">
                <p className="text-[11px] md:text-xs text-slate-500/90 italic">
                  Source: Statista Global Report
                </p>
              </CardFooter>
            </Card>

            {/* Card 4 */}
            <Card className="group relative bg-slate-50 p-5 rounded-2xl border border-slate-200/70 overflow-hidden min-h-[220px] md:min-h-[240px] text-center transition-all duration-300 hover:-translate-y-[3px] hover:shadow-sm">
              <CardHeader className="justify-items-center items-center px-0 pt-5 md:pt-6">
                <div className="relative inline-flex items-center justify-center mb-2.5">
                  <div className="absolute w-11 h-11 rounded-full bg-sky-50 ring-1 ring-sky-100 transition-[box-shadow] duration-300 group-hover:shadow-[0_6px_14px_-6px_rgba(2,132,199,0.25)]"></div>
                  <Globe
                    size={22}
                    className="z-10 text-sky-600 transition-colors duration-200 group-hover:text-sky-700"
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
              <CardFooter className="justify-center px-0 mt-0 pb-5 md:pb-6">
                <p className="text-[11px] md:text-xs text-slate-500/90 italic">
                  Source: BrightLocal Consumer Survey
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
};

export default ResultsGlance;
