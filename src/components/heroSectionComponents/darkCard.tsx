import { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useNavStore } from "../../store/useNavStore";
import { avatarColors, avatarImages } from "../../dataStore/datafile";

export default function DarkCard() {
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
  const leftX = useTransform(scrollY, [0, 550], [0, -splitRange]);
  const cardOpacity = useTransform(scrollY, [0, 550], [1, 0.5]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={mounted ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 2, ease: "easeOut" }}
        style={{ x: leftX, opacity: cardOpacity }}
        className="relative flex flex-col justify-center overflow-hidden rounded-[50px] bg-[#303147] pb-5 sm:px-10">
        <div className="flex flex-col text-center items-center pt-36 pb-30">
          <span
            style={{
              background:
                "linear-gradient(#333146, #333146) padding-box, linear-gradient(to right, #F1D7B5, #EB67A0) border-box",
            }}
            className="inline-flex w-fit items-center rounded-full border-1 border-transparent px-2 py-0.5 text-[9px] tracking-wide text-white">
            HeroSection
          </span>

          <h1 className="max-w-lg text-4xl font-semibold leading-[1.15] text-white sm:text-5xl">
            Empower Your Financial Future with MYBCASH
          </h1>

          <button className="group mt-5 flex w-fit items-center gap-1 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 py-1 pl-4 pr-1 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-transform duration-300 ">
            Download App
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              <ArrowUpRight color="black" className="h-5 w-5" />
            </span>
          </button>
        </div>

        <div className=" flex flex-wrap mt-auto items-center justify-between gap-4">
          <div className="flex items-center gap-1">
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
              <p className="text-[11px] text-white/50">Downloads worldwide</p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-xs text-white">Available on</span>
            <div className="flex items-center -space-x-2">
              <span className="flex  h-8 w-8 items-center justify-center rounded-full bg-white">
                <img
                  src="/apple.png"
                  alt="apple-logo"
                  className="h-6 w-auto object-cover mix-blend-normal"
                />
              </span>
              <span className="flex h-8 w-8 items-center border-2 border-[#303147] justify-center rounded-full bg-white">
                <img
                  src="/robot.png"
                  alt="android-logo"
                  className="h-6 w-auto object-cover mix-blend-normal"
                />
              </span>{" "}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
