import HeroBotones from "./HeroBotones";
import { heroContent } from "./heroContent";
import { heroImg } from "./heroImages";
import styles from "./heroes.module.css";

/** 4 · Documental: el mapa con grilla + coordenadas reales. */
export default function HeroCoordenadas() {
  return (
    <div className={styles.coords}>
      <span className={styles.coordsGrid} aria-hidden="true" />
      <div className={`container ${styles.coordsInner}`}>
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
        <div className={styles.coordsMapa}>
          <img src={heroImg.mapa} alt="Mapa de las Islas Malvinas" />
          <p className={styles.coordsDato}>
            51°45′ S · 59°00′ O — Atlántico Sur
          </p>
        </div>
      </div>
    </div>
  );
}
