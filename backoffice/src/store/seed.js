/**
 * Datos semilla para la demo del backoffice (en memoria).
 * Reflejan las mismas entidades que consume el front público.
 * Al conectar la API real, estos arrays se reemplazan por fetch a los endpoints.
 */
export const seed = {
  veteranos: [
    {
      id: 1,
      nombre: "Roberto",
      apellido: "Giménez",
      unidad: "Regimiento de Infantería 7",
      arma: "Ejército",
      testimonioCorto:
        "Teníamos diecinueve años. Pasábamos frío, hambre, miedo. Pero el miedo se vuelve otra cosa cuando peleás por lo mismo.",
      activo: true,
    },
    {
      id: 2,
      nombre: "Carlos",
      apellido: "Domínguez",
      unidad: "Aviación Naval — 2.ª Escuadrilla",
      arma: "Armada",
      testimonioCorto:
        "Despegábamos sabiendo que el combustible no alcanzaba para volver tranquilos. Pero ahí abajo estaban nuestros compañeros.",
      activo: true,
    },
    {
      id: 3,
      nombre: "Héctor",
      apellido: "Sosa",
      unidad: "Fuerza Aérea — Grupo 5 de Caza",
      arma: "Fuerza Aérea",
      testimonioCorto:
        "Fuimos. Peleamos. Y aunque nos mandaron a perder, nosotros nunca perdimos el honor.",
      activo: true,
    },
  ],
  timeline: [
    { id: 1, fecha: "2 Abr 1982", titulo: "Operación Rosario — El desembarco", tag: "Operación Rosario", tipoTag: "info", orden: 1 },
    { id: 2, fecha: "1 May 1982", titulo: "Comienza la batalla aérea", tag: "Combate aéreo", tipoTag: "info", orden: 2 },
    { id: 3, fecha: "2 May 1982", titulo: "Hundimiento del Crucero General Belgrano", tag: "323 vidas perdidas", tipoTag: "danger", orden: 3 },
    { id: 4, fecha: "28 May 1982", titulo: "Batalla de Goose Green", tag: "Combate terrestre", tipoTag: "info", orden: 4 },
    { id: 5, fecha: "14 Jun 1982", titulo: "El regreso", tag: "Cese del fuego", tipoTag: "info", orden: 5 },
  ],
  noticias: [
    { id: 1, titulo: "Acto central por el 2 de Abril", resumen: "Convocatoria al acto conmemorativo en la Plaza de los Héroes.", tipo: "Noticia", fechaPublicacion: "2026-03-25", publicado: true },
    { id: 2, titulo: 'Nueva muestra "Rostros de Malvinas"', resumen: "Muestra fotográfica con material inédito de los veteranos.", tipo: "Noticia", fechaPublicacion: "2026-04-10", publicado: true },
    { id: 3, titulo: "Charla en escuelas: la memoria en las aulas", resumen: "Doce escuelas reciben este año el testimonio de los veteranos.", tipo: "Evento", fechaPublicacion: "2026-05-02", publicado: false },
  ],
  eventos: [
    { id: 1, titulo: "Acto central — Día del Veterano", fechaEvento: "2026-04-02", hora: "10:00", lugar: "Plaza de los Héroes, Mar del Plata", publicado: true },
    { id: 2, titulo: 'Inauguración muestra "Rostros de Malvinas"', fechaEvento: "2026-04-12", hora: "18:30", lugar: "Sede del Centro de Veteranos", publicado: true },
    { id: 3, titulo: "Vigilia por los caídos", fechaEvento: "2026-06-13", hora: "20:00", lugar: "Monumento a los Caídos, costanera", publicado: true },
  ],
  galeria: [
    { id: 1, descripcion: "Desembarco en las islas, abril de 1982", categoria: "Histórica", fecha: "1982-04-02", url: "" },
    { id: 2, descripcion: "Soldados en posición defensiva", categoria: "Histórica", fecha: "1982-05-10", url: "" },
    { id: 3, descripcion: "Acto conmemorativo en Mar del Plata", categoria: "Conmemoración", fecha: "2025-04-02", url: "" },
    { id: 4, descripcion: "Veteranos en la sede del Centro", categoria: "Centro", fecha: "2025-06-14", url: "" },
  ],
  caidos: [
    { id: 1, nombre: "Juan", apellido: "Ramírez", edad: 20, unidad: "Regimiento de Infantería 7", arma: "Ejército", lugar: "Monte Longdon", fechaCaida: "1982-06-12", homenaje: "Cayó defendiendo su posición hasta el último momento.", publicado: true },
    { id: 2, nombre: "Miguel", apellido: "Acosta", edad: 22, unidad: "ARA General Belgrano", arma: "Armada", lugar: "Atlántico Sur", fechaCaida: "1982-05-02", homenaje: "Tripulante del crucero hundido el 2 de mayo.", publicado: true },
    { id: 3, nombre: "Daniel", apellido: "Ferreyra", edad: 24, unidad: "Grupo 5 de Caza", arma: "Fuerza Aérea", lugar: "Estrecho de San Carlos", fechaCaida: "1982-05-25", homenaje: "Piloto caído en misión de ataque.", publicado: true },
  ],
  documentos: [
    { id: 1, titulo: "Parte de guerra N.º 1", tipo: "Parte de guerra", descripcion: "Comunicado oficial del desembarco.", fecha: "1982-04-02", publicado: true },
    { id: 2, titulo: "Mapa del teatro de operaciones", tipo: "Mapa", descripcion: "Cartografía del archipiélago y posiciones.", fecha: "1982-05-01", publicado: true },
    { id: 3, titulo: "Informe sobre el regreso de las tropas", tipo: "Informe", descripcion: "Detalle del repliegue tras el cese del fuego.", fecha: "1982-06-20", publicado: false },
  ],
  homenajes: [
    { id: 1, nombre: "Monumento a los Caídos en Malvinas", tipo: "Monumento", ubicacion: "Plaza de los Héroes, Mar del Plata", descripcion: "Monumento principal del Centro.", publicado: true },
    { id: 2, nombre: "Placa conmemorativa 2 de Abril", tipo: "Placa", ubicacion: "Sede del Centro de Veteranos", descripcion: "Placa con los nombres de los caídos locales.", publicado: true },
    { id: 3, nombre: "Mural \"Memoria de Malvinas\"", tipo: "Mural", ubicacion: "Escuela N.º 12", descripcion: "Mural realizado por estudiantes y veteranos.", publicado: false },
  ],
  cartas: [
    { id: 1, autor: "Soldado Roberto Giménez", destinatario: "Su madre", fecha: "1982-05-15", contenido: "Estamos bien, mamá. Hace frío pero aguantamos. No te preocupes.", contexto: "Escrita desde las posiciones de Puerto Argentino.", publicado: true },
    { id: 2, autor: "Cabo Carlos Domínguez", destinatario: "Su novia", fecha: "1982-05-28", contenido: "Pienso en vos todos los días. Cuando vuelva nos casamos.", contexto: "Última carta antes del combate.", publicado: true },
  ],
  donaciones: [
    { id: 1, donante: "Familia Pérez", tipo: "Económica", monto: 50000, detalle: "Aporte para la muestra fotográfica.", fecha: "2026-03-10", anonimo: false },
    { id: 2, donante: "Anónimo", tipo: "Materiales", monto: null, detalle: "Donación de vitrinas para el archivo.", fecha: "2026-04-05", anonimo: true },
    { id: 3, donante: "Comercio local", tipo: "Servicios", monto: null, detalle: "Impresión de folletos del acto central.", fecha: "2026-04-20", anonimo: false },
  ],
};
