import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionStyle,
} from "framer-motion";
import { useRef } from "react";
// import { avatarColors, avatarImages } from "../../dataStore/datafile";
import DownloadButtons from "../heroSectionComponents/downloadOptions";

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
      <div ref={localTextRef} >
        <motion.div
          style={computedTextStyle}
          className="flex flex-col items-center text-center lg:items-start lg:py-8 lg:text-left"
        >
          <span
            style={{
              background:
                "linear-gradient(black, black) padding-box, linear-gradient(to right, #F1D7B5, #EB67A0) border-box",
            }}
            className="inline-flex w-fit items-center uppercase rounded-full border-1 border-transparent px-2 py-0.5 text-[9px] mt-10 tracking-wide text-white"
          >
            We Are Available
          </span>

          <h2 className="pt-6  text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
            Bridging the distance, one transaction at a time
          </h2>

          <p className="pt-1  text-xs leading-relaxed text-white">
            With the MYBCASH virtual cards, you can effortlessly navigate the
            global landscape and embrace new experiences.
          </p>
          <div className=" lg:max-w-sm my-auto flex flex-wrap items-center justify-center gap-4 lg:mt-20 lg:justify-start"><DownloadButtons iosUrl="YOUR_APP_STORE_URL" androidUrl="YOUR_GOOGLE_PLAY_URL"/></div>
        </motion.div>
      </div>
    </>
  );
}
