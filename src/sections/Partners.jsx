import { partnersSection, partnerLogos } from '../data/content';
import { SectionHeader } from '../components/common/SectionHeader';
import { Reveal } from '../components/animations/Reveal';
import { useReducedMotion } from '../hooks/useReducedMotion';
import './Partners.css';

export function Partners() {
  const reduced = useReducedMotion();
  // Repeat enough logos to fill wide viewports, then duplicate for a seamless -50% loop
  const sequence = Array.from({ length: 4 }, () => partnerLogos).flat();
  const track = [...sequence, ...sequence];

  return (
    <section id={partnersSection.id} className="partners section">
      <div className="container">
        <SectionHeader
          title={partnersSection.title}
          titleAccent={partnersSection.titleAccent}
        />
      </div>

      <Reveal className="partners__marquee-wrap">
        {reduced ? (
          <ul className="partners__static container">
            {partnerLogos.map((logo) => (
              <li key={logo.id}>
                <img src={logo.src} alt={logo.alt} loading="lazy" width={280} height={140} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="partners__marquee" aria-hidden="true">
            <ul className="partners-track">
              {track.map((logo, index) => (
                <li key={`${logo.id}-${index}`}>
                  <img src={logo.src} alt="" loading="lazy" width={280} height={140} />
                </li>
              ))}
            </ul>
          </div>
        )}
        {!reduced && (
          <p className="visually-hidden">
            Partner logos: {partnerLogos.map((l) => l.alt).join(', ')}
          </p>
        )}
      </Reveal>
    </section>
  );
}
