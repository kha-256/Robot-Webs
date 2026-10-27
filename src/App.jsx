import { Navbar } from './components/navigation/Navbar';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Dashboard } from './sections/Dashboard';
import { Features } from './sections/Features';
import { Footer } from './sections/Footer';
import { Hero } from './sections/Hero';
import { Partners } from './sections/Partners';

export default function App() {
  return (
    <>
      <a href="#home" className="skip-link">
        Skip to content
      </a>
      <div className="page-bg" aria-hidden="true" />
      <div className="grid-overlay" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Dashboard />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
