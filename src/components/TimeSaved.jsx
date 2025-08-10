import ContentWrapper from "./ContentWrapper";
import { Clock } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const TimeSaved = () => {
  const timeItems = [
    {
      task: "Replying to inquiries",
      before: "6 hours",
      after: "30 minutes",
      percent: 92,
    },
    {
      task: "Making monthly reports",
      before: "3 hours",
      after: "done for you",
      percent: 100,
    },
    {
      task: "Bookings and quotes",
      before: "2–3 days of back-and-forth",
      after: "instant form",
      percent: 95,
    },
  ];

  return (
    <ContentWrapper>
      <section className="bg-white rounded-3xl overflow-hidden mb-7 sm:mb-8 md:mb-9 lg:mb-10 shadow-sm">
        <div className="p-8 md:p-12">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Time saved each week
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              Your digital solution frees up valuable time for what matters most
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {timeItems.map((item) => (
              <div key={item.task} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-5 w-5 text-black mr-2" />
                  <h3 className="text-lg font-bold text-black">{item.task}</h3>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-gray-700">Before</p>
                    <span className="text-xs text-gray-600">{item.before}</span>
                  </div>
                  <Progress
                    value={100}
                    className="h-3 bg-gray-200 [&_[data-slot=progress-indicator]]:bg-red-400"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-gray-700">After</p>
                    <span className="text-xs text-gray-600">{item.after}</span>
                  </div>
                  <Progress
                    value={100 - item.percent}
                    className="h-3 bg-gray-200 [&_[data-slot=progress-indicator]]:bg-green-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
};

export default TimeSaved;
