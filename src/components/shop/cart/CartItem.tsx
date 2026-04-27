// ============================================
// Item individual del carrito
// ============================================

"use client";

import { Minus, Plus, X } from "lucide-react";
import { formatPrice } from "@/lib/utils/formatters";
import { useCart } from "@/context/CartContext";
import { CartItem as CartItemType } from "@/types";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();
  const { product, quantity } = item;

  return (
    <div className="flex gap-4 py-4 border-b border-border">

      {/* Imagen */}
      <div
        className="w-20 h-24 rounded-sm bg-accent bg-cover bg-center shrink-0"
        style={{ backgroundImage: `url('${product.images[0]}')` }}
      />

      {/* Info */}
      <div className="flex-1 flex flex-col gap-1">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs text-muted-foreground tracking-widest uppercase">
              {product.category}
            </p>
            <p className="text-sm font-medium text-foreground mt-0.5">
              {product.name}
            </p>
          </div>
          <button
            onClick={() => removeItem(product.id)}
            className="text-muted-foreground hover:text-foreground transition-colors p-1"
            aria-label="Eliminar producto"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Precio y cantidad */}
        <div className="flex items-center justify-between mt-auto pt-2">
          <div className="flex items-center gap-2 border border-border rounded-sm">
            <button
              onClick={() => updateQuantity(product.id, quantity - 1)}
              disabled={quantity <= 1}
              className="p-1.5 text-muted-foreground hover:text-foreground transition-colors disabled:opacity-30"
              aria-label="Reducir cantidad"
            >
              <Minus className="h-3 w-3" />
            </button>
            <span className="text-sm w-6 text-center">{quantity}</span>
            <button
              onClick={() => updateQuantity(product.id, quantity + 1)}
              className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Aumentar cantidad"
            >
              <Plus className="h-3 w-3" />
            </button>
          </div>
          <span className="text-sm font-semibold">
            {formatPrice(product.price * quantity)}
          </span>
        </div>
      </div>

    </div>
  );
}