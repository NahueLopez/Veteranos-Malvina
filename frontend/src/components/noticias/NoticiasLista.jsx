import { fechaLarga, fechaCorta, noticiasPublicadas, eventosProximos } from "./util";
import styles from "./NoticiasLista.module.css";

/**
 * Variante "Lista": feed editorial en filas horizontales, estilo diario
 * digital. Las noticias se leen como un hilo; los próximos eventos van en
 * una franja compacta al pie.
 */
export default function NoticiasLista({ noticias = [], eventos = [] }) {
  const publicadas = noticiasPublicadas(noticias);
  const proximos = eventosProximos(eventos);

  return (
    <div className={styles.wrap}>
      <div className={styles.lista}>
        {publicadas.map((n) => (
          <article key={n.id} className={styles.fila}>
            <span
              className={`${styles.tipo} ${
                n.tipo === "Evento" ? styles.tipoEvento : ""
              }`}
            >
              {n.tipo}
            </span>
            <div className={styles.cuerpo}>
              <h3 className={styles.titulo}>{n.titulo}</h3>
              <p className={styles.resumen}>{n.resumen}</p>
            </div>
            <span className={styles.fecha}>{fechaLarga(n.fechaPublicacion)}</span>
          </article>
        ))}
      </div>

      <div className={styles.agenda}>
        <span className={styles.agendaTitulo}>Agenda</span>
        <div className={styles.agendaItems}>
          {proximos.map((e) => {
            const f = fechaCorta(e.fechaEvento);
            return (
              <div key={e.id} className={styles.agendaItem}>
                <span className={styles.agendaFecha}>{f.dia} {f.mes}</span>
                <span className={styles.agendaNombre}>{e.titulo}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
