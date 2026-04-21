//Productos destacados

import Link from "next/link";
import { products } from "@/data/products";
import { formatPrice, getDiscountPercentage } from "@/lib/utils/formatters";
import { Badge } from "@/components/ui/badge";

export function FeaturedProducts() {
  const featured = products.filter((p) => p.isFeatured);

  return (
    <section className="bg-secondary/20 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-primary text-xs tracking-[0.4em] uppercase font-medium mb-3">
              Selección
            </p>
            <h2 className="text-3xl sm:text-4xl font-light text-foreground">
              Productos <span className="font-semibold italic">Destacados</span>
            </h2>
          </div>
          <Link
            href="/products"
            className="hidden sm:block text-sm text-muted-foreground hover:text-foreground transition-colors tracking-widest uppercase underline underline-offset-4"
          >
            Ver todos
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group flex flex-col"
            >
              {/* Imagen */}
              <div className="relative overflow-hidden rounded-sm bg-accent aspect-[3/4] mb-4">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${product.images[0]}')` }}
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                  {product.isNew && (
                    <Badge className="bg-primary text-primary-foreground text-[10px] tracking-widest uppercase rounded-sm">
                      Nuevo
                    </Badge>
                  )}
                  {product.originalPrice && (
                    <Badge variant="secondary" className="text-[10px] tracking-widest uppercase rounded-sm">
                      {getDiscountPercentage(product.originalPrice, product.price)}
                    </Badge>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col gap-1">
                <p className="text-xs text-muted-foreground tracking-widest uppercase">
                  {product.category}
                </p>
                <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm font-semibold text-foreground">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xs text-muted-foreground line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Ver todos mobile */}
        <div className="mt-10 text-center sm:hidden">
          <Link
            href="/products"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-widest uppercase underline underline-offset-4"
          >
            Ver todos los productos
          </Link>
        </div>

      </div>
    </section>
  );
}