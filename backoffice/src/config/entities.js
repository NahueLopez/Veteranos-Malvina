/**
 * Configuración declarativa de cada entidad del backoffice.
 * Un solo componente CRUD genérico se construye a partir de esto.
 *
 * field.type: text | textarea | select | number | date | time | checkbox
 * column.badge / column.bool: render especial en la tabla.
 */
const ARMAS = ["Ejército", "Armada", "Fuerza Aérea"];

export const ENTIDADES = {
  veteranos: {
    key: "veteranos",
    singular: "Veterano",
    plural: "Veteranos",
    titulo: "Veteranos",
    subtitulo: "Gestioná las fichas y testimonios de los veteranos del Centro.",
    columns: [
      { key: "nombre", label: "Nombre", render: (r) => `${r.nombre} ${r.apellido}` },
      { key: "unidad", label: "Unidad" },
      { key: "arma", label: "Arma", badge: true },
      { key: "activo", label: "Visible", bool: true },
    ],
    fields: [
      { name: "nombre", label: "Nombre", type: "text", required: true },
      { name: "apellido", label: "Apellido", type: "text", required: true },
      { name: "unidad", label: "Unidad", type: "text" },
      { name: "arma", label: "Arma", type: "select", options: ARMAS },
      { name: "testimonioCorto", label: "Testimonio corto", type: "textarea" },
      { name: "activo", label: "Visible en el sitio público", type: "checkbox", default: true },
    ],
  },

  timeline: {
    key: "timeline",
    singular: "Hito",
    plural: "Línea de tiempo",
    titulo: "Línea de tiempo",
    subtitulo: "Eventos históricos que aparecen en la cronología de la guerra.",
    columns: [
      { key: "orden", label: "#" },
      { key: "fecha", label: "Fecha" },
      { key: "titulo", label: "Título" },
      { key: "tag", label: "Etiqueta", badge: true },
    ],
    fields: [
      { name: "fecha", label: "Fecha (texto, ej. 2 Abr 1982)", type: "text", required: true },
      { name: "titulo", label: "Título", type: "text", required: true },
      { name: "tag", label: "Etiqueta", type: "text" },
      { name: "tipoTag", label: "Tipo de etiqueta", type: "select", options: ["info", "danger"], default: "info" },
      { name: "orden", label: "Orden", type: "number", default: 1 },
    ],
  },

  noticias: {
    key: "noticias",
    singular: "Noticia",
    plural: "Noticias",
    titulo: "Noticias",
    subtitulo: "Publicaciones del Centro. Solo las publicadas se ven en el sitio.",
    columns: [
      { key: "titulo", label: "Título" },
      { key: "tipo", label: "Tipo", badge: true },
      { key: "fechaPublicacion", label: "Fecha" },
      { key: "publicado", label: "Publicado", bool: true },
    ],
    fields: [
      { name: "titulo", label: "Título", type: "text", required: true },
      { name: "tipo", label: "Tipo", type: "select", options: ["Noticia", "Evento"], default: "Noticia" },
      { name: "resumen", label: "Resumen", type: "textarea" },
      { name: "fechaPublicacion", label: "Fecha de publicación", type: "date" },
      { name: "publicado", label: "Publicado", type: "checkbox", default: false },
    ],
  },

  eventos: {
    key: "eventos",
    singular: "Evento",
    plural: "Eventos",
    titulo: "Eventos",
    subtitulo: "Agenda de actos y actividades del Centro.",
    columns: [
      { key: "titulo", label: "Título" },
      { key: "fechaEvento", label: "Fecha" },
      { key: "hora", label: "Hora" },
      { key: "lugar", label: "Lugar" },
      { key: "publicado", label: "Publicado", bool: true },
    ],
    fields: [
      { name: "titulo", label: "Título", type: "text", required: true },
      { name: "descripcion", label: "Descripción", type: "textarea" },
      { name: "fechaEvento", label: "Fecha del evento", type: "date", required: true },
      { name: "hora", label: "Hora", type: "time" },
      { name: "lugar", label: "Lugar", type: "text" },
      { name: "publicado", label: "Publicado", type: "checkbox", default: false },
    ],
  },

  galeria: {
    key: "galeria",
    singular: "Imagen",
    plural: "Galería",
    titulo: "Galería",
    subtitulo: "Imágenes del archivo histórico y de las actividades del Centro.",
    columns: [
      { key: "descripcion", label: "Descripción" },
      { key: "categoria", label: "Categoría", badge: true },
      { key: "fecha", label: "Fecha" },
    ],
    fields: [
      { name: "url", label: "URL de la imagen", type: "text" },
      { name: "descripcion", label: "Descripción", type: "text", required: true },
      { name: "categoria", label: "Categoría", type: "select", options: ["Histórica", "Conmemoración", "Centro"], default: "Histórica" },
      { name: "fecha", label: "Fecha", type: "date" },
    ],
  },

  caidos: {
    key: "caidos",
    singular: "Caído",
    plural: "Caídos",
    titulo: "Caídos",
    subtitulo: "Memorial de los héroes caídos en combate.",
    columns: [
      { key: "nombre", label: "Nombre", render: (r) => `${r.nombre} ${r.apellido}` },
      { key: "unidad", label: "Unidad" },
      { key: "arma", label: "Arma", badge: true },
      { key: "lugar", label: "Lugar" },
      { key: "publicado", label: "Visible", bool: true },
    ],
    fields: [
      { name: "nombre", label: "Nombre", type: "text", required: true },
      { name: "apellido", label: "Apellido", type: "text", required: true },
      { name: "edad", label: "Edad", type: "number" },
      { name: "unidad", label: "Unidad", type: "text" },
      { name: "arma", label: "Arma", type: "select", options: ARMAS },
      { name: "lugar", label: "Lugar donde cayó", type: "text" },
      { name: "fechaCaida", label: "Fecha", type: "date" },
      { name: "homenaje", label: "Homenaje", type: "textarea" },
      { name: "publicado", label: "Visible en el sitio público", type: "checkbox", default: true },
    ],
  },

  documentos: {
    key: "documentos",
    singular: "Documento",
    plural: "Documentos",
    titulo: "Documentos",
    subtitulo: "Archivo histórico: partes de guerra, informes, mapas y cartas.",
    columns: [
      { key: "titulo", label: "Título" },
      { key: "tipo", label: "Tipo", badge: true },
      { key: "fecha", label: "Fecha" },
      { key: "publicado", label: "Publicado", bool: true },
    ],
    fields: [
      { name: "titulo", label: "Título", type: "text", required: true },
      { name: "tipo", label: "Tipo", type: "select", options: ["Parte de guerra", "Informe", "Mapa", "Carta", "Otro"], default: "Parte de guerra" },
      { name: "descripcion", label: "Descripción", type: "textarea" },
      { name: "url", label: "URL del documento", type: "text" },
      { name: "fecha", label: "Fecha", type: "date" },
      { name: "publicado", label: "Publicado", type: "checkbox", default: false },
    ],
  },

  homenajes: {
    key: "homenajes",
    singular: "Homenaje",
    plural: "Homenajes",
    titulo: "Homenajes",
    subtitulo: "Monumentos, placas y murales en memoria de los veteranos y caídos.",
    columns: [
      { key: "nombre", label: "Nombre" },
      { key: "tipo", label: "Tipo", badge: true },
      { key: "ubicacion", label: "Ubicación" },
      { key: "publicado", label: "Publicado", bool: true },
    ],
    fields: [
      { name: "nombre", label: "Nombre", type: "text", required: true },
      { name: "tipo", label: "Tipo", type: "select", options: ["Monumento", "Placa", "Plaza", "Mural", "Otro"], default: "Monumento" },
      { name: "ubicacion", label: "Ubicación", type: "text" },
      { name: "descripcion", label: "Descripción", type: "textarea" },
      { name: "imagenUrl", label: "URL de la imagen", type: "text" },
      { name: "publicado", label: "Publicado", type: "checkbox", default: false },
    ],
  },

  cartas: {
    key: "cartas",
    singular: "Carta",
    plural: "Cartas",
    titulo: "Cartas",
    subtitulo: "Correspondencia desde el frente durante la guerra.",
    columns: [
      { key: "autor", label: "Autor" },
      { key: "destinatario", label: "Destinatario" },
      { key: "fecha", label: "Fecha" },
      { key: "publicado", label: "Publicado", bool: true },
    ],
    fields: [
      { name: "autor", label: "Autor", type: "text", required: true },
      { name: "destinatario", label: "Destinatario", type: "text" },
      { name: "fecha", label: "Fecha", type: "date" },
      { name: "contenido", label: "Contenido", type: "textarea" },
      { name: "contexto", label: "Contexto", type: "textarea" },
      { name: "publicado", label: "Publicado", type: "checkbox", default: false },
    ],
  },

  donaciones: {
    key: "donaciones",
    singular: "Donación",
    plural: "Donaciones",
    titulo: "Donaciones",
    subtitulo: "Aportes y donaciones recibidas por el Centro.",
    columns: [
      { key: "donante", label: "Donante" },
      { key: "tipo", label: "Tipo", badge: true },
      { key: "monto", label: "Monto" },
      { key: "fecha", label: "Fecha" },
    ],
    fields: [
      { name: "donante", label: "Donante", type: "text", required: true },
      { name: "tipo", label: "Tipo", type: "select", options: ["Económica", "Materiales", "Servicios", "Otro"], default: "Económica" },
      { name: "monto", label: "Monto", type: "number" },
      { name: "detalle", label: "Detalle", type: "textarea" },
      { name: "fecha", label: "Fecha", type: "date" },
      { name: "anonimo", label: "Donante anónimo", type: "checkbox", default: false },
    ],
  },
};

export const ENTIDADES_LISTA = Object.values(ENTIDADES);
