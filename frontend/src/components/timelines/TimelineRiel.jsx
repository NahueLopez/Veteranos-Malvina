import { useState } from "react";
import { ordenar } from "./util";
import styles from "./TimelineRiel.module.css";

/**
 * Variante "Riel": rail horizontal con nodos clickeables, línea de progreso
 * que se rellena hasta el evento activo y panel inferior con el detalle.
 */
export default function TimelineRiel({ eventos = [], activo: activoProp, onActivo }) {
  const ordenados = ordenar(eventos);
  const [activoLocal, setActivoLocal] = useState(0);
  const controlado = activoProp != null && typeof onActivo === "function";
  const activo = controlado ? activoProp : activoLocal;
  const setActivo = controlado
    ? (u) => onActivo(typeof u === "function" ? u(activoProp) : u)
    : setActivoLocal;
  if (ordenados.length === 0) return null;

  const ev = ordenados[activo];
  const progreso =
    ordenados.length > 1 ? (activo / (ordenados.length - 1)) * 100 : 0;

  const ir = (dir) =>
    setActivo((i) => Math.min(ordenados.length - 1, Math.max(0, i + dir)));

  return (
    <div className={styles.wrap}>
      <div className={styles.riel}>
        <button
          className={styles.nav}
          onClick={() => ir(-1)}
          disabled={activo === 0}
          aria-label="Evento anterior"
        >
          ‹
        </button>

        <div className={styles.pista}>
          <span className={styles.linea} aria-hidden="true" />
          <span
            className={styles.lineaProgreso}
            style={{ width: `${progreso}%` }}
            aria-hidden="true"
          />
          <ol className={styles.nodos} role="tablist">
            {ordenados.map((e, i) => (
              <li key={e.id}>
                <button
                  role="tab"
                  aria-selected={i === activo}
                  className={`${styles.nodo} ${i === activo ? styles.nodoActivo : ""} ${
                    e.tipoTag === "danger" ? styles.nodoDanger : ""
                  }`}
                  onClick={() => setActivo(i)}
                >
                  <span className={styles.punto} />
                  <span className={styles.nodoFecha}>{e.fechaCorta}</span>
                </button>
              </li>
            ))}
          </ol>
        </div>

        <button
          className={styles.nav}
          onClick={() => ir(1)}
          disabled={activo === ordenados.length - 1}
          aria-label="Evento siguiente"
        >
          ›
        </button>
      </div>

      <div className={styles.panel} role="tabpanel" key={ev.id}>
        <p className={styles.fecha}>{ev.fecha}</p>
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
  );
}
