import { motion } from 'framer-motion';
import { heroContent } from '../data/content';
import { Button } from '../components/common/Button';
import { HeroParticles } from '../components/hero/HeroParticles';
import { useParallaxPointer } from '../hooks/useParallaxPointer';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { easeOutExpo } from '../utils/motionPresets';
import { heroIntro } from '../utils/heroIntroTiming';
import './Hero.css';

function CinematicHeadline({ text }) {
  const reduced = useReducedMotion();
  const chars = text.split('');

  if (reduced) {
    return <h1 className="hero__headline">{text}</h1>;
  }

  return (
    <h1 className="hero__headline hero__headline--3d" aria-label={text}>
      {chars.map((char, index) => {
        const isSpace = char === ' ';
        return (
          <motion.span
            key={`${char}-${index}`}
            className={isSpace ? 'hero__headline-space' : 'hero__headline-char'}
            initial={{ opacity: 0, y: '0.85em', rotateX: -52, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
            transition={{
              duration: 0.55,
              delay: heroIntro.headlineStart + index * heroIntro.headlineCharStagger,
              ease: easeOutExpo,
            }}
          >
            {isSpace ? '\u00A0' : char}
          </motion.span>
        );
      })}
    </h1>
  );
}

export function Hero() {
  const reduced = useReducedMotion();
  const { ref, onMove, onLeave, disabled } = useParallaxPointer(16);

  return (
    <section id="home" className="hero section">
      <motion.div
        className="hero__ambient"
        aria-hidden="true"
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, ease: easeOutExpo }}
      >
        <div className="hero__gradient-drift" />
        <div className="hero__tech-grid" />
      </motion.div>

      <div className="hero__glow hero__glow--primary" aria-hidden="true" />
      <div className="hero__glow hero__glow--violet" aria-hidden="true" />

      <div className="container hero__grid">
        <div className="hero__copy">
          <motion.p
            className="hero__eyebrow"
            initial={reduced ? false : { opacity: 0, y: 14, letterSpacing: '0.28em' }}
            animate={{ opacity: 1, y: 0, letterSpacing: '0.16em' }}
            transition={{ duration: 0.65, delay: heroIntro.eyebrow, ease: easeOutExpo }}
          >
            {heroContent.eyebrow}
          </motion.p>

          <CinematicHeadline text={heroContent.headline} />

          <motion.p
            className="hero__description"
            initial={reduced ? false : { opacity: 0, y: 22, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, delay: heroIntro.description, ease: easeOutExpo }}
          >
            {heroContent.description}
          </motion.p>

          <motion.div
            className="btn-group hero__actions"
            initial={reduced ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: heroIntro.actions, ease: easeOutExpo }}
          >
            <motion.div
              className="hero__cta-wrap"
              initial={reduced ? false : { opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: heroIntro.actions + 0.06, ease: easeOutExpo }}
            >
              <Button href={heroContent.primaryCta.href} variant="primary">
                {heroContent.primaryCta.label}
              </Button>
            </motion.div>
            <motion.div
              className="hero__cta-wrap"
              initial={reduced ? false : { opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: heroIntro.actions + 0.14, ease: easeOutExpo }}
            >
              <Button href={heroContent.secondaryCta.href} variant="secondary">
                {heroContent.secondaryCta.label}
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="hero__visual"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: heroIntro.robotReveal * 0.35, ease: easeOutExpo }}
          onMouseMove={disabled ? undefined : onMove}
          onMouseLeave={disabled ? undefined : onLeave}
        >
          <div className="hero__visual-stage">
            <div className="hero__visual-frame" ref={ref}>
              <HeroParticles />

              <div className="hero__hud hero__parallax-soft" aria-hidden="true">
                <span className="hero__hud-ring hero__hud-ring--outer" />
                <span className="hero__hud-ring hero__hud-ring--mid" />
                <span className="hero__hud-ring hero__hud-ring--inner" />
                <span className="hero__hud-scan" />
                <span className="hero__hud-tick hero__hud-tick--n" />
                <span className="hero__hud-tick hero__hud-tick--e" />
                <span className="hero__hud-tick hero__hud-tick--s" />
                <span className="hero__hud-tick hero__hud-tick--w" />
              </div>

              <motion.div
                className="hero__robot-shell"
                initial={
                  reduced
                    ? false
                    : {
                        opacity: 0,
                        scale: 1.12,
                        clipPath: 'circle(0% at 50% 48%)',
                      }
                }
                animate={{
                  opacity: 1,
                  scale: 1,
                  clipPath: 'circle(78% at 50% 46%)',
                }}
                transition={{ duration: 1.15, delay: heroIntro.robotReveal, ease: easeOutExpo }}
              >
                <div className="hero__parallax-strong">
                  <div className="hero__robot-float">
                    <img
                      className="hero__robot"
                      src={heroContent.image}
                      alt={heroContent.imageAlt}
                      width={640}
                      height={640}
                      fetchPriority="high"
                    />
                  </div>
                  <motion.span
                    className="hero__light-sweep"
                    aria-hidden="true"
                    initial={reduced ? false : { opacity: 0, x: '-120%' }}
                    animate={{ opacity: [0, 1, 0], x: '120%' }}
                    transition={{
                      duration: 1.1,
                      delay: heroIntro.lightSweep,
                      ease: easeOutExpo,
                    }}
                  />
                </div>
              </motion.div>

              <div className="hero__visual-floor hero__parallax-soft" aria-hidden="true" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
