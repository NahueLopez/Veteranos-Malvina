/**
 * Franja de bandera celeste/blanco/celeste.
 * Elemento estructural de identidad — separa secciones, no decora.
 */
export default function BanderaStripe({ className = "" }) {
  return <div className={`bandera-stripe ${className}`} aria-hidden="true" />;
}
