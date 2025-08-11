import ContentWrapper from "./ContentWrapper";
import {
  Clock,
  FileBarChart2,
  CalendarCheck2,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const BRAND_NAVY = "#071b31";
const BADGE_BG = "#c0e0f6";
const BADGE_RING = "#9dcaf0";

const data = [
  {
    icon: Clock,
    title: "Replying to inquiries",
    beforeMin: 6 * 60, // 6 hours
    afterMin: 30, // 30 minutes
    afterNote: undefined,
  },
  {
    icon: FileBarChart2,
    title: "Making monthly reports",
    beforeMin: 3 * 60,
    afterMin: 0, // automated
    afterNote: "done for you",
  },
  {
    icon: CalendarCheck2,
    title: "Bookings and quotes",
    beforeMin: Math.round(2.5 * 24 * 60), // 2–3 days ≈ 2.5d
    afterMin: 1, // "instant form" ~ 1 minute
    afterNote: "instant form",
  },
  {
    icon: MessageCircle,
    title: "Answering common questions",
    beforeMin: 4 * 60, // 4 hours per week on FAQs/support
    afterMin: 30, // chatbot/knowledge base handles most
    afterNote: undefined,
  },
];

const formatMinutes = (min) => {
  if (min <= 0) return "0m";
  const days = Math.floor(min / (60 * 24));
  const hours = Math.floor((min % (60 * 24)) / 60);
  const minutes = Math.round(min % 60);
  const parts = [];
  if (days) parts.push(`${days}d`);
  if (hours) parts.push(`${hours}h`);
  if (minutes || parts.length === 0) parts.push(`${minutes}m`);
  return parts.join(" ");
};

const TimeSaved = () => {
  const totals = data.reduce(
    (acc, i) => {
      const saved = Math.max(0, i.beforeMin - i.afterMin);
      acc.savedMin += saved;
      acc.beforeMin += i.beforeMin;
      return acc;
    },
    { savedMin: 0, beforeMin: 0 }
  );

  const totalPct = totals.beforeMin
    ? Math.round((totals.savedMin / totals.beforeMin) * 100)
    : 0;

  return (
    <ContentWrapper>
      <section className="bg-white rounded-3xl shadow-sm overflow-hidden mb-7 sm:mb-8 md:mb-9 lg:mb-10">
        <div className="p-6 sm:p-8 md:p-12">
          <div className="flex items-start justify-between gap-4 mb-6 sm:mb-8 md:mb-10">
            <div>
              <h2
                className="text-3xl md:text-4xl font-extrabold"
                style={{ color: BRAND_NAVY }}
              >
                Time saved each week
              </h2>
              <p className="text-slate-600 mt-2 text-lg">
                Clear before/after comparison showing how much time you get back
              </p>
            </div>
            <div className="shrink-0 hidden md:block">
              <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700">
                ≈{" "}
                <span className="font-semibold">
                  {formatMinutes(totals.savedMin)}
                </span>{" "}
                saved (≈{totalPct}%)
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 min-[872px]:grid-cols-2 gap-5 md:gap-6 items-stretch">
            {data.map((item) => (
              <article
                key={item.title}
                className="group h-full rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6 shadow-sm flex flex-col hover:scale-[1.02] transition-all duration-300 ease-in-out"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative flex h-10 w-10 items-center justify-center">
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-full border"
                      style={{
                        background: BADGE_BG,
                        borderColor: BADGE_RING,
                        opacity: 0.6,
                      }}
                    />
                    <item.icon
                      className="relative"
                      size={20}
                      color={BRAND_NAVY}
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                </div>

                {/* Comparison line */}
                <div className="flex items-center justify-center gap-2 text-[22px] sm:text-[24px] font-extrabold text-slate-900">
                  <span>{formatMinutes(item.beforeMin)}</span>
                  <ArrowRight className="opacity-70" size={22} />
                  <span>
                    {item.afterNote ? (
                      <span className="text-emerald-600 font-semibold text-[18px] sm:text-[20px]">
                        {item.afterNote}
                      </span>
                    ) : (
                      formatMinutes(item.afterMin)
                    )}
                  </span>
                </div>

                {/* Savings */}
                <div className="mt-2 text-center">
                  <Savings
                    beforeMin={item.beforeMin}
                    afterMin={item.afterMin}
                  />
                </div>

                {/* Optional caption space */}
                <div className="mt-4 text-center text-xs text-slate-500">
                  Results vary by workflow. We’ll tailor this to your business.
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
};

const Savings = ({ beforeMin, afterMin }) => {
  const saved = Math.max(0, beforeMin - afterMin);
  const pct = beforeMin ? Math.round((saved / beforeMin) * 100) : 0;
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-sm">
      <span
        className="inline-block h-2 w-2 rounded-full bg-emerald-600"
        aria-hidden
      />
      <span className="font-medium">Saved {formatMinutes(saved)}</span>
      <span className="opacity-80">({pct}% less time)</span>
    </div>
  );
};

export default TimeSaved;
