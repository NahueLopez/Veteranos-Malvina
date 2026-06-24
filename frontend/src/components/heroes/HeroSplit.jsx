import HeroBotones from "./HeroBotones";
import { heroContent } from "./heroContent";
import { heroImg } from "./heroImages";
import styles from "./heroes.module.css";

/** 5 · Dos columnas: texto a la izquierda, bandera flameando enmarcada. */
export default function HeroSplit() {
  return (
    <div className={styles.split}>
      <div className={`container ${styles.splitInner}`}>
        <div>
          <p className={styles.kicker}>{heroContent.kicker}</p>
          <h1 className={styles.frase}>
            {heroContent.frase[0]}
            <br />
            {heroContent.frase[1]}
          </h1>
          <p className={styles.sub}>{heroContent.sub}</p>
          <HeroBotones />
        </div>
        <figure className={styles.splitArte}>
          <img src={heroImg.flameante} alt="Bandera argentina flameando sobre las Islas Malvinas" />
        </figure>
      </div>
    </div>
  );
}
