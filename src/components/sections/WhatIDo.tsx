"use client";
import { motion, useReducedMotion } from "framer-motion";
import { reveal } from "@/lib/motion/presets";
import { siteContent } from "@/content/site";

export default function WhatIDo() {
  const prefersReducedMotion = useReducedMotion();
  const items = siteContent.whatIDo.items;

  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <motion.section
          key={item.title}
          className="space-y-2"
          {...reveal}
          transition={{
            ...reveal.transition,
            delay: prefersReducedMotion ? 0 : index * 0.15,
          }}
        >
          <h3 className="text-[clamp(1.1rem,4.2vw,1.55rem)] md:text-[1.6rem] font-semibold text-primary">
            {item.title}
          </h3>
          <p className="text-bodyMd md:text-bodyLg text-secondary">
            {item.description}
          </p>
        </motion.section>
      ))}
    </div>
  );
}


