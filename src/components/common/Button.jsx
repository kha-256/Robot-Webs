import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import './Button.css';

export function Button({
  href,
  variant = 'primary',
  children,
  className = '',
  ...rest
}) {
  const reduced = useReducedMotion();
  const classes = ['btn', `btn--${variant}`, className].filter(Boolean).join(' ');

  const motionProps = reduced
    ? {}
    : {
        whileHover: { y: -2, scale: 1.02 },
        whileTap: { scale: 0.98 },
        transition: { duration: 0.2 },
      };

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps} {...rest}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type="button" className={classes} {...motionProps} {...rest}>
      {children}
    </motion.button>
  );
}
