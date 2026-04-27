// ============================================
// AURUM - Página de catálogo
// ============================================

import { Suspense } from "react";
import { products } from "@/data/products";
import { ProductCategory } from "@/types";
import { ProductCard } from "@/components/shop/ProductCard";
import { CatalogFilters } from "@/components/shop/catalog/CatalogFilters";
import { CatalogHeader } from "@/components/shop/catalog/CatalogHeader";

interface CatalogPageProps {
  searchParams: Promise<{
    category?: ProductCategory;
    min?: string;
    max?: string;
  }>;
}

export default async function CatalogPage({ searchParams }: CatalogPageProps) {
  const { category, min, max } = await searchParams;

  // Filtrar productos
  const filtered = products.filter((p) => {
    if (category && p.category !== category) return false;
    if (min && p.price < Number(min)) return false;
    if (max && max !== "Infinity" && p.price > Number(max)) return false;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <CatalogHeader total={filtered.length} category={category} />

      <div className="flex gap-12">

        {/* Sidebar filtros */}
        <div className="hidden lg:block w-52 shrink-0">
          <Suspense>
            <CatalogFilters />
          </Suspense>
        </div>

        {/* Grid productos */}
        {filtered.length > 0 ? (
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center py-24">
            <p className="text-muted-foreground tracking-widest uppercase text-sm">
              No hay productos en esta categoría
            </p>
          </div>
        )}

      </div>
    </div>
  );
}