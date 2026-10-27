import { motion } from 'framer-motion';
import { useInViewOnce } from '../../hooks/useInViewOnce';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { fadeUp } from '../../utils/motionPresets';
import './SectionHeader.css';

export function SectionHeader({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  align = 'center',
}) {
  const reduced = useReducedMotion();
  const [ref, inView] = useInViewOnce();
  const preset = fadeUp(reduced, 0);

  return (
    <header
      ref={ref}
      className={`section-header section-header--${align}`}
    >
      {eyebrow && (
        <motion.span
          className="section-eyebrow"
          initial={preset.initial}
          animate={inView ? preset.animate : preset.initial}
          transition={preset.transition}
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        className="section-title"
        initial={preset.initial}
        animate={inView ? preset.animate : preset.initial}
        transition={{ ...preset.transition, delay: (preset.transition?.delay ?? 0) + 0.06 }}
      >
        {title}
        {titleAccent && <span className="accent"> {titleAccent}</span>}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="section-subtitle"
          initial={preset.initial}
          animate={inView ? preset.animate : preset.initial}
          transition={{ ...preset.transition, delay: (preset.transition?.delay ?? 0) + 0.12 }}
        >
          {subtitle}
        </motion.p>
      )}
    </header>
  );
}
