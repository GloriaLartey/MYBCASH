import { create } from "zustand";

type NavLink = "Home" | "Features" | "Solutions" | "FAQs";

interface NavState {
  activeLink: NavLink;
  setActiveLink: (link: NavLink) => void;
  isScrolled: boolean;
  setIsScrolled: (scrolled: boolean) => void;
}

export const useNavStore = create<NavState>((set) => ({
  activeLink: "Home",
  setActiveLink: (link) => set({ activeLink: link }),
  isScrolled: false,
  setIsScrolled: (scrolled) => set({ isScrolled: scrolled }),
}));