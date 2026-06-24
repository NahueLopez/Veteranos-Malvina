import { fechaLarga, fechaCorta, noticiasPublicadas, eventosProximos } from "./util";
import styles from "./NoticiasTarjetas.module.css";

/**
 * Variante "Tarjetas": una sola grilla pareja donde noticias y eventos
 * conviven como tarjetas. El evento muestra un sello de fecha; la noticia,
 * su resumen. Útil cuando se quiere dar el mismo peso a todo.
 */
export default function NoticiasTarjetas({ noticias = [], eventos = [] }) {
  const items = [
    ...noticiasPublicadas(noticias).map((n) => ({ tipo: "noticia", data: n })),
    ...eventosProximos(eventos).map((e) => ({ tipo: "evento", data: e })),
  ];

  return (
    <div className={styles.grid}>
      {items.map(({ tipo, data }) => {
        if (tipo === "evento") {
          const f = fechaCorta(data.fechaEvento);
          return (
            <article key={`e-${data.id}`} className={`${styles.card} ${styles.cardEvento}`}>
              <div className={styles.sello}>
                <span className={styles.selloDia}>{f.dia}</span>
                <span className={styles.selloMes}>{f.mes}</span>
              </div>
              <span className={styles.etiquetaEvento}>Evento</span>
              <h3 className={styles.titulo}>{data.titulo}</h3>
              <p className={styles.meta}>{data.hora} hs · {data.lugar}</p>
            </article>
          );
        }
        return (
          <article key={`n-${data.id}`} className={styles.card}>
            <span className={styles.etiqueta}>Noticia</span>
            <h3 className={styles.titulo}>{data.titulo}</h3>
            <p className={styles.resumen}>{data.resumen}</p>
            <p className={styles.fecha}>{fechaLarga(data.fechaPublicacion)}</p>
          </article>
        );
      })}
    </div>
  );
}
