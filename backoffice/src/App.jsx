import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./auth/AuthContext";
import { StoreProvider } from "./store/StoreContext";
import AdminLayout from "./components/AdminLayout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Crud from "./pages/Crud";

function RutaProtegida({ children }) {
  const { isAuth } = useAuth();
  return isAuth ? children : <Navigate to="/login" replace />;
}

function SoloPublica({ children }) {
  const { isAuth } = useAuth();
  return isAuth ? <Navigate to="/" replace /> : children;
}

export default function App() {
  return (
    <AuthProvider>
      <StoreProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/login"
              element={
                <SoloPublica>
                  <Login />
                </SoloPublica>
              }
            />
            <Route
              element={
                <RutaProtegida>
                  <AdminLayout />
                </RutaProtegida>
              }
            >
              <Route index element={<Dashboard />} />
              <Route path=":entidad" element={<Crud />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </StoreProvider>
    </AuthProvider>
  );
}
