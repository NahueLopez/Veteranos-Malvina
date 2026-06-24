import { ordenar, diaDeGuerra } from "./util";
import styles from "./TimelineDiario.module.css";

/**
 * Variante "Diario": columna de fechas a la izquierda y contenido a la
 * derecha, separados por una línea continua. Estilo editorial/periódico,
 * todos los eventos a la vista.
 */
export default function TimelineDiario({ eventos = [] }) {
  const ordenados = ordenar(eventos);
  if (ordenados.length === 0) return null;

  return (
    <ol className={styles.lista}>
      {ordenados.map((ev) => {
        const dia = diaDeGuerra(ev, ordenados);
        return (
          <li key={ev.id} className={styles.fila}>
            <div className={styles.aside}>
              <span className={styles.fecha}>{ev.fecha}</span>
              {dia != null && (
                <span className={styles.dia}>Día {dia}</span>
              )}
            </div>
            <div
              className={`${styles.marcador} ${
                ev.tipoTag === "danger" ? styles.marcadorDanger : ""
              }`}
              aria-hidden="true"
            >
              <span className={styles.punto} />
            </div>
            <article className={styles.contenido}>
              <h3 className={styles.titulo}>{ev.titulo}</h3>
              <p className={styles.descripcion}>{ev.descripcion}</p>
              <span
                className={`${styles.tag} ${
                  ev.tipoTag === "danger" ? styles.tagDanger : styles.tagInfo
                }`}
              >
                {ev.tag}
              </span>
            </article>
          </li>
        );
      })}
    </ol>
  );
}
