import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { FAQS } from "../dataStore/datafile";
import { FaqCard } from "../components/sixthSectionComponents/faqCard";


export default function SixthSection() {
  const shouldReduceMotion = useReducedMotion();
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const { scrollYProgress: headerProgress } = useScroll({
    target: headerRef,
    offset: ["start 0.95", "start 0.55"],
  });
  const { scrollYProgress: listProgress } = useScroll({
    target: listRef,
    offset: ["start 0.95", "start 0.55"],
  });

  const headerOpacity = useTransform(headerProgress, [0, 1], [0, 1]);
  const headerY = useTransform(headerProgress, [0, 1], [20, 0]);

  return (
    <section className="bg-black px-4 py-10 font-jakarta sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1000px]">

        <motion.h2
          ref={headerRef}
          style={shouldReduceMotion ? {} : { opacity: headerOpacity, y: headerY }}
          className="text-center text-3xl font-semibold text-white sm:text-4xl"
        >
          Frequently Asked Questions!
        </motion.h2>

        <div ref={listRef} className="mt-10 flex flex-col gap-4">
          {FAQS.map((faq, i) => (
            <FaqCard
              key={faq.question}
              faq={faq}
              index={i}
              progress={listProgress}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}