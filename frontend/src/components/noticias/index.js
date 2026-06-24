import NoticiasRevista from "./NoticiasRevista";
import NoticiasTarjetas from "./NoticiasTarjetas";
import NoticiasLista from "./NoticiasLista";
import NoticiasAgenda from "./NoticiasAgenda";
import NoticiasDiario from "./NoticiasDiario";

/** Registro de variantes de Noticias y eventos. El orden define el número del selector. */
export const NOTICIAS_VARIANTS = [
  { id: "revista", label: "Revista", desc: "Grilla de noticias + columna de próximos eventos (recomendada)", Component: NoticiasRevista },
  { id: "tarjetas", label: "Tarjetas", desc: "Grilla pareja: noticias y eventos como tarjetas", Component: NoticiasTarjetas },
  { id: "lista", label: "Lista", desc: "Feed editorial en filas + franja de agenda al pie", Component: NoticiasLista },
  { id: "agenda", label: "Agenda", desc: "Eventos protagonistas con bloques de fecha + noticias laterales", Component: NoticiasAgenda },
  { id: "diario", label: "Diario", desc: "Portada de periódico: nota de tapa + columnas + agenda", Component: NoticiasDiario },
];
