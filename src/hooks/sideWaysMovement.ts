import { useRef } from "react";
import {
  useScroll,
  useTransform,
} from "framer-motion";


// Independent reveal — used for the header and the top row.
export function useCardReveal(fromSide: "left" | "right") {
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