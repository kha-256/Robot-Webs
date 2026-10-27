import { motion } from 'framer-motion';
import { heroContent } from '../data/content';
import { Button } from '../components/common/Button';
import { useParallaxPointer } from '../hooks/useParallaxPointer';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { easeOutExpo } from '../utils/motionPresets';
import './Hero.css';

function StaggeredHeadline({ text }) {
  const reduced = useReducedMotion();
  const words = text.split(' ');

  if (reduced) {
    return <h1 className="hero__headline">{text}</h1>;
  }

  return (
    <h1 className="hero__headline" aria-label={text}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="hero__headline-word"
          initial={{ opacity: 0, y: 32, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 0.7,
            delay: 0.15 + index * 0.06,
            ease: easeOutExpo,
          }}
        >
          {word}{' '}
        </motion.span>
      ))}
    </h1>
  );
}

export function Hero() {
  const reduced = useReducedMotion();
  const { ref, onMove, onLeave, disabled } = useParallaxPointer(14);

  return (
    <section id="home" className="hero section">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__copy">
          <motion.p
            className="hero__eyebrow"
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: easeOutExpo }}
          >
            {heroContent.eyebrow}
          </motion.p>

          <StaggeredHeadline text={heroContent.headline} />

          <motion.p
            className="hero__description"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.55, ease: easeOutExpo }}
          >
            {heroContent.description}
          </motion.p>

          <motion.div
            className="btn-group hero__actions"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.7, ease: easeOutExpo }}
          >
            <Button href={heroContent.primaryCta.href} variant="primary">
              {heroContent.primaryCta.label}
            </Button>
            <Button href={heroContent.secondaryCta.href} variant="secondary">
              {heroContent.secondaryCta.label}
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="hero__visual"
          initial={reduced ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: easeOutExpo }}
          onMouseMove={disabled ? undefined : onMove}
          onMouseLeave={disabled ? undefined : onLeave}
        >
          <div className="hero__visual-frame" ref={ref}>
            <div className="hero__visual-ring" aria-hidden="true" />
            <img
              className="hero__robot hero-robot-float"
              src={heroContent.image}
              alt={heroContent.imageAlt}
              width={640}
              height={640}
              fetchPriority="high"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
