//Links de navegación
import Link from "next/link";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/products", label: "Catálogo" },
  { href: "/products?category=jewelry", label: "Joyería" },
  { href: "/products?category=bags", label: "Bolsos" },
  { href: "/products?category=watches", label: "Relojes" },
];

export function NavLinks() {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}