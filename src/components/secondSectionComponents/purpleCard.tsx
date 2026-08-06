import { useRef } from "react";
import {motion, useScroll, useReducedMotion} from "framer-motion";
import {  countryFlags } from "../../dataStore/datafile";
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
    return(
        <>
        <div
          ref={bottomRowRef}>
              <motion.div
            style={noMotion ? {} : card4}
            className="rounded-[28px] bg-[#B52AFF] px-10 py-8">
            <h3 className="text-xl text-center font-semibold text-white">
              Worldwide Coverage
            </h3>
            <p className="mt-1 text-xs text-center leading-relaxed w-70 text-white/85">
              MYBCASH is now available in almost every country. Access from
              anywhere!
            </p>

            <div className="mt-8 flex items-center gap-4">
              {countryFlags.map((flag, i) => {
                const isMiddle = i === 1;

                return (
                  <motion.span
                    key={i}
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/15 drop-shadow-[0_6px_5px_rgba(0,0,0,0.55)] ${
                      isMiddle ? "h-30 w-30" : "h-16 w-16"
                    }`}>
                    <img
                      src={flag}
                      alt={`Flag ${i + 1}`}
                      className={`${isMiddle ? "h-45 w-40" : "h-26 w-16"} min-w-full shrink-0 object-cover rounded-full`}
                    />
                  </motion.span>
                );
              })}
            </div>
          </motion.div>
          </div>
        
        </>
    )
}