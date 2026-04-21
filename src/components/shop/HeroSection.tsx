//Hero Section

import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-secondary/30">

      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
          
            "url('https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600')",
        }}
      >
        {/* Overlay elegante */}
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <p className="text-primary text-xs tracking-[0.4em] uppercase font-medium mb-6">
            Nueva Colección 2026
          </p>

          {/* Título */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white leading-tight mb-6">
            El lujo en
            <br />
            <span className="font-semibold italic">cada detalle</span>
          </h1>

          {/* Descripción */}
          <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-md">
            Descubre nuestra colección de accesorios. Diseño sofisticado,
            materiales premium y elegancia atemporal.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/products"
              className="px-8 py-3 bg-primary text-primary-foreground text-sm tracking-widest uppercase font-medium hover:bg-primary/90 transition-colors duration-200 rounded-sm"
            >
              Ver Colección
            </Link>
            <Link
              href="/products?category=jewelry"
              className="px-8 py-3 border border-white/60 text-white text-sm tracking-widest uppercase font-medium hover:bg-white/10 transition-colors duration-200 rounded-sm"
            >
              Joyería
            </Link>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 w-full h-1/2 bg-primary animate-bounce" />
        </div>
      </div>

    </section>
  );
}