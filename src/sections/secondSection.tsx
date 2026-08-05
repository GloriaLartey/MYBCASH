import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { currencies, barHeights, countryFlags } from "../dataStore/datafile";

// Independent reveal — used for the header and the top row.
function useCardReveal(fromSide: "left" | "right") {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.92", "start 0.55"],
  });

  const distance = fromSide === "left" ? -70 : 70;
  const x = useTransform(scrollYProgress, [0, 1], [distance, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return { ref, x, opacity };
}

function useStaggeredRise(
  progress: MotionValue<number>,
  range: [number, number],
) {
  const y = useTransform(progress, range, [64, 0]);
  const opacity = useTransform(progress, range, [0, 1]);
  return { y, opacity };
}

export default function SecondSection() {
  const shouldReduceMotion = useReducedMotion();
  const noMotion = shouldReduceMotion;

  const header = useCardReveal("left");
  const card0 = useCardReveal("left"); // green &
  const card1 = useCardReveal("right"); // pink come from the sides of the screen

  // Bottom row: one shared scroll tracker on the row wrapper
  const bottomRowRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: bottomProgress } = useScroll({
    target: bottomRowRef,
    offset: ["start 0.92", "start 0.5"],
  });

  const card2 = useStaggeredRise(bottomProgress, [0, 0.45]); // orange — first
  const card3 = useStaggeredRise(bottomProgress, [0.28, 0.73]); // blue — second
  const card4 = useStaggeredRise(bottomProgress, [0.55, 1]); // purple — third

  return (
    <section className="bg-black px-4 py-17 font-jakarta sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1130px]">
        {/*Header*/}
        <motion.div
          ref={header.ref}
          style={noMotion ? {} : { opacity: header.opacity }}
          className="flex flex-col items-center text-center">
          <span
            style={{
              background:
                "linear-gradient(#000000, #000000) padding-box, linear-gradient(to right, #F1D7B5, #EB67A0) border-box",
            }}
            className="inline-flex w-fit items-center uppercase rounded-full border-1 border-transparent px-2 py-0.5 text-[9px] tracking-wide text-white">
            Highlights
          </span>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            Meet the new era of transactions
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
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
                  Send money internationally with just a few taps, no extra
                  steps needed.
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

          {/*Instant Currency Covert */}
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
        </div>

        {/* orange, blue, purple — shared scroll tracker ── */}
        <div
          ref={bottomRowRef}
          className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {/* ── Card 3: Multiple Accounts (orange) ── */}
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

          {/*Transaction Tracking (blue/indigo)*/}
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

          {/* ── Card 5: Worldwide Coverage (purple) ── */}
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
                // Target the middle item (index 1 in a 3-item array)
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
      </div>
    </section>
  );
}
