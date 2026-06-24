import styles from "./GaleriaMosaico.module.css";

/** Patrón de tamaños que se repite para dar ritmo al mosaico. */
const SPANS = ["", styles.ancho, "", styles.alto, styles.grande, ""];

/**
 * Variante "Mosaico": grilla tipo masonry con piezas de distinto tamaño.
 * La leyenda aparece en la parte inferior y se realza al pasar el mouse.
 */
export default function GaleriaMosaico({ imagenes = [] }) {
  if (imagenes.length === 0) return null;

  return (
    <div className={styles.grid}>
      {imagenes.map((img, i) => (
        <figure
          key={img.id}
          className={`${styles.item} ${SPANS[i % SPANS.length]}`}
        >
          {img.url ? (
            <img src={img.url} alt={img.descripcion} />
          ) : (
            <span className={styles.placeholder} aria-hidden="true">
              {img.categoria}
            </span>
          )}
          <figcaption className={styles.caption}>
            <span className={styles.desc}>{img.descripcion}</span>
            <span className={styles.fecha}>{img.fecha}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
