import ContentWrapper from "@/components/Home/ContentWrapper";
import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  return (
    <ContentWrapper>
      <section className="bg-white rounded-3xl overflow-hidden mb-7 sm:mb-8 md:mb-9 lg:mb-10 shadow-sm">
        <div className="p-8 md:p-12">
          <div className="mb-8 md:mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Team Preview
            </h2>
            <p className="text-base md:text-lg text-gray-600 mt-2">
              A small, focused group with a big drive
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gray-50 rounded-2xl border border-slate-200/70 shadow-sm">
              <CardContent className="px-6 pt-6 pb-8 text-center">
                <img
                  src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=800&auto=format&fit=crop"
                  alt="Team member portrait"
                  className="mx-auto w-24 h-24 rounded-full object-cover shadow-sm"
                />
                <h3 className="mt-4 text-lg font-bold text-black">Alex</h3>
                <p className="text-gray-600">Product & Strategy</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 rounded-2xl border border-slate-200/70 shadow-sm">
              <CardContent className="px-6 pt-6 pb-8 text-center">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop"
                  alt="Team member portrait"
                  className="mx-auto w-24 h-24 rounded-full object-cover shadow-sm"
                />
                <h3 className="mt-4 text-lg font-bold text-black">Jordan</h3>
                <p className="text-gray-600">Design</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 rounded-2xl border border-slate-200/70 shadow-sm">
              <CardContent className="px-6 pt-6 pb-8 text-center">
                <img
                  src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop"
                  alt="Team member portrait"
                  className="mx-auto w-24 h-24 rounded-full object-cover shadow-sm"
                />
                <h3 className="mt-4 text-lg font-bold text-black">Taylor</h3>
                <p className="text-gray-600">Engineering</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 rounded-2xl border border-slate-200/70 shadow-sm">
              <CardContent className="px-6 pt-6 pb-8 text-center">
                <img
                  src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop"
                  alt="Team member portrait"
                  className="mx-auto w-24 h-24 rounded-full object-cover shadow-sm"
                />
                <h3 className="mt-4 text-lg font-bold text-black">Riley</h3>
                <p className="text-gray-600">AI & Data</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
};

export default Team;
