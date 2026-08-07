import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavStore } from "../../store/useNavStore";
import { phoneAvatarImages, statusBar } from "../../dataStore/datafile";

export default function PurpleCard() {
  const { setIsScrolled } = useNavStore();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setIsScrolled]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={mounted ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 2.2, ease: "easeOut" }}
        className="relative flex h-full min-h-[180px] items-end justify-center overflow-hidden rounded-[32px] bg-[#BB9FFC] px-3 py-3 sm:min-h-[440px] sm:rounded-[42px] sm:px-4 sm:py-4 lg:min-h-[520px] lg:rounded-[50px] lg:pl-5 lg:pr-4 lg:py-5">
        <div className="relative aspect-[580/600] w-full max-w-[580px]">
          <img
            src="/hs-hand.png"
            alt="Hand holding phone showing MYBCASH wallet"
            className="absolute inset-0 top-12 h-full w-full object-cover sm:top-14 lg:top-16"
          />

          <div className="absolute left-[31.4%] top-[20%] h-[72%] w-[37%] overflow-hidden bg-transparent sm:left-[31.4%] sm:top-[20%] sm:h-[72%] sm:w-[37%]">
            <p className="absolute left-2 top-6 text-[8px] font-bold sm:left-3 sm:text-[10px]">
              19:41
            </p>
            <div className="absolute right-2 top-6 flex h-2.5 w-auto flex-row items-center justify-end sm:right-2.5">
              {statusBar.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`src ${i + 1}`}
                  className={`h-full object-contain ${i === 2 ? null : "brightness-0"}`}
                />
              ))}
            </div>

            <div className="mx-1 my-3 flex h-full flex-col justify-between pb-[4%] sm:pb-[5%] lg:pb-[6%]">
              <div className=" flex w-full items-center justify-between rounded-full border-[1.5px] border-black/50 shadow-sm sm:mt-8 lg:mt-9">
                <div className="flex items-center gap-1">
                  <div className="h-6 w-6 shrink-0 overflow-hidden rounded-full border border-black/10 sm:h-7 sm:w-7">
                    <img
                      src="/profile-img.jpg"
                      alt="Reson Holder"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col justify-center">
                    <p className="text-[10px] font-semibold leading-tight text-black sm:text-xs">
                      Reson Holder
                    </p>
                    <p className="text-[7px] font-semibold leading-tight text-black/50 sm:text-[8.5px]">
                      Your Wallet
                    </p>
                  </div>
                </div>

                <div className="flex h-6 w-6 shrink-0 overflow-hidden rounded-full bg-white sm:h-7 sm:w-7">
                  <img
                    src="/bell.png"
                    alt="Reson Holder"
                    className="h-auto w-5 object-fit m-auto"
                  />
                </div>
              </div>

              <div className="text-center sm:mt-3">
                <p className="text-[7px] font-semibold text-black sm:text-[8px] lg:text-[9px]">
                  Your Balance
                </p>
                <p className="text-sm font-bold text-black sm:text-base lg:text-lg">
                  $785,450,425
                </p>
              </div>

              <p className="mx-2 my-1 text-[7px] font-medium text-black sm:text-[8px] lg:text-[9px]">
                Your Cards
              </p>
              <div className="relative flex h-24 flex-1 flex-col items-center justify-center right-4 w-61 sm:right-5 sm:h-30 lg:right-7 lg:h-34">
                <img
                  src="/blueCard.png"
                  alt="Credit Card"
                  className="absolute -top-3 h-[130px] lg:min-w-[248px] w-full ms:max-w-[220px] sm:h-[180px] lg:h-[180px]"
                />
                <img
                  src="/blackCard.png"
                  alt="Credit Card"
                  className="absolute top-6 h-[130px] lg:min-w-[248px] w-full sm:top-19 ms:max-w-[220px] sm:h-[180px] lg:top-8 lg:h-[180px]"
                />
              </div>

              <div className="mx-1 flex items-center justify-between sm:mt-2 lg:mt-2">
                <p className="text-[7px] font-medium text-black sm:text-[8px] lg:text-[9px]">
                  Transfer
                </p>
                <p className="text-[7px] font-medium text-black/40 sm:text-[8px] lg:text-[9px]">
                  See all
                </p>
              </div>
              <div className="mx-3 mt-2 flex items-center gap-1.5 pb-1 sm:mt-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-dashed border-black/30 sm:h-7 sm:w-7">
                  <img
                    src="/arrow.png"
                    alt="Arrow"
                    className="h-5 w-5 object-contain sm:h-5 sm:w-5"
                  />
                </span>
                {phoneAvatarImages.map((src, i) => (
                  <div
                    key={i}
                    className="flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden rounded-full border-[1px] border-black/30 shadow-sm sm:h-7 sm:w-7">
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
