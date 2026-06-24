import HeroBotones from "./HeroBotones";
import { heroContent } from "./heroContent";
import { heroImg } from "./heroImages";
import styles from "./heroes.module.css";

/**
 * 0 · Memorial — flagship emotivo.
 * Bandera flameando a pantalla completa con lento acercamiento, velo
 * cinematográfico para legibilidad, entrada escalonada del texto y una
 * línea conmemorativa con la fecha. Respeta prefers-reduced-motion.
 */
export default function HeroMemorial() {
  return (
    <div className={styles.memorial}>
      <img
        className={styles.memorialImg}
        src={heroImg.flameante2}
        alt=""
        aria-hidden="true"
      />
      <span className={styles.memorialVelo} aria-hidden="true" />

      <div className={`container ${styles.memorialInner} ${styles.reveal}`}>
        <p className={styles.memorialKicker}>Memoria · Verdad · Soberanía</p>
        <h1 className={styles.memorialFrase}>
          No los olvidamos.
          <br />
          <em>Nunca los olvidaremos.</em>
        </h1>
        <p className={styles.memorialSub}>{heroContent.sub}</p>
        <div className={styles.memorialBotones}>
          <HeroBotones />
        </div>
        <p className={styles.memorialFecha}>
          <strong>2 de abril</strong> — Día del Veterano y de los Caídos en la
          Guerra de Malvinas · Centro de Veteranos de Mar del Plata
        </p>
      </div>

      <span className={styles.scrollCue} aria-hidden="true" />
    </div>
  );
}
