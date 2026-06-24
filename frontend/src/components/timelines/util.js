/** Utilidades compartidas por las variantes de línea de tiempo. */

const MESES = {
  ene: 0, feb: 1, mar: 2, abr: 3, may: 4, jun: 5,
  jul: 6, ago: 7, sep: 8, oct: 9, nov: 10, dic: 11,
};

/** Parsea una fecha tipo "2 Abr 1982" a un objeto Date (o null si no puede). */
export function parseFecha(fecha) {
  if (!fecha) return null;
  const m = String(fecha).trim().match(/(\d{1,2})\s+([A-Za-zÁÉÍÓÚáéíóú]+)\s+(\d{4})/);
  if (!m) return null;
  const mes = MESES[m[2].slice(0, 3).toLowerCase()];
  if (mes === undefined) return null;
  return new Date(Number(m[3]), mes, Number(m[1]));
}

/**
 * Día de guerra (1..74) de un evento respecto del primero de la lista.
 * Devuelve null si no se puede calcular.
 */
export function diaDeGuerra(evento, eventos) {
  const inicio = parseFecha(eventos[0]?.fecha);
  const actual = parseFecha(evento?.fecha);
  if (!inicio || !actual) return null;
  const ms = actual - inicio;
  return Math.round(ms / 86400000) + 1;
}

/** Ordena por el campo `orden` sin mutar el array original. */
export function ordenar(eventos) {
  return [...eventos].sort((a, b) => a.orden - b.orden);
}
