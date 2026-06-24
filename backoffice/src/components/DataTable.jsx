import styles from "./DataTable.module.css";

/**
 * Tabla genérica configurable.
 * @param {Array} columns - [{ key, label, render?, badge?, bool? }]
 * @param {Array} rows
 * @param {Function} onEdit, onDelete
 */
export default function DataTable({ columns, rows, onEdit, onDelete }) {
  function renderCell(col, row) {
    if (col.render) return col.render(row);
    const val = row[col.key];
    if (col.bool) {
      return (
        <span className={styles.bool}>
          <span className={`${styles.dot} ${val ? styles.dotOn : styles.dotOff}`} />
          {val ? "Sí" : "No"}
        </span>
      );
    }
    if (col.badge && val != null && val !== "") {
      return <span className={styles.badge}>{val}</span>;
    }
    return val;
  }

  return (
    <div className={styles.wrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c.key}>{c.label}</th>
            ))}
            <th className={styles.colAcciones}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 && (
            <tr>
              <td colSpan={columns.length + 1} className={styles.vacio}>
                No hay registros todavía.
              </td>
            </tr>
          )}
          {rows.map((row) => (
            <tr key={row.id}>
              {columns.map((c) => (
                <td key={c.key}>{renderCell(c, row)}</td>
              ))}
              <td>
                <div className={styles.acciones}>
                  <button className="btn btnSm" onClick={() => onEdit(row)}>
                    Editar
                  </button>
                  <button
                    className="btn btnSm btnPeligro"
                    onClick={() => onDelete(row)}
                  >
                    Eliminar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
