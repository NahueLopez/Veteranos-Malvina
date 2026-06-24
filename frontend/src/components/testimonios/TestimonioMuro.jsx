import { colorArma } from "./armas";
import styles from "./TestimonioMuro.module.css";

/** Muro tipo "pared de la memoria": citas de alturas variables, acento por arma. */
export default function TestimonioMuro({ veteranos = [] }) {
  return (
    <div className={styles.muro}>
      {veteranos.map((v) => (
        <figure
          key={v.id}
          className={styles.nota}
          style={{ borderLeftColor: colorArma(v.arma) }}
        >
          <blockquote className={styles.texto}>{v.testimonioCorto}</blockquote>
          <figcaption className={styles.pie}>
            <strong>
              {v.nombre} {v.apellido}
            </strong>
            <span style={{ color: colorArma(v.arma) }}>{v.arma}</span>
            <small>{v.unidad}</small>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
