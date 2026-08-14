import { motion, useAnimationControls } from "framer-motion";
import React from "react";
// import { avatarColors, avatarImages } from "../../dataStore/datafile";

interface PhoneSideProps {
  controls: ReturnType<typeof useAnimationControls>;
}

function PhoneSideComponent({ controls }: PhoneSideProps) {
  return (
    <div className="relative flex justify-start overflow-hidden sm:justify-center lg:block lg:justify-start overflow-visible">
      <motion.div
        initial={{ x: 280, opacity: 0 }}
        animate={controls}
        className="relative lg:top-30 -right-20 top-5 w-[78%] max-w-[300px] sm:w-[68%] sm:max-w-[400px] lg:-right-0 lg:w-full lg:max-w-[790px]">
        <img
          src="/slanted-phone.png"
          alt="Hand holding phone showing MYBCASH wallet"
          className="h-full w-full object-contain object-bottom-right"
        />
      </motion.div>
    </div>
  );
}

const PhoneSide = React.memo(PhoneSideComponent);
export default PhoneSide;
