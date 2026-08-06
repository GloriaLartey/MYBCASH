import {useTransform, type MotionValue} from "framer-motion";
export function useStaggeredRise(
  progress: MotionValue<number>,
  range: [number, number],
) {
  const y = useTransform(progress, range, [64, 0]);
  const opacity = useTransform(progress, range, [0, 1]);
  return { y, opacity };
}