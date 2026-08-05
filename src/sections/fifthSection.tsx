import { useRef } from "react";
import {motion, useScroll, useAnimationControls, useMotionValueEvent, useTransform, useReducedMotion} from "framer-motion";
import { avatarColors, avatarImages, phoneAvatarImages, statusBar} from "../dataStore/datafile";

export default function FifthSection() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageControls = useAnimationControls();
  const hasEnteredRef = useRef(false);
  const previousProgressRef = useRef(0);
  const { scrollYProgress } = useScroll({target: sectionRef, offset: ["start 0.85", "start 0.35"]});
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [24, 0]);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const previous = previousProgressRef.current;
    const isScrollingDown = latest > previous;
    const isScrollingUp = latest < previous;
    previousProgressRef.current = latest;

    if (shouldReduceMotion) return;

    if (isScrollingDown && latest > 0.02 && !hasEnteredRef.current) {
      hasEnteredRef.current = true;
      imageControls.start({x: [280, -24, 14, -6, 0], opacity: [0, 1, 1, 1, 1], transition: { duration: 1.1, times: [0, 0.45, 0.65, 0.82, 1], ease: "easeOut"}});
    } else if (isScrollingUp && hasEnteredRef.current) {
      hasEnteredRef.current = false;
      imageControls.start({ x: 280, opacity: 0, transition: { duration: 0.6, ease: "easeIn" }});}});

  return (
    <section ref={sectionRef} className="bg-black font-jakarta px-4 py-12 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1130px]">
        <div className="relative overflow-hidden rounded-[50px] bg-[#303147] pl-8 sm:pl-12">
          <div className="grid grid-cols-1 gap-10  lg:grid-cols-2">
            {/* text (stays put, simple fade/slide-up) ── */}
            <motion.div
              style={
                shouldReduceMotion ? {} : { opacity: textOpacity, y: textY }
              }
              className="pt-16 ">
              <span
                style={{
                  background:
                    "linear-gradient(#303147, #303147) padding-box, linear-gradient(to right, #F1D7B5, #EB67A0) border-box",
                }}
                className="inline-flex w-fit items-center uppercase rounded-full border-1 border-transparent px-2 py-0.5 text-[9px] tracking-wide text-white">
                We Are Available
              </span>

              <h2 className=" mt-6 max-w-md text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Bridging the distance, one transaction at a time
              </h2>

              <p className="mt-1 max-w-xl w-200 text-xs leading-relaxed text-white">
                With the MYBCASH virtual cards, you can effortlessly navigate
                the global landscape and embrace new experiences.
              </p>

              <div className=" mt-45 flex flex-wrap items-center gap-4">
                <button className="flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 py-1 pl-6 pr-1 text-sm font-semibold text-white shadow-lg shadow-orange-900/20 transition-transform duration-300 hover:scale-[1.04]">
                  Download App
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                    <img
                      src="/apple.png"
                      alt="apple-logo"
                      className="h-4 w-auto object-cover mix-blend-normal"
                    />
                  </span>
                </button>

                <button className="flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 py-1 pl-6 pr-1 text-sm font-semibold text-white shadow-lg shadow-purple-900/20 transition-transform duration-300 hover:scale-[1.04]">
                  Download App
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                    <img
                      src="/robot.png"
                      alt="android-logo"
                      className="h-5 w-auto object-cover mix-blend-normal"
                    />
                  </span>
                </button>
              </div>

              <div className="mt-5 ml-4 flex items-center gap-1">
                <div className="flex -space-x-2">
                  {avatarColors.map((color, i) => (
                    <div
                      key={i}
                      className="relative flex items-center justify-center h-9 w-9 overflow-hidden rounded-full border-2 border-[#333146] shadow-sm"
                      style={{ backgroundColor: color }}>
                      {avatarImages[i] && (
                        <img
                          src={avatarImages[i]}
                          alt={`User avatar ${i + 1}`}
                          className="h-6 w-auto object-cover mix-blend-normal"
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">3.1M</p>
                  <p className="text-[11px] text-white/50">
                    Downloads worldwide
                  </p>
                </div>
              </div>
            </motion.div>

            {/* hand + phone, waves in from the right, settles, and slides straight back out the way it came the moment you reverse scroll direction. */}
            <motion.div
              initial={{ x: 280, opacity: 0 }}
              animate={imageControls}
              className="relative aspect-[580/610] w-[100%] max-w-[590px] sm:w-[100%] lg:w-[100%]">
              <img
                src="/hs-hand.png"
                alt="Hand holding phone showing MYBCASH wallet"
                className="absolute top-8 -left-3 inset-0 h-full w-full object-cover"
              />

              <div className="absolute left-[27.5%] top-[19%] h-[72%] w-[37%] bg-transparent">
                <p className=" absolute top-[0px] left-4 text-[10px] font-bold">
                  19:41
                </p>
                <div className="absolute right-0.5 top-[0.5px] flex flex-row items-center justify-end h-2.5 w-auto">
                  {statusBar.map((src, i) => (
                    <img
                    key={i}
                      src={src}
                      alt={`src ${i + 1}`}
                      className={`h-full object-contain ${i === 2 ? null : "brightness-0"}`}
                    />
                  ))}
                </div>

                <div className="flex h-full mx-1  flex-col pb-[6%]">
                  <div className="flex w-full mt-7 ml-2 items-center justify-between rounded-full border-[1.5px] border-black/50 shadow-sm">
                    <div className="flex items-center gap-1">
                      <div className="h-7 w-7 shrink-0 overflow-hidden rounded-full border border-black/10">
                        <img
                          src="/profile-img.jpg"
                          alt="Reson Holder"
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="flex flex-col justify-center">
                        <p className="text-xs font-semibold text-black leading-tight">
                          Reson Holder
                        </p>
                        <p className="text-[8.5px] text-black/50 font-semibold leading-tight">
                          Your Wallet
                        </p>
                      </div>
                    </div>

                    <div className="h-7 w-7 flex shrink-0 overflow-hidden rounded-full bg-white">
                      <img
                        src="/bell.png"
                        alt="Reson Holder"
                        className="h-auto w-5 object-fit m-auto"
                      />
                    </div>
                  </div>

                  <div className="mt-2 text-center">
                    <p className="text-[8px] text-black font-semibold sm:text-[9px]">
                      Your Balance
                    </p>
                    <p className="text-base font-bold text-black sm:text-lg">
                      $785,450,425
                    </p>
                  </div>

                  <p className="mt-1 text-[8px] font-medium text-black mx-2 sm:text-[9px]">
                    Your Cards
                  </p>
                  <div className="relative flex flex-col items-center justify-center mt-1 right-7 flex-1 h-150 w-64 ">
                    <img
                      src="/blueCard.png"
                      alt="Credit Card"
                      className=" h-[198px] w-full absolute -top-5 left-[0.5px]"
                    />
                    <img
                      src="/blackCard.png"
                      alt="Credit Card"
                      className="absolute h-[198px] w-full top-10 left-0"
                    />
                  </div>

                  <div className=" flex items-center mx-1 ml-4 justify-between">
                    <p className="text-[8px] font-medium text-black  sm:text-[9px]">
                      Transfer
                    </p>
                    <p className="text-[8px] font-medium text-black/40 sm:text-[9px]">
                      See all
                    </p>
                  </div>
                  <div className="mt-2 flex items-center mx-2 pl-1 gap-1.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-dashed border-black/30">
                      <img
                        src="/arrow.png"
                        alt="Arrow"
                        className="h-2 w-2.5 object-contain"
                      />
                    </span>
                    {phoneAvatarImages.map((src, i) => (
                      <div
                        key={i}
                        className="flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full border-[1px] border-black/30 shadow-sm">
                        <img
                          src={src}
                          alt={`Phone avatar ${i + 1}`}
                          className="h-full w-20 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
