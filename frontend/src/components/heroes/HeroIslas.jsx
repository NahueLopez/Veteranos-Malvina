import HeroBotones from "./HeroBotones";
import { heroContent } from "./heroContent";
import { heroImg } from "./heroImages";
import styles from "./heroes.module.css";

/** 1 · Mapa (contorno de las islas) a pantalla completa. Sobrio ⭐ */
export default function HeroIslas() {
  return (
    <div className={styles.islas}>
      <img className={styles.islasImg} src={heroImg.mapa} alt="" aria-hidden="true" />
      <span className={styles.islasVelo} aria-hidden="true" />
      <div className={`container ${styles.islasInner}`}>
        <p className={styles.kicker}>{heroContent.kicker}</p>
        <h1 className={styles.frase}>
          {heroContent.frase[0]}
          <br />
          {heroContent.frase[1]}
        </h1>
        <p className={styles.sub}>{heroContent.sub}</p>
        <HeroBotones />
      </div>
    </div>
  );
}
