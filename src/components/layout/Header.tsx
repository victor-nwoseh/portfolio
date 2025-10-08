"use client";
import Container from "@/components/layout/Container";
import { useScrollSpy } from "@/lib/hooks/useScrollSpy";

export default function Header() {
  const ids = ["hero", "about", "what-i-do", "skills", "projects", "contact"];
  const activeId = useScrollSpy(ids, { threshold: 0.5 });
  return (
    <>
      <a
        href="#hero"
        className="absolute left-4 top-2 -translate-y-12 focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-focus bg-surface text-primary rounded-md px-3 py-2 border border-border shadow-sm"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-[50] h-[72px] bg-surface/80 backdrop-blur border-b border-border">
        <Container className="h-full flex items-center justify-between">
          <nav aria-label="Primary" className="text-sm">
            <div className="flex items-center gap-6">
              <a href="#hero" aria-current={activeId === "hero" ? "page" : undefined} className={activeId === "hero" ? "text-primary transition-colors" : "text-secondary hover:text-primary transition-colors"}>Hero</a>
              <a href="#about" aria-current={activeId === "about" ? "page" : undefined} className={activeId === "about" ? "text-primary transition-colors" : "text-secondary hover:text-primary transition-colors"}>About</a>
              <a href="#what-i-do" aria-current={activeId === "what-i-do" ? "page" : undefined} className={activeId === "what-i-do" ? "text-primary transition-colors" : "text-secondary hover:text-primary transition-colors"}>What I do</a>
              <a href="#skills" aria-current={activeId === "skills" ? "page" : undefined} className={activeId === "skills" ? "text-primary transition-colors" : "text-secondary hover:text-primary transition-colors"}>Skills</a>
              <a href="#projects" aria-current={activeId === "projects" ? "page" : undefined} className={activeId === "projects" ? "text-primary transition-colors" : "text-secondary hover:text-primary transition-colors"}>Projects</a>
              <a href="#contact" aria-current={activeId === "contact" ? "page" : undefined} className={activeId === "contact" ? "text-primary transition-colors" : "text-secondary hover:text-primary transition-colors"}>Contact</a>
            </div>
          </nav>
        </Container>
      </header>
    </>
  );
}


