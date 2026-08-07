import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useCardReveal } from "../hooks/sideWaysMovement";
import GreenCards from "../components/secondSectionComponents/greenCards";
import PinkCard from "../components/secondSectionComponents/pinkCard";
import OrangeCard from "../components/secondSectionComponents/orangeCard";
import BlueCard from "../components/secondSectionComponents/blueCard";
import PurpleCard from "../components/secondSectionComponents/purpleCard";

export default function SecondSection() {
  const shouldReduceMotion = useReducedMotion();
  const noMotion = shouldReduceMotion;
  const header = useCardReveal("left");

  const bottomRowRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-black px-4 py-17 font-jakarta sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1130px]">
        {/*Header*/}
        <motion.div
          ref={header.ref}
          style={noMotion ? {} : { opacity: header.opacity }}
          className="flex flex-col items-center text-center">
          <span
            style={{
              background:
                "linear-gradient(#000000, #000000) padding-box, linear-gradient(to right, #F1D7B5, #EB67A0) border-box",
            }}
            className="inline-flex w-fit items-center uppercase rounded-full border-1 border-transparent px-2 py-0.5 text-[9px] tracking-wide text-white">
            Highlights
          </span>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            Meet the new era of transactions
          </h2>
        </motion.div>

        <div className="mt-12 sm:hidden">
          <GreenCards />
          <div className="mt-4 flex flex-col gap-4">
            <PinkCard />
            <OrangeCard />
            <BlueCard />
            <PurpleCard />
          </div>
        </div>

        <div className="mt-12 hidden sm:block lg:hidden">
          <GreenCards />
          <div className="mt-4 grid grid-cols-2 gap-4">
            <PinkCard />
            <OrangeCard />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <BlueCard />
            <PurpleCard />
          </div>
        </div>

        <div className="mt-12 hidden lg:block">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <GreenCards />
            <PinkCard />
          </div>
          <div
            ref={bottomRowRef}
            className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
            <OrangeCard />
            <BlueCard />
            <PurpleCard />
          </div>
        </div>
      </div>
    </section>
  );
}
