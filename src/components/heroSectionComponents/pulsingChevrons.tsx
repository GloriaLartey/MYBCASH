import { motion } from "framer-motion";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

const DOWN_CHEVRON_SIZES = [
  "text-base sm:text-lg",
  "text-2xl sm:text-3xl",
  "text-4xl sm:text-5xl",
];

export default function PulsingChevrons() {
  return (
    <>
      <span className="flex flex-col items-center text-white lg:hidden">
        {DOWN_CHEVRON_SIZES.map((sizeClass, i) => (
          <motion.span
            key={i}
            className={`flex leading-none ${sizeClass} ${i > 0 ? "-mt-1.5 sm:-mt-2" : ""}`}
            animate={{ y: [0, 6, 0], opacity: [0.6, 1, 0.6] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.08,
            }}
          >
            <FaAngleDown size="1em" />
          </motion.span>
        ))}
      </span>
      <span className="hidden items-center justify-center text-white lg:flex">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="flex text-2xl xl:text-3xl"
            animate={{ x: [0, 6, 0], opacity: [0.6, 1, 0.6] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.08,
            }}
          >
            <FaAngleRight size="1em" />
          </motion.span>
        ))}
      </span>
    </>
  );
}