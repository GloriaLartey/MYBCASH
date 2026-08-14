import { useRef } from "react";
import {
  useScroll,
  useAnimationControls,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import React from "react"; // Added to handle sub-tree performance isolation
import PhoneSide from "../components/fifthSectionComponents/phoneSide";
import TextSide from "../components/fifthSectionComponents/textSide";

const MemoizedTextSide = React.memo(TextSide);

export default function FifthSection() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageControls = useAnimationControls();
  const hasEnteredRef = useRef(false);
  const previousProgressRef = useRef(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.85", "start 0.35"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const previous = previousProgressRef.current;
    const isScrollingDown = latest > previous;
    const isScrollingUp = latest < previous;
    previousProgressRef.current = latest;

    if (shouldReduceMotion) return;

    if (isScrollingDown && latest > 0.02 && !hasEnteredRef.current) {
      hasEnteredRef.current = true;
      imageControls.start({
        x: [280, -24, 14, -6, 0],
        opacity: [0, 1, 1, 1, 1],
        transition: {
          duration: 1.1,
          times: [0, 0.45, 0.65, 0.82, 1],
          ease: "easeOut",
        },
      });
    } else if (isScrollingUp && hasEnteredRef.current) {
      hasEnteredRef.current = false;
      imageControls.start({
        x: 280,
        opacity: 0,
        transition: { duration: 0.6, ease: "easeIn" },
      });
    }
  });

  return (
    <section
      ref={sectionRef}
      className="bg-transparent font-montserrat px-4 py-12 rounded-[] sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1130px]">
        <div className="relative overflow-hidden rounded-[100px] bg-[#012933] px-6 pt-10 pb-0  sm:px-10 sm:pt-12 lg:pl-12 lg:pr-0 lg:pt-0">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
            <MemoizedTextSide />
            <PhoneSide controls={imageControls} />
          </div>
        </div>
      </div>
    </section>
  );
}
