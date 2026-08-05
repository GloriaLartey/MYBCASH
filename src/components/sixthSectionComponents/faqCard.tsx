import { motion, useTransform, type MotionValue } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "../../dataStore/datafile";

export function FaqCard({
  faq,
  index,
  progress,
  isOpen,
  onToggle,
}: {
  faq: (typeof FAQS)[number];
  index: number;
  progress: MotionValue<number>;
  isOpen: boolean;
  onToggle: () => void;
}) {
  
  const start = index * 0.18;
  const end = start + 0.3;

  const y = useTransform(progress, [start, end], [60, 0]);
  const opacity = useTransform(progress, [start, end], [0, 1]);

  return (
    <motion.div
      style={{ y, opacity }}
      className="overflow-hidden font-jakarta rounded-2xl bg-[#303147]"
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center gap-4 px-5 py-4 text-left sm:px-6"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-black text-white">
          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>

        <div className="flex-1">
          <p className="text-base font-semibold text-white sm:text-lg">
            {faq.question}
          </p>

          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="mt-1.5 text-xs leading-relaxed text-white">
                  {faq.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </button>
    </motion.div>
  );
}