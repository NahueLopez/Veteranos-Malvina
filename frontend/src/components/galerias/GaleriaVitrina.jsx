import { useEffect, useState } from "react";
import styles from "./GaleriaVitrina.module.css";

/**
 * Variante "Vitrina": grilla uniforme y prolija. Al hacer clic, la foto
 * se abre en grande (lightbox) con su ficha y navegación ◂ ▸. Se cierra
 * con Escape o tocando el fondo.
 */
export default function GaleriaVitrina({ imagenes = [] }) {
  const [abierta, setAbierta] = useState(null);

  const cerrar = () => setAbierta(null);
  const mover = (delta) =>
    setAbierta((i) => (i + delta + imagenes.length) % imagenes.length);

  useEffect(() => {
    if (abierta === null) return;
    function onKey(e) {
      if (e.key === "Escape") cerrar();
      if (e.key === "ArrowRight") mover(1);
      if (e.key === "ArrowLeft") mover(-1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [abierta]);

  if (imagenes.length === 0) return null;
  const foto = abierta !== null ? imagenes[abierta] : null;

  return (
    <>
      <div className={styles.grid}>
        {imagenes.map((img, i) => (
          <button
            key={img.id}
            type="button"
            className={styles.celda}
            onClick={() => setAbierta(i)}
          >
            {img.url ? (
              <img src={img.url} alt={img.descripcion} />
            ) : (
              <span className={styles.placeholder} aria-hidden="true">
                {img.categoria}
              </span>
            )}
            <span className={styles.lupa} aria-hidden="true">
              +
            </span>
            <span className={styles.pie}>{img.descripcion}</span>
          </button>
        ))}
      </div>

      {foto && (
        <div className={styles.overlay} onClick={cerrar} role="dialog" aria-modal="true">
          <button
            type="button"
            className={`${styles.nav} ${styles.navIzq}`}
            onClick={(e) => {
              e.stopPropagation();
              mover(-1);
            }}
            aria-label="Anterior"
          >
            ‹
          </button>
          <figure className={styles.marco} onClick={(e) => e.stopPropagation()}>
            {foto.url ? (
              <img src={foto.url} alt={foto.descripcion} />
            ) : (
              <span className={styles.placeholderGrande} aria-hidden="true">
                {foto.categoria}
              </span>
            )}
            <figcaption className={styles.ficha}>
              <span className={styles.fichaCat}>{foto.categoria}</span>
              <strong>{foto.descripcion}</strong>
              <span className={styles.fichaFecha}>{foto.fecha}</span>
            </figcaption>
          </figure>
          <button
            type="button"
            className={`${styles.nav} ${styles.navDer}`}
            onClick={(e) => {
              e.stopPropagation();
              mover(1);
            }}
            aria-label="Siguiente"
          >
            ›
          </button>
          <button
            type="button"
            className={styles.cerrar}
            onClick={cerrar}
            aria-label="Cerrar"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}
