"use client";
import { motion, useReducedMotion } from "framer-motion";
import { reveal } from "@/lib/motion/presets";
import { siteContent } from "@/content/site";

export default function WhatIDo() {
  const prefersReducedMotion = useReducedMotion();
  const items = siteContent.whatIDo.items;

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((item, index) => (
        <motion.article
          key={item.title}
          className="rounded-lg border border-border/60 bg-surface/80 p-6 shadow-sm"
          {...reveal}
          transition={{
            ...reveal.transition,
            delay: prefersReducedMotion ? 0 : index * 0.15,
          }}
        >
          <h3 className="text-h4 text-primary font-semibold">{item.title}</h3>
          <p className="mt-2 text-bodyMd text-secondary">{item.description}</p>
          <ul className="mt-4 space-y-2 text-bodySm text-secondary">
            {item.bullets.map((bullet, bulletIndex) => (
              <li key={bulletIndex} className="flex gap-2">
                <span className="mt-[0.35em] h-1.5 w-1.5 flex-none rounded-full bg-accent" aria-hidden />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  );
}


