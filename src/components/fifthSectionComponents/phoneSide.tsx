import { useRef } from "react";
import {motion, useScroll, useAnimationControls, useMotionValueEvent, useReducedMotion} from "framer-motion";
import { phoneAvatarImages, statusBar, avatarColors, avatarImages } from "../../dataStore/datafile";

export default function PhoneSide() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageControls = useAnimationControls();
  const hasEnteredRef = useRef(false);
  const previousProgressRef = useRef(0);
  const { scrollYProgress } = useScroll({target: sectionRef, offset: ["start 0.85", "start 0.35"]});

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
    <>
      <div ref={sectionRef} className="relative flex justify-start overflow-hidden pb-16 sm:justify-center lg:block lg:justify-start lg:overflow-visible lg:pb-0">

        <motion.div
          initial={{ x: 280, opacity: 0 }}
          animate={imageControls}
          className="relative aspect-[580/610] w-[78%] max-w-[300px] translate-x-0 translate-y-[5%] sm:w-[68%] sm:max-w-[400px] sm:translate-x-[6%] lg:w-[100%] lg:max-w-[590px] lg:translate-x-0 lg:translate-y-[5%]">
          <img
            src="/hs-hand.png"
            alt="Hand holding phone showing MYBCASH wallet"
            className="absolute lg:top-8 lg:left-3 left-30 top-20 inset-0 h-full w-full object-cover"
          />

          <div className="absolute left-50 top-[40%] lg:left-[32%] lg:top-[19%] h-[72%] w-[37%] bg-transparent">
            <p className="absolute top-[0px] left-5 text-[5px] font-bold sm:text-[9px] lg:text-[10px]">
              19:41
            </p>
            <div className="absolute right-0 top-[0.5px] flex flex-row items-center justify-end h-1.5 w-auto sm:h-2.5">
              {statusBar.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`src ${i + 1}`}
                  className={`h-full object-contain ${i === 2 ? null : "brightness-0"}`}
                />
              ))}
            </div>

            <div className="flex h-full mx-1 flex-col pb-[6%]">
              <div className="flex w-full mt-6 ml-2 items-center justify-between rounded-full border-[1.5px] border-black/50 shadow-sm sm:mt-7">
                <div className="flex items-center gap-1 ">
                  <div className="h-4 w-4 shrink-0 overflow-hidden rounded-full border border-black/10 sm:h-5 sm:w-5 lg:h-7 lg:w-7">
                    <img
                      src="/profile-img.jpg"
                      alt="Reson Holder"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col justify-center">
                    <p className="text-[4px] font-semibold text-black leading-tight sm:text-[10px] lg:text-xs">
                      Reson Holder
                    </p>
                    <p className="text-[4px] text-black/50 font-semibold leading-tight sm:text-[4px] lg:text-[8.5px]">
                      Your Wallet
                    </p>
                  </div>
                </div>

                <div className="h-5 w-5 flex shrink-0 overflow-hidden rounded-full bg-white sm:h-6 sm:w-6 lg:h-7 lg:w-7">
                  <img
                    src="/bell.png"
                    alt="Reson Holder"
                    className="h-auto w-4 object-fit m-auto sm:w-4.5 lg:w-5"
                  />
                </div>
              </div>

              <div className="mt-2 text-center">
                <p className="text-[7px] text-black font-semibold sm:text-[8px] lg:text-[9px]">
                  Your Balance
                </p>
                <p className="text-sm font-bold text-black sm:text-base lg:text-lg">
                  $785,450,425
                </p>
              </div>

              <p className="mt-1 text-[7px] font-medium text-black mx-2 sm:text-[8px] lg:text-[9px]">
                Your Cards
              </p>
              <div className="relative flex flex-col items-center justify-center mt-1 right-7 flex-1 h-150 w-64">
                <img
                  src="/blueCard.png"
                  alt="Credit Card"
                  className="lg:h-[198px] h-[100px] lg:wfull w-auto absolute -top-5 left-[1px]"
                />
                <img
                  src="/blackCard.png"
                  alt="Credit Card"
                  className="absolute lg:h-[198px] lg:w-full h-[100px] w-auto top-9 left-0"
                />
              </div>

              <div className="flex items-center mx-1 ml-4 justify-between">
                <p className="text-[7px] font-medium text-black sm:text-[8px] lg:text-[9px]">
                  Transfer
                </p>
                <p className="text-[7px] font-medium text-black/40 sm:text-[8px] lg:text-[9px]">
                  See all
                </p>
              </div>
              <div className="mt-2 flex items-center mx-2 pl-1 gap-1.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-dashed border-black/30 sm:h-6 sm:w-6 lg:h-7 lg:w-7">
                  <img
                    src="/arrow.png"
                    alt="Arrow"
                    className="h-2 w-2 object-contain sm:h-2 sm:w-2.5"
                  />
                </span>
                {phoneAvatarImages.map((src, i) => (
                  <div
                    key={i}
                    className="flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden rounded-full border-[1px] border-black/30 shadow-sm sm:h-6 sm:w-6 lg:h-7 lg:w-7">
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
        <div className="absolute bottom-0 left-0 z-10 flex items-center gap-1 lg:hidden">
          <div className="flex -space-x-2">
            {avatarColors.map((color, i) => (
              <div
                key={i}
                className="relative flex items-center justify-center h-8 w-8 overflow-hidden rounded-full border-2 border-[#333146] shadow-sm"
                style={{ backgroundColor: color }}>
                {avatarImages[i] && (
                  <img
                    src={avatarImages[i]}
                    alt={`User avatar ${i + 1}`}
                    className="h-5 w-auto object-cover mix-blend-normal"
                  />
                )}
              </div>
            ))}
          </div>
          <div>
            <p className="text-sm font-semibold text-white">3.1M</p>
            <p className="text-[10px] text-white/50">Downloads worldwide</p>
          </div>
        </div>
      </div>
    </>
  );
}