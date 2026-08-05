import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  Features,
  Currencies,
  targetBalance,
  itemHeight,
  visibleHeight,
  statusBar,
} from "../dataStore/datafile";
import { CurrencyRow } from "../components/thirdSectionComponents/currencyRow";

export default function ThirdSection() {
  const shouldReduceMotion = useReducedMotion();
  const [displayBalance, setDisplayBalance] = useState(0);

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.03", "end 0.5"],
  });

  // ── Balance counts up as you scroll down, back down as you scroll up
  const balanceRaw = useTransform(
    scrollYProgress,
    [0.05, 0.65],
    [0, targetBalance],
  );
  useMotionValueEvent(balanceRaw, "change", (v) => {
    setDisplayBalance(Math.max(0, Math.round(v)));
  });

  const listMaxScroll = Currencies.length * itemHeight - visibleHeight;
  const listY = useTransform(scrollYProgress, [0.9, 0.85], [0, -listMaxScroll]);

  return (
    <section ref={sectionRef} className="bg-black px-4 py-20 sm:px-6 lg:px-10 font-jakarta">
      <div className="mx-auto max-w-[1080px]">
        <div className="grid gap-6 grid-cols-1 font-jakarta lg:grid-cols-2">
          {/* dark card */}
          <div className="relative z-0 min-h-[300px] rounded-[50px] bg-[#303147] px-8 py-27 sm:px-12">
            <span
              style={{
                background:
                  "linear-gradient(#303147, #303147) padding-box, linear-gradient(to right, #F1D7B5, #EB67A0) border-box",
              }}
              className="inline-flex w-fit items-center uppercase rounded-full border-1 border-transparent px-2 py-0.5 text-[9px] tracking-wide text-white">
              Highlights
            </span>
            <h2 className="text-3xl text-white sm:text-3xl">
              We Serve the Best
            </h2>

            <div className="mt-3 flex flex-col gap-3">
              {Features.map((feature) => (
                <div key={feature.title}>
                  <p className="text-base text-white">{feature.title}</p>
                  {feature.description && (
                    <p className="mt-2 max-w-sm text-xs leading-relaxed text-white">
                      {feature.description}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <button className="group mt-11 flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 py-1 pl-4 pr-1 text-xs font-semibold text-white shadow-lg shadow-orange-900/20 transition-transform duration-300 hover:scale-[1.04]">
              Download Now
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight color="black" className="h-4 w-4" />
              </span>
            </button>
          </div>

          {/* purple card*/}
          <div className="relative z-10 min-h-[300px] font-jakarta overflow-hidden rounded-[50px] bg-[#BB9FFC] lg:-ml-6">
            <div className="absolute left-1/2 top-34 w-[92%] max-w-[360px] -translate-x-1/2 aspect-[2031/4096]">
              <img
                src="/ts-phone.png"
                alt="MYBCASH wallet showing currency balances"
                className="absolute inset-0 z-0 h-full w-full object-contain"
              />

              <div className="absolute left-[5.17%] top-[1.68%] z-[10] h-[23%] w-[92.6%] overflow-hidden rounded-t-[5%] bg-transparent">
                <div className="flex h-full flex-col pr-2 pt-3">
                  {/* Status bar */}
                  <div className="flex items-center px-5  justify-between text-[12px] font-medium text-black">
                    <span className="-mt-1 mb-1 px-3">19:41</span>

                    <div className=" flex flex-row items-center justify-start -mt-3 pr-2 h-3 w-auto">
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
                      <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full border border-black/10">
                        <img
                          src="/profile-img.jpg"
                          alt="Reson Holder"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-black">
                          Reson Holder
                        </p>
                        <p className="text-[9px] text-black/50">Your Wallet</p>
                      </div>
                    </div>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white mr-0.5">
                      <img
                        src="/silver-bell.png"
                        alt="Reson Holder"
                        className="h-auto w-5 object-fit"
                      />
                    </span>
                  </div>

                  <div className="mt-3 absolute top-19 z-0 py-5 px-3 w-81.5 bg-[linear-gradient(to_top,#CBB9F6_59%,#E2D8FA_100%,#ede7fb_100%)]">
                    <p className="text-[10px] text-black font-medium">
                      Your Balance
                    </p>
                    <p className="text-2xl font-semibold tabular-nums text-black sm:text-[26px]">
                      ${displayBalance.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 -top-[15%] z-[2] rounded-b-[5%] bg-[linear-gradient(to_top,#C0A4FF_0%,#B796FF_15%,#C2A9FEF0_15%,#C1ABF2_15%,#AF93F29C_70%,#C5ACFF12_80%,#A387E805_95%,#D7C7FC00_100%)]" />

              <div
                className="absolute left-[6.17%] top-[60%] z-[5] w-[89%] overflow-visible"
                style={{ height: visibleHeight }}>
                <motion.div
                  style={shouldReduceMotion ? {} : { y: listY }}
                  className="flex flex-col gap-3 px-[3%] pb-2 pt-1">
                  {Currencies.map((currency, i) => (
                    <CurrencyRow
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
