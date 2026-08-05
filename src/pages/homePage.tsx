import HeroSection from "../sections/heroSection";
import SecondSection from "../sections/secondSection";
import ThirdSection from "../sections/thirdSection";
import FourthSection from "../sections/fourthSection";
import FifthSection from "../sections/fifthSection";
import SixthSection from "../sections/sixthSection";

export default function HomePage() {
  return (
    <div className="bg-black overflow-hidden">
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
    </div>
  );
}
