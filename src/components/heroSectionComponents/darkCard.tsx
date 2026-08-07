import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useNavStore } from "../../store/useNavStore";
import { avatarColors, avatarImages } from "../../dataStore/datafile";

export default function DarkCard() {
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
        transition={{ duration: 0.7, delay: 2, ease: "easeOut" }}
        className="relative flex flex-col justify-center overflow-hidden rounded-[32px] bg-[#303147] px-4 pb-5 pt-12 sm:rounded-[42px] sm:px-6 sm:pb-6 sm:pt-16 lg:rounded-[50px] lg:px-10 lg:pb-5 lg:pr-12">
        <div className="flex flex-col items-center pb-8 pt-10 text-center sm:pb-10 sm:pt-16 lg:pb-14 lg:pt-24">
          <span
            style={{
              background:
                "linear-gradient(#333146, #333146) padding-box, linear-gradient(to right, #F1D7B5, #EB67A0) border-box",
            }}
            className="inline-flex w-fit items-center rounded-full border border-transparent px-2 py-0.5 text-[9px] tracking-[0.2em] text-white sm:px-2.5 sm:py-1 sm:text-[10px] lg:text-[9px]">
            HeroSection
          </span>

          <h1 className="max-w-[16rem] text-[1.7rem] font-semibold leading-[1.08] text-white sm:max-w-[28rem] sm:text-4xl lg:max-w-[32rem] lg:text-5xl">
            Empower Your Financial Future with MYBCASH
          </h1>

          <button className="group mt-5 flex w-fit items-center gap-1 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 py-1.5 pl-4 pr-1 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-transform duration-300 sm:mt-6">
            Download App
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              <ArrowUpRight color="black" className="h-5 w-5" />
            </span>
          </button>
        </div>

        <div className="mt-auto flex w-full flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-2 self-center sm:gap-1">
            <div className="flex -space-x-2">
              {avatarColors.map((color, i) => (
                <div
                  key={i}
                  className="relative flex h-7 w-7 items-center justify-center overflow-hidden rounded-full border-2 border-[#333146] shadow-sm sm:h-8 sm:w-8 lg:h-9 lg:w-9"
                  style={{ backgroundColor: color }}>
                  {avatarImages[i] && (
                    <img
                      src={avatarImages[i]}
                      alt={`User avatar ${i + 1}`}
                      className="h-4 w-auto object-cover mix-blend-normal sm:h-5 lg:h-6"
                    />
                  )}
                </div>
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold text-white sm:text-sm">
                3.1M
              </p>
              <p className="text-[10px] text-white/50 sm:text-[11px]">
                Downloads worldwide
              </p>
            </div>
          </div>

          <div className="ml-auto flex items-center gap-1.5 self-center sm:gap-1">
            <span className="text-[10px] text-white sm:text-xs">
              Available on
            </span>
            <div className="flex items-center -space-x-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white sm:h-8 sm:w-8">
                <img
                  src="/apple.png"
                  alt="apple-logo"
                  className="h-4 w-auto object-cover mix-blend-normal sm:h-5 lg:h-6"
                />
              </span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#303147] bg-white sm:h-8 sm:w-8">
                <img
                  src="/robot.png"
                  alt="android-logo"
                  className="h-4 w-auto object-cover mix-blend-normal sm:h-5 lg:h-6"
                />
              </span>{" "}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
