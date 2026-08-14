import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * The phone box is measured directly from the DOM (ref + effect below)
 * instead of guessed as static percentages of the outer container, so its
 * position/size is correct at any screen size automatically.
 *
 * SCREEN_IN_IMAGE describes where the phone's actual DISPLAY sits within the
 * full hand-phone.png artwork, as a % of that image (bezel/hand excluded).
 * This is a fixed property of the source image file, not of the viewport, so
 * it never needs to change across breakpoints — only if the artwork itself
 * (a different crop/zoom/pose of the hand+phone) is swapped out.
 *
 * Every callout anchor below is defined as a % *of the screen*, then
 * converted through SCREEN_IN_IMAGE -> full-image % -> container % via the
 * helpers below. That's what makes tooltips track "the screen of the phone"
 * specifically, no matter how the surrounding artwork is cropped or scaled.
 */
const SCREEN_IN_IMAGE = { left: 23.6, top: 0.6, width: 39.3, height: 79.2 }; // % of hand-phone.png

const DEFAULT_PHONE_BOX = { left: 32, top: 4, width: 36, height: 92 }; // fallback before first measurement

type Side = "left" | "right";

interface Callout {
  id: string;
  text: string;
  side: Side;
  // anchor position, given as % *of the phone's screen* (0,0 = top-left of the screen, 100,100 = bottom-right)
  anchor: { sx: number; sy: number };
  // label position, given as % of the outer container
  label: { x: number; y: number };
}

const CALLOUTS: Callout[] = [
  {
    id: "support",
    text: "24/7 customer support",
    side: "left",
    anchor: { sx: 91.3, sy: 23.2 },
    label: { x: 40, y: 10 },
  },
  {
    id: "secure",
    text: "Secure and reliable services",
    side: "left",
    anchor: { sx: 57.7, sy: 40.7 },
    label: { x: 35, y: 34 },
  },
  {
    id: "topup",
    text: "Top up your accounts with ease",
    side: "left",
    anchor: { sx: 50, sy: 66.3 },
    label: { x: 40, y: 60 },
  },
  {
    id: "account",
    text: "Create local account",
    side: "right",
    anchor: { sx: 56.2, sy: 56.8 },
    label: { x: 80, y: 10 },
  },
  {
    id: "swap",
    text: "Swap currencies at live rates",
    side: "right",
    anchor: { sx: 44.8, sy: 66.3 },
    label: { x: 73, y: 50 },
  },
  {
    id: "bills",
    text: "Pay your bills without the hassle",
    side: "right",
    anchor: { sx: 92, sy: 68.7 },
    label: { x: 70, y: 68 },
  },
  {
    id: "card",
    text: "Use a virtual card",
    side: "right",
    anchor: { sx: 90, sy: 92 },
    label: { x: 73, y: 88 },
  },
];

const HOLD_MS = 1900; // how long each callout stays active before the next one takes over
const ENTER_MS = 400; // how long the line/dot/label take to animate in or out
const ENTER_S = ENTER_MS / 1000;
const RING_S = HOLD_MS / 1000;

// screen % -> full-image %
const screenToImagePct = (sx: number, sy: number) => ({
  ax: SCREEN_IN_IMAGE.left + (sx / 100) * SCREEN_IN_IMAGE.width,
  ay: SCREEN_IN_IMAGE.top + (sy / 100) * SCREEN_IN_IMAGE.height,
});

