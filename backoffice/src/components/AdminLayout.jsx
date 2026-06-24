import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import styles from "./AdminLayout.module.css";

export default function AdminLayout() {
  return (
    <div className={styles.shell}>
      <Sidebar />
      <div className={styles.content}>
        <header className={styles.topbar}>
          <h1>Gestión de contenido</h1>
          <span className={styles.topbarMarca}>Las Malvinas son argentinas</span>
        </header>
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
