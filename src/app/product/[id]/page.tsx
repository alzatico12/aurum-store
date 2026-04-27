//Página de detalle de producto

import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { products } from "@/data/products";
import { ProductImages } from "@/components/shop/product/ProductImages";
import { ProductInfo } from "@/components/shop/product/ProductInfo";
import { ProductCard } from "@/components/shop/ProductCard";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  // Si no existe el producto → página 404
  if (!product) notFound();

  // Productos relacionados — misma categoría, diferente id
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-muted-foreground tracking-wide mb-10">
        <Link href="/" className="hover:text-foreground transition-colors">
          Inicio
        </Link>
        <ChevronRight className="h-3 w-3" />
        <Link href="/products" className="hover:text-foreground transition-colors">
          Catálogo
        </Link>
        <ChevronRight className="h-3 w-3" />
        <Link
          href={`/products?category=${product.category}`}
          className="hover:text-foreground transition-colors capitalize"
        >
          {product.category}
        </Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground">{product.name}</span>
      </nav>

      {/* Contenido principal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
        <ProductImages images={product.images} name={product.name} />
        <ProductInfo product={product} />
      </div>

      {/* Productos relacionados */}
      {related.length > 0 && (
        <div>
          <div className="mb-10">
            <p className="text-primary text-xs tracking-[0.4em] uppercase font-medium mb-2">
              También te puede gustar
            </p>
            <h2 className="text-2xl font-light text-foreground">
              Productos <span className="font-semibold italic">Relacionados</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}

    </div>
  );
}