// AURUM - Footer

import Link from "next/link";
import { FaInstagram as Instagram, FaXTwitter as Twitter, FaFacebookF as Facebook } from "react-icons/fa6";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  tienda: [
    { href: "/products", label: "Catálogo" },
    { href: "/products?category=jewelry", label: "Joyería" },
    { href: "/products?category=bags", label: "Bolsos" },
    { href: "/products?category=watches", label: "Relojes" },
  ],
  ayuda: [
    { href: "/faq", label: "Preguntas frecuentes" },
    { href: "/shipping", label: "Envíos y devoluciones" },
    { href: "/contact", label: "Contáctanos" },
  ],
  legal: [
    { href: "/privacy", label: "Privacidad" },
    { href: "/terms", label: "Términos y condiciones" },
  ],
};

const socialLinks = [
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Marca */}
          <div className="md:col-span-1">
            <Link href="/">
              <span className="text-xl font-semibold tracking-[0.3em] uppercase">
                Aurum
              </span>
              <span className="ml-1 text-primary text-2xl leading-none">·</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Accesorios de lujo accesible. Diseño, calidad y elegancia para tu
              estilo de vida.
            </p>

            {/* Redes sociales */}
            <div className="flex items-center gap-4 mt-6">
                
              {socialLinks.map(({ href, icon: Icon, label }) => (
                 <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links - Tienda */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-foreground mb-4">
              Tienda
            </h3>
            <ul className="space-y-3">
              {footerLinks.tienda.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links - Ayuda */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-foreground mb-4">
              Ayuda
            </h3>
            <ul className="space-y-3">
              {footerLinks.ayuda.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-foreground mb-4">
              Newsletter
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Recibe novedades y ofertas exclusivas.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full px-3 py-2 text-sm bg-background border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-muted-foreground"
              />
              <button className="w-full px-3 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors duration-200 tracking-widest uppercase font-medium">
                Suscribirse
              </button>
            </div>
          </div>

        </div>

        <Separator className="my-10" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Aurum. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}