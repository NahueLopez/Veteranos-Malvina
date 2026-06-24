import VeteranoCard from "../components/VeteranoCard";
import veteranos from "../data/veteranos.json";
import styles from "./Pagina.module.css";

export default function Veteranos() {
  const activos = veteranos.filter((v) => v.activo);

  return (
    <>
      <header className={styles.head}>
        <div className={`container ${styles.headInner}`}>
          <p className={styles.kicker}>Memorial</p>
          <h1 className={styles.titulo}>Nuestros veteranos</h1>
          <p className={styles.intro}>
            Hombres que dejaron todo por la Patria. Estas son algunas de sus voces.
          </p>
        </div>
      </header>
      <div className={styles.body}>
        <div className="container">
          <div className={styles.veteranosGrid}>
            {activos.map((v) => (
              <VeteranoCard key={v.id} veterano={v} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
