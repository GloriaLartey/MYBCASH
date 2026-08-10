import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import React from "react"; // Added to memoize structural components
import {
  Features,
  Currencies,
  targetBalance,
  itemHeight,
  visibleHeight,
  statusBar,
} from "../dataStore/datafile";
import { CurrencyRow } from "../components/thirdSectionComponents/currencyRow";

// FIX: Cache filtered lists outside the component body so they don't re-run on scroll ticks
const featuresWithDescription = Features.filter((feature) => feature.description);
const featuresWithoutDescription = Features.filter((feature) => !feature.description);

// OPTIMIZATION: Wrap your custom row import to prevent rogue sub-component cycles
const MemoizedCurrencyRow = React.memo(CurrencyRow);

export default function ThirdSection() {
  const shouldReduceMotion = useReducedMotion();
  
  // FIX: Replace state with a targeted text DOM reference to stop full-page re-renders
  const balanceTextRef = useRef<HTMLParagraphElement>(null);

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.03", "end 0"],
  });

  const balanceRaw = useTransform(
    scrollYProgress,
    [0.05, 0.65],
    [185450425, targetBalance],
  );

  // FIX: Perform high-frequency style text updating directly on the element node 
  useMotionValueEvent(balanceRaw, "change", (v) => {
    if (balanceTextRef.current) {
      const calculatedValue = Math.max(185450425, Math.round(v));
      balanceTextRef.current.textContent = `$${calculatedValue.toLocaleString()}`;
    }
  });

  // Handle initial placeholder layout text insertion safely on load
  useEffect(() => {
    if (balanceTextRef.current) {
      balanceTextRef.current.textContent = `$${(185450425).toLocaleString()}`;
    }
  }, []);

  const listMaxScroll = Currencies.length * itemHeight - visibleHeight;
  const listY = useTransform(scrollYProgress, [0.9, 0.85], [0, -listMaxScroll]);

  return (
    <section
      ref={sectionRef}
      className="bg-black px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20 font-jakarta">
      <div className="mx-auto max-w-[1080px]">
        <div className="grid grid-cols-1 font-jakarta lg:grid-cols-2">
          {/* dark card */}
          <div className="relative z-0 flex min-h-[300px] flex-col items-center rounded-[32px] bg-[#303147] px-6 py-10 text-center sm:rounded-[40px] sm:px-10 sm:py-16 lg:items-start lg:rounded-[50px] lg:px-12 lg:py-27 lg:text-left">
            <span
              style={{
                background:
                  "linear-gradient(#303147, #303147) padding-box, linear-gradient(to right, #F1D7B5, #EB67A0) border-box",
              }}
              className="inline-flex w-fit items-center uppercase rounded-full border-1 border-transparent px-2 py-0.5 text-[9px] tracking-wide text-white">
              Highlights
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl text-white">
              We Serve the Best
            </h2>

            <div className="mt-3 flex w-full flex-col items-center gap-3 lg:items-start">
              {featuresWithDescription.map((feature) => (
                <div key={feature.title}>
                  <p className="text-sm sm:text-base text-white">
                    {feature.title}
                  </p>
                  <p className="mx-auto mt-2 max-w-sm text-xs leading-relaxed text-white lg:mx-0">
                    {feature.description}
                  </p>
                </div>
              ))}
              <div className="flex w-full flex-wrap justify-center gap-x-6 gap-y-2 lg:w-auto lg:flex-col lg:items-start lg:justify-start lg:gap-3">
                {featuresWithoutDescription.map((feature) => (
                  <p
                    key={feature.title}
                    className="text-sm whitespace-nowrap text-white sm:text-base">
                    {feature.title}
                  </p>
                ))}
              </div>
            </div>

            <button className="group mt-8 sm:mt-11 flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 py-1 pl-4 pr-1 text-xs font-semibold text-white shadow-lg shadow-orange-900/20 transition-transform duration-300 hover:scale-[1.04]">
              Download Now
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight color="black" className="h-4 w-4" />
              </span>
            </button>
          </div>

          {/* purple card */}
          <div className="relative z-9 min-h-[450px] sm:min-h-[460px] lg:min-h-[400px] font-jakarta overflow-hidden rounded-[32px] sm:rounded-[40px] lg:rounded-[50px] bg-[#BB9FFC] lg:-ml-6">
            <div className="absolute left-1/2 top-20 sm:top-24 lg:top-34 w-[80%] sm:w-[70%] lg:w-[92%] max-w-[280px] sm:max-w-[300px] lg:max-w-[360px] -translate-x-1/2 aspect-[2031/4096]">
              <img
                src="/ts-phone.webp"
                alt="MYBCASH wallet showing currency balances"
                className="absolute inset-0 z-0 h-full w-full object-contain"
              />

              <div className="absolute left-[5.17%] top-[1.68%] z-[10] h-[23%] w-[92.6%] overflow-hidden rounded-t-[5%] bg-transparent">
                <div className="flex h-full flex-col pr-2 pt-3">
                  {/* Status bar */}
                  <div className="flex items-center px-5 justify-between text-[10px] sm:text-[11px] lg:text-[12px] font-medium text-black">
                    <span className="-mt-1 mb-1 px-3">19:41</span>

                    <div className="flex flex-row items-center justify-start -mt-3 pr-2 h-3 w-auto">
                      {statusBar.map((src, i) => (
                        <img
                          key={i}
                          src={src}
                          alt={`src ${i + 1}`}
                          className={`h-full object-contain ${i === 2 ? null : "brightness-0"}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between rounded-full border-[1.5px] border-black/40 mx-5 py-0.5">
                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 sm:h-8 sm:w-8 shrink-0 overflow-hidden rounded-full border border-black/10">
                        <img
                          src="/profile-img.webp"
                          alt="Reson Holder"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-[10px] sm:text-[11px] font-semibold text-black">
                          Reson Holder
                        </p>
                        <p className="text-[8px] sm:text-[9px] text-black/50">
                          Your Wallet
                        </p>
                      </div>
                    </div>
                    <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white mr-0.5">
                      <img
                        src="/silver-bell.png"
                        alt="Reson Holder"
                        className="h-auto w-4 sm:w-5 object-fit"
                      />
                    </span>
                  </div>
                  <div className="mt-4 absolute left-0 top-[47%] z-0 py-4 sm:py-5 px-3 w-[97%] bg-[linear-gradient(to_top,#CBB9F6_59%,#E2D8FA_100%,#ede7fb_100%)]">
                    <p className="text-[9px] sm:text-[10px] text-black font-medium">
                      Your Balance
                    </p>
                    {/* OPTIMIZATION: Assign ref for zero-cost updates on this exact element node */}
                    <p ref={balanceTextRef} className="text-lg sm:text-xl lg:text-2xl font-semibold tabular-nums text-black lg:sm:text-[26px]">
                      $185,450,425
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 -top-[15%] z-[2] rounded-b-[5%] bg-[linear-gradient(to_top,#C0A4FF_0%,#B796FF_15%,#C2A9FEF0_15%,#C1ABF2_15%,#AF93F29C_70%,#C5ACFF12_80%,#A387E805_95%,#D7C7FC00_100%)]" />

              <div
                className="absolute left-[6.17%] lg:top-[60%] top-[70%] sm:top-[67%] z-[6] w-[89%] overflow-visible"
                style={{ height: visibleHeight }}>
                <motion.div
                  style={shouldReduceMotion ? {} : { y: listY }}
                  className="flex flex-col gap-3 px-[3%] pb-2 pt-1">
                  {Currencies.map((currency, i) => (
                    <MemoizedCurrencyRow
                      key={i}
                      currency={currency}
                      index={i}
                      progress={scrollYProgress}
                    />
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
