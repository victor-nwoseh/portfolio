"use client";
import { motion, useReducedMotion } from "framer-motion";

export default function UXVisual() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative w-full h-full overflow-hidden bg-white">
      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/70 via-black/50 to-transparent pointer-events-none z-10" />
      {/* User Journey Flow */}
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="relative w-full max-w-[90%]">
          {/* Journey path */}
          <svg className="w-full h-20" viewBox="0 0 400 80" fill="none">
            {/* Connecting path line */}
            <motion.path
              d="M 40 40 L 360 40"
              stroke="var(--color-border)"
              strokeWidth="2"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0.3 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: prefersReducedMotion ? 0 : 1, ease: "easeInOut" }}
            />

            {/* Animated progress line */}
            <motion.path
              d="M 40 40 L 360 40"
              stroke="url(#journeyGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 3.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />

            {/* Start Node */}
            <motion.g
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: 0.2 }}
            >
              <circle cx="40" cy="40" r="12" fill="var(--color-accent)" opacity="0.2" />
              <circle cx="40" cy="40" r="8" fill="var(--color-accent)" />
              <motion.circle
                cx="40"
                cy="40"
                r="8"
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="2"
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: 1.8, opacity: 0 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 1.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              />
            </motion.g>

            {/* Step 1 Node */}
            <motion.g
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: 0.8 }}
            >
              <circle cx="160" cy="40" r="10" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="2" />
              <motion.circle
                cx="160"
                cy="40"
                r="10"
                fill="var(--color-success)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.4, delay: prefersReducedMotion ? 0 : 1.5 }}
              />
              <motion.path
                d="M 155 40 L 158 43 L 165 36"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.3, delay: prefersReducedMotion ? 0 : 1.6 }}
              />
            </motion.g>

            {/* Step 2 Node */}
            <motion.g
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: 1.4 }}
            >
              <circle cx="280" cy="40" r="10" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="2" />
              <motion.circle
                cx="280"
                cy="40"
                r="10"
                fill="var(--color-success)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.4, delay: prefersReducedMotion ? 0 : 2.5 }}
              />
              <motion.path
                d="M 275 40 L 278 43 L 285 36"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.3, delay: prefersReducedMotion ? 0 : 2.6 }}
              />
            </motion.g>

            {/* Goal Node */}
            <motion.g
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: 2 }}
            >
              <circle cx="360" cy="40" r="12" fill="var(--color-success)" opacity="0.2" />
              <circle cx="360" cy="40" r="8" fill="var(--color-success)" />
              <motion.circle
                cx="360"
                cy="40"
                r="8"
                fill="none"
                stroke="var(--color-success)"
                strokeWidth="2"
                initial={{ scale: 1, opacity: 0 }}
                animate={{ scale: 1.8, opacity: [0, 1, 0] }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 1.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                  delay: prefersReducedMotion ? 0 : 3.5,
                }}
              />
            </motion.g>

            {/* User Avatar/Dot traveling along path */}
            <motion.g
              initial={{ x: 0 }}
              animate={{ x: 320 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 3.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <circle cx="40" cy="40" r="6" fill="var(--color-focus)" />
              <circle cx="40" cy="40" r="4" fill="white" opacity="0.8" />
            </motion.g>

            {/* Gradient for progress line */}
            <defs>
              <linearGradient id="journeyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--color-accent)" />
                <stop offset="100%" stopColor="var(--color-success)" />
              </linearGradient>
            </defs>
          </svg>

          {/* Labels */}
          <div className="flex justify-between mt-3 px-2">
            <motion.span
              className="text-[8px] md:text-[9px] text-accent font-medium"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.4, delay: 0.3 }}
            >
              Start
            </motion.span>
            <motion.span
              className="text-[8px] md:text-[9px] text-muted"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.4, delay: 0.9 }}
            >
              Step 1
            </motion.span>
            <motion.span
              className="text-[8px] md:text-[9px] text-muted"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.4, delay: 1.5 }}
            >
              Step 2
            </motion.span>
            <motion.span
              className="text-[8px] md:text-[9px] text-success font-medium"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.4, delay: 2.1 }}
            >
              Goal
            </motion.span>
          </div>

          {/* Status card */}
          <motion.div
            className="mt-6 bg-[#1e293b]/95 backdrop-blur-sm rounded-lg border border-success/40 shadow-lg p-3 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.5 }}
          >
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-[9px] md:text-[10px] text-success font-medium">
                Seamless user journey
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

