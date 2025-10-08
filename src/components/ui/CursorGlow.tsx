"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

export default function CursorGlow() {
  const prefersReduced = useReducedMotion();
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);

  const springX = useSpring(x, { stiffness: 300, damping: 40, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 300, damping: 40, mass: 0.6 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  const size = 200;

  return (
    <motion.div
      className="pointer-events-none fixed z-[40] hidden md:block coarse-hide"
      style={{
        left: prefersReduced ? (x as unknown as number) : springX,
        top: prefersReduced ? (y as unknown as number) : springY,
        width: size,
        height: size,
        transform: "translate(-50%, -50%)",
        borderRadius: "9999px",
        // Pure ambient glow (no ring): remove shadow stroke, use soft radial fades only
        boxShadow: "none",
        background:
          "radial-gradient(circle 100px at center, rgba(45,212,191,0.30) 0%, rgba(45,212,191,0.18) 45%, rgba(45,212,191,0) 80%), radial-gradient(circle 200px at center, rgba(45,212,191,0.14) 0%, rgba(45,212,191,0) 96%), radial-gradient(circle 300px at center, rgba(45,212,191,0.06) 0%, rgba(45,212,191,0) 98%)",
        mixBlendMode: "screen",
      }}
      aria-hidden
    />
  );
}


