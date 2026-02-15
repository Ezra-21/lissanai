export const FADE_IN = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export const SLIDE_IN_LEFT = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.4, ease: "easeOut" },
};

export const STAGGER_CHILDREN = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export const SCALE_UP = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.3 },
};
