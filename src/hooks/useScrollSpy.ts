import { useEffect } from "react";
import { useNavStore } from "../store/useNavStore";
import { navSectionMap, type NavLink } from "../dataStore/datafile";


export function useScrollSpy() {
  const setActiveLink = useNavStore((s) => s.setActiveLink);

  useEffect(() => {
    const entries = Object.entries(navSectionMap) as [NavLink, string][];
    const targets = entries
      .map(([link, id]) => ({ link, el: document.getElementById(id) }))
      .filter(
        (t): t is { link: NavLink; el: HTMLElement } => t.el !== null,
      );

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (observerEntries) => {
        const mostVisible = observerEntries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (mostVisible) {
          const match = targets.find((t) => t.el === mostVisible.target);
          if (match) setActiveLink(match.link);
        }
      },
      {
        // Treat the vertical center band of the viewport as the "active zone",
        // shifted down slightly to account for the fixed navbar.
        rootMargin: "-40% 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    targets.forEach(({ el }) => observer.observe(el));
    return () => observer.disconnect();
  }, [setActiveLink]);
}