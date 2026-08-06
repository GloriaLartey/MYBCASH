import { useRef } from "react";
import {motion, useScroll, useReducedMotion} from "framer-motion";
import { barHeights} from "../../dataStore/datafile";
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
    return(
        <>
        <div
          ref={bottomRowRef}>
            <motion.div
            style={noMotion ? {} : card3}
            className="rounded-[28px] bg-[#5A54FF] px-7 py-8">
            <h3 className="text-xl text-center font-semibold text-white">
              Transaction Tracking
            </h3>
            <p className="mt-1 text-xs text-center text-white/85">
              Monitor your transactions in real-time
            </p>

            <div className="mt-10 flex h-34 items-end justify-between gap-2">
              {barHeights.map((h, i) => (
                <div key={i} className="flex flex-1 flex-col items-center">
                  <span className="mb-1 h-1 w-1 rounded-full bg-white" />
                  <div style={{ height: h }} className="w-[0.5px] bg-white" />
                </div>
              ))}
            </div>
          </motion.div>
          </div>
        
        </>
    )
}