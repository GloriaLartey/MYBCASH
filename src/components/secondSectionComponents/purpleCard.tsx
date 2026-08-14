import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useReducedMotion, type MotionStyle } from "framer-motion";
import { countryFlags } from "../../dataStore/datafile";
import { useStaggeredRise } from "../../hooks/staggeredRise";

export default function PurpleCard() {
  const shouldReduceMotion = useReducedMotion();
  const noMotion = shouldReduceMotion;
  const bottomRowRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress: bottomProgress } = useScroll({
    target: bottomRowRef,
    offset: ["start 0.92", "start 0.5"],
  });
  
  const card4 = useStaggeredRise(bottomProgress, [0.55, 1]);
  const [mounted, setMounted] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // FIX: Debounce or safeguard layout metrics evaluation
    let timeoutId: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobileOrTablet(window.innerWidth < 1024);
      }, 100); // 100ms buffer prevents continuous paint cycles on size shifts
    };
    
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  const useMobileStagger = isMobileOrTablet && mounted && !shouldReduceMotion;

  // FIX: Type layout evaluation explicitly to prevent type compilation errors
  const computedCardStyle = (useMobileStagger 
    ? {} 
    : noMotion 
      ? {} 
      : card4) as MotionStyle;

  return (
    <div ref={bottomRowRef} className="h-75">
      <motion.div
        style={computedCardStyle}
        initial={useMobileStagger ? { opacity: 0, y: 24 } : undefined}
        animate={useMobileStagger ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.65, delay: 0.25, ease: "easeOut" }}
        className="flex h-full w-full min-h-[200px] flex-col items-center justify-center rounded-tl-3xl rounded-br-3xl bg-[#012933] border border-white/10 px-4 py-7 text-center sm:min-h-[200px] sm:px-5 sm:py-8 lg:min-h-[200px] lg:items-center lg:justify-center lg:px-5 lg:py-7 lg:text-center">
        <h3 className="text-xl font-semibold text-white">Worldwide Coverage</h3>
        <p className="mt-1 w-full text-xs leading-relaxed text-white/85 sm:w-70">
          MYBCASH is now available in almost every country. Access from
          anywhere!
        </p>

        <div className="mt-auto mb-auto flex w-full max-w-[200px] flex-nowrap items-center justify-center gap-3 sm:max-w-none sm:justify-center lg:justify-center">
          {countryFlags.map((flag, i) => {
            const isMiddle = i === 1;

            return (
              <motion.span
                key={i}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/15 drop-shadow-[0_6px_5px_rgba(0,0,0,0.55)] ${
                  isMiddle
                    ? "h-28 w-28 sm:h-28 lg:h-28 lg:w-28"
                    : "h-14 w-14 sm:h-16 sm:w-16"
                }`}>
                <img
                  src={flag}
                  alt={`Flag ${i + 1}`}
                  className={`${isMiddle ? "h-42 w-full sm:h-42 sm:w-auto lg:h-42 lg:w-auto" : "h-23 w-auto sm:h-23 sm:w-auto lg:h-25 lg:w-auto"} min-w-full shrink-0 rounded-full object-cover`}
                />
              </motion.span>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
