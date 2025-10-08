import { ReactNode, MouseEvent } from "react";

type ButtonVariant = "accent" | "ghost" | "subtle";
type ButtonSize = "sm" | "md";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  disabled?: boolean;
  href?: string;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = "accent",
  size = "md",
  isLoading = false,
  disabled = false,
  href,
  className,
  onClick,
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || isLoading;

  const baseClasses =
    "inline-flex items-center justify-center rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-focus border";

  const sizeClasses = size === "sm" ? "h-9 px-3 text-sm" : "h-10 px-4 text-base";

  const variantClasses =
    variant === "accent"
      ? "bg-accent hover:bg-accent-hover text-white border-transparent"
      : variant === "ghost"
      ? "bg-transparent text-primary hover:bg-surface border-border"
      : "bg-surface text-primary hover:bg-surface/80 border-border"; // subtle

  const disabledClasses = isDisabled ? " opacity-50 cursor-not-allowed" : "";
  const classes = `${baseClasses} ${sizeClasses} ${variantClasses}${disabledClasses}${
    className ? ` ${className}` : ""
  }`;

  if (href) {
    const handleAnchorClick = (e: MouseEvent<HTMLAnchorElement>) => {
      if (isDisabled) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      onClick?.(e as unknown as MouseEvent<HTMLButtonElement>);
    };

    return (
      <a
        href={href}
        role="button"
        aria-disabled={isDisabled}
        tabIndex={isDisabled ? -1 : 0}
        className={classes}
        onClick={handleAnchorClick}
      >
        {children}
      </a>
    );
  }

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (isDisabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    onClick?.(e);
  };

  return (
    <button type="button" disabled={isDisabled} className={classes} onClick={handleButtonClick} {...rest}>
      {children}
    </button>
  );
}


