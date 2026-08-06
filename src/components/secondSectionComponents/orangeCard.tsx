import { useRef } from "react";
import {motion, useScroll, useReducedMotion} from "framer-motion";
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
    return(
        <>
        <div
          ref={bottomRowRef}>
             <motion.div
            style={noMotion ? {} : card2}
            className="rounded-[28px] bg-[#FF7E1B] px-7 py-8">
            <h3 className="text-xl text-center font-semibold text-white">
              Multiple Accounts
            </h3>
            <p className="mt-1 text-xs text-center text-white/85">
              Multiple Accounts to secure any situation
            </p>

            <div className="relative mt-8 flex items-center justify-between">
              <div className="rounded-2xl bg-white px-4 py-3 text-xs font-semibold leading-relaxed text-black shadow-md">
                98765432
                <br />
                13579246
              </div>

              <svg
                className="absolute left-[92px] top-1/2 h-56 w-48 -translate-y-1/2 text-white"
                viewBox="0 0 120 80"
                fill="none">
                <path
                  d="M0 40 H90 M90 2 V78 M90 2 H106 M90 40 H106 M90 78 H106"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              </svg>

              <div className="flex flex-col items-center gap-3">
                {["/house-1.png", "/profile.png", "/house-2.png"].map(
                  (Icon, i) =>
                    i != 1 ? (
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
         
        </>
    )
}