import { asset } from "../../utils/asset";

/**
 * Imágenes de las Malvinas (en /public). Un único lugar para referenciarlas.
 * Si cambian los archivos, se actualiza solo acá.
 */
export const heroImg = {
  mapa: asset("/malvinas-mapa.png"), // contorno blanco sobre azul marino (sobrio)
  bandera: asset("/malvinas-bandera.png"), // islas rellenas con la bandera
  flameante: asset("/malvinas-flameante.png"), // bandera flameando, cielo claro
  flameante2: asset("/malvinas-flameante-2.png"), // bandera flameando, oscura/épica
};
