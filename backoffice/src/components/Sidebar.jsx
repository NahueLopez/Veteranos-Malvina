import { NavLink } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { ENTIDADES_LISTA } from "../config/entities";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const { usuario, logout } = useAuth();

  const linkClass = ({ isActive }) =>
    `${styles.link} ${isActive ? styles.linkActivo : ""}`;

  return (
    <aside className={styles.sidebar}>
      <div className={styles.brand}>
        <span className={styles.brandMark} />
        <span className={styles.brandText}>
          Panel de gestión
          <small>Veteranos · Malvinas</small>
        </span>
      </div>

      <nav className={styles.nav}>
        <NavLink to="/" end className={linkClass}>
          Dashboard
        </NavLink>

        <span className={styles.navGrupo}>Contenido</span>
        {ENTIDADES_LISTA.map((e) => (
          <NavLink key={e.key} to={`/${e.key}`} className={linkClass}>
            {e.titulo}
          </NavLink>
        ))}
      </nav>

      <div className={styles.footer}>
        <p className={styles.usuario}>{usuario?.email}</p>
        <button className={styles.logout} onClick={logout}>
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
}
