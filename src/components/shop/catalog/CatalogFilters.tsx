// Filtros del catálogo 

"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { categories } from "@/data/products";
import { ProductCategory } from "@/types";

const priceRanges = [
  { label: "Menos de $100.000", min: 0, max: 100000 },
  { label: "$100.000 – $300.000", min: 100000, max: 300000 },
  { label: "$300.000 – $500.000", min: 300000, max: 500000 },
  { label: "Más de $500.000", min: 500000, max: Infinity },
];

export function CatalogFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeCategory = searchParams.get("category") as ProductCategory | null;
  const activeMin = searchParams.get("min");
  const activeMax = searchParams.get("max");

  function updateFilter(key: string, value: string | null) {
    const params = new URLSearchParams(searchParams.toString());
    if (value === null) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    router.push(`/products?${params.toString()}`);
  }

  function clearFilters() {
    router.push("/products");
  }

  const hasActiveFilters = activeCategory || activeMin || activeMax;

  return (
    <aside className="w-full">

      {/* Header filtros */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-foreground">
          Filtros
        </h2>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-xs text-muted-foreground hover:text-primary transition-colors tracking-wide underline underline-offset-2"
          >
            Limpiar
          </button>
        )}
      </div>

      {/* Categorías */}
      <div className="mb-8">
        <h3 className="text-xs text-muted-foreground tracking-widest uppercase mb-4">
          Categoría
        </h3>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => updateFilter("category", null)}
              className={`text-sm transition-colors w-full text-left ${
                !activeCategory
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Todos
            </button>
          </li>
          {categories.map((cat) => (
            <li key={cat.id}>
              <button
                onClick={() => updateFilter("category", cat.id)}
                className={`text-sm transition-colors w-full text-left ${
                  activeCategory === cat.id
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Separador */}
      <div className="h-px bg-border mb-8" />

      {/* Precio */}
      <div>
        <h3 className="text-xs text-muted-foreground tracking-widest uppercase mb-4">
          Precio
        </h3>
        <ul className="space-y-2">
          {priceRanges.map((range) => {
            const isActive =
              activeMin === String(range.min) &&
              activeMax === String(range.max);
            return (
              <li key={range.label}>
                <button
                  onClick={() => {
                    if (isActive) {
                      updateFilter("min", null);
                      updateFilter("max", null);
                    } else {
                      const params = new URLSearchParams(searchParams.toString());
                      params.set("min", String(range.min));
                      params.set("max", String(range.max));
                      router.push(`/products?${params.toString()}`);
                    }
                  }}
                  className={`text-sm transition-colors w-full text-left ${
                    isActive
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {range.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

    </aside>
  );
}