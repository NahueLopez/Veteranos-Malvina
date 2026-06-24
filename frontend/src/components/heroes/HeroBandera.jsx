import HeroBotones from "./HeroBotones";
import { heroContent } from "./heroContent";
import { heroImg } from "./heroImages";
import styles from "./heroes.module.css";

/** 2 · Islas rellenas con la bandera, texto sobre velo a la izquierda. */
export default function HeroBandera() {
  return (
    <div className={styles.bandera}>
      <img className={styles.banderaImg} src={heroImg.bandera} alt="" aria-hidden="true" />
      <span className={styles.banderaVelo} aria-hidden="true" />
      <div className={`container ${styles.banderaInner}`}>
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
