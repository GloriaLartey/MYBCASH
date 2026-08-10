import { motion, useAnimationControls } from "framer-motion";
import React from "react";
import { avatarColors, avatarImages } from "../../dataStore/datafile";

interface PhoneSideProps {
  controls: ReturnType<typeof useAnimationControls>;
}

function PhoneSideComponent({ controls }: PhoneSideProps) {
  return (
    <div className="relative flex justify-start overflow-hidden sm:justify-center lg:block lg:justify-start lg:overflow-visible">
      <motion.div
        initial={{ x: 280, opacity: 0 }}
        animate={controls}
        className="absolute lg:top-20 top-30 w-[78%] max-w-[300px] sm:w-[68%] sm:max-w-[400px] lg:w-full lg:max-w-[590px]"
      >
        <img
          src="/hand-phone.png"
          alt="Hand holding phone showing MYBCASH wallet"
          className="h-auto w-full object-contain object-bottom-right"
        />
      </motion.div>

      <div className="absolute bottom-0 left-0 z-10 flex items-center gap-1 lg:hidden">
        <div className="flex -space-x-2">
          {avatarColors.map((color, i) => (
            <div
              key={i}
              className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border-2 border-[#333146] shadow-sm"
              style={{ backgroundColor: color }}
            >
              {avatarImages[i] && (
                <img
                  src={avatarImages[i]}
                  alt={`User avatar ${i + 1}`}
                  className="h-5 w-auto object-cover mix-blend-normal"
                />
              )}
            </div>
          ))}
        </div>
        <div>
          <p className="text-sm font-semibold text-white">3.1M</p>
          <p className="text-[10px] text-white/50">Downloads worldwide</p>
        </div>
      </div>
    </div>
  );
}

const PhoneSide = React.memo(PhoneSideComponent);
export default PhoneSide;