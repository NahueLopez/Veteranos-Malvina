import { createContext, useContext, useState, useCallback } from "react";

const AuthContext = createContext(null);
const STORAGE_KEY = "malvinas_admin_token";

/**
 * Auth de demo. Acepta cualquier credencial y genera un "token" local.
 * Cuando se conecte la API real, reemplazar `login` por un POST /auth/login
 * que devuelva el JWT del backend.
 */
export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem(STORAGE_KEY));
  const [usuario, setUsuario] = useState(() => {
    const email = localStorage.getItem(STORAGE_KEY + "_email");
    return email ? { email, nombre: "Administrador" } : null;
  });

  const login = useCallback(async (email, password) => {
    // DEMO: no valida contra backend. Mínima validación de forma.
    if (!email || !password) {
      throw new Error("Ingresá email y contraseña.");
    }
    const fakeToken = btoa(`${email}:${Date.now()}`);
    localStorage.setItem(STORAGE_KEY, fakeToken);
    localStorage.setItem(STORAGE_KEY + "_email", email);
    setToken(fakeToken);
    setUsuario({ email, nombre: "Administrador" });
    return true;
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(STORAGE_KEY + "_email");
    setToken(null);
    setUsuario(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{ token, usuario, login, logout, isAuth: Boolean(token) }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth debe usarse dentro de <AuthProvider>");
  return ctx;
}
