import { motion } from 'framer-motion';
import { useInViewOnce } from '../../hooks/useInViewOnce';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { fadeUp } from '../../utils/motionPresets';

export function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const reduced = useReducedMotion();
  const [ref, inView] = useInViewOnce();
  const preset = fadeUp(reduced, delay);
  const Component = motion[Tag] ?? motion.div;

  return (
    <Component
      ref={ref}
      className={className}
      initial={preset.initial}
      animate={inView ? preset.animate : preset.initial}
      transition={preset.transition}
    >
      {children}
    </Component>
  );
}

export function RevealStagger({ children, className = '' }) {
  const reduced = useReducedMotion();
  const [ref, inView] = useInViewOnce();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className = '' }) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
