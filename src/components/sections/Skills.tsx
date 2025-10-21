"use client";
import { motion, useReducedMotion } from "framer-motion";
import { reveal } from "@/lib/motion/presets";

export default function Skills() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      {...reveal}
      transition={{
        ...reveal.transition,
        delay: prefersReducedMotion ? 0 : 0.2,
      }}
      className="w-full"
    >
      <div 
        className="rounded-lg border border-white/30 overflow-hidden relative backdrop-blur-sm"
        style={{ 
          backgroundColor: 'rgba(15, 23, 42, 0.65)',
          boxShadow: `
            0 20px 60px rgba(0, 0, 0, 0.4),
            0 8px 16px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(255, 255, 255, 0.1) inset,
            0 0 100px rgba(45, 212, 191, 0.15)
          `,
          transform: 'translateZ(0)'
        }}
      >
        {/* Teal gradient from bottom right */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 100% 100%, rgba(45, 212, 191, 0.15) 0%, transparent 50%)'
          }}
        />
        
        {/* Top light rim for 3D effect */}
        <div 
          className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none"
          style={{
            background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), transparent)'
          }}
        />
        
        {/* Subtle shine overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, transparent 50%)'
          }}
        />
        {/* Header with gradient tint */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-0"
          style={{ 
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.15) 50%, transparent 100%)'
          }}
        >
          {/* Development Column */}
          <div className="text-center py-4 md:py-6">
            <h3 className="text-lg md:text-xl font-light tracking-wider uppercase bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
              Development
            </h3>
          </div>

          {/* Tools Column */}
          <div className="text-center py-4 md:py-6">
            <h3 className="text-lg md:text-xl font-light tracking-wider uppercase bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
              Tools
            </h3>
          </div>

          {/* Knowledge Column */}
          <div className="text-center py-4 md:py-6">
            <h3 className="text-lg md:text-xl font-light tracking-wider uppercase bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
              Knowledge
            </h3>
          </div>
        </div>

        {/* Content area */}
        <div className="p-8 md:p-12 min-h-[400px]">
          {/* Content will go here */}
        </div>

        {/* Vertical dividers - hidden on mobile, visible on md+ */}
        <div className="hidden md:block absolute top-[5rem] bottom-8 left-[33.333%] w-px bg-gradient-to-b from-gray-400/40 via-gray-400/40 to-transparent" />
        <div className="hidden md:block absolute top-[5rem] bottom-8 left-[66.666%] w-px bg-gradient-to-b from-gray-400/40 via-gray-400/40 to-transparent" />
      </div>
    </motion.div>
  );
}

