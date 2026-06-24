import { colorArma, iniciales } from "./armas";
import styles from "./TestimonioEditorial.module.css";

/** Bloques a ancho completo, alternados izquierda/derecha, estilo entrevista. */
export default function TestimonioEditorial({ veteranos = [] }) {
  return (
    <div className={styles.lista}>
      {veteranos.map((v, n) => (
        <article
          key={v.id}
          className={`${styles.bloque} ${n % 2 ? styles.invertido : ""}`}
        >
          <div
            className={styles.retrato}
            style={{ background: colorArma(v.arma) }}
          >
            <span className={styles.iniciales}>
              {iniciales(v.nombre, v.apellido)}
            </span>
          </div>
          <div className={styles.cuerpo}>
            <blockquote className={styles.texto}>
              {v.testimonioCompleto}
            </blockquote>
            <p className={styles.firma}>
              <strong>
                {v.nombre} {v.apellido}
              </strong>
              <span>
                {v.arma} · {v.unidad}
              </span>
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
