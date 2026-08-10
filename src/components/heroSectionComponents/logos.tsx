import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionStyle,
} from "framer-motion";
import {
  brandLogos,
} from "../../dataStore/datafile";

export default function Logos() {
  /* 
    FIX: Removed duplicate window.addEventListener("scroll") and useNavStore() hook trigger.
    The main HeroSection container already updates the scroll state cleanly, saving massive CPU power.
  */
  const shouldReduceMotion = useReducedMotion();
  const logosRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: logoProgress } = useScroll({
    target: logosRef,
    offset: ["start end", "end start"],
  });
  
  // FIX: Literal typing mappings applied cleanly inside array tracks
  const logoOpacity = useTransform(
    logoProgress,
    [0, 0.35, 0.5, 0.65, 1] as const,
    [0, 1, 1, 1, 0] as const,
  );
  
  // FIX: Re-inserted full explicit brackets to clear syntax validation errors
  const logoY = useTransform(
    logoProgress,
    [0, 0.35, 0.5, 0.65, 1] as const,
    shouldReduceMotion 
      ? [0, 0, 0, 0, 0] as const 
      : [36, 0, 0, 0, -36] as const,
  );

  // FIX: Explicitly typed layout dictionary pointers to protect building paths
  const computedLogosStyle: MotionStyle = { 
    opacity: logoOpacity, 
    y: logoY 
  };

  return (
    <>
      {/*Brand logos*/}
      <motion.div
        ref={logosRef}
        style={computedLogosStyle}
        className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-4 sm:justify-between"
      >
        {brandLogos.map((brand, i) => (
          <div
            key={i}
            className="flex flex-col items-center leading-none opacity-80 transition-opacity hover:opacity-100"
          >
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
  );
}
