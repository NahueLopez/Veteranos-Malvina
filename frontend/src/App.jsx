import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Historia from "./pages/Historia";
import Veteranos from "./pages/Veteranos";
import Galeria from "./pages/Galeria";
import Noticias from "./pages/Noticias";

function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="historia" element={<Historia />} />
          <Route path="veteranos" element={<Veteranos />} />
          <Route path="galeria" element={<Galeria />} />
          <Route path="noticias" element={<Noticias />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
