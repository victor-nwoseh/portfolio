"use client";
import { motion, useReducedMotion } from "framer-motion";
import { reveal } from "@/lib/motion/presets";
import { siteContent } from "@/content/site";

const PARAGRAPH_DELAY = 0.2;

export default function About() {
  const prefersReducedMotion = useReducedMotion();
  const paragraphs = siteContent.about.paragraphs;

  return (
    <div className="space-y-4 md:space-y-6 text-primary">
      {paragraphs.map((text, index) => (
        <motion.p
          key={index}
          className="text-bodyMd md:text-bodyLg text-secondary"
          {...reveal}
          transition={{
            ...reveal.transition,
            delay: prefersReducedMotion ? 0 : PARAGRAPH_DELAY * index,
          }}
        >
          {text}
        </motion.p>
      ))}
    </div>
  );
}


