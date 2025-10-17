"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { reveal } from "@/lib/motion/presets";
import { siteContent } from "@/content/site";
import AIVisual from "@/components/ui/AIVisual";
import UXVisual from "@/components/ui/UXVisual";
import ProductVisual from "@/components/ui/ProductVisual";
import ResponsiveVisual from "@/components/ui/ResponsiveVisual";

function VisualContent({ visual, title }: { visual?: string; title: string }) {
  if (visual === "ai") {
    return (
      <div className="relative aspect-[3/2] w-full">
        <AIVisual />
      </div>
    );
  }

  if (visual === "ux") {
    return (
      <div className="relative aspect-[3/2] w-full">
        <UXVisual />
      </div>
    );
  }

  if (visual === "product") {
    return (
      <div className="relative aspect-[3/2] w-full">
        <ProductVisual />
      </div>
    );
  }

  if (visual === "responsive") {
    return (
      <div className="relative aspect-[3/2] w-full">
        <ResponsiveVisual />
      </div>
    );
  }

  return (
    <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg bg-gradient-to-br from-accent/10 via-transparent to-accent/10">
      <div className="absolute inset-0 flex items-center justify-center text-bodySm uppercase tracking-wide text-accent/70">
        {visual ?? "visual"}
      </div>
    </div>
  );
}

export default function WhatIDo() {
  const prefersReducedMotion = useReducedMotion();
  const items = siteContent.whatIDo.items;

  return (
    <div className="flex flex-col gap-12">
      {items.map((item, index) => {
        const isEven = index % 2 === 0;

        const text = (
          <motion.div
            key={`${item.title}-text`}
            className="flex flex-col justify-center space-y-3"
            {...reveal}
            transition={{
              ...reveal.transition,
              delay: prefersReducedMotion ? 0 : index * 0.1,
            }}
          >
            <h3 className="inline-block bg-gradient-to-r from-accent via-focus to-accent bg-clip-text text-transparent text-[clamp(1.1rem,4.2vw,1.55rem)] md:text-[1.6rem] font-semibold">
              {item.title}
            </h3>
            <p className="text-bodyMd md:text-bodyLg text-secondary">{item.description}</p>
            {item.tagline && (
              <p className="text-bodySm font-medium text-accent/90">{item.tagline}</p>
            )}
          </motion.div>
        );

        const visual = (
          <motion.div
            key={`${item.title}-visual`}
            className="relative overflow-hidden rounded-lg ring-1 ring-border/60 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(45,212,191,0.18)]"
            {...reveal}
            transition={{
              ...reveal.transition,
              delay: prefersReducedMotion ? 0 : index * 0.1 + 0.1,
            }}
          >
            <VisualContent visual={item.visual} title={item.title} />
          </motion.div>
        );

        return (
          <div
            key={item.title}
            className={`grid gap-6 md:grid-cols-2 ${
              isEven ? "" : "md:[&>*:first-child]:order-2"
            }`}
          >
            {text}
            {visual}
          </div>
        );
      })}
    </div>
  );
}


