import TimelineRiel from "./TimelineRiel";
import TimelineEje from "./TimelineEje";
import TimelineEscena from "./TimelineEscena";
import TimelineHilo from "./TimelineHilo";
import TimelineDiario from "./TimelineDiario";
import TimelinePasos from "./TimelinePasos";
import TimelineRuta from "./TimelineRuta";

/** Registro de variantes de línea de tiempo. El orden define el número del selector. */
export const TIMELINE_VARIANTS = [
  { id: "riel", label: "Riel", desc: "Horizontal con barra de progreso (recomendada)", Component: TimelineRiel },
  { id: "eje", label: "Eje", desc: "Eje horizontal centrado, info alternada arriba/abajo al pasar el mouse", Component: TimelineEje },
  { id: "escena", label: "Escena", desc: "Imagen a pantalla completa de fondo, con crossfade y zoom lento", Component: TimelineEscena },
  { id: "hilo", label: "Hilo", desc: "Vertical central, tarjetas alternadas izq/der", Component: TimelineHilo },
  { id: "diario", label: "Diario", desc: "Vertical lateral, estilo editorial", Component: TimelineDiario },
  { id: "pasos", label: "Pasos", desc: "Presentación a pantalla, una etapa por vez", Component: TimelinePasos },
  { id: "ruta", label: "Ruta", desc: "Estaciones numeradas estilo mapa de subte", Component: TimelineRuta },
];
