import { useState } from "react";
import { ordenar } from "./util";
import styles from "./TimelineEje.module.css";

/**
 * Variante "Eje": línea horizontal centrada con los puntos sobre ella. Al
 * pasar el mouse (o enfocar) un punto, su tarjeta aparece arriba o abajo de
 * forma alternada (uno y uno).
 */
export default function TimelineEje({ eventos = [], activo: activoProp, onActivo }) {
  const ordenados = ordenar(eventos);
  const [activoLocal, setActivoLocal] = useState(0);
  const controlado = activoProp != null && typeof onActivo === "function";
  const activo = controlado ? activoProp : activoLocal;
  const setActivo = controlado
    ? (u) => onActivo(typeof u === "function" ? u(activoProp) : u)
    : setActivoLocal;
  if (ordenados.length === 0) return null;

  return (
    <div className={styles.wrap}>
      <div className={styles.eje}>
        <span className={styles.linea} aria-hidden="true" />
        <ol className={styles.nodos}>
          {ordenados.map((ev, i) => {
            const arriba = i % 2 === 0;
            const danger = ev.tipoTag === "danger";
            return (
              <li
                key={ev.id}
                className={`${styles.nodo} ${arriba ? styles.arriba : styles.abajo} ${
                  i === activo ? styles.activo : ""
                }`}
                onMouseEnter={() => setActivo(i)}
                onFocus={() => setActivo(i)}
                tabIndex={0}
              >
                <span
                  className={`${styles.punto} ${danger ? styles.puntoDanger : ""}`}
                  aria-hidden="true"
                />
                <span className={styles.fechaEje}>{ev.fechaCorta}</span>
                <article
                  className={`${styles.tarjeta} ${danger ? styles.tarjetaDanger : ""}`}
                >
                  <p className={styles.fecha}>{ev.fecha}</p>
                  <h3 className={styles.titulo}>{ev.titulo}</h3>
                  <p className={styles.descripcion}>{ev.descripcion}</p>
                  <span
                    className={`${styles.tag} ${danger ? styles.tagDanger : styles.tagInfo}`}
                  >
                    {ev.tag}
                  </span>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
