/** Utilidades de fecha compartidas por las variantes de Noticias y eventos. */

const MESES_LARGOS = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
];

const MESES_CORTOS = [
  "Ene", "Feb", "Mar", "Abr", "May", "Jun",
  "Jul", "Ago", "Sep", "Oct", "Nov", "Dic",
];

/** "2026-04-02" -> "2 de abril de 2026" */
export function fechaLarga(iso) {
  if (!iso) return "";
  const d = new Date(iso + "T00:00:00");
  return `${d.getDate()} de ${MESES_LARGOS[d.getMonth()]} de ${d.getFullYear()}`;
}

/** "2026-04-02" -> { dia: 2, mes: "Abr" } */
export function fechaCorta(iso) {
  if (!iso) return { dia: "", mes: "" };
  const d = new Date(iso + "T00:00:00");
  return { dia: d.getDate(), mes: MESES_CORTOS[d.getMonth()] };
}

/** Noticias publicadas, más recientes primero. */
export function noticiasPublicadas(noticias) {
  return [...noticias]
    .filter((n) => n.publicado)
    .sort((a, b) => b.fechaPublicacion.localeCompare(a.fechaPublicacion));
}

/** Eventos publicados, próximos primero. */
export function eventosProximos(eventos) {
  return [...eventos]
    .filter((e) => e.publicado)
    .sort((a, b) => a.fechaEvento.localeCompare(b.fechaEvento));
}
