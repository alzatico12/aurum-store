// ============================================
// AURUM - Navbar principal
// ============================================

import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLinks } from "./NavLinks";
import { CartButton } from "./CartButton";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-semibold tracking-[0.3em] uppercase text-foreground">
              AURUM
            </span>
            <span className="ml-1 text-primary text-2xl leading-none">·</span>
          </Link>

          {/* Links - centro */}
          <NavLinks />

          {/* Acciones - derecha */}
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Buscar"
              className="cursor-pointer"
            >
              <Search className="h-5 w-5" />
            </Button>
            <CartButton itemCount={0} />
          </div>

        </div>
      </div>
    </header>
  );
}