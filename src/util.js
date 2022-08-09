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

export const aboutmetitle = {
  hidden: {
    opacity: 0,
    x: 100,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 3,
    },
  },
  show: {
    x: 600,
    opacity: 1,

    transition: {
      type: "tween",
      ease: "circOut",
      duration: 3,
    },
  },
};

export const contacttitle = {
  hidden: {
    opacity: 0,
    x: 300,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 3,
    },
  },
  show: {
    x: 0,
    opacity: 1,

    transition: {
      type: "tween",
      ease: "circOut",
      duration: 3,
    },
  },
};
