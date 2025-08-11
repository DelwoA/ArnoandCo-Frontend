import ContentWrapper from "./ContentWrapper";
import { CheckCircle2, AlertTriangle } from "lucide-react";

// Palette: navy for headings, light blue accent
const BRAND_NAVY = "#071b31";
const ACCENT = "#c0e0f6";

// Snapshot data
const METRICS = [
  {
    key: "lcp",
    label: "Largest Contentful Paint",
    short: "LCP",
    value: 1.9,
    good: 2.5,
    needs: 4.0,
    max: 5.0,
    format: (v) => `${v.toFixed(1)}s`,
    caption: "Good ≤ 2.5s • Needs ≤ 4.0s",
  },
  {
    key: "inp",
    label: "Interaction to Next Paint",
    short: "INP",
    value: 180,
    good: 200,
    needs: 500,
    max: 650,
    format: (v) => `${Math.round(v)}ms`,
    caption: "Good ≤ 200ms • Needs ≤ 500ms",
  },
  {
    key: "cls",
    label: "Cumulative Layout Shift",
    short: "CLS",
    value: 0.06,
    good: 0.1,
    needs: 0.25,
    max: 0.3,
    format: (v) => v.toFixed(2),
    caption: "Good ≤ 0.10 • Needs ≤ 0.25",
  },
];

const statusFor = (v, good, needs) => {
  if (v <= good)
    return {
      label: "Good",
      color: "text-emerald-700",
      bg: "bg-emerald-50",
      dot: "bg-emerald-600",
    };
  if (v <= needs)
    return {
      label: "Needs improvement",
      color: "text-amber-700",
      bg: "bg-amber-50",
      dot: "bg-amber-500",
    };
  return {
    label: "Poor",
    color: "text-rose-700",
    bg: "bg-rose-50",
    dot: "bg-rose-500",
  };
};

const FastSitesHelpSales = () => {
  const allGood = METRICS.every((m) => m.value <= m.good);

  return (
    <ContentWrapper>
      <section className="bg-white rounded-3xl shadow-sm overflow-hidden mb-7 sm:mb-8 md:mb-9 lg:mb-10">
        <div className="p-6 sm:p-8 md:p-12">
          <header className="flex items-start justify-between gap-4 mb-6 sm:mb-8 md:mb-10">
            <div>
              <h2
                className="text-3xl md:text-4xl font-extrabold"
                style={{ color: BRAND_NAVY }}
              >
                Fast sites help sales
              </h2>
              <p className="text-slate-600 mt-2 text-lg">
                Speed is critical for keeping visitors engaged and converting
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
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

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6 items-stretch">
            {METRICS.map((m) => (
              <MetricCard key={m.key} metric={m} />
            ))}
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

const MetricCard = ({ metric }) => {
  const s = statusFor(metric.value, metric.good, metric.needs);

  return (
    <article className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6 shadow-sm flex flex-col">
      {/* Title row */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div>
          <div className="text-sm font-medium text-slate-500">
            {metric.short}
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-slate-900">
            {metric.label}
          </h3>
        </div>
        <span
          className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs ${s.bg} ${s.color}`}
        >
          <span className={`h-2 w-2 rounded-full ${s.dot}`} />
          {s.label}
        </span>
      </div>

      {/* Value */}
      <div className="text-2xl sm:text-[26px] font-extrabold text-slate-900 tracking-tight mb-3">
        {metric.format(metric.value)}
      </div>

      {/* Mini meter with thresholds */}
      <MiniMeter
        value={metric.value}
        good={metric.good}
        needs={metric.needs}
        max={metric.max}
      />

      <div className="mt-2 text-xs text-slate-500">{metric.caption}</div>
    </article>
  );
};

const MiniMeter = ({ value, good, needs, max }) => {
  const safeMax = Math.max(max, needs * 1.05);
  const pct = clamp((value / safeMax) * 100, 0, 100);
  const goodPct = clamp((good / safeMax) * 100, 0, 100);
  const needsPct = clamp(((needs - good) / safeMax) * 100, 0, 100);
  const poorPct = clamp(100 - goodPct - needsPct, 0, 100);

  return (
    <div className="relative">
      <div className="flex h-2.5 w-full overflow-hidden rounded-full">
        <div className="bg-emerald-500" style={{ width: `${goodPct}%` }} />
        <div className="bg-amber-400" style={{ width: `${needsPct}%` }} />
        <div className="bg-rose-400" style={{ width: `${poorPct}%` }} />
      </div>

      {/* indicator */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
        style={{ left: `${pct}%` }}
      >
        <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-neutral-900 drop-shadow" />
      </div>

      {/* tick labels (0 and max) */}
      <div className="mt-1.5 flex justify-between text-[10px] text-slate-500">
        <span>0</span>
        <span>max</span>
      </div>
    </div>
  );
};

const clamp = (n, min, max) => {
  return Math.min(max, Math.max(min, n));
};

export default FastSitesHelpSales;
