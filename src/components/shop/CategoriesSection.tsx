// Sección de categorías

import Link from "next/link";
import { categories } from "@/data/products";

export function CategoriesSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-primary text-xs tracking-[0.4em] uppercase font-medium mb-3">
          Explorar
        </p>
        <h2 className="text-3xl sm:text-4xl font-light text-foreground">
          Nuestras <span className="font-semibold italic">Categorías</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/products?category=${category.id}`}
            className="group relative overflow-hidden rounded-sm aspect-square"
          >
            {/* Imagen */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url('${category.imageUrl}')` }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/50 transition-colors duration-300" />

            {/* Texto */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h3 className="text-lg font-semibold tracking-widest uppercase">
                {category.label}
              </h3>
              <p className="text-xs text-white/70 mt-1 tracking-wide">
                {category.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}