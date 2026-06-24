import { useState } from "react";
import { iniciales } from "./armas";
import styles from "./TestimonioCarrusel.module.css";

/** Una cita protagonista a la vez, con navegación por flechas y puntos. */
export default function TestimonioCarrusel({ veteranos = [] }) {
  const [i, setI] = useState(0);
  const total = veteranos.length;
  if (!total) return null;
  const v = veteranos[i];
  const ir = (dir) => setI((n) => (n + dir + total) % total);

  return (
    <div className={styles.contenedor}>
      <button
        type="button"
        className={styles.nav}
        onClick={() => ir(-1)}
        aria-label="Testimonio anterior"
      >
        ‹
      </button>

      <figure className={styles.cita}>
        <span className={styles.comilla} aria-hidden="true">
          “
        </span>
        <blockquote className={styles.texto}>{v.testimonioCompleto}</blockquote>
        <figcaption className={styles.autor}>
          <span className={styles.iniciales} aria-hidden="true">
            {iniciales(v.nombre, v.apellido)}
          </span>
          <span>
            <strong>
              {v.nombre} {v.apellido}
            </strong>
            <small>{v.unidad}</small>
          </span>
        </figcaption>
      </figure>

      <button
        type="button"
        className={styles.nav}
        onClick={() => ir(1)}
        aria-label="Testimonio siguiente"
      >
        ›
      </button>

      <div className={styles.puntos} role="tablist" aria-label="Testimonios">
        {veteranos.map((vv, n) => (
          <button
            key={vv.id}
            type="button"
            className={`${styles.punto} ${n === i ? styles.puntoActivo : ""}`}
            onClick={() => setI(n)}
            aria-label={`Ir al testimonio ${n + 1}`}
            aria-selected={n === i}
          />
        ))}
      </div>
    </div>
  );
}
