import styles from "./GaleriaArchivo.module.css";

/** Inclinaciones alternadas para el efecto de fotos sobre la mesa. */
const GIROS = [styles.giroA, styles.giroB, styles.giroC];

/**
 * Variante "Archivo": fichas estilo archivo histórico, con marco de papel de
 * época, leve inclinación y un sello con la fecha. Evoca el legajo físico del
 * Centro. Las inclinaciones se enderezan al pasar el mouse.
 */
export default function GaleriaArchivo({ imagenes = [] }) {
  if (imagenes.length === 0) return null;

  return (
    <div className={styles.mesa}>
      {imagenes.map((img, i) => (
        <figure
          key={img.id}
          className={`${styles.ficha} ${GIROS[i % GIROS.length]}`}
        >
          <div className={styles.ventana}>
            {img.url ? (
              <img src={img.url} alt={img.descripcion} />
            ) : (
              <span className={styles.placeholder} aria-hidden="true">
                {img.categoria}
              </span>
            )}
            <span className={styles.sello}>{img.fecha}</span>
          </div>
          <figcaption className={styles.pie}>
            <span className={styles.cat}>{img.categoria}</span>
            {img.descripcion}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
