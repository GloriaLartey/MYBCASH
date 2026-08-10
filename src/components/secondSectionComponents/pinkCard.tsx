import { useEffect, useState } from "react";
import { motion, useReducedMotion, type MotionStyle } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { currencies } from "../../dataStore/datafile";
import { useCardReveal } from "../../hooks/sideWaysMovement";

export default function PinkCard() {
  const shouldReduceMotion = useReducedMotion();
  const noMotion = shouldReduceMotion;
  const card1 = useCardReveal("right");

  const [mounted, setMounted] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // FIX: Debounce window size calculations to avoid locking up localhost threads
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

  // FIX: Cast evaluated custom style configurations to satisfy compiler constraints cleanly
  const computedCardStyle = (useMobileStagger 
    ? {} 
    : noMotion 
      ? {} 
      : card1) as MotionStyle;

  return (
    <motion.div
      ref={card1.ref}
      style={computedCardStyle}
      initial={useMobileStagger ? { opacity: 0, y: 24 } : undefined}
      animate={useMobileStagger ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.65, delay: 0.16, ease: "easeOut" }}
      className="flex h-full w-full min-h-[200px] flex-col mt-auto items-center justify-center rounded-[28px] bg-[#FF54AA] px-4 py-6 text-center sm:min-h-[200px] sm:px-5 sm:py-5 lg:min-h-[200px] lg:items-center lg:justify-center lg:px-7 lg:py-8 lg:text-left">
      <h3 className="text-xl font-semibold text-white">
        Instant Currency Covert
      </h3>
      <p className="text-xs text-white/80">
        Convert with fingertips instantly.
      </p>

      <div className="mt-6 w-full max-w-[260px] rounded-[18px] bg-[#E52276] p-3 sm:max-w-none">
        <p className="mb-2 text-[11px] font-medium text-white/80">Sell USD</p>
        <div className="flex flex-col gap-2">
          {currencies.map((c) => (
            <div
              key={c.code}
              className="flex items-center justify-between gap-3 rounded-full bg-white px-3 py-2.5">
              <span className="flex min-w-0 items-center gap-3 text-sm">
                <img
                  src={c.flag}
                  alt={`${c.code} flag`}
                  className="h-4 w-auto"
                />
                <img
                  src="/angle-down.webp"
                  alt="Arrow"
                  className="mt-auto h-2 w-2.5 object-contain"
                />
              </span>
              <span className="text-sm font-medium text-black">{c.amount}</span>
            </div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 px-2 py-2 text-sm font-semibold text-white shadow-lg shadow-orange-900/20">
          Exchange
          <motion.span className="ml-auto flex h-7 w-7 items-center justify-center rounded-full bg-white">
            <ArrowUpRight color="black" className="h-3.5 w-3.5" />
          </motion.span>
        </motion.button>
      </div>
    </motion.div>
  );
}
