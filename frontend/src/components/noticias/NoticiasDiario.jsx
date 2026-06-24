import { fechaLarga, fechaCorta, noticiasPublicadas, eventosProximos } from "./util";
import styles from "./NoticiasDiario.module.css";

/**
 * Variante "Diario": maqueta de portada de periódico. La noticia más
 * reciente va como nota de tapa; el resto en columnas; los eventos en una
 * franja de agenda al pie. Tono de papel de época.
 */
export default function NoticiasDiario({ noticias = [], eventos = [] }) {
  const publicadas = noticiasPublicadas(noticias);
  const proximos = eventosProximos(eventos);
  const [tapa, ...resto] = publicadas;

  if (!tapa) return null;

  return (
    <div className={styles.diario}>
      <div className={styles.masthead}>
        <span className={styles.masaIzq}>Centro de Veteranos · Malvinas</span>
        <span className={styles.masaCentro}>EL PARTE</span>
        <span className={styles.masaDer}>{fechaLarga(tapa.fechaPublicacion)}</span>
      </div>

      <div className={styles.cuerpo}>
        <article className={styles.tapa}>
          <span className={styles.tipo}>{tapa.tipo}</span>
          <h3 className={styles.tapaTitulo}>{tapa.titulo}</h3>
          <p className={styles.tapaTexto}>{tapa.cuerpo || tapa.resumen}</p>
        </article>

        <div className={styles.columnas}>
          {resto.map((n) => (
            <article key={n.id} className={styles.columna}>
              <span className={styles.tipoMini}>{n.tipo}</span>
              <h4 className={styles.colTitulo}>{n.titulo}</h4>
              <p className={styles.colTexto}>{n.resumen}</p>
              <p className={styles.colFecha}>{fechaLarga(n.fechaPublicacion)}</p>
            </article>
          ))}
        </div>
      </div>

      <div className={styles.agenda}>
        <span className={styles.agendaTitulo}>Agenda del Centro</span>
        {proximos.map((e) => {
          const f = fechaCorta(e.fechaEvento);
          return (
            <div key={e.id} className={styles.agendaItem}>
              <span className={styles.agendaFecha}>{f.dia} {f.mes}</span>
              <span className={styles.agendaNombre}>{e.titulo}</span>
              <span className={styles.agendaLugar}>{e.lugar}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
