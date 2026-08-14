import { useEffect } from "react";
// import { ArrowUpRight } from "lucide-react";
import React from "react";
import { useNavStore } from "../store/useNavStore";
import { navLinks } from "../dataStore/datafile";
import PurpleCard from "../components/heroSectionComponents/purpleCard";
import DarkCard from "../components/heroSectionComponents/darkCard";
import DownloadButtons from "../components/heroSectionComponents/downloadOptions";

const MemoizedDarkCard = React.memo(DarkCard);
const MemoizedPurpleCard = React.memo(PurpleCard);
// const MemoizedLogos = React.memo(Logos);

export default function HeroSection() {
  const { activeLink, setActiveLink, isScrolled, setIsScrolled } =
    useNavStore();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setIsScrolled]);

  return (
    <div className="relative z-10 bg-[#031d1e]/40 overflow-hidden font-montserrat">
      <nav
        className={`fixed inset-x-0 top-0 z-[60] flex w-full items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-10 ${
          isScrolled
            ? "bg-[#011B22]/90 py-3 shadow-lg shadow-black/30 backdrop-blur-md"
            : "bg-[#011B22] py-5"
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="relative flex h-9 w-9.5 items-center justify-center rounded-full bg-white">
            <span className="absolute top-[13px] left-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#282525]">
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
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  activeLink === link
                    ? "bg-gradient-to-r from-[#F0D6B4] to-[#EB6CA1] bg-clip-text text-transparent"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
          <div className=" max-w-sm gap-1"><DownloadButtons iosUrl="YOUR_APP_STORE_URL" androidUrl="YOUR_GOOGLE_PLAY_URL"/></div>
        
        
      </nav>

      <section className="relative bg-[#012933] rounded-b-[300px] px-3 pb-10 pt-24 sm:px-6 sm:pb-12 sm:pt-28 lg:px-10 lg:pb-14 lg:pt-32">
        {/* Soft glow bridging the dark/purple seam so the two panels read as one composed hero */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-9 top-1/3 hidden h-[70%] w-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[100px] lg:block"
          style={{
            background:
              "linear-gradient(to left, rgba(159, 252, 182, 0.5) 0%, rgba(159, 252, 174, 0) 70%)",
          }}
        />

        <div className="relative mx-auto max-w-[1130px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-18">
            <MemoizedDarkCard />
            <MemoizedPurpleCard />
          </div>
          {/* <MemoizedLogos /> */}
        </div>
      </section>
    </div>
  );
}