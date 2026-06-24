import { useEffect, useRef, useState } from "react";

const fmt = new Intl.NumberFormat("es-AR");

/**
 * Cuenta ascendente: anima de 0 al valor cuando entra en viewport.
 * Conserva el formato argentino de miles (649, 11.313, 1.093) y respeta
 * prefers-reduced-motion (muestra el número final sin animar).
 *
 * @param {string|number} value  Valor objetivo (acepta "11.313").
 * @param {number} [duration]    Duración en ms.
 */
export default function CountUp({ value, duration = 1800 }) {
  const target = parseInt(String(value).replace(/\D/g, ""), 10) || 0;
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      setDisplay(target);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started.current) return;
        started.current = true;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
          setDisplay(Math.round(target * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{fmt.format(display)}</span>;
}
