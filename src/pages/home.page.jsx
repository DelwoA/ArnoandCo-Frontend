import Hero from "@/components/Home/Hero";
import WhatWeCanBuildForYou from "@/components/Home/WhatWeCanBuildForYou";
import ResultsGlance from "@/components/Home/ResultsGlance";
import ComparisonCards from "@/components/Home/ComparisonCards";
import TimeSaved from "@/components/Home/TimeSaved";
import FastSitesHelpSales from "@/components/Home/FastSitesHelpSales";
import BeSeenOnGoogle from "@/components/Home/BeSeenOnGoogle";
import TryYourNumbersCalculator from "@/components/Home/TryYourNumbersCalculator";
import RealResultsCaseStudy from "@/components/Home/RealResultsCaseStudy";
import WorkTimeline from "@/components/Home/WorkTimeline";
import PricingCards from "@/components/Home/PricingCards";
import TestimonialsCarousel from "@/components/Home/TestimonialsCarousel";
import FinalCTA from "@/components/Home/FinalCTA";

const HomePage = () => {
  return (
    <>
      <Hero />
      <WhatWeCanBuildForYou />
      <ResultsGlance />
      <ComparisonCards />
      <TimeSaved />
      <FastSitesHelpSales />
      <BeSeenOnGoogle />
      <TryYourNumbersCalculator />
      <RealResultsCaseStudy />
      <WorkTimeline />
      <PricingCards />
      <TestimonialsCarousel />
      <FinalCTA />
    </>
  );
};

export default HomePage;
