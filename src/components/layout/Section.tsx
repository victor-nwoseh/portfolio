import { ReactNode } from "react";

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

export default function Section({ id, className, children }: SectionProps) {
  const classes = `scroll-mt-[88px] pt-12 pb-[clamp(36px,5vw,60px)] min-h-[420px]${className ? ` ${className}` : ""}`;
  return (
    <section id={id} className={classes}>
      {children}
    </section>
  );
}


