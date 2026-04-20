// ============================================
// AURUM - Utilidades de formato
// ============================================

/**
 * Formatea un precio en pesos colombianos (COP)
 * Ejemplo: 89000 → "$ 89.000"
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(price);
}

/**
 * Calcula el porcentaje de descuento entre dos precios
 * Ejemplo: (120000, 89000) → "26% off"
 */
export function getDiscountPercentage(
  original: number,
  current: number
): string {
  const discount = Math.round(((original - current) / original) * 100);
  return `${discount}% off`;
}