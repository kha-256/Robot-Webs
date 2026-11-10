import { motion } from 'framer-motion';
import { featuresSection, robotFeatures } from '../data/content';
import { SectionHeader } from '../components/common/SectionHeader';
import { RevealStagger, RevealItem } from '../components/animations/Reveal';
import { useInViewOnce } from '../hooks/useInViewOnce';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { easeOutExpo } from '../utils/motionPresets';
import './Features.css';

function FeatureCard({ feature, side }) {
  const reduced = useReducedMotion();

  return (
    <RevealItem>
      <motion.article
        className={`feature-card feature-card--${side}`}
        whileHover={
          reduced
            ? undefined
            : {
                y: -6,
                transition: { duration: 0.35, ease: easeOutExpo },
              }
        }
      >
        <motion.div
          className="feature-card__icon-wrap"
          whileHover={reduced ? undefined : { scale: 1.1, rotate: side === 'left' ? -6 : 6 }}
          transition={{ type: 'spring', stiffness: 340, damping: 16 }}
        >
          <img src={feature.icon} alt="" width={48} height={48} loading="lazy" aria-hidden="true" />
        </motion.div>
        <h3 className="feature-card__title">{feature.title}</h3>
      </motion.article>
    </RevealItem>
  );
}

export function Features() {
  const reduced = useReducedMotion();
  const [robotRef, robotInView] = useInViewOnce({ threshold: 0.25 });
  const left = robotFeatures.slice(0, 3);
  const right = robotFeatures.slice(3);

  return (
    <section id={featuresSection.id} className="features section">
      <div className="container">
        <SectionHeader
          title={featuresSection.title}
          titleAccent={featuresSection.titleAccent}
          subtitle={featuresSection.subtitle}
        />

        <div className="features__layout">
          <RevealStagger className="features__column">
            {left.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} side="left" />
            ))}
          </RevealStagger>

          <div className="features__center" ref={robotRef}>
            <motion.div
              className="features__center-stage"
              initial={reduced ? false : { opacity: 0, scale: 0.88, filter: 'blur(10px)' }}
              animate={
                robotInView
                  ? { opacity: 1, scale: 1, filter: 'blur(0px)' }
                  : { opacity: 0, scale: 0.88, filter: 'blur(10px)' }
              }
              transition={{ duration: 0.95, ease: easeOutExpo }}
            >
              <div className="features__center-glow" aria-hidden="true" />
              <div className="features__orbit features__orbit--outer" aria-hidden="true">
                <span className="features__orbit-dot features__orbit-dot--a" />
              </div>
              <div className="features__orbit features__orbit--mid" aria-hidden="true">
                <span className="features__orbit-dot features__orbit-dot--b" />
              </div>
              <div className="features__orbit features__orbit--inner" aria-hidden="true" />

              <motion.div
                className="features__robot-shell"
                animate={
                  reduced
                    ? undefined
                    : {
                        y: [0, -10, 0],
                      }
                }
                transition={
                  reduced
                    ? undefined
                    : {
                        duration: 5.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }
                }
              >
                <img
                  src="/images/robotpic.png"
                  alt="Robot with clinical sensing modules"
                  className="features__robot"
                  loading="lazy"
                  width={480}
                  height={480}
                />
                {!reduced && robotInView && (
                  <motion.span
                    className="features__light-sweep"
                    aria-hidden="true"
                    initial={{ opacity: 0, x: '-120%' }}
                    animate={{ opacity: [0, 1, 0], x: '120%' }}
                    transition={{
                      duration: 1.2,
                      delay: 0.35,
                      ease: easeOutExpo,
                    }}
                  />
                )}
              </motion.div>
            </motion.div>
          </div>

          <RevealStagger className="features__column">
            {right.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} side="right" />
            ))}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}
