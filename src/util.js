export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeInOut", duration: 1 },
  },
};

export const titleAnim = {
  hidden: { y: 100, opacity: 0 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", ease: "circOut", duration: 1 },
  },
};

export const titleCaption = {
  hidden: { y: 100, opacity: 0 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 1.5,
    },
  },
};
