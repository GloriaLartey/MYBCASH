// import { useRef } from "react";
import {motion, useReducedMotion} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { currencies} from "../../dataStore/datafile";
import { useCardReveal } from "../../hooks/sideWaysMovement";

export default function PinkCard() {
      const shouldReduceMotion = useReducedMotion();
  const noMotion = shouldReduceMotion;
  const card1 = useCardReveal("right"); 
    return(
        <>
        <motion.div
            ref={card1.ref}
            style={noMotion ? {} : card1}
            className="rounded-[28px] bg-[#FF54AA] px-7 py-8">
            <h3 className="text-xl font-semibold text-center text-white">
              Instant Currency Covert
            </h3>
            <p className="mt-1 text-xs text-center text-white/80">
              Convert with fingertips instantly.
            </p>

            <div className="mt-6 rounded-[18px] bg-[#E52276] p-3">
              <p className="mb-2 text-[11px] font-medium text-white/80">
                Sell USD
              </p>
              <div className="flex flex-col gap-2">
                {currencies.map((c) => (
                  <div
                    key={c.code}
                    className="flex items-center justify-between rounded-full bg-white px-3 py-2.5">
                    <span className="flex items-center gap-3 text-sm">
                      <img
                        src={c.flag}
                        alt={`${c.code} flag`}
                        className="h-4 w-auto"
                      />
                      <img
                        src="/angle-down.png"
                        alt="Arrow"
                        className="h-2 w-2.5 object-contain mt-auto"
                      />
                    </span>
                    <span className="text-sm font-medium text-black">
                      {c.amount}
                    </span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-3 flex w-full items-center pl-26 justify-center gap-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 py-2 px-2 text-sm font-semibold text-white shadow-lg shadow-orange-900/20">
                Exchange
                <motion.span
                  //   animate={{ rotate: [0, 180, 360] }}
                  //   transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="flex h-7 w-7 items-center justify-center rounded-full ml-auto bg-white">
                  <ArrowUpRight color="black" className="h-3.5 w-3.5" />
                </motion.span>
              </motion.button>
            </div>
          </motion.div>
        </>
    )
}