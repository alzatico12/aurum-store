// ============================================
// AURUM - Tipos base del dominio
// ============================================

export type ProductCategory =
  | "jewelry"
  | "bags"
  | "tech"
  | "belts"
  | "watches"
  | "sunglasses";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number; // Para mostrar descuentos
  category: ProductCategory;
  images: string[];
  tags: string[];
  inStock: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  id: ProductCategory;
  label: string;
  description: string;
  imageUrl: string;
}
