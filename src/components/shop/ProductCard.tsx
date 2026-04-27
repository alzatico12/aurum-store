//Tarjeta de producto reutilizable

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { formatPrice, getDiscountPercentage } from "@/lib/utils/formatters";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className="group flex flex-col">

      {/* Imagen */}
      <div className="relative overflow-hidden rounded-sm bg-accent aspect-[3/4] mb-4">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url('${product.images[0]}')` }}
        />

        {/* Out of stock overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
            <span className="text-xs tracking-widest uppercase text-muted-foreground font-medium">
              Agotado
            </span>
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.isNew && (
            <Badge className="bg-primary text-primary-foreground text-[10px] tracking-widest uppercase rounded-sm">
              Nuevo
            </Badge>
          )}
          {product.originalPrice && (
            <Badge
              variant="secondary"
              className="text-[10px] tracking-widest uppercase rounded-sm"
            >
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
  );
}