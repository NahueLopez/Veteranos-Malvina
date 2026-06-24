import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.banderaVertical} aria-hidden="true" />
          <div>
            <p className={styles.name}>Centro de Veteranos de Guerra de Malvinas</p>
            <p className={styles.city}>Mar del Plata · Provincia de Buenos Aires</p>
          </div>
        </div>
        <p className={styles.lema}>Las Malvinas son argentinas</p>
      </div>
      <div className={styles.bottom}>
        © {year} Centro de Veteranos de Guerra de Malvinas — Mar del Plata. Todos los
        derechos reservados.
      </div>
    </footer>
  );
}
