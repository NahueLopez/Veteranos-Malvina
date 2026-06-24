import { useState } from "react";
import { colorArma, iniciales } from "./armas";
import styles from "./TestimonioFoco.module.css";

/** Lista de veteranos seleccionable a la izquierda; testimonio destacado a la derecha. */
export default function TestimonioFoco({ veteranos = [] }) {
  const [i, setI] = useState(0);
  if (!veteranos.length) return null;
  const v = veteranos[i];

  return (
    <div className={styles.contenedor}>
      <ul className={styles.lista}>
        {veteranos.map((vv, n) => (
          <li key={vv.id}>
            <button
              type="button"
              className={`${styles.item} ${n === i ? styles.activo : ""}`}
              onClick={() => setI(n)}
              style={n === i ? { borderLeftColor: colorArma(vv.arma) } : undefined}
            >
              <span className={styles.iniciales} aria-hidden="true">
                {iniciales(vv.nombre, vv.apellido)}
              </span>
              <span>
                <strong>
                  {vv.nombre} {vv.apellido}
                </strong>
                <small>{vv.arma}</small>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <figure className={styles.detalle}>
        <span className={styles.comilla} aria-hidden="true">
          “
        </span>
        <blockquote className={styles.texto}>{v.testimonioCompleto}</blockquote>
        <figcaption className={styles.autor}>
          {v.nombre} {v.apellido} — {v.unidad}
        </figcaption>
      </figure>
    </div>
  );
}
