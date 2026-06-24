import HeroBotones from "./HeroBotones";
import { heroContent } from "./heroContent";
import { heroImg } from "./heroImages";
import styles from "./heroes.module.css";

/** 3 · Claro y tipográfico; el mapa como lámina enmarcada al costado. */
export default function HeroEditorial() {
  return (
    <div className={`${styles.editorial} ${styles.sobreClaro}`}>
      <div className={`container ${styles.editorialInner}`}>
        <div>
          <div className={styles.editorialStripe} aria-hidden="true" />
          <p className={styles.kicker}>{heroContent.kicker}</p>
          <h1 className={styles.frase}>
            {heroContent.frase[0]}
            <br />
            {heroContent.frase[1]}
          </h1>
          <p className={styles.sub}>{heroContent.sub}</p>
          <HeroBotones />
        </div>
        <figure className={styles.editorialLamina}>
          <img src={heroImg.mapa} alt="Mapa de las Islas Malvinas" />
        </figure>
      </div>
    </div>
  );
}
