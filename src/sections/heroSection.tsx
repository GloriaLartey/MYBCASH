import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useNavStore } from "../store/useNavStore";
import {
  navLinks,
  brandLogos,
  avatarColors,
  avatarImages,
  phoneAvatarImages, statusBar
} from "../dataStore/datafile";

export default function HeroSection() {
  const { activeLink, setActiveLink, isScrolled, setIsScrolled } =
    useNavStore();
  const shouldReduceMotion = useReducedMotion();
  const logosRef = useRef<HTMLDivElement>(null);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setIsScrolled]);

  const { scrollY } = useScroll();
  const splitRange = shouldReduceMotion ? 0 : 110;
  const leftX = useTransform(scrollY, [0, 550], [0, -splitRange]);
  const rightX = useTransform(scrollY, [0, 550], [0, splitRange]);
  const cardOpacity = useTransform(scrollY, [0, 550], [1, 0.5]);

  const { scrollYProgress: logoProgress } = useScroll({
    target: logosRef,
    offset: ["start end", "end start"],
  });
  const logoOpacity = useTransform(
    logoProgress,
    [0, 0.35, 0.5, 0.65, 1],
    [0, 1, 1, 1, 0],
  );
  const logoY = useTransform(
    logoProgress,
    [0, 0.35, 0.5, 0.65, 1],
    shouldReduceMotion ? [0, 0, 0, 0, 0] : [36, 0, 0, 0, -36],
  );

  return (
    <div className="relative z-10 bg-black overflow-hidden font-jakarta">
      <nav
        className={`sticky top-0 z-50 flex items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-10 ${
          isScrolled
            ? "bg-black/90 py-3 shadow-lg shadow-black/30 backdrop-blur-md"
            : "bg-black py-5"
        }`}>
        <div className="flex items-center gap-2">
          <span className=" relative flex h-9 w-9.5 items-center justify-center rounded-full bg-white">
            <span className=" absolute top-[13px] left-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#282525]">
              <span className="absolute top-[12.5px] left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF7E1B]" />
            </span>
          </span>
          <span className="text-lg font-semibold tracking-wide text-white">
            MYBCASH
          </span>
        </div>

        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => setActiveLink(link)}
                className={`relative text-sm font-medium  transition-colors duration-300 ${
                  activeLink === link
                    ? "bg-gradient-to-r from-[#F0D6B4] to-[#EB6CA1] bg-clip-text text-transparent"
                    : "text-white hover:text-"
                }`}>
                {link.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>

        <button className="group flex items-center gap-3 rounded-full bg-white py-1.5 pl-5 pr-1.5 text-sm font-semibold text-black transition-transform duration-300 hover:scale-[1.03]">
          Download App
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-500 text-white transition-transform duration-300 group-hover:rotate-45">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </button>
      </nav>

      {/*Main hero content */}
      <section className="bg-black px-4 pb-10 pt-6 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1130px]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/*dark card*/}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 2, ease: "easeOut" }}
              style={{ x: leftX, opacity: cardOpacity }}
              className="relative flex flex-col justify-center overflow-hidden rounded-[50px] bg-[#303147] pb-5 sm:px-10">
              <div className="flex flex-col text-center items-center pt-36 pb-30">
                <span
                  style={{
                    background:
                      "linear-gradient(#333146, #333146) padding-box, linear-gradient(to right, #F1D7B5, #EB67A0) border-box",
                  }}
                  className="inline-flex w-fit items-center rounded-full border-1 border-transparent px-2 py-0.5 text-[9px] tracking-wide text-white">
                  HeroSection
                </span>

                <h1 className="max-w-lg text-4xl font-semibold leading-[1.15] text-white sm:text-5xl">
                  Empower Your Financial Future with MYBCASH
                </h1>

                <button className="group mt-5 flex w-fit items-center gap-1 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 py-1 pl-4 pr-1 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-transform duration-300 ">
                  Download App
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    <ArrowUpRight color="black" className="h-5 w-5" />
                  </span>
                </button>
              </div>

              <div className=" flex flex-wrap mt-auto items-center justify-between gap-4">
                <div className="flex items-center gap-1">
                  <div className="flex -space-x-2">
                    {avatarColors.map((color, i) => (
                      <div
                        key={i}
                        className="relative flex items-center justify-center h-9 w-9 overflow-hidden rounded-full border-2 border-[#333146] shadow-sm"
                        style={{ backgroundColor: color }}>
                        {avatarImages[i] && (
                          <img
                            src={avatarImages[i]}
                            alt={`User avatar ${i + 1}`}
                            className="h-6 w-auto object-cover mix-blend-normal"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">3.1M</p>
                    <p className="text-[11px] text-white/50">
                      Downloads worldwide
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <span className="text-xs text-white">Available on</span>
                  <div className="flex items-center -space-x-2">
                    <span className="flex  h-8 w-8 items-center justify-center rounded-full bg-white">
                      <img
                        src="/apple.png"
                        alt="apple-logo"
                        className="h-6 w-auto object-cover mix-blend-normal"
                      />
                    </span>
                    <span className="flex h-8 w-8 items-center border-2 border-[#303147] justify-center rounded-full bg-white">
                      <img
                        src="/robot.png"
                        alt="android-logo"
                        className="h-6 w-auto object-cover mix-blend-normal"
                      />
                    </span>{" "}
                  </div>
                </div>
              </div>
            </motion.div>

            {/*purple card*/}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 2.2, ease: "easeOut" }}
              style={{ x: rightX, opacity: cardOpacity }}
              className="relative flex h-full min-h-[480px] items-end justify-center overflow-hidden rounded-[50px] bg-[#BB9FFC]">
              <div className="relative aspect-[580/600] w-[100%] max-w-[580px] sm:w-[100%] lg:w-[100%]">
                <img
                  src="/hs-hand.png"
                  alt="Hand holding phone showing MYBCASH wallet"
                  className="absolute top-10 inset-0 h-full w-full object-cover"
                />

                <div className="absolute left-[31.4%] top-[20%] h-[72%] w-[37%] overflow-hidden bg-transparent">
                  <p className=" absolute top-[0px] left-3 text-[10px] font-bold">
                    19:41
                  </p>
                  <div className="absolute right-2.5 top-[0px] flex flex-row items-center justify-end h-2.5 w-auto">
                  {/* <div className=" flex flex-row items-center justify-start -mt-3 pr-2 h-3 w-auto"> */}
                      {statusBar.map((src, i) => (
                        <img
                          key={i}
                          src={src}
                          alt={`src ${i + 1}`}
                          className={`h-full object-contain ${i === 2 ? null : "brightness-0"}`}
                        />
                      ))}
                    {/* </div> */}
                  </div>

                  <div className="flex h-full mx-1 flex-col pb-[6%]">
                    <div className="flex w-full mt-9 items-center justify-between rounded-full border-[1.5px] border-black/50 shadow-sm">
                      <div className="flex items-center gap-1">
                        <div className="h-7 w-7 shrink-0 overflow-hidden rounded-full border border-black/10">
                          <img
                            src="/profile-img.jpg"
                            alt="Reson Holder"
                            className="h-full w-full object-cover"
                          />
                        </div>

                        <div className="flex flex-col justify-center">
                          <p className="text-xs font-semibold text-black leading-tight">
                            Reson Holder
                          </p>
                          <p className="text-[8.5px] text-black/50 font-semibold leading-tight">
                            Your Wallet
                          </p>
                        </div>
                      </div>

                      <div className="h-7 w-7 flex shrink-0 overflow-hidden rounded-full bg-white">
                        <img
                          src="/bell.png"
                          alt="Reson Holder"
                          className="h-auto w-5 object-fit m-auto"
                        />
                      </div>
                    </div>

                    <div className="mt-3 text-center">
                      <p className="text-[8px] text-black font-semibold sm:text-[9px]">
                        Your Balance
                      </p>
                      <p className="text-base font-bold text-black sm:text-lg">
                        $785,450,425
                      </p>
                    </div>

                    <p className="mt-2 text-[8px] font-medium text-black mx-2 sm:text-[9px]">
                      Your Cards
                    </p>
                    <div className="relative flex flex-col items-center justify-center mt-2 right-9 flex-1 h-150 w-67 ">
                      <img
                        src="/blueCard.png"
                        alt="Credit Card"
                        className=" h-[198px] w-full absolute -top-5 left-[0.5px]"
                      />
                      <img
                        src="/blackCard.png"
                        alt="Credit Card"
                        className="absolute h-[198px] w-full top-10 left-0"
                      />
                    </div>

                    <div className="mt-50 flex items-center mx-1 justify-between">
                      <p className="text-[8px] font-medium text-black  sm:text-[9px]">
                        Transfer
                      </p>
                      <p className="text-[8px] font-medium text-black/40 sm:text-[9px]">
                        See all
                      </p>
                    </div>
                    <div className="mt-2 flex items-center mx-3 gap-1.5">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-dashed border-black/30">
                        <img
                          src="/arrow.png"
                          alt="Arrow"
                          className="h-2 w-2.5 object-contain"
                        />
                      </span>
                      {phoneAvatarImages.map((src, i) => (
                        <div
                          key={i}
                          className="flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full border-[1px] border-black/30 shadow-sm">
                          <img
                            src={src}
                            alt={`Phone avatar ${i + 1}`}
                            className="h-full w-20 object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/*Brand logos*/}
          <motion.div
            ref={logosRef}
            style={{ opacity: logoOpacity, y: logoY }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-4 sm:justify-between">
            {brandLogos.map((brand, i) => (
              <div
                key={i}
                className="flex flex-col items-center leading-none opacity-80 transition-opacity hover:opacity-100">
                <span className="text-3xl font-extrabold tracking-tight text-white">
                  {brand.name}
                </span>
                {brand.stacked && (
                  <span className="text-[9px] ml-auto font-semibold tracking-[0.1em] text-white/60">
                    CITY GUIDE
                  </span>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
