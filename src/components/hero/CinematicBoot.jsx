import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { easeOutExpo } from '../../utils/motionPresets';
import './CinematicBoot.css';

/** Non-blocking atmospheric fade on first paint — never captures pointer events. */
export function CinematicBoot() {
  const reduced = useReducedMotion();

  if (reduced) {
    return null;
  }

  return (
    <div className="cinematic-boot" aria-hidden="true">
      <motion.div
        className="cinematic-boot__veil"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.05, ease: easeOutExpo }}
      />
      <motion.div
        className="cinematic-boot__pulse"
        initial={{ opacity: 0.85, scale: 0.92 }}
        animate={{ opacity: 0, scale: 1.35 }}
        transition={{ duration: 1.25, ease: easeOutExpo }}
      />
      <motion.div
        className="cinematic-boot__scan"
        initial={{ scaleX: 0, opacity: 0.6 }}
        animate={{ scaleX: 1, opacity: 0 }}
        transition={{ duration: 0.9, delay: 0.08, ease: easeOutExpo }}
      />
    </div>
  );
}
