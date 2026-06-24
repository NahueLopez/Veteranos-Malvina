import { fechaLarga, fechaCorta, noticiasPublicadas, eventosProximos } from "./util";
import styles from "./NoticiasAgenda.module.css";

/**
 * Variante "Agenda": pone el foco en los próximos eventos como una agenda
 * con bloques de fecha grandes; las noticias quedan en una columna lateral
 * más sobria. Ideal cuando lo que se quiere empujar son las actividades.
 */
export default function NoticiasAgenda({ noticias = [], eventos = [] }) {
  const publicadas = noticiasPublicadas(noticias);
  const proximos = eventosProximos(eventos);

  return (
    <div className={styles.layout}>
      <div className={styles.agenda}>
        {proximos.map((e) => {
          const f = fechaCorta(e.fechaEvento);
          return (
            <div key={e.id} className={styles.evento}>
              <div className={styles.fecha}>
                <span className={styles.dia}>{f.dia}</span>
                <span className={styles.mes}>{f.mes}</span>
              </div>
              <div className={styles.detalle}>
                <h3 className={styles.eventoTitulo}>{e.titulo}</h3>
                <p className={styles.eventoDesc}>{e.descripcion}</p>
                <p className={styles.eventoMeta}>
                  <span aria-hidden="true">🕑</span> {e.hora} hs
                  <span className={styles.sep}>·</span>
                  <span aria-hidden="true">📍</span> {e.lugar}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <aside className={styles.noticias}>
        <h3 className={styles.noticiasTitulo}>Últimas noticias</h3>
        {publicadas.map((n) => (
          <article key={n.id} className={styles.noticiaItem}>
            <h4 className={styles.noticiaTitulo}>{n.titulo}</h4>
            <p className={styles.noticiaFecha}>{fechaLarga(n.fechaPublicacion)}</p>
          </article>
        ))}
      </aside>
    </div>
  );
}
