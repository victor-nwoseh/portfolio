import Container from "@/components/layout/Container";

export default function Header() {
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
              <a href="#hero" className="text-secondary hover:text-primary transition-colors">Hero</a>
              <a href="#about" className="text-secondary hover:text-primary transition-colors">About</a>
              <a href="#what-i-do" className="text-secondary hover:text-primary transition-colors">What I do</a>
              <a href="#skills" className="text-secondary hover:text-primary transition-colors">Skills</a>
              <a href="#projects" className="text-secondary hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="text-secondary hover:text-primary transition-colors">Contact</a>
            </div>
          </nav>
        </Container>
      </header>
    </>
  );
}


