import { useNavStore } from "../store/useNavStore";
import { navSectionMap, type NavLink } from "../dataStore/datafile";

/** Smooth-scrolls to a section and syncs the navbar's active link. */
export function scrollToSection(link: NavLink) {
  useNavStore.getState().setActiveLink(link);
  document.getElementById(navSectionMap[link])?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}