import { Link } from "react-router-dom";
import { useStore } from "../store/StoreContext";
import { useAuth } from "../auth/AuthContext";
import { ENTIDADES_LISTA } from "../config/entities";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  const { counts } = useStore();
  const { usuario } = useAuth();
  const c = counts();

  const tarjetas = ENTIDADES_LISTA.map((e) => ({
    key: e.key,
    valor: c[e.key] ?? 0,
    label: e.titulo,
  }));

  return (
    <div>
      <div className={styles.cards}>
        {tarjetas.map((t) => (
          <Link key={t.key} to={`/${t.key}`} className={styles.card}>
            <div className={styles.valor}>{t.valor}</div>
            <div className={styles.label}>{t.label}</div>
          </Link>
        ))}
      </div>

      <div className={styles.bienvenida}>
        <h2>Bienvenido, {usuario?.nombre}</h2>
        <p>
          Desde este panel podés gestionar todo el contenido del sitio del Centro de
          Veteranos: veteranos, línea de tiempo, noticias, eventos y galería.
        </p>
      </div>
    </div>
  );
}
