import { useState } from "react";
import { ordenar, diaDeGuerra } from "./util";
import styles from "./TimelineEscena.module.css";

/**
 * Variante "Escena": la imagen del evento ocupa todo el fondo, con un velo
 * oscuro para legibilidad. Al cambiar de evento, las imágenes se funden
 * (crossfade) y la activa hace un zoom lento (efecto Ken Burns). Si un evento
 * no tiene imagen, usa un degradado de respaldo.
 */
export default function TimelineEscena({ eventos = [], activo: activoProp, onActivo }) {
  const ordenados = ordenar(eventos);
  const [activoLocal, setActivoLocal] = useState(0);
  const controlado = activoProp != null && typeof onActivo === "function";
  const activo = controlado ? activoProp : activoLocal;
  const setActivo = controlado
    ? (u) => onActivo(typeof u === "function" ? u(activoProp) : u)
    : setActivoLocal;
  if (ordenados.length === 0) return null;

  const ev = ordenados[activo];
  const dia = diaDeGuerra(ev, ordenados);
  const total = ordenados.length;
  const ir = (dir) => setActivo((i) => Math.min(total - 1, Math.max(0, i + dir)));

  return (
    <div className={styles.escena}>
      {/* Capas de fondo: una por evento, sólo la activa visible */}
      <div className={styles.fondos} aria-hidden="true">
        {ordenados.map((e, i) => (
          <div
            key={e.id}
            className={`${styles.fondo} ${i === activo ? styles.fondoActivo : ""} ${
              e.tipoTag === "danger" ? styles.fondoDanger : ""
            }`}
            style={e.imagenUrl ? { backgroundImage: `url(${e.imagenUrl})` } : undefined}
          />
        ))}
        <span className={styles.velo} />
      </div>

      {/* Contenido */}
      <div className={styles.contenido} key={ev.id}>
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

      {/* Flechas */}
      <button
        className={`${styles.nav} ${styles.navIzq}`}
        onClick={() => ir(-1)}
        disabled={activo === 0}
        aria-label="Evento anterior"
      >
        ‹
      </button>
      <button
        className={`${styles.nav} ${styles.navDer}`}
        onClick={() => ir(1)}
        disabled={activo === total - 1}
        aria-label="Evento siguiente"
      >
        ›
      </button>

      {/* Línea de fechas abajo */}
      <ol className={styles.fechas} role="tablist">
        {ordenados.map((e, i) => (
          <li key={e.id}>
            <button
              role="tab"
              aria-selected={i === activo}
              className={`${styles.fechaTab} ${i === activo ? styles.fechaTabActiva : ""}`}
              onClick={() => setActivo(i)}
            >
              {e.fechaCorta}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