export default function PurpleCard() {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [phoneBox, setPhoneBox] = useState(DEFAULT_PHONE_BOX);

  const outerRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const measure = () => {
      const outerEl = outerRef.current;
      const phoneEl = phoneRef.current;
      if (!outerEl || !phoneEl) return;
      const outer = outerEl.getBoundingClientRect();
      const phone = phoneEl.getBoundingClientRect();
      if (outer.width === 0 || outer.height === 0) return;
      setPhoneBox({
        left: ((phone.left - outer.left) / outer.width) * 100,
        top: ((phone.top - outer.top) / outer.height) * 100,
        width: (phone.width / outer.width) * 100,
        height: (phone.height / outer.height) * 100,
      });
    };

    measure();
    window.addEventListener("resize", measure);
    const ro = new ResizeObserver(measure);
    if (outerRef.current) ro.observe(outerRef.current);

    return () => {
      window.removeEventListener("resize", measure);
      ro.disconnect();
    };
  }, []);

  // screen % -> full-image % -> container %
  const toContainerPct = (sx: number, sy: number) => {
    const { ax, ay } = screenToImagePct(sx, sy);
    return {
      x: phoneBox.left + (ax / 100) * phoneBox.width,
      y: phoneBox.top + (ay / 100) * phoneBox.height,
    };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % CALLOUTS.length);
    }, HOLD_MS);
    return () => clearInterval(interval);
  }, []);

  const active = CALLOUTS[activeIndex];

  return (
    <motion.div
      ref={outerRef}
      initial={{ opacity: 0, y: 24 }}
      animate={mounted ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 2.2, ease: "easeOut" }}
      className="relative mx-auto flex aspect-square w-full max-w-[380px] items-end justify-center px-3 py-3 sm:max-w-[440px] sm:px-4 sm:py-4 md:max-w-[480px] lg:mx-0 lg:aspect-auto lg:min-h-[440px] lg:max-w-none lg:w-full lg:pl-5 lg:pr-4 lg:py-5 xl:min-h-[520px]"
    >
      <div className="absolute inset-0 flex items-end justify-center overflow-hidden rounded-full bg-[#46CD90] px-3 py-3 sm:px-4 sm:py-4 lg:pl-5 lg:pr-4 lg:py-5">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-1/4 left-1/2 h-[140%] w-[140%] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(9, 237, 51, 0.35) 0%, rgba(159, 252, 159, 0) 65%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 opacity-40"
          style={{
            background:
              "linear-gradient(to top, rgba(60, 127, 76, 0.35), rgba(90,60,170,0))",
          }}
        />
        <div
          ref={phoneRef}
          className="absolute -bottom-[25%] left-4/7 aspect-square h-[90%] origin-bottom -translate-x-1/2 scale-125"
        >
          <img
            src="/hand-phone.png"
            alt="Hand holding a phone showing the MYBCASH wallet home screen with balance, quick actions, and recent transactions"
            className="absolute inset-0 h-full w-full object-contain"
          />
        </div>

        {/* Faint resting dots on every anchor point, so the eye can see the full map */}
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          {CALLOUTS.map((c) => {
            const p = toContainerPct(c.anchor.sx, c.anchor.sy);
            return (
              <circle
                key={`dot-${c.id}`}
                cx={`${p.x}%`}
                cy={`${p.y}%`}
                r={3}
                className="fill-white/35"
              />
            );
          })}
        </svg>
      </div>

      {/* Unclipped overlay: the leader line and the tooltip pill both live
          here, outside the rounded/overflow-hidden layer above, so they can
          render above (or past the curved edge of) the green card. */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
      >
        <AnimatePresence mode="wait">
          {CALLOUTS.filter((c) => c.id === active.id).map((c) => {
            const p = toContainerPct(c.anchor.sx, c.anchor.sy);
            const overlap = 1.6;
            const lineEndX = c.side === "left" ? c.label.x - overlap : c.label.x + overlap;
            return (
              <motion.g key={c.id}>
                <motion.line
                  x1={`${p.x}%`}
                  y1={`${p.y}%`}
                  x2={`${lineEndX}%`}
                  y2={`${c.label.y}%`}
                  stroke="#2E1F5E"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.9 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    pathLength: { duration: ENTER_S, ease: "easeInOut" },
                    opacity: { duration: ENTER_S },
                  }}
                />
                {/* anchor-side dot, on the phone screen */}
                <motion.circle
                  cx={`${p.x}%`}
                  cy={`${p.y}%`}
                  r={5}
                  className="fill-white"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0, 1.4, 1], opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: ENTER_S, ease: "easeOut" }}
                />
                <motion.circle
                  cx={`${p.x}%`}
                  cy={`${p.y}%`}
                  r={5}
                  className="fill-[#2E1F5E] stroke-[#2E1F5E]"
                  strokeWidth={1.5}
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={{ scale: 2.4, opacity: 0 }}
                  transition={{
                    duration: RING_S,
                    ease: "easeOut",
                    repeat: Infinity,
                  }}
                />
              </motion.g>
            );
          })}
        </AnimatePresence>
      </svg>
      <AnimatePresence mode="wait">
        {CALLOUTS.filter((c) => c.id === active.id).map((c) => (
          <div
            key={c.id}
            className="absolute z-50 max-w-[42%] sm:max-w-[36%] lg:max-w-[30%]"
            style={{
              left: `${c.label.x}%`,
              top: `${c.label.y}%`,
              transform:
                c.side === "left"
                  ? "translate(-100%, -50%)"
                  : "translate(0%, -50%)",
              textAlign: c.side === "left" ? "right" : "left",
            }}
          >
            <motion.span
              className="inline-block rounded-xl bg-[#011B22] px-2 py-1 text-[8px] font-semibold leading-tight text-white shadow-lg sm:px-2.5 sm:py-1.5 sm:text-[9px] lg:text-[11px] xl:text-[13px]"
              initial={{ opacity: 0, x: c.side === "left" ? 12 : -12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: c.side === "left" ? -8 : 8 }}
              transition={{ duration: ENTER_S, ease: "easeOut" }}
            >
              {c.text}
            </motion.span>
          </div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}