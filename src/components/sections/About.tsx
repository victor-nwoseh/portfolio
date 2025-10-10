"use client";
import { motion, useReducedMotion } from "framer-motion";
import { reveal } from "@/lib/motion/presets";
import { siteContent } from "@/content/site";

const PARAGRAPH_DELAY = 0.2;

const HIGHLIGHTS = [
  "First-Class degree in Software Engineering",
  "full-stack development",
];

function applyHighlights(text: string) {
  let segments: (string | JSX.Element)[] = [text];

  HIGHLIGHTS.forEach((phrase) => {
    segments = segments.flatMap((segment) => {
      if (typeof segment !== "string" || !segment.includes(phrase)) {
        return [segment];
      }

      const parts = segment.split(phrase);
      const result: (string | JSX.Element)[] = [];

      parts.forEach((part, index) => {
        if (part) result.push(part);
        if (index < parts.length - 1) {
          result.push(
            <span key={`${phrase}-${index}`} className="font-semibold text-accent">
              {phrase}
            </span>
          );
        }
      });

      return result;
    });
  });

  return segments;
}

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
          {applyHighlights(text).map((segment, segmentIndex) => (
            <span key={segmentIndex}>{segment}</span>
          ))}
        </motion.p>
      ))}
    </div>
  );
}


