/**
 * Devuelve la URL correcta para un archivo de /public teniendo en cuenta el
 * `base` del sitio (ej. en GitHub Pages el sitio vive bajo /Veteranos-Malvina/).
 * Sin esto, una ruta absoluta como "/malvinas-mapa.png" apuntaría a la raíz del
 * dominio y daría 404.
 */
export function asset(path) {
  if (!path) return path;
  if (/^(https?:)?\/\//.test(path)) return path; // URLs externas, se dejan igual
  return import.meta.env.BASE_URL + path.replace(/^\//, "");
}
