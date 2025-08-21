const WhyChoose = () => {
  return (
    <section className="rounded-2xl border border-black/5 shadow-sm p-6 mt-12 bg-gradient-to-br from-blue-50 to-[#071b31]/15">
      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-black">
        Why Choose Arno & Co. ?
      </h3>
      <ul className="mt-3 space-y-2 text-gray-800">
        <li className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-blue-900"></span>
          <span>High-quality web & AI solutions</span>
        </li>
        <li className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-blue-900"></span>
          <span>Expert consultation & support</span>
        </li>
        <li className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-blue-900"></span>
          <span>Transparent pricing & flexible options</span>
        </li>
        <li className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-blue-900"></span>
          <span>Fast, reliable delivery</span>
        </li>
      </ul>
    </section>
  );
};

export default WhyChoose;
