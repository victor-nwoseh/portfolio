"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import Button from "@/components/ui/Button";
import FancyCTA from "@/components/ui/FancyCTA";
import { reveal } from "@/lib/motion/presets";

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
    <motion.div {...reveal}>
      <div className="p-0 md:p-0">
      <h1 className="text-display font-bold text-primary">{name}</h1>
      <p className="mt-2 text-h3 text-secondary">{role}</p>
      <p className="mt-4 text-bodyLg text-primary">{valueProp}</p>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <FancyCTA href={ctaHref}>Hire me</FancyCTA>
        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a key={s.label} href={s.href} className="text-accent hover:text-accent-hover underline">
              {s.label}
            </a>
          ))}
        </div>
      </div>
      </div>
    </motion.div>
  );
}


