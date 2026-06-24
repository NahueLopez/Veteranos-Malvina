import { useEffect, useRef, useState } from "react";
import styles from "./VariantPicker.module.css";

/**
 * Selector de variantes reutilizable para cualquier sección.
 * Muestra la variante activa con flechas a los costados para navegar,
 * una etiqueta de cuál estás viendo y puntos indicadores. La elección se
 * guarda en localStorage por `storageKey`. El teclado (← →) actúa solo
 * cuando el puntero está sobre esta sección, para no chocar con otros
 * pickers en la misma página.
 *
 * Es una herramienta de previsualización: al elegir la definitiva, se
 * reemplaza por la variante elegida.
 *
 * @param {string} etiqueta  Nombre de la sección (ej. "Hero").
 * @param {string} storageKey  Clave de persistencia (única por sección).
 * @param {Array<{id,label,desc,Component}>} variants
 * @param {object} [componentProps]  Props que se pasan a la variante activa.
 * @param {string} [className]  Clase extra para el contenedor.
 */
export default function VariantPicker({
  etiqueta,
  storageKey,
  variants,
  componentProps,
  className,
}) {
  const [index, setIndex] = useState(() => {
    const saved =
      typeof localStorage !== "undefined" && localStorage.getItem(storageKey);
    const i = variants.findIndex((v) => v.id === saved);
    return i >= 0 ? i : 0;
  });
  const hovered = useRef(false);

  const go = (delta) =>
    setIndex((i) => (i + delta + variants.length) % variants.length);

  useEffect(() => {
    localStorage.setItem(storageKey, variants[index].id);
  }, [index, storageKey, variants]);

  useEffect(() => {
    const n = variants.length;
    function onKey(e) {
      if (!hovered.current) return;
      if (e.target.matches?.("input, textarea, select")) return;
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % n);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + n) % n);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [variants.length]);

  const Active = variants[index].Component;

  return (
    <div
      className={`${styles.wrap} ${className || ""}`}
      onMouseEnter={() => (hovered.current = true)}
      onMouseLeave={() => (hovered.current = false)}
    >
      <Active {...componentProps} />

      <button
        type="button"
        className={`${styles.flecha} ${styles.flechaIzq}`}
        onClick={() => go(-1)}
        aria-label={`${etiqueta}: variante anterior`}
      >
        ‹
      </button>
      <button
        type="button"
        className={`${styles.flecha} ${styles.flechaDer}`}
        onClick={() => go(1)}
        aria-label={`${etiqueta}: variante siguiente`}
      >
        ›
      </button>

      <div className={styles.badge}>
        <span className={styles.badgeEtiqueta}>{etiqueta}</span>
        <span className={styles.badgeNombre}>{variants[index].label}</span>
        <span className={styles.badgeIndice}>
          {index + 1}/{variants.length}
        </span>
        <span className={styles.dots}>
          {variants.map((v, i) => (
            <button
              key={v.id}
              type="button"
              className={`${styles.dot} ${i === index ? styles.dotActivo : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Ver ${v.label}`}
              title={v.desc}
            />
          ))}
        </span>
      </div>
    </div>
  );
}
