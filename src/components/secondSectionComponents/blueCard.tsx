import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useReducedMotion, type MotionStyle } from "framer-motion";
import { barHeights } from "../../dataStore/datafile";
import { useStaggeredRise } from "../../hooks/staggeredRise";

export default function BlueCard() {
  const shouldReduceMotion = useReducedMotion();
  const noMotion = shouldReduceMotion;

  const bottomRowRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: bottomProgress } = useScroll({
    target: bottomRowRef,
    offset: ["start 0.92", "start 0.5"],
  });

  const card3 = useStaggeredRise(bottomProgress, [0.28, 0.73]);
  const [mounted, setMounted] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // FIX: Debounce resize calculations to eliminate high-frequency layout parsing lag on localhost
    let timeoutId: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobileOrTablet(window.innerWidth < 1024);
      }, 100);
    };

    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  const useMobileStagger = isMobileOrTablet && mounted && !shouldReduceMotion;

  // FIX: Explicitly typecast your conditional style objects to prevent standard Framer Motion v12 intrinsic errors
  const computedCardStyle = (useMobileStagger ? {} : noMotion ? {} : card3) as MotionStyle;

  return (
    <div ref={bottomRowRef} className="h-75">
      <motion.div
        style={computedCardStyle}
        initial={useMobileStagger ? { opacity: 0, y: 24 } : undefined}
        animate={useMobileStagger ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.65, delay: 0.24, ease: "easeOut" }}
        className="flex h-full w-full min-h-[200px] flex-col items-center justify-center rounded-[28px] bg-[#5A54FF] px-4 py-7 text-center sm:min-h-[200px] sm:px-5 sm:py-8 lg:min-h-[200px] lg:px-5 lg:py-7 lg:text-center">
        <h3 className="text-xl font-semibold text-white">
          Transaction Tracking
        </h3>
        <p className=" text-xs text-white/85">
          Monitor your transactions in real-time
        </p>

        <div className="mt-auto flex h-34 w-full max-w-[260px] items-end justify-between gap-2 sm:max-w-none">
          {barHeights.map((h, i) => (
            <div key={i} className="flex flex-1 flex-col items-center">
              <span className="mb-1 h-1 w-1 rounded-full bg-white" />
              <div style={{ height: h }} className="w-[0.5px] bg-white" />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
