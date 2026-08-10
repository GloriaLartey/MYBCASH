import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, type MotionStyle } from "framer-motion";
import React from "react";
import { testimonials } from "../dataStore/datafile";
import { TestimonialCard } from "../components/fourthSectionComponents/testimonialCard";

// OPTIMIZATION & FIXED TS SIGNATURE: Custom comparison avoids signature checks on the MotionValue itself
const MemoizedTestimonialCard = React.memo(TestimonialCard, (prevProps, nextProps) => {
  return (
    prevProps.index === nextProps.index &&
    prevProps.testimonial.name === nextProps.testimonial.name &&
    prevProps.testimonial.quote === nextProps.testimonial.quote
  );
});

export default function FourthSection() {
  const shouldReduceMotion = useReducedMotion();
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: headerProgress } = useScroll({
    target: headerRef,
    offset: ["start 0.95", "start 0.55"],
  });
  const { scrollYProgress: gridProgress } = useScroll({
    target: gridRef,
    offset: ["start 0.95", "start 0.2"],
  });

  const headerOpacity = useTransform(headerProgress, [0, 1], [0, 1]);
  const headerY = useTransform(headerProgress, [0, 1], [24, 0]);

  // FIXED TS ATTRIBUTE ERROR: Cast the evaluated style object cleanly
  const headerStyle = (shouldReduceMotion 
    ? {} 
    : { opacity: headerOpacity, y: headerY }) as MotionStyle;

  return (
    <section className="bg-black px-4 py-9 sm:px-6 lg:px-10 font-jakarta">
      <div className="mx-auto max-w-[1160px]">
        <motion.div
          ref={headerRef}
          style={headerStyle}
          className="flex flex-col items-center text-center"
        >
          <span
            style={{
              background:
                "linear-gradient(#000000, #000000) padding-box, linear-gradient(to right, #F1D7B5, #EB67A0) border-box",
            }}
            className="inline-flex w-fit items-center uppercase rounded-full border-1 border-transparent px-2 py-0.5 text-[9px] tracking-wide text-white"
          >
            Testimonials
          </span>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            Happy Feedback
          </h2>
        </motion.div>

        {/*Testimonial cards*/}
        <div
          ref={gridRef}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial, i) => (
            <MemoizedTestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={i}
              progress={gridProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
