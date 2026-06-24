import { createContext, useContext, useState, useCallback } from "react";
import { seed } from "./seed";

const StoreContext = createContext(null);

/**
 * Store en memoria para la demo. CRUD sobre los arrays semilla.
 * Al conectar la API real, cada operación se vuelve un fetch al endpoint.
 */
export function StoreProvider({ children }) {
  // Clon profundo del seed para no mutar el módulo importado.
  const [data, setData] = useState(() =>
    JSON.parse(JSON.stringify(seed))
  );

  const list = useCallback((entidad) => data[entidad] ?? [], [data]);

  const create = useCallback((entidad, item) => {
    setData((prev) => {
      const arr = prev[entidad] ?? [];
      const nextId = arr.reduce((max, x) => Math.max(max, x.id), 0) + 1;
      return { ...prev, [entidad]: [...arr, { ...item, id: nextId }] };
    });
  }, []);

  const update = useCallback((entidad, id, cambios) => {
    setData((prev) => ({
      ...prev,
      [entidad]: prev[entidad].map((x) =>
        x.id === id ? { ...x, ...cambios } : x
      ),
    }));
  }, []);

  const remove = useCallback((entidad, id) => {
    setData((prev) => ({
      ...prev,
      [entidad]: prev[entidad].filter((x) => x.id !== id),
    }));
  }, []);

  const counts = useCallback(
    () =>
      Object.fromEntries(
        Object.entries(data).map(([k, arr]) => [k, arr.length])
      ),
    [data]
  );

  return (
    <StoreContext.Provider value={{ list, create, update, remove, counts }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore debe usarse dentro de <StoreProvider>");
  return ctx;
}
