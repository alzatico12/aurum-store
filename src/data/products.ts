import { Category, Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Collar Venezia",
    description:
      "Collar de cadena fina bañado en oro de 18k con dije geométrico. Elegancia minimalista para el día a día.",
    price: 89000,
    originalPrice: 120000,
    category: "jewelry",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600",
    ],
    tags: ["collar", "oro", "minimalista"],
    inStock: true,
    isNew: true,
    isFeatured: true,
  },
  {
    id: "2",
    name: "Bolso Milán",
    description:
      "Bolso de cuero genuino con herrajes dorados. Capacidad para el día completo con estilo.",
    price: 320000,
    category: "bags",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600",
    ],
    tags: ["bolso", "cuero", "lujo"],
    inStock: true,
    isFeatured: true,
  },
  {
    id: "3",
    name: "Reloj Aureus",
    description:
      "Reloj de cuarzo con caja de acero inoxidable dorado y correa de cuero genuino.",
    price: 450000,
    originalPrice: 580000,
    category: "watches",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    ],
    tags: ["reloj", "dorado", "premium"],
    inStock: true,
    isFeatured: true,
  },
  {
    id: "4",
    name: "Aretes Lunare",
    description: "Aretes colgantes en forma de luna con baño de oro rosa 14k.",
    price: 65000,
    category: "jewelry",
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600",
    ],
    tags: ["aretes", "oro rosa", "luna"],
    inStock: true,
    isNew: true,
  },
  {
    id: "5",
    name: "Bolso Capri",
    description:
      "Mini bolso crossbody en cuero vegano con cadena dorada. Perfecto para ocasiones especiales.",
    price: 189000,
    category: "bags",
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4b4e94?w=600",
    ],
    tags: ["bolso", "crossbody", "cadena"],
    inStock: false,
    isFeatured: true,
  },
  {
    id: "6",
    name: "Reloj Sevilla",
    description:
      "Reloj automático de edición limitada con esfera azul marino y correa de acero.",
    price: 680000,
    category: "watches",
    images: [
      "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=600",
    ],
    tags: ["reloj", "automático", "edición limitada"],
    inStock: true,
    isNew: true,
  },
  {
    id: "7",
    name: "Pulsera Aurore",
    description:
      "Pulsera rígida bañada en oro de 18k con acabado pulido. Minimalista y versátil.",
    price: 75000,
    category: "jewelry",
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600",
    ],
    tags: ["pulsera", "oro", "minimalista"],
    inStock: true,
  },
  {
    id: "8",
    name: "Bolso Toscana",
    description:
      "Bolso tote de cuero italiano con forro interior de seda y bolsillos organizadores.",
    price: 420000,
    originalPrice: 520000,
    category: "bags",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600",
    ],
    tags: ["bolso", "tote", "cuero italiano"],
    inStock: true,
  },
];

export const categories: Category[] = [
  {
    id: "jewelry",
    label: "Joyería",
    description: "Collares, aretes y pulseras",
    imageUrl:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600",
  },
  {
    id: "bags",
    label: "Bolsos",
    description: "Cuero genuino y vegano",
    imageUrl:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600",
  },
  {
    id: "watches",
    label: "Relojes",
    description: "Elegancia en tu muñeca",
    imageUrl:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
  },
];