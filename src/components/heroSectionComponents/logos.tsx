import { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useNavStore } from "../../store/useNavStore";
import {
  brandLogos,
} from "../../dataStore/datafile";

export default function Logos() {

     const { setIsScrolled } =
    useNavStore();
  const shouldReduceMotion = useReducedMotion();
  const logosRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setIsScrolled]);


  const { scrollYProgress: logoProgress } = useScroll({
    target: logosRef,
    offset: ["start end", "end start"],
  });
  const logoOpacity = useTransform(
    logoProgress,
    [0, 0.35, 0.5, 0.65, 1],
    [0, 1, 1, 1, 0],
  );
  const logoY = useTransform(
    logoProgress,
    [0, 0.35, 0.5, 0.65, 1],
    shouldReduceMotion ? [0, 0, 0, 0, 0] : [36, 0, 0, 0, -36],
  );
    return(
        <>
        
          {/*Brand logos*/}
          <motion.div
            ref={logosRef}
            style={{ opacity: logoOpacity, y: logoY }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-4 sm:justify-between">
            {brandLogos.map((brand, i) => (
              <div
                key={i}
                className="flex flex-col items-center leading-none opacity-80 transition-opacity hover:opacity-100">
                <span className="text-3xl font-extrabold tracking-tight text-white">
                  {brand.name}
                </span>
                {brand.stacked && (
                  <span className="text-[9px] ml-auto font-semibold tracking-[0.1em] text-white/60">
                    CITY GUIDE
                  </span>
                )}
              </div>
            ))}
          </motion.div>
        </>
    )
}