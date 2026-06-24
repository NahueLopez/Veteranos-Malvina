import { useState } from "react";
import styles from "./FormModal.module.css";

/**
 * Modal con formulario generado a partir de la config de campos.
 * @param {Array} fields - [{ name, label, type, options?, required?, default? }]
 * @param {Object} initial - valores iniciales (edición) o {} (alta)
 * @param {string} titulo
 * @param {Function} onSave(values), onClose()
 */
export default function FormModal({ fields, initial, titulo, onSave, onClose }) {
  const [values, setValues] = useState(() => {
    const base = {};
    for (const f of fields) {
      base[f.name] =
        initial?.[f.name] ??
        f.default ??
        (f.type === "checkbox" ? false : f.type === "number" ? 0 : "");
    }
    return base;
  });
  const [error, setError] = useState("");

  function setField(name, val) {
    setValues((v) => ({ ...v, [name]: val }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    for (const f of fields) {
      if (f.required && !String(values[f.name] ?? "").trim()) {
        setError(`El campo "${f.label}" es obligatorio.`);
        return;
      }
    }
    onSave(values);
  }

  return (
    <div className={styles.overlay} onMouseDown={onClose}>
      <div className={styles.modal} onMouseDown={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <div className={styles.header}>
            <h2>{titulo}</h2>
            <button type="button" className={styles.cerrar} onClick={onClose}>
              ×
            </button>
          </div>

          <div className={styles.body}>
            {error && (
              <p style={{ color: "var(--danger)", fontSize: "0.85rem" }}>{error}</p>
            )}

            {fields.map((f) => {
              if (f.type === "checkbox") {
                return (
                  <div key={f.name} className={styles.checkboxRow}>
                    <input
                      id={f.name}
                      type="checkbox"
                      checked={Boolean(values[f.name])}
                      onChange={(e) => setField(f.name, e.target.checked)}
                    />
                    <label htmlFor={f.name}>{f.label}</label>
                  </div>
                );
              }

              return (
                <div key={f.name} className="field">
                  <label htmlFor={f.name}>
                    {f.label}
                    {f.required && " *"}
                  </label>

                  {f.type === "textarea" ? (
                    <textarea
                      id={f.name}
                      value={values[f.name]}
                      onChange={(e) => setField(f.name, e.target.value)}
                    />
                  ) : f.type === "select" ? (
                    <select
                      id={f.name}
                      value={values[f.name]}
                      onChange={(e) => setField(f.name, e.target.value)}
                    >
                      {f.options.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      id={f.name}
                      type={f.type}
                      value={values[f.name]}
                      onChange={(e) =>
                        setField(
                          f.name,
                          f.type === "number"
                            ? Number(e.target.value)
                            : e.target.value
                        )
                      }
                    />
                  )}
                </div>
              );
            })}
          </div>

          <div className={styles.footer}>
            <button type="button" className="btn" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="btn btnPrimario">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
