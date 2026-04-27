//Header del catálogo

import { ProductCategory } from "@/types";
import { categories } from "@/data/products";

interface CatalogHeaderProps {
  total: number;
  category?: ProductCategory | null;
}

export function CatalogHeader({ total, category }: CatalogHeaderProps) {
  const activeCategory = categories.find((c) => c.id === category);

  return (
    <div className="flex items-end justify-between mb-10">
      <div>
        <p className="text-primary text-xs tracking-[0.4em] uppercase font-medium mb-2">
          {activeCategory ? activeCategory.label : "Todos los productos"}
        </p>
        <h1 className="text-3xl sm:text-4xl font-light text-foreground">
          {activeCategory ? (
            <>
              Nuestra{" "}
              <span className="font-semibold italic">{activeCategory.label}</span>
            </>
          ) : (
            <>
              Catálogo{" "}
              <span className="font-semibold italic">completo</span>
            </>
          )}
        </h1>
      </div>
      <p className="text-sm text-muted-foreground hidden sm:block">
        {total} {total === 1 ? "producto" : "productos"}
      </p>
    </div>
  );
}