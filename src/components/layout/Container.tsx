import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  const classes = `max-w-[1100px] mx-auto px-4 sm:px-6 md:px-10${className ? ` ${className}` : ""}`;
  return <div className={classes}>{children}</div>;
}


