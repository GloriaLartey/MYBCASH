import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useReducedMotion } from "framer-motion";
import { useStaggeredRise } from "../../hooks/staggeredRise";

export default function OrangeCard() {
  const shouldReduceMotion = useReducedMotion();
  const noMotion = shouldReduceMotion;

  const bottomRowRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: bottomProgress } = useScroll({
    target: bottomRowRef,
    offset: ["start 0.92", "start 0.5"],
  });

  const card2 = useStaggeredRise(bottomProgress, [0, 0.45]);
  const [mounted, setMounted] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setIsMobileOrTablet(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const useMobileStagger = isMobileOrTablet && mounted && !shouldReduceMotion;

  return (
    <div ref={bottomRowRef} className="h-75">
      <motion.div
        style={useMobileStagger ? {} : noMotion ? {} : card2}
        initial={useMobileStagger ? { opacity: 0, y: 24 } : undefined}
        animate={useMobileStagger ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
        className="flex h-full w-full mt-auto min-h-[200px] flex-col items-center justify-center rounded-[28px] bg-[#FF7E1B] px-4 py-5 text-center sm:min-h-[200px] sm:px-5 sm:py-8 lg:min-h-[200px] lg:items-center lg:justify-center lg:px-5 lg:py-5 lg:text-left">
        <h3 className="text-xl font-semibold text-white">Multiple Accounts</h3>
        <p className=" text-xs text-white/85">
          Multiple Accounts to secure any situation
        </p>

        <div className="relative mt-auto mb-auto flex w-full max-w-[320px] flex-col items-center justify-between gap-5 sm:max-w-none sm:flex-row sm:items-center sm:justify-between lg:flex-row">
          <div className="w-full rounded-2xl bg-white px-4 py-3 text-xs font-semibold leading-relaxed text-black shadow-md sm:w-auto">
            98765432
            <br />
            13579246
          </div>

          <svg
            className="hidden h-auto w-auto text-white sm:block"
            viewBox="0 0 120 80"
            fill="none">
            <path
              d="M0 40 H90 M90 2 V78 M90 2 H106 M90 40 H106 M90 78 H106"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          </svg>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:flex-col">
            {["/house-1.png", "/profile.png", "/house-2.png"].map((Icon, i) =>
              i !== 1 ? (
                <span
                  key={i}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md">
                  <img
                    src={Icon}
                    alt={`Icon ${i + 1}`}
                    className="h-5 w-5 object-cover"
                  />
                </span>
              ) : (
                <span
                  key={i}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">
                  <img
                    src={Icon}
                    alt={`Icon ${i + 1}`}
                    className="h-full w-full"
                  />
                </span>
              ),
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
