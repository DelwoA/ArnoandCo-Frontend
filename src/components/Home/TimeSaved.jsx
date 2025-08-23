import ContentWrapper from "../ContentWrapper";
import {
  Clock,
  FileBarChart2,
  CalendarCheck2,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import BlueGlow from "../BlueGlow";

const TimeSaved = () => {
  return (
    <ContentWrapper>
      <section className="bg-white rounded-3xl shadow-sm overflow-hidden mb-7 sm:mb-8 md:mb-9 lg:mb-10">
        <div className="p-6 sm:p-8 md:p-12">
          <div className="flex items-start justify-between gap-4 mb-6 sm:mb-8 md:mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#071b31]">
                Time saved each week
              </h2>
              <p className="text-slate-600 mt-2 text-lg">
                Clear before/after comparison showing how much time you get back
              </p>
            </div>
            <div className="shrink-0 hidden md:block">
              <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700">
                ≈ <span className="font-semibold">2d 23h 59m</span> saved (≈99%)
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 min-[872px]:grid-cols-2 gap-5 md:gap-6 items-stretch">
            {/* Card: Replying to inquiries */}
            <BlueGlow scale="hover:scale-[1.02]">
              <article className="group h-full rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6 shadow-sm flex flex-col transition-all duration-300 ease-in-out">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border bg-[#c0e0f6]/60 border-[#9dcaf0]">
                    <Clock className="text-[#071b31]" size={20} />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                    Replying to inquiries
                  </h3>
                </div>
                <div className="flex items-center justify-center gap-2 text-[22px] sm:text-[24px] font-extrabold text-slate-900">
                  <span>6h</span>
                  <ArrowRight className="opacity-70" size={22} />
                  <span>30m</span>
                </div>
                <div className="mt-2 text-center">
                  <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-sm">
                    <span
                      className="inline-block h-2 w-2 rounded-full bg-emerald-600"
                      aria-hidden
                    />
                    <span className="font-medium">Saved 5h 30m</span>
                    <span className="opacity-80">(92% less time)</span>
                  </div>
                </div>
                <div className="mt-4 text-center text-xs text-slate-500">
                  Results vary by workflow. We’ll tailor this to your business.
                </div>
              </article>
            </BlueGlow>

            {/* Card: Making monthly reports */}
            <BlueGlow scale="hover:scale-[1.02]">
              <article className="group h-full rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6 shadow-sm flex flex-col transition-all duration-300 ease-in-out">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border bg-[#c0e0f6]/60 border-[#9dcaf0]">
                    <FileBarChart2 className="text-[#071b31]" size={20} />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                    Making monthly reports
                  </h3>
                </div>
                <div className="flex items-center justify-center gap-2 text-[22px] sm:text-[24px] font-extrabold text-slate-900">
                  <span>3h</span>
                  <ArrowRight className="opacity-70" size={22} />
                  <span>
                    <span className="text-emerald-600 font-semibold text-[18px] sm:text-[20px]">
                      done for you
                    </span>
                  </span>
                </div>
                <div className="mt-2 text-center">
                  <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-sm">
                    <span
                      className="inline-block h-2 w-2 rounded-full bg-emerald-600"
                      aria-hidden
                    />
                    <span className="font-medium">Saved 3h</span>
                    <span className="opacity-80">(100% less time)</span>
                  </div>
                </div>
                <div className="mt-4 text-center text-xs text-slate-500">
                  Results vary by workflow. We’ll tailor this to your business.
                </div>
              </article>
            </BlueGlow>

            {/* Card: Bookings and quotes */}
            <BlueGlow scale="hover:scale-[1.02]">
              <article className="group h-full rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6 shadow-sm flex flex-col transition-all duration-300 ease-in-out">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border bg-[#c0e0f6]/60 border-[#9dcaf0]">
                    <CalendarCheck2 className="text-[#071b31]" size={20} />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                    Bookings and quotes
                  </h3>
                </div>
                <div className="flex items-center justify-center gap-2 text-[22px] sm:text-[24px] font-extrabold text-slate-900">
                  <span>2d 12h</span>
                  <ArrowRight className="opacity-70" size={22} />
                  <span>
                    <span className="text-emerald-600 font-semibold text-[18px] sm:text-[20px]">
                      instant form
                    </span>
                  </span>
                </div>
                <div className="mt-2 text-center">
                  <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-sm">
                    <span
                      className="inline-block h-2 w-2 rounded-full bg-emerald-600"
                      aria-hidden
                    />
                    <span className="font-medium">Saved 2d 11h 59m</span>
                    <span className="opacity-80">(100% less time)</span>
                  </div>
                </div>
                <div className="mt-4 text-center text-xs text-slate-500">
                  Results vary by workflow. We’ll tailor this to your business.
                </div>
              </article>
            </BlueGlow>

            {/* Card: Answering common questions */}
            <BlueGlow scale="hover:scale-[1.02]">
              <article className="group h-full rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6 shadow-sm flex flex-col transition-all duration-300 ease-in-out">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border bg-[#c0e0f6]/60 border-[#9dcaf0]">
                    <MessageCircle className="text-[#071b31]" size={20} />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                    Answering common questions
                  </h3>
                </div>
                <div className="flex items-center justify-center gap-2 text-[22px] sm:text-[24px] font-extrabold text-slate-900">
                  <span>4h</span>
                  <ArrowRight className="opacity-70" size={22} />
                  <span>30m</span>
                </div>
                <div className="mt-2 text-center">
                  <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-sm">
                    <span
                      className="inline-block h-2 w-2 rounded-full bg-emerald-600"
                      aria-hidden
                    />
                    <span className="font-medium">Saved 3h 30m</span>
                    <span className="opacity-80">(88% less time)</span>
                  </div>
                </div>
                <div className="mt-4 text-center text-xs text-slate-500">
                  Results vary by workflow. We’ll tailor this to your business.
                </div>
              </article>
            </BlueGlow>
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
};

export default TimeSaved;
