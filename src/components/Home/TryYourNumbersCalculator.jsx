import { useEffect, useState } from "react";
import ContentWrapper from "../ContentWrapper";
import { Calculator as CalculatorIcon } from "lucide-react";

const TryYourNumbersCalculator = () => {
  const [visitors, setVisitors] = useState(500);
  const [conversionRate, setConversionRate] = useState(2);
  const [averageSale, setAverageSale] = useState(150);
  const [monthlyRevenue, setMonthlyRevenue] = useState(0);
  const [paybackPeriod, setPaybackPeriod] = useState(0);

  useEffect(() => {
    const convertedVisitors = Math.round(visitors * (conversionRate / 100));
    const revenue = convertedVisitors * averageSale;
    setMonthlyRevenue(revenue);

    const websiteCost = 3000;
    const months = revenue > 0 ? Math.ceil(websiteCost / revenue) : 0;
    setPaybackPeriod(months);
  }, [visitors, conversionRate, averageSale]);

  return (
    <ContentWrapper>
      <section className="bg-white rounded-3xl overflow-hidden mb-7 sm:mb-8 md:mb-9 lg:mb-10 shadow-sm">
        <div className="p-8 md:p-12">
          <div className="mb-10">
            <div className="flex items-center">
              <CalculatorIcon className="h-8 w-8 text-black mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                Try your numbers
              </h2>
            </div>
            <p className="text-lg text-gray-600 mt-2">
              See the potential impact of a professional website on your
              business
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Monthly visitors: {visitors}
                </label>
                <input
                  type="range"
                  min="100"
                  max="2000"
                  step="100"
                  value={visitors}
                  onChange={(e) => setVisitors(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none accent-[#2566a7] cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>100</span>
                  <span>2000</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Conversion rate: {conversionRate}%
                </label>
                <input
                  type="range"
                  min="0.5"
                  max="5"
                  step="0.5"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none accent-[#2566a7] cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0.5%</span>
                  <span>5%</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  How many out of 100 visitors become customers
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Average sale value: ${averageSale}
                </label>
                <input
                  type="range"
                  min="50"
                  max="500"
                  step="10"
                  value={averageSale}
                  onChange={(e) => setAverageSale(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none accent-[#2566a7] cursor-pointer"
                  // className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>$50</span>
                  <span>$500</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 flex flex-col justify-center">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-black mb-2">Results</h3>
                <p className="text-gray-600 text-sm">Based on your inputs</p>
              </div>
              <div className="space-y-6">
                <div className="text-center">
                  <p className="text-gray-700">You could make about</p>
                  <p className="text-3xl font-bold text-[#2566a7]">
                    ${monthlyRevenue.toLocaleString()}
                  </p>
                  <p className="text-gray-700">each month</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-700">
                    Your website pays for itself in about
                  </p>
                  <p className="text-3xl font-bold text-black">
                    {paybackPeriod} months
                  </p>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-6 text-center">
                If unsure about the numbers, leave our defaults which are
                conservative industry averages
              </p>
            </div>
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
};

export default TryYourNumbersCalculator;
