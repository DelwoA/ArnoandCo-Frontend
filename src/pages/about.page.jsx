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
