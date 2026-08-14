import {
  motion,
  useTransform,
  type MotionValue,
  type MotionStyle,
} from "framer-motion";
import { Currencies } from "../../dataStore/datafile";

export function CurrencyRow({
  currency,
  index,
  progress,
}: {
  currency: (typeof Currencies)[number];
  index: number;
  progress: MotionValue<number>;
}) {
  const focus = 0.15 + index * 0.13;

  // Optimized animation interpolations
  const scale = useTransform(
    progress,
    [focus - 0.14, focus, focus + 0.14],
    [0.9, 1.03, 0.9],
  );
  const opacity = useTransform(
    progress,
    [focus - 0.17, focus - 0.05, focus + 0.05, focus + 0.17],
    [0.35, 1, 1, 0.35],
  );
  const scaleX = useTransform(
    progress,
    [focus - 0.1, focus, focus + 0.1],
    [1, 1.08, 1],
  );
  const zIndex = useTransform(scale, [0.98, 1.01, 1.03], [5, 40, 40]);
  const boxShadow = useTransform(
    scale,
    [0.9, 1.03],
    ["0 2px 8px rgba(20,10,45,0.15)", "0 18px 32px rgba(20,10,45,0.4)"],
  );
  const ringOpacity = useTransform(scale, [0.98, 1.03], [0, 1]);

  // FIX: Explicitly type your style object to satisfy Framer Motion v12 and optimize compiler tracks
  const rowStyle: MotionStyle = {
    scale,
    scaleX,
    opacity,
    zIndex: zIndex as unknown as string | number, // Type casting to satisfy layout dictionary keys
    boxShadow,
  };

  return (
    <motion.div
      style={rowStyle}
      className="relative flex h-16 font-montserrat shrink-0 items-center justify-between rounded-2xl border border-black/5 bg-[#FBFAFD] px-4">
      <motion.span
        style={{ opacity: ringOpacity }}
        className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-white"
      />

      <div className="flex items-center gap-3">
        <div className="h-8 w-8 flex items-center shrink-0 overflow-hidden rounded-full bg-white shadow-sm">
          <img
            src={currency.flag}
            alt={`${currency.code} flag`}
            className="h-11.5 w-full object-cover"
          />
        </div>
        <div>
          <p className="text-[11px] font-semibold text-black">
            {currency.name}
          </p>
          <p className="text-[9px] text-black/40">{currency.code}</p>
        </div>
      </div>

      <img src="/zigzag.png" alt="" className="h-5 w-14 object-contain" />

      <p
        className={`text-[11px] font-semibold ${
          currency.positive ? "text-black" : "text-red-500"
        }`}>
        {currency.amount}
      </p>
    </motion.div>
  );
}
