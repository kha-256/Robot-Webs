import { aboutContent } from '../data/content';
import { Reveal, RevealStagger, RevealItem } from '../components/animations/Reveal';
import './About.css';

export function About() {
  return (
    <section id={aboutContent.id} className="about section">
      <div className="container about__grid">
        <Reveal className="about__content">
          <span className="section-eyebrow">Overview</span>
          <h2 className="about__title">{aboutContent.title}</h2>
        </Reveal>

        <RevealStagger className="about__text">
          {aboutContent.paragraphs.map((paragraph) => (
            <RevealItem key={paragraph.slice(0, 32)}>
              <p>{paragraph}</p>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
