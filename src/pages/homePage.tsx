import HeroSection from "../sections/heroSection";
import SecondSection from "../sections/secondSection";
import ThirdSection from "../sections/thirdSection";
import FourthSection from "../sections/fourthSection";
import FifthSection from "../sections/fifthSection";
import SixthSection from "../sections/sixthSection";
import AboutSection from "../sections/aboutSection";
import Footer from "../sections/footer";
import { useScrollSpy } from "../hooks/useScrollSpy";

export default function HomePage() {
  useScrollSpy();

  return (
    <div className="relative overflow-hidden bg-[#011B22]">
      <div className="relative z-10">
        <div id="home" className="scroll-mt-24">
          <HeroSection />
        </div>
        <div id="about" className="scroll-mt-24">
          <AboutSection />
        </div>
        <div id="solutions" className="scroll-mt-24">
          <SecondSection />
          <ThirdSection />
        </div>
        
        
        <div id="testimonials" className="scroll-mt-24">
          <FourthSection />
          <FifthSection />
        </div>
        <div id="faqs" className="scroll-mt-24">
          <SixthSection />
        </div>
        <Footer />
      </div>
    </div>
  );
}