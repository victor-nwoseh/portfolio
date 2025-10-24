"use client";
import { forwardRef, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import ConfettiBurst from "@/components/ui/ConfettiBurst";

type Props = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  bounce?: boolean;
  showEmoji?: boolean;
};

const FancyCTA = forwardRef<HTMLAnchorElement | HTMLButtonElement, Props>(
  ({ href, children, className, bounce = true, showEmoji = true }, ref) => {
    const prefersReduced = useReducedMotion();
    const [hovered, setHovered] = useState(false);
    const [isCoarsePointer, setIsCoarsePointer] = useState(false);
    const [bounceOn, setBounceOn] = useState(false);
    const [confetti, setConfetti] = useState(false);

    useEffect(() => {
      if (typeof window === "undefined" || !window.matchMedia) return;
      const media = window.matchMedia("(pointer: coarse)");
      const update = () => setIsCoarsePointer(media.matches);
      update();
      media.addEventListener("change", update);
      return () => media.removeEventListener("change", update);
    }, []);

    useEffect(() => {
      if (!bounce || prefersReduced) {
        setBounceOn(false);
        return;
      }
      setBounceOn(true);
    }, [bounce, prefersReduced]);

    const Base = motion(href ? "a" : "button");

    return (
      <Base
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        href={href as any}
        type={!href ? "button" : undefined}
        className={`relative inline-flex select-none items-center justify-center rounded-full px-5 h-10 text-sm sm:px-6 sm:h-11 sm:text-base text-white focus:outline-none focus:ring-2 focus:ring-focus cursor-pointer ${
          className ?? ""
        }`}
        // Hover/press animations + idle bounce
        whileHover={prefersReduced || isCoarsePointer ? undefined : { scale: 1.04, y: -2 }}
        whileTap={prefersReduced ? undefined : { scale: 0.97, y: 0 }}
        animate={
          prefersReduced || !bounceOn
            ? undefined
            : {
                y: [0, -10, 0, -6, 0],
                scale: [1, 1.07, 1, 1.03, 1],
                transition: {
                  duration: 1.6,
                  times: [0, 0.35, 0.55, 0.8, 1],
                  repeat: Infinity,
                  repeatDelay: 0.25,
                  ease: [0.16, 1, 0.3, 1],
                },
              }
        }
        onPointerEnter={(event: React.PointerEvent) => {
          if (event.pointerType === "mouse") setHovered(true);
        }}
        onPointerLeave={(event: React.PointerEvent) => {
          if (event.pointerType === "mouse") setHovered(false);
        }}
        onFocus={() => setHovered(!isCoarsePointer)}
        onBlur={() => setHovered(false)}
        onClick={(event) => {
          const target = event.currentTarget as HTMLAnchorElement;
          const hrefValue = target.getAttribute("href") ?? href ?? "";

          if (!prefersReduced && !isCoarsePointer) {
            target.blur();
          }

          // Let the mail client open first.
          requestAnimationFrame(() => {
            if (hrefValue.startsWith("mailto:")) {
              window.location.href = hrefValue;
            } else {
              window.open(hrefValue, "_blank", "noopener,noreferrer");
            }
          });

          if (!prefersReduced) {
            requestAnimationFrame(() => setConfetti(true));
          }

          event.preventDefault();
        }}
        // Gradient background
        style={{
          background:
            "linear-gradient(135deg, var(--color-accent) 0%, var(--color-focus) 100%)",
          boxShadow: "0 8px 30px rgba(45,212,191,0.25)",
        }}
      >
        {/* Inner glow */}
        {!prefersReduced && !isCoarsePointer && (
          <motion.span
            aria-hidden
            className="pointer-events-none absolute -inset-px rounded-full blur-md"
            style={{
              background:
                "radial-gradient(120px 60px at 50% 30%, rgba(45,212,191,0.45), rgba(45,212,191,0) 70%)",
            }}
            animate={{ opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 2.8, repeat: Infinity }}
          />
        )}

        {/* Shimmer on hover/focus */}
        {!prefersReduced && !isCoarsePointer && (
          <motion.span
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
          >
            <motion.span
              className="absolute top-0 h-full w-1/3 -skew-x-12"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0) 100%)",
                filter: "blur(6px)",
              }}
              initial={{ x: "-150%", opacity: 0 }}
              whileHover={{ opacity: 1 }}
              whileFocus={{ opacity: 1 }}
              whileTap={{ opacity: 1 }}
              animate={{ x: ["-150%", "150%"], transition: { duration: 1.2, repeat: Infinity } }}
            />
          </motion.span>
        )}

        <span className="relative z-10 font-medium flex items-center gap-2">
          {children}
          {!prefersReduced && showEmoji && (
            <motion.span
              aria-hidden
              className="inline-block"
              initial={{ y: 0, rotate: 0 }}
              whileHover={{ y: -2, rotate: 10 }}
              animate={
                hovered
                  ? {
                      rotate: [0, -12, 0],
                      scaleY: [1, 0.85, 1],
                      scaleX: [1, 1.06, 1],
                      transition: {
                        duration: 1.1,
                        repeat: Infinity,
                        repeatDelay: 1.2,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    }
                  : {
                      rotate: 0,
                      scaleX: 1,
                      scaleY: [1, 0.45, 1],
                      transition: {
                        duration: 0.14,
                        repeat: Infinity,
                        repeatDelay: 1.2,
                        ease: [0.26, 0.04, 0.35, 1],
                      },
                    }
              }
              style={{ transformOrigin: "50% 60%" }}
              transition={{ type: "spring", stiffness: 300, damping: 16 }}
            >
              {hovered ? "😉" : "👀"}
            </motion.span>
          )}
        </span>
        {confetti && <ConfettiBurst onDone={() => setConfetti(false)} />}
      </Base>
    );
  }
);

FancyCTA.displayName = "FancyCTA";

export default FancyCTA;


