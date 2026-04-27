// ============================================
//Botón del carrito conectado al context
// ============================================

"use client";

import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

export function CartButton() {
  const { totalItems, openCart } = useCart();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative cursor-pointer"
      aria-label="Abrir carrito"
      onClick={openCart}
    >
      <ShoppingBag className="h-5 w-5" />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-primary-foreground text-[10px] font-medium flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </Button>
  );
}