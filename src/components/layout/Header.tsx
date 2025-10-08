"use client";
import Container from "@/components/layout/Container";
import { useScrollSpy } from "@/lib/hooks/useScrollSpy";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function Header() {
  const ids = ["hero", "about", "what-i-do", "skills", "projects", "contact"];
  const activeId = useScrollSpy(ids, { threshold: 0.5 });
  const show = !!activeId && activeId !== "hero";
  const prefersReduced = useReducedMotion();

  const titles: Record<string, string> = {
    hero: "",
    about: "About",
    "what-i-do": "What I do",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
  };

  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Close on Escape and on outside click
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (!panelRef.current) return;
      if (!panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  // Focus first link when opening; restore focus to button when closing
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        const first = panelRef.current?.querySelector<HTMLAnchorElement>('a[role="menuitem"]');
        first?.focus();
      }, 0);
    } else {
      buttonRef.current?.focus();
    }
  }, [open]);

  // Update scroll progress for the top progress bar
  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const total = Math.max(1, scrollHeight - clientHeight);
      const p = Math.min(1, Math.max(0, scrollTop / total));
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = ids.filter((id) => id !== "hero").map((id) => ({ id, label: titles[id] }));

  return (
    <>
      <a
        href="#hero"
        className="absolute left-4 top-2 -translate-y-12 focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-focus bg-surface text-primary rounded-md px-3 py-2 border border-border shadow-sm"
      >
        Skip to content
      </a>
      <AnimatePresence initial={false}>
        {show && (
          <motion.header
            key="ctx-header"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: prefersReduced ? 0 : -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className={`sticky top-0 z-[50] h-[72px] bg-surface/80 backdrop-blur border-b border-border relative${
              progress > 0.1 ? " shadow-md" : " shadow-sm"
            }`}
          >
            {/* Top progress bar */}
            <div
              className={`absolute left-0 top-0 h-[2px] bg-accent transition-[width] ${
                prefersReduced ? "duration-0" : "duration-200"
              }`}
              style={{ width: `${Math.round(progress * 100)}%` }}
              aria-hidden="true"
            />
            <Container className="h-full flex items-center justify-between">
              <div className="relative">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.h2
                    key={activeId}
                    initial={{ opacity: 0, y: prefersReduced ? 0 : 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: prefersReduced ? 0 : -6 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="text-h3 text-primary"
                    aria-live="polite"
                  >
                    {titles[activeId ?? ""] || ""}
                  </motion.h2>
                </AnimatePresence>
              </div>
              <div className="relative">
                <Button
                  ref={buttonRef as unknown as React.RefObject<HTMLButtonElement>}
                  variant="ghost"
                  onClick={() => setOpen((v) => !v)}
                  aria-haspopup="menu"
                  aria-expanded={open}
                  aria-controls="sections-popover"
                >
                  Sections
                </Button>
                <AnimatePresence>
                  {open && (
                    <>
                      <motion.div
                        className="fixed inset-0 bg-black/20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: prefersReduced ? 0 : 0.2 }}
                      />
                      <motion.div
                        id="sections-popover"
                        role="menu"
                        ref={panelRef}
                        initial={{ opacity: 0, y: prefersReduced ? 0 : -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: prefersReduced ? 0 : -6 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed right-4 top-[88px] z-[60]"
                      >
                        <Card className="p-3 md:p-4 w-56">
                          <ul className="flex flex-col">
                            {items.map((item) => (
                              <li key={item.id}>
                                <a
                                  href={`#${item.id}`}
                                  role="menuitem"
                                  className="block w-full px-2 py-2 rounded-md text-secondary hover:text-primary hover:bg-surface/80 focus:outline-none focus:ring-2 focus:ring-focus"
                                  onClick={() => setOpen(false)}
                                >
                                  {item.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </Card>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </Container>
          </motion.header>
        )}
      </AnimatePresence>
    </>
  );
}


