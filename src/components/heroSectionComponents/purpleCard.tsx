import { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useNavStore } from "../../store/useNavStore";
import { phoneAvatarImages, statusBar } from "../../dataStore/datafile";

export default function PurpleCard() {
  const { setIsScrolled } = useNavStore();
  const shouldReduceMotion = useReducedMotion();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setIsScrolled]);

  const { scrollY } = useScroll();
  const splitRange = shouldReduceMotion ? 0 : 110;
  const rightX = useTransform(scrollY, [0, 550], [0, splitRange]);
  const cardOpacity = useTransform(scrollY, [0, 550], [1, 0.5]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={mounted ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 2.2, ease: "easeOut" }}
        style={{ x: rightX, opacity: cardOpacity }}
        className="relative flex h-full min-h-[480px] items-end justify-center overflow-hidden rounded-[50px] bg-[#BB9FFC]">
        <div className="relative aspect-[580/600] w-[100%] max-w-[580px] sm:w-[100%] lg:w-[100%]">
          <img
            src="/hs-hand.png"
            alt="Hand holding phone showing MYBCASH wallet"
            className="absolute top-10 inset-0 h-full w-full object-cover"
          />

          <div className="absolute left-[31.4%] top-[20%] h-[72%] w-[37%] overflow-hidden bg-transparent">
            <p className=" absolute top-[0px] left-3 text-[10px] font-bold">
              19:41
            </p>
            <div className="absolute right-2.5 top-[0px] flex flex-row items-center justify-end h-2.5 w-auto">
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
              <div className="flex w-full mt-9 items-center justify-between rounded-full border-[1.5px] border-black/50 shadow-sm">
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

              <div className="mt-3 text-center">
                <p className="text-[8px] text-black font-semibold sm:text-[9px]">
                  Your Balance
                </p>
                <p className="text-base font-bold text-black sm:text-lg">
                  $785,450,425
                </p>
              </div>

              <p className="mt-2 text-[8px] font-medium text-black mx-2 sm:text-[9px]">
                Your Cards
              </p>
              <div className="relative flex flex-col items-center justify-center mt-2 right-9 flex-1 h-150 w-67 ">
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

              <div className="mt-50 flex items-center mx-1 justify-between">
                <p className="text-[8px] font-medium text-black  sm:text-[9px]">
                  Transfer
                </p>
                <p className="text-[8px] font-medium text-black/40 sm:text-[9px]">
                  See all
                </p>
              </div>
              <div className="mt-2 flex items-center mx-3 gap-1.5">
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
        </div>
      </motion.div>
    </>
  );
}
