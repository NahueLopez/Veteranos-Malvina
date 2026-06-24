import styles from "./VeteranoCard.module.css";

export default function VeteranoCard({ veterano }) {
  const { nombre, apellido, unidad, testimonioCorto } = veterano;
  const iniciales = `${nombre?.[0] ?? ""}${apellido?.[0] ?? ""}`.toUpperCase();

  return (
    <article className={styles.card}>
      <div className={styles.head}>
        <span className={styles.bandera} aria-hidden="true" />
        <span className={styles.iniciales} aria-hidden="true">
          {iniciales}
        </span>
        <div>
          <h3 className={styles.nombre}>
            {nombre} {apellido}
          </h3>
          <p className={styles.unidad}>{unidad}</p>
        </div>
      </div>
      <p className={styles.testimonio}>«{testimonioCorto}»</p>
    </article>
  );
}
