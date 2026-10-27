import { useCallback, useEffect, useRef } from 'react';
import { useReducedMotion } from './useReducedMotion';

export function useParallaxPointer(intensity = 12) {
  const reduced = useReducedMotion();
  const ref = useRef(null);
  const frame = useRef(null);

  const onMove = useCallback(
    (event) => {
      if (reduced || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        if (!ref.current) return;
        ref.current.style.setProperty('--parallax-x', `${x * intensity}px`);
        ref.current.style.setProperty('--parallax-y', `${y * intensity}px`);
      });
    },
    [intensity, reduced],
  );

  const onLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.setProperty('--parallax-x', '0px');
    ref.current.style.setProperty('--parallax-y', '0px');
  }, []);

  useEffect(
    () => () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    },
    [],
  );

  return { ref, onMove, onLeave, disabled: reduced };
}
