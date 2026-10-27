import { MapPin, Mail, Phone } from 'lucide-react';
import { contactSection } from '../data/content';
import { Reveal, RevealStagger, RevealItem } from '../components/animations/Reveal';
import './Contact.css';

const iconMap = {
  location: MapPin,
  phone: Phone,
  email: Mail,
};

export function Contact() {
  return (
    <section id={contactSection.id} className="contact section">
      <div className="container">
        <Reveal className="contact__header">
          <h2 className="section-title">{contactSection.title}</h2>
        </Reveal>

        <RevealStagger className="contact__grid">
          {contactSection.items.map((item) => {
            const Icon = iconMap[item.id] ?? MapPin;
            const content = (
              <>
                <span className="contact__icon" aria-hidden="true">
                  <Icon size={22} />
                </span>
                <span>{item.label}</span>
              </>
            );

            return (
              <RevealItem key={item.id}>
                {item.href ? (
                  <a href={item.href} className="contact__card">
                    {content}
                  </a>
                ) : (
                  <div className="contact__card">{content}</div>
                )}
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
