import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionStyle,
} from "framer-motion";
import { useRef } from "react";
import { avatarColors, avatarImages } from "../../dataStore/datafile";

export default function TextSide() {
  const shouldReduceMotion = useReducedMotion();
  const localTextRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: localTextRef,
    offset: ["start 0.85", "start 0.35"],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.3] as const, [0, 1] as const);
  const textY = useTransform(scrollYProgress, [0, 0.3] as const, [24, 0] as const);

  const computedTextStyle = (shouldReduceMotion 
    ? {} 
    : { opacity: textOpacity, y: textY }) as MotionStyle;

  return (
    <>
      <div ref={localTextRef}>
        <motion.div
          style={computedTextStyle}
          className="flex flex-col items-center py-5 text-center lg:items-start lg:py-8 lg:text-left"
        >
          <span
            style={{
              background:
                "linear-gradient(#303147, #303147) padding-box, linear-gradient(to right, #F1D7B5, #EB67A0) border-box",
            }}
            className="inline-flex w-fit items-center uppercase rounded-full border-1 border-transparent px-2 py-0.5 text-[9px] mt-10 tracking-wide text-white"
          >
            We Are Available
          </span>

          <h2 className="pt-6 max-w-md text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
            Bridging the distance, one transaction at a time
          </h2>

          <p className="pt-1 max-w-xl text-xs leading-relaxed text-white">
            With the MYBCASH virtual cards, you can effortlessly navigate the
            global landscape and embrace new experiences.
          </p>

          <div className="my-auto flex flex-wrap items-center justify-center gap-4 lg:mt-45 lg:justify-start">
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

          <div className="mt-5 ml-4 hidden items-center gap-1 lg:flex">
            <div className="flex -space-x-2">
              {avatarColors.map((color, i) => (
                <div
                  key={i}
                  className="relative flex items-center justify-center h-9 w-9 overflow-hidden rounded-full border-2 border-[#333146] shadow-sm"
                  style={{ backgroundColor: color }}
                >
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
        </motion.div>
      </div>
    </>
  );
}
