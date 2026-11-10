import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  dashboardFeatures,
  dashboardSection,
  dashboardSlides,
} from '../data/content';
import { SectionHeader } from '../components/common/SectionHeader';
import { RevealStagger, RevealItem } from '../components/animations/Reveal';
import { useInViewOnce } from '../hooks/useInViewOnce';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { easeOutExpo } from '../utils/motionPresets';
import './Dashboard.css';

function DashboardCard({ item }) {
  const reduced = useReducedMotion();

  return (
    <RevealItem>
      <motion.article
        className="dash-card"
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
          className="dash-card__shine"
          aria-hidden="true"
          initial={false}
          whileHover={reduced ? undefined : { opacity: 1, x: '140%' }}
          transition={{ duration: 0.7, ease: easeOutExpo }}
        />
        <motion.div
          className="dash-card__icon"
          whileHover={reduced ? undefined : { scale: 1.08, rotate: -4 }}
          transition={{ type: 'spring', stiffness: 320, damping: 18 }}
        >
          <img src={item.icon} alt="" width={56} height={56} loading="lazy" aria-hidden="true" />
        </motion.div>
        <h3 className="dash-card__title">{item.title}</h3>
        <p className="dash-card__text">{item.description}</p>
      </motion.article>
    </RevealItem>
  );
}

export function Dashboard() {
  const reduced = useReducedMotion();
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [carouselRef, carouselInView] = useInViewOnce({ threshold: 0.2 });

  const goTo = useCallback((index, dir) => {
    const next = (index + dashboardSlides.length) % dashboardSlides.length;
    setDirection(dir ?? (next > activeSlide ? 1 : -1));
    setActiveSlide(next);
  }, [activeSlide]);

  useEffect(() => {
    if (reduced || !carouselInView) return undefined;

    const timer = window.setInterval(() => {
      setDirection(1);
      setActiveSlide((current) => (current + 1) % dashboardSlides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [reduced, carouselInView]);

  const slideVariants = reduced
    ? {
        enter: { opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' },
        center: { opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' },
        exit: { opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' },
      }
    : {
        enter: (dir) => ({
          opacity: 0,
          x: dir > 0 ? 48 : -48,
          scale: 0.96,
          filter: 'blur(8px)',
        }),
        center: {
          opacity: 1,
          x: 0,
          scale: 1,
          filter: 'blur(0px)',
        },
        exit: (dir) => ({
          opacity: 0,
          x: dir > 0 ? -36 : 36,
          scale: 1.02,
          filter: 'blur(6px)',
        }),
      };

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
            // eyebrow="Interface"
            title="Dashboard"
            titleAccent="Highlights"
            subtitle="Screens from the robot management dashboard."
          />

          <motion.div
            ref={carouselRef}
            className="dashboard__carousel"
            initial={reduced ? false : { opacity: 0, y: 36, filter: 'blur(6px)' }}
            animate={
              carouselInView
                ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                : { opacity: 0, y: 36, filter: 'blur(6px)' }
            }
            transition={{ duration: 0.85, ease: easeOutExpo }}
          >
            <div className="dashboard__carousel-frame">
              <div className="dashboard__carousel-glow" aria-hidden="true" />
              <div className="dashboard__carousel-viewport">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.img
                    key={dashboardSlides[activeSlide].id}
                    src={dashboardSlides[activeSlide].src}
                    alt={dashboardSlides[activeSlide].alt}
                    className="dashboard__slide"
                    loading="lazy"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: reduced ? 0 : 0.55, ease: easeOutExpo }}
                  />
                </AnimatePresence>
                {!reduced && (
                  <motion.span
                    key={`scan-${activeSlide}`}
                    className="dashboard__scan"
                    aria-hidden="true"
                    initial={{ top: '-10%', opacity: 0 }}
                    animate={{ top: '110%', opacity: [0, 0.7, 0] }}
                    transition={{ duration: 1.15, ease: easeOutExpo, delay: 0.15 }}
                  />
                )}
              </div>
            </div>

            <div className="dashboard__carousel-controls">
              <button
                type="button"
                className="dashboard__carousel-btn"
                aria-label="Previous dashboard screenshot"
                onClick={() => goTo(activeSlide - 1, -1)}
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
                  >
                    {index === activeSlide && !reduced && (
                      <motion.span
                        className="dashboard__dot-progress"
                        layoutId="dash-dot-progress"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 5.2, ease: 'linear' }}
                      />
                    )}
                  </button>
                ))}
              </div>
              <button
                type="button"
                className="dashboard__carousel-btn"
                aria-label="Next dashboard screenshot"
                onClick={() => goTo(activeSlide + 1, 1)}
              >
                <ChevronRight size={20} aria-hidden />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
