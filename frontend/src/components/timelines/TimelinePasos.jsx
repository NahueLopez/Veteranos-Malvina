import { useState } from "react";
import { ordenar, diaDeGuerra } from "./util";
import styles from "./TimelinePasos.module.css";

const dos = (n) => String(n).padStart(2, "0");

/**
 * Variante "Pasos": una etapa a pantalla completa al estilo presentación,
 * con número grande, flechas de navegación y barra de puntos. Foco total
 * en un evento por vez.
 */
export default function TimelinePasos({ eventos = [], activo: activoProp, onActivo }) {
  const ordenados = ordenar(eventos);
  const [activoLocal, setActivoLocal] = useState(0);
  const controlado = activoProp != null && typeof onActivo === "function";
  const activo = controlado ? activoProp : activoLocal;
  const setActivo = controlado
    ? (u) => onActivo(typeof u === "function" ? u(activoProp) : u)
    : setActivoLocal;
  if (ordenados.length === 0) return null;

  const ev = ordenados[activo];
  const total = ordenados.length;
  const dia = diaDeGuerra(ev, ordenados);
  const ir = (dir) =>
    setActivo((i) => Math.min(total - 1, Math.max(0, i + dir)));

  return (
    <div className={styles.wrap}>
      <div
        className={`${styles.escena} ${
          ev.tipoTag === "danger" ? styles.escenaDanger : ""
        }`}
        key={ev.id}
      >
        <span className={styles.numero} aria-hidden="true">
          {dos(activo + 1)}
        </span>
        <div className={styles.cuerpo}>
          <p className={styles.meta}>
            <span className={styles.fecha}>{ev.fecha}</span>
            {dia != null && <span className={styles.dia}>· Día {dia} de 74</span>}
          </p>
          <h3 className={styles.titulo}>{ev.titulo}</h3>
          <p className={styles.descripcion}>{ev.descripcion}</p>
          <span
            className={`${styles.tag} ${
              ev.tipoTag === "danger" ? styles.tagDanger : styles.tagInfo
            }`}
          >
            {ev.tag}
          </span>
        </div>
      </div>

      <div className={styles.controles}>
        <button
          className={styles.nav}
          onClick={() => ir(-1)}
          disabled={activo === 0}
          aria-label="Etapa anterior"
        >
          ‹ Anterior
        </button>

        <div className={styles.puntos} role="tablist">
          {ordenados.map((e, i) => (
            <button
              key={e.id}
              role="tab"
              aria-selected={i === activo}
              aria-label={e.fechaCorta}
              className={`${styles.punto} ${i === activo ? styles.puntoActivo : ""}`}
              onClick={() => setActivo(i)}
            />
          ))}
        </div>

        <button
          className={styles.nav}
          onClick={() => ir(1)}
          disabled={activo === total - 1}
          aria-label="Etapa siguiente"
        >
          Siguiente ›
        </button>
      </div>

      <p className={styles.contador}>
        {dos(activo + 1)} <span>/ {dos(total)}</span>
      </p>
    </div>
  );
}
