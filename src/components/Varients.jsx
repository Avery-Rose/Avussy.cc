export const menu = {
  hidden: { y: '-100vh', transition: { duration: 0.5, delay: 0.2 } },
  visible: { y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
};

export const mobileItem = {
  hidden: {
    opacity: 0,
    y: 100,
    transition: { duration: 0.5 },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 100,
      staggerChildren: 0.2,
    },
  },
};

export const desktopItem = {
  hidden: {
    opacity: 0,
    y: -100,
    transition: { duration: 0.5 },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.3, type: 'spring', stiffness: 60 },
  },
};

export const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.025,
    },
  },
};
