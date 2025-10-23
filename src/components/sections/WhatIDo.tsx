"use client";
import { motion, useReducedMotion } from "framer-motion";
import { reveal } from "@/lib/motion/presets";
import { siteContent } from "@/content/site";

export default function WhatIDo() {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const items = siteContent.whatIDo.items;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {items.map((item, index) => (
        <motion.article
          key={item.title}
          className="group relative overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-slate-800/40 via-slate-900/40 to-slate-800/40 p-6 md:p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-[0_8px_30px_rgba(45,212,191,0.12)]"
          {...reveal}
          transition={{
            ...reveal.transition,
            delay: prefersReducedMotion ? 0 : index * 0.1,
          }}
        >
          {/* Subtle gradient accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Content */}
          <div className="relative z-10 space-y-3">
            {/* Title */}
            <h3 className="text-lg md:text-xl font-semibold bg-gradient-to-r from-accent via-focus to-accent bg-clip-text text-transparent">
              {item.title}
            </h3>
            
            {/* Description */}
            <p className="text-sm md:text-base text-secondary leading-relaxed">
              {item.description}
            </p>
            
            {/* Tagline */}
            {item.tagline && (
              <p className="text-xs md:text-sm font-medium text-accent/80 italic pt-2">
                {item.tagline}
              </p>
            )}
          </div>

          {/* Corner accent */}
          <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.article>
      ))}
    </div>
  );
}


