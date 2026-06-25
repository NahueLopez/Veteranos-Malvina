import { useState } from "react";
import { Link } from "react-router-dom";
import BanderaStripe from "../components/BanderaStripe";
import CountUp from "../components/CountUp";
import VariantPicker from "../components/variants/VariantPicker";
import { HERO_VARIANTS } from "../components/heroes";
import { TIMELINE_VARIANTS } from "../components/timelines";
import { TESTIMONIO_VARIANTS } from "../components/testimonios";
import { GALERIA_VARIANTS } from "../components/galerias";
import { NOTICIAS_VARIANTS } from "../components/noticias";
import estadisticas from "../data/estadisticas.json";
import timeline from "../data/timeline.json";
import veteranos from "../data/veteranos.json";
import noticias from "../data/noticias.json";
import eventos from "../data/eventos.json";
import galeria from "../data/galeria.json";
import { asset } from "../utils/asset";
import styles from "./Home.module.css";

// Degradados de respaldo (mientras no haya fotos) — uno distinto por evento,
// para que el cambio de fondo se note claramente.
const TL_FONDOS = [
  "linear-gradient(135deg, #e8f1fb 0%, #cfe2f5 55%, #b8d3ee 100%)",
  "linear-gradient(135deg, #eaf4ef 0%, #d2e3f1 55%, #bcd2e8 100%)",
  "linear-gradient(135deg, #f6e7e4 0%, #eccfcb 55%, #dfb4af 100%)",
  "linear-gradient(135deg, #e9eef8 0%, #d0dbed 55%, #b8c6e0 100%)",
  "linear-gradient(135deg, #eaf3fb 0%, #d6e8f6 55%, #c2dbef 100%)",
];

function tlFondoStyle(e, i) {
  if (e.imagenUrl) return { backgroundImage: `url(${asset(e.imagenUrl)})` };
  const grad =
    e.tipoTag === "danger"
      ? "linear-gradient(135deg, #f6e7e4 0%, #e9c8c3 55%, #d9a59f 100%)"
      : TL_FONDOS[i % TL_FONDOS.length];
  return { backgroundImage: grad };
}

export default function Home() {
  // Evento activo de la línea de tiempo, izado acá para que el fondo de toda
  // la sección cambie según la fecha seleccionada.
  const [tlActivo, setTlActivo] = useState(0);
  const tlOrdenado = [...timeline].sort((a, b) => a.orden - b.orden);

  return (
    <>
      {/* ===================== HERO (variantes intercambiables) ===================== */}
      <section className={styles.hero}>
        <VariantPicker
          etiqueta="Hero"
          storageKey="heroVariant"
          variants={HERO_VARIANTS}
        />

        <div className={styles.stats}>
          <div className={`container ${styles.statsGrid}`}>
            {estadisticas.map((s) => (
              <div key={s.label} className={styles.statItem}>
                <span className={styles.statValor}>
                  <CountUp value={s.valor} />
                </span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CITA DESTACADA ===================== */}
      <section className={styles.cita}>
        <div className={`container ${styles.citaInner}`}>
          <p className={styles.citaTexto}>
            «Fuimos. Peleamos. Y aunque nos mandaron a perder, nosotros nunca perdimos
            el honor.»
          </p>
          <p className={styles.citaAutor}>Veterano — Regimiento de Infantería 7</p>
        </div>
      </section>

      {/* ===================== LÍNEA DE TIEMPO ===================== */}
      <section className={`${styles.section} ${styles.sectionTimeline}`}>
        {/* Fondo dinámico de la sección: cambia según el evento activo */}
        <div className={styles.tlFondos} aria-hidden="true">
          {tlOrdenado.map((e, i) => (
            <div
              key={e.id}
              className={`${styles.tlFondo} ${
                i === tlActivo ? styles.tlFondoActivo : ""
              }`}
              style={tlFondoStyle(e, i)}
            />
          ))}
        </div>

        <div className="container">
          <p className={styles.kicker}>74 días que no se olvidan</p>
          <h2 className={styles.sectionTitulo}>La línea de tiempo de la guerra</h2>
          <p className={styles.sectionIntro}>
            Las fechas que marcaron el conflicto, contadas desde la memoria de quienes
            estuvieron allí.
          </p>
          <VariantPicker
            etiqueta="Línea de tiempo"
            storageKey="timelineVariant"
            variants={TIMELINE_VARIANTS}
            componentProps={{
              eventos: timeline,
              activo: tlActivo,
              onActivo: setTlActivo,
            }}
            className={styles.timelinePicker}
          />
        </div>
      </section>

      {/* ===================== TESTIMONIOS ===================== */}
      <section className={`${styles.section} ${styles.sectionOscura}`}>
        <div className="container">
          <p className={styles.kicker}>Voces de los nuestros</p>
          <h2 className={styles.sectionTitulo}>Testimonios de veteranos</h2>
          <p className={styles.sectionIntro}>
            Sus palabras son el testimonio más fiel de lo que se vivió. Las guardamos
            para que nunca dejen de escucharse.
          </p>
          <VariantPicker
            etiqueta="Testimonios"
            storageKey="testimonioVariant"
            variants={TESTIMONIO_VARIANTS}
            componentProps={{ veteranos: veteranos.filter((v) => v.activo) }}
            className={styles.testimoniosPicker}
          />
        </div>
      </section>

      {/* ===================== GALERÍA ===================== */}
      <section className={`${styles.section} ${styles.sectionClara}`}>
        <div className="container">
          <p className={styles.kicker}>Memoria en imágenes</p>
          <h2 className={styles.sectionTitulo}>Galería</h2>
          <p className={styles.sectionIntro}>
            Imágenes del archivo histórico y de las actividades del Centro.
          </p>
          <VariantPicker
            etiqueta="Galería"
            storageKey="galeriaVariant"
            variants={GALERIA_VARIANTS}
            componentProps={{ imagenes: galeria }}
            className={styles.galeriaPicker}
          />
          <div className={styles.galeriaCta}>
            <Link to="/galeria" className={styles.verMas}>
              Ver galería completa
            </Link>
          </div>
        </div>
      </section>

      <BanderaStripe />

      {/* ===================== NOTICIAS Y EVENTOS ===================== */}
      <section className={`${styles.section} ${styles.sectionClara}`}>
        <div className="container">
          <p className={styles.kicker}>Vida del Centro</p>
          <h2 className={styles.sectionTitulo}>Noticias y eventos</h2>
          <p className={styles.sectionIntro}>
            Actividades, conmemoraciones y novedades de nuestra comunidad.
          </p>
          <VariantPicker
            etiqueta="Noticias y eventos"
            storageKey="noticiasVariant"
            variants={NOTICIAS_VARIANTS}
            componentProps={{ noticias, eventos }}
            className={styles.noticiasPicker}
          />
        </div>
      </section>
    </>
  );
}
