export const pageVariants = {
  initial: { opacity: 0, y: 12, filter: "blur(4px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    y: -8,
    filter: "blur(4px)",
    transition: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const staggerContainer = {
  animate: { transition: { staggerChildren: 0.06, delayChildren: 0.04 } },
};

export const fadeUpItem = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.96 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const sidebarVariants = {
  closed: { x: "-100%" },
  open: { x: 0, transition: { type: "spring", damping: 28, stiffness: 320 } },
};

export const overlayVariants = {
  closed: { opacity: 0, pointerEvents: "none" },
  open: { opacity: 1, pointerEvents: "auto" },
};
