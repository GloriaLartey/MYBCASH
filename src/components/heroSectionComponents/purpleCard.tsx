import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function PurpleCard() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={mounted ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 2.2, ease: "easeOut" }}
      className="relative flex h-full min-h-[180px] items-end justify-center overflow-hidden rounded-[32px] bg-[#BB9FFC] px-3 py-3 sm:min-h-[440px] sm:rounded-[42px] sm:px-4 sm:py-4 lg:min-h-[520px] lg:rounded-[50px] lg:pl-5 lg:pr-4 lg:py-5"
    >
     <div className="relative aspect-[580/600] w-full max-w-[450px]">
  <img
    src="/hand-phone.png"
    alt="Hand holding phone showing MYBCASH wallet"
    className="absolute bottom-[-12%] md:bottom-[-5] right-[-8%] h-[90%] w-[90%] max-w-none object-contain object-bottom-right sm:bottom-[-15%] sm:right-[-4%] sm:h-[112%] sm:w-[112%] lg:bottom-[-20%] lg:right-[-12%] lg:h-[116%] lg:w-[116%]"
  />
</div>
    </motion.div>
  );
}