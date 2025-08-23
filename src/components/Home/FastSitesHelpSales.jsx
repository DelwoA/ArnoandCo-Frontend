import ContentWrapper from "../ContentWrapper";
import { CheckCircle2, AlertTriangle } from "lucide-react";

const FastSitesHelpSales = () => {
  // TODO: Check what this allGood is for.
  const allGood = true;

  return (
    <ContentWrapper>
      <section className="bg-white rounded-3xl shadow-sm overflow-hidden mb-7 sm:mb-8 md:mb-9 lg:mb-10">
        <div className="p-6 sm:p-8 md:p-12">
          <header className="flex items-start justify-between gap-4 mb-6 sm:mb-8 md:mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#071b31]">
                Fast sites help sales
              </h2>
              <p className="text-slate-600 mt-2 text-lg">
                Speed is critical for keeping visitors engaged and converting
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
              {/* TODO: Check if this is needed. I feel that conditional rendering is not required here */}
              {allGood ? (
                <>
                  <CheckCircle2 className="text-emerald-600" size={16} />
                  <span>Passes Core Web Vitals</span>
                </>
              ) : (
                <>
                  <AlertTriangle className="text-amber-500" size={16} />
                  <span>Needs improvement</span>
                </>
              )}
            </div>
          </header>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 md:gap-6 items-stretch">
            {/* Card: LCP */}
            <article className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6 shadow-sm flex flex-col hover:scale-[1.03] transition-all duration-300">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <div className="text-sm font-medium text-slate-500">LCP</div>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                    Largest Contentful Paint
                  </h3>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs bg-emerald-50 text-emerald-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-600" />
                  Good
                </span>
              </div>

              <div className="text-2xl sm:text-[26px] font-extrabold text-slate-900 tracking-tight mb-3">
                1.9s
              </div>

              <div className="relative">
                <div className="flex h-2.5 w-full overflow-hidden rounded-full">
                  <div className="bg-emerald-500 w-[50%]" />
                  <div className="bg-amber-400 w-[30%]" />
                  <div className="bg-rose-400 w-[20%]" />
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-[38%]">
                  <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-neutral-900 drop-shadow" />
                </div>
                <div className="mt-1.5 flex justify-between text-[10px] text-slate-500">
                  <span>0</span>
                  <span>max</span>
                </div>
              </div>

              <div className="mt-2 text-xs text-slate-500">
                Good ≤ 2.5s • Needs ≤ 4.0s
              </div>
            </article>

            {/* Card: INP */}
            <article className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6 shadow-sm flex flex-col hover:scale-[1.03] transition-all duration-300">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <div className="text-sm font-medium text-slate-500">INP</div>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                    Interaction to Next Paint
                  </h3>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs bg-emerald-50 text-emerald-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-600" />
                  Good
                </span>
              </div>

              <div className="text-2xl sm:text-[26px] font-extrabold text-slate-900 tracking-tight mb-3">
                180ms
              </div>

              <div className="relative">
                <div className="flex h-2.5 w-full overflow-hidden rounded-full">
                  <div className="bg-emerald-500 w-[30.77%]" />
                  <div className="bg-amber-400 w-[46.15%]" />
                  <div className="bg-rose-400 w-[23.08%]" />
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-[27.69%]">
                  <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-neutral-900 drop-shadow" />
                </div>
                <div className="mt-1.5 flex justify-between text-[10px] text-slate-500">
                  <span>0</span>
                  <span>max</span>
                </div>
              </div>

              <div className="mt-2 text-xs text-slate-500">
                Good ≤ 200ms • Needs ≤ 500ms
              </div>
            </article>

            {/* Card: CLS */}
            <article className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6 shadow-sm flex flex-col hover:scale-[1.03] transition-all duration-300">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <div className="text-sm font-medium text-slate-500">CLS</div>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                    Cumulative Layout Shift
                  </h3>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs bg-emerald-50 text-emerald-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-600" />
                  Good
                </span>
              </div>

              <div className="text-2xl sm:text-[26px] font-extrabold text-slate-900 tracking-tight mb-3">
                0.06
              </div>

              <div className="relative">
                <div className="flex h-2.5 w-full overflow-hidden rounded-full">
                  <div className="bg-emerald-500 w-[33.33%]" />
                  <div className="bg-amber-400 w-[50%]" />
                  <div className="bg-rose-400 w-[16.67%]" />
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-[20%]">
                  <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-neutral-900 drop-shadow" />
                </div>
                <div className="mt-1.5 flex justify-between text-[10px] text-slate-500">
                  <span>0</span>
                  <span>max</span>
                </div>
              </div>

              <div className="mt-2 text-xs text-slate-500">
                Good ≤ 0.10 • Needs ≤ 0.25
              </div>
            </article>
          </div>

          <p className="mt-6 text-xs text-slate-500">
            75th percentile over last 28 days • Thresholds per Google Core Web
            Vitals
          </p>
        </div>
      </section>
    </ContentWrapper>
  );
};

export default FastSitesHelpSales;
