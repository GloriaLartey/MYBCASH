import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useCardReveal } from "../../hooks/sideWaysMovement";

export default function GreenCards() {
  const shouldReduceMotion = useReducedMotion();
  const noMotion = shouldReduceMotion;
  const card0 = useCardReveal("left");
  return (
    <>
      <motion.div
        ref={card0.ref}
        style={noMotion ? {} : card0}
        className="relative overflow-hidden rounded-[28px] bg-[#46CD90] px-8 py-15 sm:px-10 lg:col-span-2">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xs">
            <h3 className="text-2xl font-semibold leading-snug text-white sm:text-[26px]">
              Seamless Cross-Border Payments
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-white/85">
              Send money internationally with just a few taps, no extra steps
              needed.
            </p>
            <button className="group mt-6 flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 py-1.5 pl-5 pr-2 text-sm font-semibold text-white shadow-lg shadow-orange-900/20 transition-transform duration-300 hover:scale-[1.04]">
              Try Now
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight color="black" className="h-3.5 w-3.5" />
              </span>
            </button>
          </div>

          <div className="relative h-[190px] bg-[#2E714C29] rounded-full  w-[190px] shrink-0 sm:mx-0">
            <div className="absolute inset-0 rounded-full border-2 top-4 left-4 h-[160px] w-[160px] border-dashed border-white" />

            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}>
              <span className="absolute left-3 top-6 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full">
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

            <div className="absolute top-10 left-10 inset-0 flex rounded-full bg-white h-[110px] w-[110px] items-center justify-center">
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
          </div>
        </div>
      </motion.div>
    </>
  );
}
