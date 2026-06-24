import HeroMemorial from "./HeroMemorial";
import HeroIslas from "./HeroIslas";
import HeroBandera from "./HeroBandera";
import HeroEditorial from "./HeroEditorial";
import HeroCoordenadas from "./HeroCoordenadas";
import HeroSplit from "./HeroSplit";

/** Registro de variantes de hero. El orden define el número del selector. */
export const HERO_VARIANTS = [
  { id: "memorial", label: "Memorial", desc: "Emotivo cinematográfico (recomendado)", Component: HeroMemorial },
  { id: "islas", label: "Islas", desc: "Mapa sobrio a pantalla completa", Component: HeroIslas },
  { id: "bandera", label: "Bandera", desc: "Franja celeste/blanco de fondo", Component: HeroBandera },
  { id: "editorial", label: "Editorial", desc: "Claro y tipográfico", Component: HeroEditorial },
  { id: "coords", label: "Coordenadas", desc: "Documental, mapa + datos", Component: HeroCoordenadas },
  { id: "split", label: "Split", desc: "Texto + medallón de islas", Component: HeroSplit },
];
