"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import Button from "@/components/ui/Button";
import { reveal } from "@/lib/motion/presets";
import Card from "@/components/ui/Card";

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
      <Card className="p-6 md:p-8">
      <h1 className="text-display font-bold text-primary">{name}</h1>
      <p className="mt-2 text-h3 text-secondary">{role}</p>
      <p className="mt-4 text-bodyLg text-primary">{valueProp}</p>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Button variant="accent" href={ctaHref}>Hire me</Button>
        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a key={s.label} href={s.href} className="text-accent hover:text-accent-hover underline">
              {s.label}
            </a>
          ))}
        </div>
      </div>
      </Card>
    </motion.div>
  );
}


