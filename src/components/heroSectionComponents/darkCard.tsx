import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DownloadButtons from "./downloadOptions";
import PulsingChevrons from "./pulsingChevrons";

export default function DarkCard() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={mounted ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 2, ease: "easeOut" }}
      className="relative flex w-full flex-col justify-start rounded-[32px] bg-[#012933] px-4 py-10 sm:rounded-[42px] sm:px-6 sm:py-5 lg:min-h-[440px] lg:rounded-l-full lg:pl-7"
    >
      <div className="flex flex-col items-center text-center sm:px-6 sm:py-14 lg:items-start lg:px-4 lg:py-20 lg:text-start">
        <span
          style={{
            background:
              "linear-gradient(black, #090a09) padding-box, linear-gradient(to right, #F1D7B5, #EB67A0) border-box",
          }}
          className="inline-flex w-fit items-center gap-1.5 rounded-full border border-transparent px-2.5 py-1 text-[8px] tracking-[0.2em] text-white sm:px-3 sm:py-1 sm:text-[9px] lg:ml-3 lg:text-[10px]"
        >
          MULTI-CURRENCY WALLET
        </span>

        <h1 className="mt-4 max-w-[22rem] text-xl font-semibold leading-[1.15] text-white sm:mt-5 sm:max-w-sm sm:text-2xl lg:max-w-md lg:text-3xl">
          Move money across borders without the friction.
        </h1>

        <p className="mt-3 max-w-md text-[11px] leading-relaxed text-white/70 sm:mt-4 sm:text-xs">
          <span className="text-[#F1D7B5]">MYBCASH</span> brings together wallet balances, live exchange rates, bill
          payments, and instant transfers in one secure app built for everyday
          life.
        </p>

        <div className="mt-6 flex w-auto flex-col items-center gap-4 sm:mt-8 lg:w-auto lg:flex-row lg:items-center lg:gap-3">
          <DownloadButtons
            iosUrl="https://www.apple.com/app-store/"
            androidUrl="https://play.google.com/store/apps"
          />
          <PulsingChevrons />
        </div>
      </div>
    </motion.div>
  );
}
