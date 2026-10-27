import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  dashboardFeatures,
  dashboardSection,
  dashboardSlides,
} from '../data/content';
import { SectionHeader } from '../components/common/SectionHeader';
import { RevealStagger, RevealItem } from '../components/animations/Reveal';
import { useReducedMotion } from '../hooks/useReducedMotion';
import './Dashboard.css';

function DashboardCard({ item }) {
  const reduced = useReducedMotion();

  return (
    <RevealItem>
      <motion.article
        className="dash-card"
        whileHover={reduced ? undefined : { y: -3 }}
        transition={{ duration: 0.22 }}
      >
        <div className="dash-card__icon">
          <img src={item.icon} alt="" width={56} height={56} loading="lazy" aria-hidden="true" />
        </div>
        <h3 className="dash-card__title">{item.title}</h3>
        <p className="dash-card__text">{item.description}</p>
      </motion.article>
    </RevealItem>
  );
}

export function Dashboard() {
  const reduced = useReducedMotion();
  const [activeSlide, setActiveSlide] = useState(0);

  const goTo = useCallback((index) => {
    setActiveSlide((index + dashboardSlides.length) % dashboardSlides.length);
  }, []);

  useEffect(() => {
    if (reduced) return undefined;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % dashboardSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [reduced]);

  return (
    <section id={dashboardSection.id} className="dashboard section">
      <div className="container">
        <SectionHeader
          title={dashboardSection.title}
          titleAccent={dashboardSection.titleAccent}
          subtitle={dashboardSection.subtitle}
        />

        <RevealStagger className="dashboard__grid">
          {dashboardFeatures.map((item) => (
            <DashboardCard key={item.id} item={item} />
          ))}
        </RevealStagger>

        <div className="dashboard__highlights">
          <SectionHeader
            eyebrow="Interface"
            title="Dashboard"
            titleAccent="Highlights"
            subtitle="Screens from the robot management dashboard."
          />

          <div className="dashboard__carousel">
            <div className="dashboard__carousel-viewport">
              {dashboardSlides.map((slide, index) => (
                <motion.img
                  key={slide.id}
                  src={slide.src}
                  alt={slide.alt}
                  className="dashboard__slide"
                  loading="lazy"
                  initial={false}
                  animate={{
                    opacity: index === activeSlide ? 1 : 0,
                    scale: index === activeSlide ? 1 : 0.98,
                  }}
                  transition={{ duration: reduced ? 0 : 0.55, ease: [0.16, 1, 0.3, 1] }}
                  aria-hidden={index !== activeSlide}
                />
              ))}
            </div>

            <div className="dashboard__carousel-controls">
              <button
                type="button"
                className="dashboard__carousel-btn"
                aria-label="Previous dashboard screenshot"
                onClick={() => goTo(activeSlide - 1)}
              >
                <ChevronLeft size={20} aria-hidden />
              </button>
              <div className="dashboard__dots" role="tablist" aria-label="Dashboard slides">
                {dashboardSlides.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    role="tab"
                    aria-selected={index === activeSlide}
                    aria-label={`Show dashboard screenshot ${index + 1}`}
                    className={`dashboard__dot ${index === activeSlide ? 'dashboard__dot--active' : ''}`}
                    onClick={() => goTo(index)}
                  />
                ))}
              </div>
              <button
                type="button"
                className="dashboard__carousel-btn"
                aria-label="Next dashboard screenshot"
                onClick={() => goTo(activeSlide + 1)}
              >
                <ChevronRight size={20} aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
