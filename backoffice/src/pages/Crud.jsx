import { useState } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "../store/StoreContext";
import { ENTIDADES } from "../config/entities";
import DataTable from "../components/DataTable";
import FormModal from "../components/FormModal";
import styles from "./Crud.module.css";

/**
 * Página CRUD genérica. La entidad se resuelve por el parámetro de ruta
 * y su configuración (columnas + campos) vive en config/entities.js.
 */
export default function Crud() {
  const { entidad } = useParams();
  const config = ENTIDADES[entidad];
  const { list, create, update, remove } = useStore();

  const [modal, setModal] = useState(null); // { mode: 'create'|'edit', row? }

  if (!config) {
    return <p>Entidad desconocida.</p>;
  }

  const rows = list(entidad);

  function handleSave(values) {
    if (modal.mode === "edit") {
      update(entidad, modal.row.id, values);
    } else {
      create(entidad, values);
    }
    setModal(null);
  }

  function handleDelete(row) {
    const etiqueta = row.titulo || row.descripcion || `${row.nombre} ${row.apellido}`;
    if (window.confirm(`¿Eliminar "${etiqueta?.trim()}"? Esta acción no se puede deshacer.`)) {
      remove(entidad, row.id);
    }
  }

  return (
    <div>
      <div className={styles.head}>
        <div>
          <h1 className={styles.titulo}>{config.titulo}</h1>
          <p className={styles.sub}>{config.subtitulo}</p>
        </div>
        <button
          className="btn btnPrimario"
          onClick={() => setModal({ mode: "create" })}
        >
          + Nuevo {config.singular.toLowerCase()}
        </button>
      </div>

      <DataTable
        columns={config.columns}
        rows={rows}
        onEdit={(row) => setModal({ mode: "edit", row })}
        onDelete={handleDelete}
      />

      {modal && (
        <FormModal
          fields={config.fields}
          initial={modal.row}
          titulo={
            modal.mode === "edit"
              ? `Editar ${config.singular.toLowerCase()}`
              : `Nuevo ${config.singular.toLowerCase()}`
          }
          onSave={handleSave}
          onClose={() => setModal(null)}
        />
      )}
    </div>
  );
}
