import Image from "next/image";
import HeroSction from "./components/heroSection";
import TeamSection from "./components/teamSection";
import ContentSection from "./components/ContentSection";
import LogosSection from "./components/LogosSection";

export default function Home() {
  return (
    <div>
      <HeroSction />
      <TeamSection />
      <ContentSection />
      <br />
      <LogosSection />
    </div>
  );
}
