import { heroImg } from "../components/heroes/heroImages";
import relato from "../data/relatoHistoria.json";
import styles from "./Pagina.module.css";

export default function Historia() {
  return (
    <>
      {/* ===================== HERO EDITORIAL / DOCUMENTAL ===================== */}
      <header className={styles.hero}>
        {/* Arte de fondo: "1982" gigante + contorno de las islas, fusionados */}
        <div className={styles.heroArte} aria-hidden="true">
          <span className={styles.heroAno}>1982</span>
          <img className={styles.heroMapa} src={heroImg.mapa} alt="" />
        </div>

        <div className={`container ${styles.heroGrid}`}>
          <div className={`${styles.heroTexto} ${styles.reveal}`}>
            <p className={styles.heroFechas}>
              <span>02 ABR</span>
              <span className={styles.heroFechasGuion} />
              <span>14 JUN 1982</span>
            </p>
            <h1 className={styles.heroTitulo}>
              La historia
              <br />
              de la guerra
            </h1>
            <p className={styles.heroIntro}>
              Setenta y cuatro días que marcaron a una generación. Los antecedentes,
              las fechas clave y el legado del conflicto del Atlántico Sur.
            </p>
          </div>
        </div>
      </header>

      {/* ===================== RELATO DETALLADO ===================== */}
      <section className={`${styles.section} ${styles.sectionTimeline}`}>
        <div className="container">
          <p className={styles.kicker}>El relato, paso a paso</p>
          <h2 className={styles.sectionTitulo}>Cómo se vivió la guerra</h2>
          <p className={styles.sectionIntro}>
            Desde los antecedentes históricos hasta el cese del fuego: cada fecha, con
            su historia.
          </p>

          <ol className={styles.relato}>
            {relato.map((item) => (
              <li key={item.fecha} className={styles.relatoItem}>
                <div className={styles.relatoAside}>
                  <span className={styles.relatoFecha}>{item.fecha}</span>
                  <span className={styles.relatoEtiqueta}>{item.etiqueta}</span>
                </div>
                <div className={styles.relatoCuerpo}>
                  <h3 className={styles.relatoTitulo}>{item.titulo}</h3>
                  {item.parrafos.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===================== LEGADO ===================== */}
      <section className={`${styles.section} ${styles.sectionOscura}`}>
        <div className="container">
          <div className={styles.prosa}>
            <p className={styles.kicker}>Después del 14 de junio</p>
            <h2 className={styles.sectionTitulo}>El legado y la memoria</h2>
            <p>
              El regreso no fue el final de la historia. Miles de jóvenes —en su mayoría
              conscriptos de 18 y 19 años— volvieron marcados por lo vivido, a una sociedad
              que tardó en saber escucharlos. Con los años, el reconocimiento llegó: hoy el
              <strong> 2 de abril</strong> es el Día del Veterano y de los Caídos en la
              Guerra de Malvinas, feriado nacional.
            </p>
            <p>
              El reclamo de soberanía sigue vigente y forma parte de la Constitución
              Nacional, que ratifica el objetivo permanente e irrenunciable de recuperar
              las islas por la vía pacífica. «Las Malvinas son argentinas» no es solo una
              consigna: es una causa que une a todo un país.
            </p>
            <p>
              Desde el Centro de Veteranos trabajamos para que esa memoria siga viva —para
              que las nuevas generaciones conozcan la historia y honren a quienes dieron
              todo por la patria.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
