import { useMemo, useState } from "react";
import styles from "./GaleriaFiltros.module.css";

/**
 * Variante "Filtros": grilla con chips para filtrar por categoría. Las
 * categorías se derivan de los datos, así que se adaptan solas a lo que
 * haya cargado. "Todas" muestra el archivo completo.
 */
export default function GaleriaFiltros({ imagenes = [] }) {
  const [activa, setActiva] = useState("Todas");

  const categorias = useMemo(
    () => ["Todas", ...new Set(imagenes.map((i) => i.categoria).filter(Boolean))],
    [imagenes]
  );

  if (imagenes.length === 0) return null;

  const visibles =
    activa === "Todas"
      ? imagenes
      : imagenes.filter((i) => i.categoria === activa);

  return (
    <div>
      <div className={styles.chips} role="tablist">
        {categorias.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={activa === cat}
            className={`${styles.chip} ${activa === cat ? styles.chipActivo : ""}`}
            onClick={() => setActiva(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {visibles.map((img) => (
          <figure key={img.id} className={styles.card}>
            <div className={styles.thumb}>
              {img.url ? (
                <img src={img.url} alt={img.descripcion} />
              ) : (
                <span className={styles.placeholder} aria-hidden="true">
                  {img.categoria}
                </span>
              )}
              <span className={styles.tag}>{img.categoria}</span>
            </div>
            <figcaption className={styles.caption}>
              <span className={styles.desc}>{img.descripcion}</span>
              <span className={styles.fecha}>{img.fecha}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
