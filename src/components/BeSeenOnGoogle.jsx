import ContentWrapper from "./ContentWrapper";
import { Search, Tag, MapPin, ArrowRight, TrendingUp } from "lucide-react";

const BeSeenOnGoogle = () => {
  return (
    <ContentWrapper>
      <section className="bg-white rounded-3xl shadow-sm overflow-hidden mb-7 sm:mb-8 md:mb-9 lg:mb-10">
        <div className="p-6 sm:p-8 md:p-12">
          <header className="mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Be seen on Google
            </h2>
            <p className="text-slate-600 mt-2 text-lg">
              Here's what changes when Google can actually find you.
            </p>
          </header>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 md:gap-6 items-stretch">
            {/* Card: Indexed pages */}
            <article className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6 shadow-sm flex flex-col text-center hover:scale-[1.03] transition-all duration-300">
              {/* Icon */}
              <div className="flex justify-center mb-3">
                <div className="relative flex h-12 w-12 items-center justify-center">
                  <span className="absolute inset-0 rounded-full bg-[#c0e0f6]/45" />
                  <Search size={20} className="relative text-slate-700" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-3">
                Indexed pages
              </h3>

              {/* Comparison */}
              <div className="flex items-baseline justify-center gap-2 mb-1">
                <div className="text-slate-500 text-sm">
                  <div className="uppercase tracking-wide text-[10px]">
                    Before
                  </div>
                  <div className="font-medium">0</div>
                </div>
                <ArrowRight className="opacity-60" size={18} />
                <div className="text-sky-600 text-sm">
                  <div className="uppercase tracking-wide text-[10px] text-slate-500">
                    After
                  </div>
                  <div className="font-semibold">10</div>
                </div>
              </div>

              {/* Delta chip */}
              <div className="mt-2 flex justify-center">
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 px-2.5 py-1 text-xs">
                  <TrendingUp size={14} />
                  <span className="font-medium">+10 pages</span>
                </span>
              </div>

              {/* Caption */}
              <p className="mt-3 text-xs text-slate-500">
                Pages Google can index (Search Console)
              </p>
            </article>

            {/* Card: Page‑1 keywords (non‑brand) */}
            <article className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6 shadow-sm flex flex-col text-center hover:scale-[1.03] transition-all duration-300">
              {/* Icon */}
              <div className="flex justify-center mb-3">
                <div className="relative flex h-12 w-12 items-center justify-center">
                  <span className="absolute inset-0 rounded-full bg-[#c0e0f6]/45" />
                  <Tag size={20} className="relative text-slate-700" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-3">
                Page‑1 keywords (non‑brand)
              </h3>

              {/* Comparison */}
              <div className="flex items-baseline justify-center gap-2 mb-1">
                <div className="text-slate-500 text-sm">
                  <div className="uppercase tracking-wide text-[10px]">
                    Before
                  </div>
                  <div className="font-medium">0</div>
                </div>
                <ArrowRight className="opacity-60" size={18} />
                <div className="text-sky-600 text-sm">
                  <div className="uppercase tracking-wide text-[10px] text-slate-500">
                    After
                  </div>
                  <div className="font-semibold">8</div>
                </div>
              </div>

              {/* Delta chip */}
              <div className="mt-2 flex justify-center">
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 px-2.5 py-1 text-xs">
                  <TrendingUp size={14} />
                  <span className="font-medium">+8 keywords</span>
                </span>
              </div>

              {/* Caption */}
              <p className="mt-3 text-xs text-slate-500">
                Search phrases where you now appear (Search Console)
              </p>
            </article>

            {/* Card: Google Business Profile live */}
            <article className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6 shadow-sm flex flex-col text-center hover:scale-[1.03] transition-all duration-300">
              {/* Icon */}
              <div className="flex justify-center mb-3">
                <div className="relative flex h-12 w-12 items-center justify-center">
                  <span className="absolute inset-0 rounded-full bg-[#c0e0f6]/45" />
                  <MapPin size={20} className="relative text-slate-700" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-3">
                Google Business Profile live
              </h3>

              {/* Comparison */}
              <div className="flex items-baseline justify-center gap-2 mb-1">
                <div className="text-slate-500 text-sm">
                  <div className="uppercase tracking-wide text-[10px]">
                    Before
                  </div>
                  <div className="font-medium">No</div>
                </div>
                <ArrowRight className="opacity-60" size={18} />
                <div className="text-sky-600 text-sm">
                  <div className="uppercase tracking-wide text-[10px] text-slate-500">
                    After
                  </div>
                  <div className="font-semibold">Yes</div>
                </div>
              </div>

              {/* Delta chip */}
              <div className="mt-2 flex justify-center">
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 px-2.5 py-1 text-xs">
                  <TrendingUp size={14} />
                  <span className="font-medium">Live</span>
                </span>
              </div>

              {/* Caption */}
              <p className="mt-3 text-xs text-slate-500">
                Customers can tap Directions / Call (Maps)
              </p>
            </article>
          </div>

          <footer className="mt-6 text-xs text-slate-500">
            Data source: Google Search Console & Google Business Profile • Last
            28 days (typical)
          </footer>
        </div>
      </section>
    </ContentWrapper>
  );
};

export default BeSeenOnGoogle;
