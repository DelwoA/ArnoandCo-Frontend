import Reveal from "@/components/animations/Reveal";

const WhyChoose = () => {
  return (
    <Reveal direction="up">
      <section className="rounded-2xl border border-black/5 shadow-sm py-7 px-6.5 sm:px-8.5 mt-12 bg-gradient-to-br from-yellow-50 to-stone-100">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black">
          Why Choose Arno & Co. ?
        </h3>
        <ul className="mt-3 space-y-2 text-gray-800">
          <li className="flex items-center gap-3 hover:scale-105 hover:translate-x-5 transition-transform duration-300">
            <span className="h-2 w-2 rounded-full bg-blue-900"></span>
            <span>High-quality web & AI solutions</span>
          </li>
          <li className="flex items-center gap-3 hover:scale-105 hover:translate-x-5 transition-transform duration-300">
            <span className="h-2 w-2 rounded-full bg-blue-900"></span>
            <span>Expert consultation & support</span>
          </li>
          <li className="flex items-center gap-3 hover:scale-105 hover:translate-x-5 transition-transform duration-300">
            <span className="h-2 w-2 rounded-full bg-blue-900"></span>
            <span>Transparent pricing & flexible options</span>
          </li>
          <li className="flex items-center gap-3 hover:scale-105 hover:translate-x-5 transition-transform duration-300">
            <span className="h-2 w-2 rounded-full bg-blue-900"></span>
            <span>Fast, reliable delivery</span>
          </li>
        </ul>
      </section>
    </Reveal>
  );
};

export default WhyChoose;
