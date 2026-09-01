import { create } from "zustand";
import type { NavLink } from "../dataStore/datafile";

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