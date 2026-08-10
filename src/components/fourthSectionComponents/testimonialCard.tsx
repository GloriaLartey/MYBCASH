import { motion, useTransform, type MotionValue, type MotionStyle } from "framer-motion";
import React from "react";
import { testimonials } from "../../dataStore/datafile";

export function TestimonialCard({
  testimonial,
  index,
  progress,
}: {
  testimonial: (typeof testimonials)[number];
  index: number;
  progress: MotionValue<number>;
}) {
  
  const start = index * 0.13;
  const end = start + 0.24;

  const y = useTransform(progress, [start, end], [70, 0]);
  const opacity = useTransform(progress, [start, end], [0, 1]);

  // Explicitly typing the style object to satisfy Framer Motion v12 typings
  const cardStyle: MotionStyle = { y, opacity };

  return (
    <motion.div
      style={cardStyle}
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="rounded-4xl bg-[#303147] font-jakarta p-6 shadow-lg shadow-black/20"
    >
      <span className="font-serif text-8xl font-jakarta leading-none text-white/25">”</span>

      <p className="-mt-10 text-sm leading-relaxed text-white">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div className="mt-6 flex items-center font-jakarta justify-between">
        <div className="flex items-center gap-2.5">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="h-9 w-9 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-white">{testimonial.name}</p>
            <p className="text-[11px] text-white/50">{testimonial.role}</p>
          </div>
        </div>

        <div className="flex items-center gap-1 rounded-full border-[1.5px] border-white/25 px-3 py-1.5">
          <span className="text-xs font-semibold text-white">{testimonial.rating}</span>
          <span className=" h-auto w-3.5 fill-amber-400 text-amber-400">
            <img src="/star.webp" alt="star rating" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}
