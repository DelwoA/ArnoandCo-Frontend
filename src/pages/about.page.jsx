import HeroAbout from "@/components/About/HeroAbout";
import Mission from "@/components/About/Mission";
import Values from "@/components/About/Values";
import Milestones from "@/components/About/Milestones";
import Team from "@/components/About/Team";
import Technologies from "@/components/About/Technologies";
import BottomCTA from "@/components/About/BottomCTA";

const AboutPage = () => {
  return (
    <>
      <title>
        About Us - Arno & Co. | Website & App Solutions for Startups
      </title>
      <meta
        name="description"
        content="Learn about Arno & Co., a startup team in Wyoming helping small businesses in Sri Lanka and the USA build websites, apps, and AI tools to grow faster."
      />
      <link rel="canonical" href="https://www.arnoandco.com/about" />

      {/* Open Graph for Facebook / LinkedIn / WhatsApp */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Arno & Co." />
      <meta
        property="og:title"
        content="About Us - Arno & Co. | Website & App Solutions for Startups"
      />
      <meta
        property="og:description"
        content="Learn about Arno & Co., a startup team in Wyoming helping small businesses in Sri Lanka and the USA build websites, apps, and AI tools to grow faster."
      />
      <meta property="og:url" content="https://www.arnoandco.com/about" />

      {/* Recommended image: 1200×630 PNG/JPG; absolute URL */}
      <meta
        property="og:image"
        content="https://www.arnoandco.com/logo-primary.png"
      />
      <meta property="og:image:alt" content="Arno & Co. Logo." />
      <meta property="og:locale" content="en_US" />

      <HeroAbout />
      <Mission />
      <Values />
      <Milestones />
      {/* <Team /> */}
      <Technologies />
      <BottomCTA />
    </>
  );
};

export default AboutPage;
