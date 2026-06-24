import { useState } from "react";
import { colorArma, iniciales } from "./armas";
import styles from "./TestimonioTarjetas.module.css";

/** Grid de tarjetas con avatar de iniciales y despliegue del testimonio completo. */
export default function TestimonioTarjetas({ veteranos = [] }) {
  const [abierto, setAbierto] = useState(null);

  return (
    <div className={styles.grid}>
      {veteranos.map((v) => {
        const expandido = abierto === v.id;
        const texto = expandido ? v.testimonioCompleto : v.testimonioCorto;
        return (
          <article key={v.id} className={styles.card}>
            <div className={styles.head}>
              <span
                className={styles.bandera}
                style={{ background: colorArma(v.arma) }}
                aria-hidden="true"
              />
              <span className={styles.iniciales} aria-hidden="true">
                {iniciales(v.nombre, v.apellido)}
              </span>
              <div>
                <h3 className={styles.nombre}>
                  {v.nombre} {v.apellido}
                </h3>
                <p className={styles.unidad}>{v.unidad}</p>
              </div>
            </div>
            <p className={styles.testimonio}>«{texto}»</p>
            {v.testimonioCompleto && v.testimonioCompleto !== v.testimonioCorto && (
              <button
                type="button"
                className={styles.toggle}
                onClick={() => setAbierto(expandido ? null : v.id)}
              >
                {expandido ? "Mostrar menos" : "Leer testimonio completo"}
              </button>
            )}
          </article>
        );
      })}
    </div>
  );
}
