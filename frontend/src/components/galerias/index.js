import GaleriaMosaico from "./GaleriaMosaico";
import GaleriaVitrina from "./GaleriaVitrina";
import GaleriaFiltros from "./GaleriaFiltros";
import GaleriaMural from "./GaleriaMural";
import GaleriaArchivo from "./GaleriaArchivo";

/** Registro de variantes de galería. El orden define el número del selector. */
export const GALERIA_VARIANTS = [
  { id: "mosaico", label: "Mosaico", desc: "Grilla tipo mosaico con piezas de distinto tamaño (recomendada)", Component: GaleriaMosaico },
  { id: "vitrina", label: "Vitrina", desc: "Grilla prolija que abre la foto en grande (lightbox)", Component: GaleriaVitrina },
  { id: "filtros", label: "Filtros", desc: "Grilla con chips para filtrar por categoría", Component: GaleriaFiltros },
  { id: "mural", label: "Mural", desc: "Editorial: una foto protagonista + grilla secundaria", Component: GaleriaMural },
  { id: "archivo", label: "Archivo", desc: "Fichas estilo legajo histórico, papel de época y sello de fecha", Component: GaleriaArchivo },
];
