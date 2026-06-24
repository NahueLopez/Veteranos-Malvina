import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const NAV = [
  { to: "/", label: "Inicio", end: true },
  { to: "/historia", label: "Historia" },
  { to: "/veteranos", label: "Veteranos" },
  { to: "/galeria", label: "Galería" },
  { to: "/noticias", label: "Noticias" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <nav className={styles.bar}>
        <div className={`container ${styles.inner}`}>
          <NavLink to="/" className={styles.brand} onClick={() => setOpen(false)}>
            <span className={styles.brandMark} />
            <span className={styles.brandText}>
              Centro de Veteranos
              <small>Malvinas · Mar del Plata</small>
            </span>
          </NavLink>

          <button
            className={styles.toggle}
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            ☰
          </button>

          <ul className={`${styles.links} ${open ? "" : styles.linksClosed}`}>
            {NAV.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `${styles.link} ${isActive ? styles.linkActive : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
