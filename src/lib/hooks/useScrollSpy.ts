import { useEffect, useState } from "react";

type Options = { threshold?: number };

export function useScrollSpy(sectionIds: string[], options?: Options): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (sectionIds.length === 0) return;
    const threshold = options?.threshold ?? 0.5;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (elements.length === 0) return;

    let lastActive: string | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with the highest intersection ratio meeting the threshold
        const eligible = entries.filter((e) => e.isIntersecting && e.intersectionRatio >= threshold);
        if (eligible.length === 0) {
          // If nothing meets the threshold, clear active or keep previous; we clear to adhere to API description
          setActiveId((prev) => (prev && elements.some((el) => el.id === prev) ? prev : null));
          return;
        }
        const top = eligible.reduce((max, curr) => (curr.intersectionRatio > max.intersectionRatio ? curr : max));
        const newActive = (top.target as HTMLElement).id;
        if (newActive !== lastActive) {
          lastActive = newActive;
          setActiveId(newActive);
        }
      },
      { threshold }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [sectionIds.join("|"), options?.threshold]);

  return activeId;
}


