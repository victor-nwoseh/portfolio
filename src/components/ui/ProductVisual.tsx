"use client";
import { motion, useReducedMotion } from "framer-motion";

export default function ProductVisual() {
  const prefersReducedMotion = useReducedMotion();

  // Animation durations
  const blueprintDuration = 1.5;
  const buildDuration = 2;
  const shipDelay = blueprintDuration + buildDuration;
  const totalCycle = shipDelay + 1.5;

  return (
    <div className="relative w-full h-full overflow-hidden bg-white flex items-center justify-center">
      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/70 via-black/50 to-transparent pointer-events-none z-10" />
      <div className="relative w-[80%] max-w-[300px]">
        {/* Stage 1: Blueprint wireframe */}
        <motion.svg
          className="absolute inset-0 w-full h-auto"
          viewBox="0 0 200 150"
          fill="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: prefersReducedMotion ? 0 : [0, 1, 1, 0] }}
          transition={{
            duration: prefersReducedMotion ? 0 : totalCycle,
            times: [0, 0.1, 0.35, 0.45],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          {/* Wireframe header */}
          <motion.rect
            x="20"
            y="20"
            width="160"
            height="20"
            stroke="var(--color-border)"
            strokeWidth="2"
            strokeDasharray="4 2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: prefersReducedMotion ? 1 : [0, 1, 1, 1] }}
            transition={{
              duration: prefersReducedMotion ? 0 : totalCycle,
              times: [0, 0.2, 0.35, 0.45],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
          
          {/* Wireframe content blocks */}
          <motion.rect
            x="20"
            y="50"
            width="70"
            height="40"
            stroke="var(--color-border)"
            strokeWidth="2"
            strokeDasharray="4 2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: prefersReducedMotion ? 1 : [0, 1, 1, 1] }}
            transition={{
              duration: prefersReducedMotion ? 0 : totalCycle,
              times: [0, 0.25, 0.35, 0.45],
              repeat: Infinity,
              repeatDelay: 1,
              delay: 0.1,
            }}
          />
          <motion.rect
            x="100"
            y="50"
            width="80"
            height="40"
            stroke="var(--color-border)"
            strokeWidth="2"
            strokeDasharray="4 2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: prefersReducedMotion ? 1 : [0, 1, 1, 1] }}
            transition={{
              duration: prefersReducedMotion ? 0 : totalCycle,
              times: [0, 0.3, 0.35, 0.45],
              repeat: Infinity,
              repeatDelay: 1,
              delay: 0.15,
            }}
          />
          
          {/* Wireframe footer */}
          <motion.rect
            x="20"
            y="100"
            width="160"
            height="30"
            stroke="var(--color-border)"
            strokeWidth="2"
            strokeDasharray="4 2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: prefersReducedMotion ? 1 : [0, 1, 1, 1] }}
            transition={{
              duration: prefersReducedMotion ? 0 : totalCycle,
              times: [0, 0.35, 0.35, 0.45],
              repeat: Infinity,
              repeatDelay: 1,
              delay: 0.2,
            }}
          />
        </motion.svg>

        {/* Stage 2: Build - Solid colorful blocks assembling */}
        <svg className="relative w-full h-auto" viewBox="0 0 200 150" fill="none">
          {/* Header block */}
          <motion.rect
            x="20"
            y="20"
            width="160"
            height="20"
            rx="4"
            fill="url(#headerGradient)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: prefersReducedMotion ? 1 : [0, 0, 1.1, 1, 1, 1],
              opacity: prefersReducedMotion ? 1 : [0, 0, 1, 1, 1, 0],
            }}
            transition={{
              duration: prefersReducedMotion ? 0 : totalCycle,
              times: [0, 0.4, 0.5, 0.52, 0.9, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
          
          {/* Content block 1 */}
          <motion.rect
            x="20"
            y="50"
            width="70"
            height="40"
            rx="4"
            fill="url(#block1Gradient)"
            initial={{ scale: 0, opacity: 0, x: -20 }}
            animate={{
              scale: prefersReducedMotion ? 1 : [0, 0, 1.1, 1, 1, 1],
              opacity: prefersReducedMotion ? 1 : [0, 0, 1, 1, 1, 0],
              x: prefersReducedMotion ? 0 : [-20, -20, 0, 0, 0, 0],
            }}
            transition={{
              duration: prefersReducedMotion ? 0 : totalCycle,
              times: [0, 0.45, 0.55, 0.57, 0.9, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
          
          {/* Content block 2 */}
          <motion.rect
            x="100"
            y="50"
            width="80"
            height="40"
            rx="4"
            fill="url(#block2Gradient)"
            initial={{ scale: 0, opacity: 0, x: 20 }}
            animate={{
              scale: prefersReducedMotion ? 1 : [0, 0, 1.1, 1, 1, 1],
              opacity: prefersReducedMotion ? 1 : [0, 0, 1, 1, 1, 0],
              x: prefersReducedMotion ? 0 : [20, 20, 0, 0, 0, 0],
            }}
            transition={{
              duration: prefersReducedMotion ? 0 : totalCycle,
              times: [0, 0.5, 0.6, 0.62, 0.9, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
          
          {/* Footer block */}
          <motion.rect
            x="20"
            y="100"
            width="160"
            height="30"
            rx="4"
            fill="url(#footerGradient)"
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{
              scale: prefersReducedMotion ? 1 : [0, 0, 1.1, 1, 1, 1],
              opacity: prefersReducedMotion ? 1 : [0, 0, 1, 1, 1, 0],
              y: prefersReducedMotion ? 0 : [20, 20, 0, 0, 0, 0],
            }}
            transition={{
              duration: prefersReducedMotion ? 0 : totalCycle,
              times: [0, 0.55, 0.65, 0.67, 0.9, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />

          {/* Gradients for blocks */}
          <defs>
            <linearGradient id="headerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="var(--color-focus)" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="block1Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="block2Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-focus)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="var(--color-focus)" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--color-success)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>

        {/* Stage 3: Ship indicator with glow */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: prefersReducedMotion ? 1 : [0, 0, 1.2, 1, 1, 1],
            opacity: prefersReducedMotion ? 1 : [0, 0, 1, 1, 1, 0],
          }}
          transition={{
            duration: prefersReducedMotion ? 0 : totalCycle,
            times: [0, 0.7, 0.75, 0.77, 0.9, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          <div className="relative">
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-success/20 blur-xl"
              animate={
                prefersReducedMotion
                  ? {}
                  : {
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }
              }
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ width: "80px", height: "80px", marginLeft: "-15px", marginTop: "-15px" }}
            />
            
            {/* Checkmark badge */}
            <div className="relative w-12 h-12 rounded-full bg-success flex items-center justify-center shadow-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <motion.path
                  d="M5 13l4 4L19 7"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{
                    pathLength: prefersReducedMotion ? 1 : [0, 0, 1, 1, 1, 1],
                  }}
                  transition={{
                    duration: prefersReducedMotion ? 0 : totalCycle,
                    times: [0, 0.72, 0.78, 0.9, 0.9, 1],
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* "Shipped" label */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: prefersReducedMotion ? 1 : [0, 0, 1, 1, 1, 0],
            y: prefersReducedMotion ? 0 : [-10, -10, 0, 0, 0, 0],
          }}
          transition={{
            duration: prefersReducedMotion ? 0 : totalCycle,
            times: [0, 0.75, 0.8, 0.9, 0.9, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          <span className="text-[10px] md:text-xs font-semibold text-success whitespace-nowrap">
          </span>
        </motion.div>
      </div>
    </div>
  );
}
