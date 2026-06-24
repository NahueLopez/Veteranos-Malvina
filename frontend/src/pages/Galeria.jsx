import VariantPicker from "../components/variants/VariantPicker";
import { GALERIA_VARIANTS } from "../components/galerias";
import galeria from "../data/galeria.json";
import styles from "./Pagina.module.css";

export default function Galeria() {
  return (
    <>
      <header className={styles.head}>
        <div className={`container ${styles.headInner}`}>
          <p className={styles.kicker}>Memoria en imágenes</p>
          <h1 className={styles.titulo}>Galería</h1>
          <p className={styles.intro}>
            Archivo histórico y registro de las actividades del Centro de Veteranos.
          </p>
        </div>
      </header>
      <div className={styles.body}>
        <div className="container">
          <VariantPicker
            etiqueta="Galería"
            storageKey="galeriaVariant"
            variants={GALERIA_VARIANTS}
            componentProps={{ imagenes: galeria }}
            className={styles.galeriaPicker}
          />
        </div>
      </div>
    </>
  );
}
