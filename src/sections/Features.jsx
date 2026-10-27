import { motion } from 'framer-motion';
import { featuresSection, robotFeatures } from '../data/content';
import { SectionHeader } from '../components/common/SectionHeader';
import { RevealStagger, RevealItem } from '../components/animations/Reveal';
import { useReducedMotion } from '../hooks/useReducedMotion';
import './Features.css';

function FeatureCard({ feature }) {
  const reduced = useReducedMotion();

  return (
    <RevealItem>
      <motion.article
        className="feature-card"
        whileHover={reduced ? undefined : { y: -4 }}
        transition={{ duration: 0.25 }}
      >
        <div className="feature-card__icon-wrap">
          <img src={feature.icon} alt="" width={48} height={48} loading="lazy" aria-hidden="true" />
        </div>
        <h3 className="feature-card__title">{feature.title}</h3>
      </motion.article>
    </RevealItem>
  );
}

export function Features() {
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
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </RevealStagger>

          <div className="features__center">
            <div className="features__center-glow" aria-hidden="true" />
            <img
              src="/images/robotpic.png"
              alt="Robot with clinical sensing modules"
              className="features__robot"
              loading="lazy"
              width={480}
              height={480}
            />
          </div>

          <RevealStagger className="features__column">
            {right.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}
