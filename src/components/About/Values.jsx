import ContentWrapper from "@/components/ContentWrapper";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Smile, Zap, Beaker, Code2, Users } from "lucide-react";
import BlueGlow from "@/components/BlueGlow";

const Values = () => {
  return (
    <ContentWrapper>
      <section className="bg-white rounded-3xl overflow-hidden mb-7 sm:mb-8 md:mb-9 lg:mb-10 shadow-sm">
        <div className="p-8 md:p-12">
          <div className="mb-8 md:mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Our Values
            </h2>
            <p className="text-base md:text-lg text-gray-600 mt-2">
              Principles that guide our work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
            <BlueGlow rounded="rounded-2xl">
              <Card className="group relative bg-slate-50 px-5 pt-8 rounded-2xl border border-slate-200/70 overflow-hidden min-h-[220px] text-left">
                <CardHeader className="px-0">
                  <div className="inline-flex items-center justify-center mb-2.5 w-11 h-11 rounded-full bg-[#c0e0f6]/60 border border-[#9dcaf0]">
                    <ShieldCheck size={22} className="text-[#071b31]" />
                  </div>
                  <CardTitle className="mt-2 text-2xl leading-tight font-extrabold text-slate-900 tracking-tight">
                    Integrity
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 px-0 mt-0">
                  <p className="text-sm md:text-base text-slate-600 leading-normal">
                    We keep promises, communicate clearly, and build with
                    long‑term reliability in mind.
                  </p>
                </CardContent>
              </Card>
            </BlueGlow>

            <BlueGlow rounded="rounded-2xl">
              <Card className="group relative bg-slate-50 px-5 pt-8 rounded-2xl border border-slate-200/70 overflow-hidden min-h-[220px] text-left">
                <CardHeader className="px-0">
                  <div className="inline-flex items-center justify-center mb-2.5 w-11 h-11 rounded-full bg-[#c0e0f6]/60 border border-[#9dcaf0]">
                    <Smile size={22} className="text-[#071b31]" />
                  </div>
                  <CardTitle className="mt-2 text-2xl leading-tight font-extrabold text-slate-900 tracking-tight">
                    Client‑First
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 px-0 mt-0">
                  <p className="text-sm md:text-base text-slate-600 leading-normal">
                    We design around real users and business goals—clarity,
                    speed, and results.
                  </p>
                </CardContent>
              </Card>
            </BlueGlow>

            <BlueGlow rounded="rounded-2xl">
              <Card className="group relative bg-slate-50 px-5 pt-8 rounded-2xl border border-slate-200/70 overflow-hidden min-h-[220px] text-left">
                <CardHeader className="px-0">
                  <div className="inline-flex items-center justify-center mb-2.5 w-11 h-11 rounded-full bg-[#c0e0f6]/60 border border-[#9dcaf0]">
                    <Zap size={22} className="text-[#071b31]" />
                  </div>
                  <CardTitle className="mt-2 text-2xl leading-tight font-extrabold text-slate-900 tracking-tight">
                    Speed with Care
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 px-0 mt-0">
                  <p className="text-sm md:text-base text-slate-600 leading-normal">
                    We ship quickly while maintaining quality, performance, and
                    maintainability.
                  </p>
                </CardContent>
              </Card>
            </BlueGlow>

            <BlueGlow rounded="rounded-2xl">
              <Card className="group relative bg-slate-50 px-5 pt-8 rounded-2xl border border-slate-200/70 overflow-hidden min-h-[220px] text-left">
                <CardHeader className="px-0">
                  <div className="inline-flex items-center justify-center mb-2.5 w-11 h-11 rounded-full bg-[#c0e0f6]/60 border border-[#9dcaf0]">
                    <Beaker size={22} className="text-[#071b31]" />
                  </div>
                  <CardTitle className="mt-2 text-2xl leading-tight font-extrabold text-slate-900 tracking-tight">
                    Innovation
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 px-0 mt-0">
                  <p className="text-sm md:text-base text-slate-600 leading-normal">
                    We explore new ideas responsibly—using AI and modern tooling
                    where it creates value.
                  </p>
                </CardContent>
              </Card>
            </BlueGlow>

            <BlueGlow rounded="rounded-2xl">
              <Card className="group relative bg-slate-50 px-5 pt-8 rounded-2xl border border-slate-200/70 overflow-hidden min-h-[220px] text-left">
                <CardHeader className="px-0">
                  <div className="inline-flex items-center justify-center mb-2.5 w-11 h-11 rounded-full bg-[#c0e0f6]/60 border border-[#9dcaf0]">
                    <Code2 size={22} className="text-[#071b31]" />
                  </div>
                  <CardTitle className="mt-2 text-2xl leading-tight font-extrabold text-slate-900 tracking-tight">
                    Technical Excellence
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 px-0 mt-0">
                  <p className="text-sm md:text-base text-slate-600 leading-normal">
                    Clean code, strong architecture, and performance as a
                    feature—not an afterthought.
                  </p>
                </CardContent>
              </Card>
            </BlueGlow>

            <BlueGlow rounded="rounded-2xl">
              <Card className="group relative bg-slate-50 px-5 pt-8 rounded-2xl border border-slate-200/70 overflow-hidden min-h-[220px] text-left">
                <CardHeader className="px-0">
                  <div className="inline-flex items-center justify-center mb-2.5 w-11 h-11 rounded-full bg-[#c0e0f6]/60 border border-[#9dcaf0]">
                    <Users size={22} className="text-[#071b31]" />
                  </div>
                  <CardTitle className="mt-2 text-2xl leading-tight font-extrabold text-slate-900 tracking-tight">
                    Collaboration
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 px-0 mt-0">
                  <p className="text-sm md:text-base text-slate-600 leading-normal">
                    We work closely with stakeholders and share progress openly
                    from day one.
                  </p>
                </CardContent>
              </Card>
            </BlueGlow>
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
};

export default Values;
