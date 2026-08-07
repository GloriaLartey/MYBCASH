import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { useNavStore } from "../store/useNavStore";
import { navLinks } from "../dataStore/datafile";
import PurpleCard from "../components/heroSectionComponents/purpleCard";
import DarkCard from "../components/heroSectionComponents/darkCard";
import Logos from "../components/heroSectionComponents/logos";

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
    <div className="relative z-10 bg-black overflow-hidden font-jakarta">
      <nav
        className={`fixed inset-x-0 top-0 z-[60] flex w-full items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-10 ${
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

      <section className="bg-black px-3 pb-10 pt-24 sm:px-6 sm:pb-12 sm:pt-28 lg:px-10 lg:pb-14 lg:pt-32">
        <div className="mx-auto max-w-[1130px]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <DarkCard />
            <PurpleCard />
          </div>
          <Logos />
        </div>
      </section>
    </div>
  );
}
