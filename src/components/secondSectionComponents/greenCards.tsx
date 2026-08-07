import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useCardReveal } from "../../hooks/sideWaysMovement";

export default function GreenCards() {
  const shouldReduceMotion = useReducedMotion();
  const noMotion = shouldReduceMotion;
  const card0 = useCardReveal("left");

  const [mounted, setMounted] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const useMobileStagger = isMobileOrTablet && mounted && !shouldReduceMotion;

  return (
    <motion.div
      ref={card0.ref}
      style={
        useMobileStagger
          ? {}
          : noMotion
            ? {}
            : { opacity: card0.opacity, x: card0.x }
      }
      initial={useMobileStagger ? { opacity: 0, y: 24 } : undefined}
      animate={useMobileStagger ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
      className="relative h-auto w-full overflow-hidden rounded-[28px] bg-[#46CD90] px-4 py-5 sm:px-5 sm:py-7 md:col-span-2 lg:col-span-2 lg:min-h-[300px] lg:px-5 lg:py-5">
      <div className="flex h-full flex-col items-center gap-4 text-center sm:gap-6 lg:flex-row lg:items-center lg:justify-between lg:text-left">
        <motion.div
          initial={useMobileStagger ? { opacity: 0, y: 20 } : undefined}
          animate={useMobileStagger ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mx-auto flex w-full lg:max-w-xs flex-col items-center text-center sm:max-w-lg  lg:mx-0 lg:items-start lg:text-left">
          <h3 className="text-xl font-semibold leading-snug text-white sm:text-[26px]">
            Seamless Cross-Border Payments
          </h3>
          <p className=" text-xs leading-relaxed text-white/85">
            Send money internationally with just a few taps, no extra steps
            needed.
          </p>
          <button className="group mt-6 flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 py-1.5 pl-5 pr-2 text-sm font-semibold text-white shadow-lg shadow-orange-900/20 transition-transform duration-300 hover:scale-[1.04]">
            Try Now
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight color="black" className="h-3.5 w-3.5" />
            </span>
          </button>
        </motion.div>

        <motion.div
          initial={useMobileStagger ? { opacity: 0, y: 24 } : undefined}
          animate={useMobileStagger ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.6, delay: 0.32, ease: "easeOut" }}
          className="relative mx-auto h-[180px] w-[180px] shrink-0 rounded-full bg-[#2E714C29] sm:h-[180px] sm:w-[180px] md:h-[200px] md:w-[200px] lg:mx-0 lg:h-[190px] lg:w-[190px]">
          <div className="absolute inset-0 lg:left-4 lg:top-4 sm:left-5.5 sm:top-5 left-4 top-4 h-[150px] w-[150px] rounded-full border-2 border-dashed border-white md:h-[160px] md:w-[160px] sm:h-[140px] sm:w-[140px]" />

          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}>
            <span className="absolute lg:left-3 lg:top-5 sm:left-4 sm:top-7 top-9 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full">
              <motion.span
                animate={{ rotate: -360 }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="text-lg">
                <img
                  src="/ss-img.jpg"
                  alt="Real Image sakora woman"
                  className="h-10 w-auto object-cover"
                />
              </motion.span>
            </span>
            <span className="absolute right-15 top-2 flex h-7 w-7 items-center justify-center overflow-hidden rounded-full">
              <motion.span
                animate={{ rotate: -360 }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}>
                <img
                  src="/ss-painted.png"
                  alt="painted Image rainbow & sun "
                  className="h-7 w-auto object-cover"
                />
              </motion.span>
            </span>
            <span className="absolute left-6 bottom-6 flex h-8 w-8 items-center justify-center overflow-hidden rounded-full">
              <motion.span
                animate={{ rotate: -360 }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}>
                <img
                  src="/ss-painted (2).png"
                  alt="painted Image red sun "
                  className="h-7 w-auto object-cover"
                />
              </motion.span>
            </span>
            <span className="absolute bottom-2 right-8 flex h-9 w-9 overflow-hidden rounded-full">
              <motion.span
                animate={{ rotate: -360 }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="text-lg">
                <img
                  src="/ss-img (2).jpg"
                  alt="Real Image hairy woman"
                  className="h-13 w-auto object-cover"
                />
              </motion.span>
            </span>
          </motion.div>

          <div className="absolute inset-0 md:top-11.5 md:left-12 lg:left-10 lg:top-10 left-9 top-9 flex h-[110px] w-[110px] items-center justify-center rounded-full bg-white">
            <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white shadow-xl shadow-black/20">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="relative h-9 w-9 rounded-full bg-black">
                <span className="absolute left-0 top-0 h-7 w-7 rounded-full bg-white">
                  <span className="absolute right-1.5 top-1.5 h-3.5 w-3.5 rounded-full bg-orange-500" />
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
