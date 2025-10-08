export const reveal = {
  initial: { opacity: 0, y: 24, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
};

export const staggerChildren = {
  animate: { transition: { staggerChildren: 0.2 } },
};


