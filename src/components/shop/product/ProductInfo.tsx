//Info del producto (Client Component)

"use client";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { ShoppingBag, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { formatPrice, getDiscountPercentage } from "@/lib/utils/formatters";
import { Product } from "@/types";

interface ProductInfoProps {
    product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
    const { addItem } = useCart();
    const [added, setAdded] = useState(false);

    function handleAddToCart() {
        addItem(product);
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    }
    return (
        <div className="flex flex-col gap-6">

            {/* Categoría y badges */}
            <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground tracking-widest uppercase">
                    {product.category}
                </span>
                {product.isNew && (
                    <Badge className="bg-primary text-primary-foreground text-[10px] tracking-widest uppercase rounded-sm">
                        Nuevo
                    </Badge>
                )}
            </div>

            {/* Nombre */}
            <h1 className="text-3xl sm:text-4xl font-light text-foreground leading-tight">
                {product.name}
            </h1>

            {/* Precio */}
            <div className="flex items-center gap-3">
                <span className="text-2xl font-semibold text-foreground">
                    {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                    <>
                        <span className="text-lg text-muted-foreground line-through">
                            {formatPrice(product.originalPrice)}
                        </span>
                        <Badge variant="secondary" className="text-[10px] tracking-widest uppercase rounded-sm">
                            {getDiscountPercentage(product.originalPrice, product.price)}
                        </Badge>
                    </>
                )}
            </div>

            <Separator />

            {/* Descripción */}
            <p className="text-muted-foreground leading-relaxed">
                {product.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                    <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-sm bg-accent text-muted-foreground tracking-wide"
                    >
                        #{tag}
                    </span>
                ))}
            </div>

            <Separator />

            {/* Stock */}
            <p className={`text-sm tracking-wide ${product.inStock ? "text-green-600" : "text-destructive"}`}>
                {product.inStock ? "✓ Disponible en stock" : "✗ Agotado"}
            </p>

            {/* Botón agregar al carrito */}
            <Button
                onClick={handleAddToCart}
                disabled={!product.inStock || added}
                className="w-full py-6 text-sm tracking-widest uppercase rounded-sm cursor-pointer"
            >
                {added ? (
                    <span className="flex items-center gap-2">
                        <Check className="h-4 w-4" />
                        Agregado al carrito
                    </span>
                ) : (
                    <span className="flex items-center gap-2">
                        <ShoppingBag className="h-4 w-4" />
                        {product.inStock ? "Agregar al carrito" : "Agotado"}
                    </span>
                )}
            </Button>

            {/* Info adicional */}
            <div className="grid grid-cols-2 gap-4 pt-2">
                {[
                    { label: "Envío", value: "Gratis desde $200.000" },
                    { label: "Devolución", value: "30 días" },
                    { label: "Garantía", value: "6 meses" },
                    { label: "Pago", value: "Cuotas disponibles" },
                ].map(({ label, value }) => (
                    <div key={label}>
                        <p className="text-xs text-muted-foreground tracking-widest uppercase mb-1">
                            {label}
                        </p>
                        <p className="text-sm text-foreground">{value}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}