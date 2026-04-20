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
    name: "Case Obsidian",
    description:
      "Case para iPhone de policarbonato premium con acabado mate y bordes dorados.",
    price: 45000,
    category: "tech",
    images: [
      "https://images.unsplash.com/photo-1609695001655-a2955a0cf706?w=600",
    ],
    tags: ["case", "iphone", "premium"],
    inStock: true,
    isNew: true,
  },
  {
    id: "4",
    name: "Cinturón Romano",
    description:
      "Cinturón de cuero italiano con hebilla dorada artesanal. Acabado reversible negro/café.",
    price: 175000,
    category: "belts",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
    ],
    tags: ["cinturón", "cuero", "italiano"],
    inStock: true,
  },
  {
    id: "5",
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
    id: "6",
    name: "Gafas Riviera",
    description:
      "Gafas de sol con montura acetato y lentes polarizados UV400. Diseño italiano exclusivo.",
    price: 210000,
    category: "sunglasses",
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600",
    ],
    tags: ["gafas", "polarizadas", "italiano"],
    inStock: true,
    isNew: true,
    isFeatured: true,
  },
  {
    id: "7",
    name: "Aretes Lunare",
    description: "Aretes colgantes en forma de luna con baño de oro rosa 14k.",
    price: 65000,
    category: "jewelry",
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600",
    ],
    tags: ["aretes", "oro rosa", "luna"],
    inStock: true,
  },
  {
    id: "8",
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
    id: "tech",
    label: "Tech",
    description: "Accesorios para tus dispositivos",
    imageUrl:
      "https://images.unsplash.com/photo-1609695001655-a2955a0cf706?w=600",
  },
  {
    id: "watches",
    label: "Relojes",
    description: "Elegancia en tu muñeca",
    imageUrl:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
  },
  {
    id: "belts",
    label: "Cinturones",
    description: "Cuero italiano artesanal",
    imageUrl:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
  },
  {
    id: "sunglasses",
    label: "Gafas",
    description: "Protección con estilo",
    imageUrl:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600",
  },
];
