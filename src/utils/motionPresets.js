export const easeOutExpo = [0.16, 1, 0.3, 1];
export const easeOutQuart = [0.25, 1, 0.5, 1];

export const fadeUp = (reduced, delay = 0) =>
  reduced
    ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y: 28 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.75, delay, ease: easeOutExpo },
      };

export const fadeIn = (reduced, delay = 0) =>
  reduced
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.6, delay, ease: easeOutQuart },
      };

export const staggerContainer = (reduced, stagger = 0.08) =>
  reduced
    ? {}
    : {
        initial: 'hidden',
        animate: 'visible',
        variants: {
          hidden: {},
          visible: { transition: { staggerChildren: stagger } },
        },
      };

export const staggerItem = (reduced) =>
  reduced
    ? { variants: { hidden: {}, visible: {} } }
    : {
        variants: {
          hidden: { opacity: 0, y: 24 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.65, ease: easeOutExpo },
          },
        },
      };
