import { Link } from "react-router-dom";
import { heroContent } from "./heroContent";
import styles from "./heroes.module.css";

/** Botones del hero, reutilizados por todas las variantes. */
export default function HeroBotones() {
  return (
    <div className={styles.botones}>
      {heroContent.botones.map((b) => (
        <Link
          key={b.to}
          to={b.to}
          className={`${styles.btn} ${
            b.tipo === "primario" ? styles.btnPrimario : styles.btnSecundario
          }`}
        >
          {b.label}
        </Link>
      ))}
    </div>
  );
}
