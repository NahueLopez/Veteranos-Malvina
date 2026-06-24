/** Acento de color por fuerza, para diseños que codifican el arma visualmente. */
export function colorArma(arma = "") {
  const a = arma.toLowerCase();
  if (a.includes("ejército") || a.includes("ejercito")) return "#4f7942"; // verde
  if (a.includes("armada")) return "#1f4e79"; // azul naval
  if (a.includes("aérea") || a.includes("aerea")) return "#75aadb"; // celeste
  return "#75aadb";
}

export function iniciales(nombre = "", apellido = "") {
  return `${nombre?.[0] ?? ""}${apellido?.[0] ?? ""}`.toUpperCase();
}
