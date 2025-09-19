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
      <title>Arno & Co. - Digital Solutions to Help Businesses Grow.</title>
      <meta
        name="description"
        content="Arno & Co. is a software development company that builds websites, apps and AI solutions to boost visibility and conversions—fast results in 3–6 weeks. Book a consult."
      />
      <link rel="canonical" href="https://www.arnoandco.com/" />

      {/* Open Graph for Facebook / LinkedIn / WhatsApp */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Arno & Co." />
      <meta
        property="og:title"
        content="Arno & Co. - Digital Solutions to Help Businesses Grow."
      />
      <meta
        property="og:description"
        content="Arno & Co. is a software development company that builds websites, apps and AI solutions to boost visibility and conversions—fast results in 3–6 weeks. Book a consult."
      />
      <meta property="og:url" content="https://www.arnoandco.com/" />

      {/* Recommended image: 1200×630 PNG/JPG; absolute URL */}
      <meta
        property="og:image"
        content="https://www.arnoandco.com/logo-url-preview.jpg"
      />
      <meta property="og:image:alt" content="Arno & Co. Logo." />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Arno & Co. - Digital Solutions to Help Businesses Grow."
      />
      <meta
        name="twitter:description"
        content="Arno & Co. is a software development company that builds websites, apps and AI solutions to boost visibility and conversions—fast results in 3–6 weeks. Book a consult."
      />
      <meta
        name="twitter:image"
        content="https://www.arnoandco.com/logo-url-preview.jpg"
      />
      <meta property="og:locale" content="en_US" />

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
      {/* <PricingCards /> */}
      {/* <TestimonialsCarousel /> */}
      <FinalCTA />
    </>
  );
};

export default HomePage;
