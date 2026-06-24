import noticias from "../data/noticias.json";
import styles from "./Pagina.module.css";

const MESES = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
];

function fechaLarga(iso) {
  const d = new Date(iso + "T00:00:00");
  return `${d.getDate()} de ${MESES[d.getMonth()]} de ${d.getFullYear()}`;
}

export default function Noticias() {
  const publicadas = [...noticias]
    .filter((n) => n.publicado)
    .sort((a, b) => b.fechaPublicacion.localeCompare(a.fechaPublicacion));

  return (
    <>
      <header className={styles.head}>
        <div className={`container ${styles.headInner}`}>
          <p className={styles.kicker}>Vida del Centro</p>
          <h1 className={styles.titulo}>Noticias y eventos</h1>
          <p className={styles.intro}>
            Novedades, conmemoraciones y actividades de nuestra comunidad.
          </p>
        </div>
      </header>
      <div className={styles.body}>
        <div className="container">
          <div className={styles.noticiasLista}>
            {publicadas.map((n) => (
              <article key={n.id} className={styles.noticiaItem}>
                <span
                  className={`${styles.tipo} ${
                    n.tipo === "Evento" ? styles.tipoEvento : ""
                  }`}
                >
                  {n.tipo}
                </span>
                <h2 className={styles.noticiaTitulo}>{n.titulo}</h2>
                <p>{n.cuerpo}</p>
                <p className={styles.fecha}>{fechaLarga(n.fechaPublicacion)}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
