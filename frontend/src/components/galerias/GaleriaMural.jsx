import styles from "./GaleriaMural.module.css";

function Foto({ img, className }) {
  return (
    <figure className={`${styles.foto} ${className || ""}`}>
      {img.url ? (
        <img src={img.url} alt={img.descripcion} />
      ) : (
        <span className={styles.placeholder} aria-hidden="true">
          {img.categoria}
        </span>
      )}
      <figcaption className={styles.caption}>
        <span className={styles.cat}>{img.categoria}</span>
        <span className={styles.desc}>{img.descripcion}</span>
        <span className={styles.fecha}>{img.fecha}</span>
      </figcaption>
    </figure>
  );
}

/**
 * Variante "Mural": composición editorial con una foto protagonista grande
 * y el resto en una grilla secundaria. Pensada para destacar la imagen más
 * representativa del archivo.
 */
export default function GaleriaMural({ imagenes = [] }) {
  if (imagenes.length === 0) return null;
  const [principal, ...resto] = imagenes;

  return (
    <div className={styles.mural}>
      <Foto img={principal} className={styles.principal} />
      <div className={styles.secundarias}>
        {resto.map((img) => (
          <Foto key={img.id} img={img} />
        ))}
      </div>
    </div>
  );
}
