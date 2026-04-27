// ============================================
// AURUM - Sidebar del carrito
// ============================================

"use client";

import { X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/utils/formatters";
import { useCart } from "@/context/CartContext";
import { CartItem } from "./CartItem";

export function CartSidebar() {
  const { items, isOpen, closeCart, totalItems, totalPrice, clearCart } =
    useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-foreground/30 z-40 backdrop-blur-sm"
          onClick={closeCart}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-background z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-4 w-4" />
            <h2 className="text-sm font-semibold tracking-widest uppercase">
              Carrito
            </h2>
            {totalItems > 0 && (
              <span className="text-xs text-muted-foreground">
                ({totalItems})
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Cerrar carrito"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="h-12 w-12 text-muted-foreground/30" />
              <p className="text-sm text-muted-foreground tracking-wide">
                Tu carrito está vacío
              </p>
            </div>
          ) : (
            <div>
              {items.map((item) => (
                <CartItem key={item.product.id} item={item} />
              ))}
              {items.length > 1 && (
                <button
                  onClick={clearCart}
                  className="text-xs text-muted-foreground hover:text-destructive transition-colors tracking-wide underline underline-offset-2 mt-4"
                >
                  Vaciar carrito
                </button>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-border">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted-foreground tracking-wide">
                Subtotal
              </span>
              <span className="text-lg font-semibold">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <p className="text-xs text-muted-foreground mb-4 text-center">
              Envío calculado al finalizar la compra
            </p>
            <Button className="w-full py-6 text-sm tracking-widest uppercase rounded-sm">
              Finalizar compra
            </Button>
            <Separator className="my-4" />
            <button
              onClick={closeCart}
              className="w-full text-xs text-muted-foreground hover:text-foreground transition-colors tracking-widest uppercase"
            >
              Continuar comprando
            </button>
          </div>
        )}
      </div>
    </>
  );
}