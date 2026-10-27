import { motion } from 'framer-motion';
import { footerLinks, socialLinks } from '../data/content';
import { useInViewOnce } from '../hooks/useInViewOnce';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { fadeUp } from '../utils/motionPresets';
import './Footer.css';

export function Footer() {
  const reduced = useReducedMotion();
  const [ref, inView] = useInViewOnce({ rootMargin: '0px' });
  const preset = fadeUp(reduced, 0);

  return (
    <footer className="site-footer">
      <motion.div
        ref={ref}
        className="container site-footer__inner"
        initial={preset.initial}
        animate={inView ? preset.animate : preset.initial}
        transition={preset.transition}
      >
        <div className="site-footer__brand">
          <img src="/images/logo.png" alt="" width={36} height={36} aria-hidden="true" />
          <span>Robot</span>
        </div>

        <nav aria-label="Footer">
          <ul className="site-footer__links">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="site-footer__social">
          {socialLinks.map((item) => (
            <li key={item.id}>
              <a href={item.href} aria-label={item.label}>
                <img src={item.icon} alt="" width={24} height={24} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </motion.div>

      <div className="site-footer__copy">
        <div className="container">
          <p>
            © {new Date().getFullYear()} All Rights Reserved.{' '}
            <a href="#home">Robot</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
