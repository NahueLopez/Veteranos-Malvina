import TestimonioTarjetas from "./TestimonioTarjetas";
import TestimonioCarrusel from "./TestimonioCarrusel";
import TestimonioMuro from "./TestimonioMuro";
import TestimonioEditorial from "./TestimonioEditorial";
import TestimonioFoco from "./TestimonioFoco";

/** Registro de variantes de testimonios. El orden define el número del selector. */
export const TESTIMONIO_VARIANTS = [
  { id: "tarjetas", label: "Tarjetas", desc: "Grid de 3 con 'leer completo' (actual mejorada)", Component: TestimonioTarjetas },
  { id: "carrusel", label: "Carrusel", desc: "Una cita protagonista por vez", Component: TestimonioCarrusel },
  { id: "muro", label: "Muro", desc: "Pared de la memoria, acento por arma", Component: TestimonioMuro },
  { id: "editorial", label: "Editorial", desc: "Bloques alternados estilo entrevista", Component: TestimonioEditorial },
  { id: "foco", label: "Foco", desc: "Lista seleccionable + testimonio destacado", Component: TestimonioFoco },
];
