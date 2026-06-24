import { ordenar } from "./util";
import styles from "./TimelineHilo.module.css";

/**
 * Variante "Hilo": línea vertical central con tarjetas que se alternan a
 * izquierda y derecha. Muestra todos los eventos a la vez (modo lectura).
 */
export default function TimelineHilo({ eventos = [] }) {
  const ordenados = ordenar(eventos);
  if (ordenados.length === 0) return null;

  return (
    <ol className={styles.hilo}>
      {ordenados.map((ev, i) => (
        <li
          key={ev.id}
          className={`${styles.item} ${i % 2 === 0 ? styles.izq : styles.der}`}
        >
          <span
            className={`${styles.nodo} ${
              ev.tipoTag === "danger" ? styles.nodoDanger : ""
            }`}
            aria-hidden="true"
          />
          <article className={styles.tarjeta}>
            <p className={styles.fecha}>{ev.fecha}</p>
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
      ))}
    </ol>
  );
}
