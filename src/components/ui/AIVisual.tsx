"use client";
import { motion, useReducedMotion } from "framer-motion";

export default function AIVisual() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative w-full h-full overflow-hidden bg-white">
      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/70 via-black/50 to-transparent pointer-events-none" />
      {/* Abstract neural circuit background */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 267"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Animated gradient lines forming circuit pattern */}
        <motion.path
          d="M 50 50 Q 100 100 150 50 T 250 50"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="10 5"
          initial={{ strokeDashoffset: 0, opacity: 0.6 }}
          animate={
            prefersReducedMotion
              ? { opacity: 0.6 }
              : { strokeDashoffset: -100, opacity: 0.6 }
          }
          transition={{
            strokeDashoffset: { duration: 3, ease: "linear", repeat: Infinity },
            opacity: { duration: 0.5 },
          }}
        />
        <motion.path
          d="M 100 150 L 200 150 L 250 200"
          stroke="url(#gradient2)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="10 5"
          initial={{ strokeDashoffset: 0, opacity: 0.5 }}
          animate={
            prefersReducedMotion
              ? { opacity: 0.5 }
              : { strokeDashoffset: -100, opacity: 0.5 }
          }
          transition={{
            strokeDashoffset: { duration: 3.5, ease: "linear", repeat: Infinity },
            opacity: { duration: 0.5, delay: 0.3 },
          }}
        />
        <motion.path
          d="M 300 100 Q 320 150 300 200"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="10 5"
          initial={{ strokeDashoffset: 0, opacity: 0.4 }}
          animate={
            prefersReducedMotion
              ? { opacity: 0.4 }
              : { strokeDashoffset: -100, opacity: 0.4 }
          }
          transition={{
            strokeDashoffset: { duration: 2.8, ease: "linear", repeat: Infinity },
            opacity: { duration: 0.5, delay: 0.6 },
          }}
        />

        {/* Circuit nodes */}
        <motion.circle
          cx="50"
          cy="50"
          r="4"
          fill="var(--color-accent)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: 0.5 }}
        />
        <motion.circle
          cx="150"
          cy="50"
          r="4"
          fill="var(--color-focus)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: 0.8 }}
        />
        <motion.circle
          cx="250"
          cy="50"
          r="4"
          fill="var(--color-accent)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: 1.1 }}
        />
        <motion.circle
          cx="100"
          cy="150"
          r="4"
          fill="var(--color-focus)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: 1.4 }}
        />
        <motion.circle
          cx="200"
          cy="150"
          r="4"
          fill="var(--color-accent)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: 1.7 }}
        />
        <motion.circle
          cx="300"
          cy="100"
          r="4"
          fill="var(--color-focus)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: 2 }}
        />

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.2" />
            <stop offset="50%" stopColor="var(--color-accent)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-focus)" stopOpacity="0.2" />
            <stop offset="50%" stopColor="var(--color-focus)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--color-focus)" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      {/* Code diff card overlay */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: 0.5 }}
      >
        <motion.div
          className="bg-[#1e293b]/95 backdrop-blur-sm rounded-lg border border-accent/30 shadow-lg p-4 max-w-[85%]"
          whileHover={
            prefersReducedMotion
              ? undefined
              : { y: -4, boxShadow: "0 12px 35px rgba(45,212,191,0.25)" }
          }
          transition={{ duration: 0.3 }}
        >
          {/* VS Code style header */}
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border/40">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] md:text-xs text-accent font-medium">AI Suggestion</span>
          </div>

          {/* Code diff content */}
          <div className="font-mono text-[9px] md:text-[11px] space-y-1">
            <div className="flex items-start gap-2">
              <span className="text-error/70">−</span>
              <span className="text-secondary line-through">if (data.length &gt; 0)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-success">+</span>
              <span className="text-primary">if (data?.length)</span>
            </div>
          </div>

          {/* Action hint */}
          <div className="mt-3 pt-2 border-t border-border/40">
            <span className="text-[8px] md:text-[10px] text-muted">
              Ctrl Accept • Tab to apply
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

