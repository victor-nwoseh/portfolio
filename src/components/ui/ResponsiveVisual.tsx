"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function ResponsiveVisual() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative w-full h-full overflow-hidden bg-white">
      {/* Background image */}
      <Image
        src="/images/what-i-do/responsive-interfaces.jpg"
        alt="Responsive interfaces illustration"
        fill
        className="object-cover"
        sizes="(min-width: 768px) 50vw, 90vw"
      />

      {/* Text overlay at bottom center */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent py-4 flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: 0.3 }}
      >
        <span className="text-sm md:text-base font-semibold text-white">
          Adapts to any screen
        </span>
      </motion.div>
    </div>
  );
}

