import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}

export default function Card({ children, className, interactive = false }: CardProps) {
  const base = "rounded-md bg-surface border border-border shadow-sm";
  const hover = interactive ? " transition-shadow hover:shadow-md" : "";
  const classes = `${base}${hover}${className ? ` ${className}` : ""}`;
  return <div className={classes}>{children}</div>;
}


