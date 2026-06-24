import { useState } from "react";
import { ordenar, diaDeGuerra } from "./util";
import styles from "./TimelineRuta.module.css";

/**
 * Variante "Ruta": estaciones numeradas sobre una línea continua estilo mapa
 * de subte. Cada estación muestra su fecha y el día de guerra; al elegirla se
 * abre su detalle debajo.
 */
export default function TimelineRuta({ eventos = [], activo: activoProp, onActivo }) {
  const ordenados = ordenar(eventos);
  const [activoLocal, setActivoLocal] = useState(0);
  const controlado = activoProp != null && typeof onActivo === "function";
  const activo = controlado ? activoProp : activoLocal;
  const setActivo = controlado
    ? (u) => onActivo(typeof u === "function" ? u(activoProp) : u)
    : setActivoLocal;
  if (ordenados.length === 0) return null;

  const ev = ordenados[activo];

  return (
    <div className={styles.wrap}>
      <div className={styles.via}>
        <span className={styles.riel} aria-hidden="true" />
        <ol className={styles.estaciones} role="tablist">
          {ordenados.map((e, i) => {
            const dia = diaDeGuerra(e, ordenados);
            return (
              <li key={e.id} className={styles.parada}>
                <button
                  role="tab"
                  aria-selected={i === activo}
                  className={`${styles.estacion} ${
                    i === activo ? styles.estacionActiva : ""
                  } ${e.tipoTag === "danger" ? styles.estacionDanger : ""}`}
                  onClick={() => setActivo(i)}
                >
                  <span className={styles.disco}>{i + 1}</span>
                  <span className={styles.estLabel}>
                    <span className={styles.estFecha}>{e.fechaCorta}</span>
                    {dia != null && (
                      <span className={styles.estDia}>Día {dia}</span>
                    )}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      <div
        className={`${styles.detalle} ${
          ev.tipoTag === "danger" ? styles.detalleDanger : ""
        }`}
        role="tabpanel"
        key={ev.id}
      >
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
