"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SocialLink {
  label: string;
  href: string;
}

interface HeroProps {
  name: string;
  role: string;
  valueProp: string;
  ctaHref: string; // mailto
  socials: SocialLink[]; // e.g., GitHub, LinkedIn
}

export default function Hero({ name, role, valueProp, ctaHref, socials }: HeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-md bg-surface p-6 md:p-8 border border-border"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-primary">{name}</h1>
      <p className="mt-2 text-lg font-medium text-secondary">{role}</p>
      <p className="mt-4 text-base text-primary">{valueProp}</p>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <a
          href={ctaHref}
          className="inline-flex items-center rounded-md bg-accent hover:bg-accent-hover text-white px-4 py-2 transition-colors"
        >
          Hire me
        </a>
        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a key={s.label} href={s.href} className="text-accent hover:text-accent-hover underline">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}


