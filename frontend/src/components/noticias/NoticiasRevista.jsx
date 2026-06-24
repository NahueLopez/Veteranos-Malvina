import { fechaLarga, fechaCorta, noticiasPublicadas, eventosProximos } from "./util";
import styles from "./NoticiasRevista.module.css";

/**
 * Variante "Revista": grilla de noticias a la izquierda + columna de
 * próximos eventos a la derecha. Es el diseño editorial clásico del Centro.
 */
export default function NoticiasRevista({ noticias = [], eventos = [] }) {
  const publicadas = noticiasPublicadas(noticias);
  const proximos = eventosProximos(eventos);

  return (
    <div className={styles.layout}>
      <div className={styles.grid}>
        {publicadas.map((n) => (
          <article key={n.id} className={styles.card}>
            <span
              className={`${styles.tipo} ${
                n.tipo === "Evento" ? styles.tipoEvento : styles.tipoNoticia
              }`}
            >
              {n.tipo}
            </span>
            <h3 className={styles.titulo}>{n.titulo}</h3>
            <p className={styles.resumen}>{n.resumen}</p>
            <p className={styles.fecha}>{fechaLarga(n.fechaPublicacion)}</p>
          </article>
        ))}
      </div>

      <aside className={styles.eventosBox}>
        <h3 className={styles.eventosTitulo}>Próximos eventos</h3>
        {proximos.map((e) => {
          const f = fechaCorta(e.fechaEvento);
          return (
            <div key={e.id} className={styles.eventoItem}>
              <div className={styles.eventoFecha}>
                <span className={styles.eventoDia}>{f.dia}</span>
                <span className={styles.eventoMes}>{f.mes}</span>
              </div>
              <div>
                <h4 className={styles.eventoTitulo}>{e.titulo}</h4>
                <p className={styles.eventoMeta}>
                  {e.hora} hs · {e.lugar}
                </p>
              </div>
            </div>
          );
        })}
      </aside>
    </div>
  );
}
