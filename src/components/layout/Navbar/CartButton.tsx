// ============================================
// AURUM - Botón del carrito
// ============================================

"use client";

import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CartButtonProps {
  itemCount?: number;
}

export function CartButton({ itemCount = 0 }: CartButtonProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative cursor-pointer"
      aria-label="Abrir carrito"
    >
      <ShoppingBag className="h-5 w-5" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-primary-foreground text-[10px] font-medium flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </Button>
  );
}