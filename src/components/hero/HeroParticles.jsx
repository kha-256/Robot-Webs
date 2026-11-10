import { useMemo } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import './HeroParticles.css';

const COUNT = 28;

function createParticles(seed) {
  const particles = [];
  for (let i = 0; i < COUNT; i += 1) {
    const n = (seed + i * 7919) % 1000;
    particles.push({
      id: i,
      left: `${(n * 0.097) % 100}%`,
      top: `${(n * 0.133) % 100}%`,
      size: 1 + (n % 3),
      delay: `${(n % 40) / 10}s`,
      duration: `${4 + (n % 50) / 10}s`,
      opacity: 0.15 + (n % 40) / 100,
    });
  }
  return particles;
}

export function HeroParticles() {
  const reduced = useReducedMotion();
  const particles = useMemo(() => createParticles(42), []);

  if (reduced) {
    return null;
  }

  return (
    <div className="hero-particles" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="hero-particles__dot"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}
