"use client";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import type { Skill } from "@/content/types";

interface SkillCardProps {
  skill: Skill;
  className?: string;
}

export default function SkillCard({ skill, className }: SkillCardProps) {
  const prefersReducedMotion = useReducedMotion();

  // Check if logo is a placeholder icon name or a URL
  const isExternalLogo = skill.logo.startsWith("http");

  return (
    <motion.div
      className={`relative overflow-hidden rounded-lg border border-border bg-white shadow-sm ${
        className ?? ""
      }`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: "easeOut" }}
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              y: -4,
              boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)",
            }
      }
      style={{
        aspectRatio: "4 / 5",
      }}
    >
      {/* Metallic wave pattern using skill's brand color */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 200 250"
        fill="none"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`metallic-${skill.name}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={skill.color} stopOpacity="0.85" />
            <stop offset="25%" stopColor="white" stopOpacity="0.65" />
            <stop offset="50%" stopColor={skill.color} stopOpacity="0.75" />
            <stop offset="75%" stopColor="white" stopOpacity="0.55" />
            <stop offset="100%" stopColor={skill.color} stopOpacity="0.65" />
          </linearGradient>
        </defs>
        <path
          d="M 0,100 Q 50,80 100,100 T 200,100 L 200,0 L 0,0 Z"
          fill={`url(#metallic-${skill.name})`}
        />
        <path
          d="M 0,120 Q 50,100 100,120 T 200,120 L 200,0 L 0,0 Z"
          fill={skill.color}
          opacity="0.45"
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-end justify-end pb-6 pr-6 pt-6">
        {/* Logo */}
        <div className="mb-3 mr-0 flex items-center justify-center pr-0">
          {isExternalLogo ? (
            <Image
              src={skill.logo}
              alt={`${skill.name} logo`}
              width={80}
              height={80}
              className="object-contain"
            />
          ) : (
            // Placeholder icon for knowledge skills
            <div
              className="flex h-20 w-20 items-center justify-center rounded-lg text-2xl font-bold text-white"
              style={{ backgroundColor: skill.color }}
            >
              {skill.name.charAt(0)}
            </div>
          )}
        </div>

        {/* Skill name with dots */}
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: skill.color }} />
          <h3 className="text-right text-base font-semibold text-black md:text-lg">
            {skill.name}
          </h3>
          <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: skill.color }} />
        </div>
      </div>
    </motion.div>
  );
}

