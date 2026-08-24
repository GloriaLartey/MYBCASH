import { useRef, useEffect } from "react";
// import {
//   // motion,
//   useScroll,
//   useTransform,
//   useMotionValueEvent,
//   // useReducedMotion,
// } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
// import React from "react";
import {Features} from "../dataStore/datafile";
// import { CurrencyRow } from "../components/thirdSectionComponents/currencyRow";

const featuresWithDescription = Features.filter(
  (feature) => feature.description,
);
const featuresWithoutDescription = Features.filter(
  (feature) => !feature.description,
);

// const MemoizedCurrencyRow = React.memo(CurrencyRow);

export default function ThirdSection() {
  // const shouldReduceMotion = useReducedMotion();

  const balanceTextRef = useRef<HTMLParagraphElement>(null);

  const sectionRef = useRef<HTMLDivElement>(null);
  // const { scrollYProgress } = useScroll({
  //   target: sectionRef,
  //   offset: ["start 0.03", "end 0"],
  // });

  // const balanceRaw = useTransform(
  //   scrollYProgress,
  //   [0.05, 0.65],
  //   [185450425, targetBalance],
  // );

  // useMotionValueEvent(balanceRaw, "change", (v) => {
  //   if (balanceTextRef.current) {
  //     const calculatedValue = Math.max(185450425, Math.round(v));
  //     balanceTextRef.current.textContent = `$${calculatedValue.toLocaleString()}`;
  //   }
  // });

  useEffect(() => {
    if (balanceTextRef.current) {
      balanceTextRef.current.textContent = `$${(185450425).toLocaleString()}`;
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-transparent px-4 py-14 sm:px-6 rounded-full sm:py-16 lg:px-10 lg:py-20 font-montserrat"
    >
      <div className="mx-auto max-w-[1080px]">
        <div className="grid grid-cols-1 items-center justify-items-centergap-0 font-montserrat lg:grid-cols-2">
          {/* dark card */}
          <div className="relative z-0 mx-auto flex aspect-square w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[520px] flex-col items-center justify-center rounded-full bg-[#012933] px-8 py-8 text-center sm:px-12 lg:px-16">
            <span
              style={{
                background:
                  "linear-gradient(#303147, #303147) padding-box, linear-gradient(to right, #F1D7B5, #EB67A0) border-box",
              }}
              className="inline-flex w-fit items-center uppercase rounded-full border-1 border-transparent px-2 py-0.5 text-[9px] tracking-wide text-white"
            >
              Highlights
            </span>
            <h2 className="mt-2 text-xl sm:text-2xl lg:text-3xl text-white">
              We Serve the Best
            </h2>

            <div className="mt-3 flex w-full flex-col items-center gap-2">
              {featuresWithDescription.map((feature) => (
                <div key={feature.title}>
                  <p className="text-xs sm:text-sm lg:text-base text-white">
                    {feature.title}
                  </p>
                  <p className="mx-auto mt-1 max-w-[240px] sm:max-w-xs text-[10px] sm:text-xs leading-relaxed text-white">
                    {feature.description}
                  </p>
                </div>
              ))}
              <div className="flex w-full flex-wrap justify-center gap-x-4 gap-y-1">
                {featuresWithoutDescription.map((feature) => (
                  <p
                    key={feature.title}
                    className="text-xs whitespace-nowrap text-white sm:text-sm"
                  >
                    {feature.title}
                  </p>
                ))}
              </div>
            </div>

            <button className="group mt-5 sm:mt-7 flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 py-1 pl-4 pr-1 text-xs font-semibold text-white shadow-lg shadow-orange-900/20 transition-transform duration-300 hover:scale-[1.04]">
              Download Now
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight color="black" className="h-4 w-4" />
              </span>
            </button>
          </div>

          {/* phone card */}
          <div className="relative z-0 mx-auto -mt-1 lg:mt-0 lg:-ml-1 aspect-square w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[520px] rounded-full bg-[#012933]">
            <div className="absolute left-1/2 top-1/2 w-[92%] sm:w-[88%] lg:w-[94%] max-w-[440px] -translate-x-1/2 -translate-y-1/2 aspect-[2031/4096]">
              <img
                src="/phoneee.png"
                alt="MYBCASH wallet showing currency balances"
                className="absolute inset-0 h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
