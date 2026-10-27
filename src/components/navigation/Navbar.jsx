import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useCallback, useState } from 'react';
import { navLinks } from '../../data/content';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import './Navbar.css';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (value) => {
    setScrolled(value > 24);
  });

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const handleNavClick = useCallback(() => {
    closeMenu();
  }, [closeMenu]);

  return (
    <motion.header
      className={`nav-bar ${scrolled ? 'nav-bar--scrolled' : ''}`}
      initial={reduced ? false : { y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="nav-bar__inner container">
        <a href="#home" className="nav-bar__brand" onClick={handleNavClick}>
          <img src="/images/logo.png" alt="" width={40} height={40} aria-hidden="true" />
          <span className="nav-bar__title">Robot</span>
        </a>

        <nav className="nav-bar__desktop" aria-label="Primary">
          <ul className="nav-bar__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-bar__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="nav-bar__toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={`nav-bar__mobile ${menuOpen ? 'nav-bar__mobile--open' : ''}`}
        aria-label="Mobile primary"
        hidden={!menuOpen}
      >
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-bar__mobile-link" onClick={handleNavClick}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
