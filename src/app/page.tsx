// AURUM - Home Page

import { HeroSection } from "@/components/shop/HeroSection";
import { CategoriesSection } from "@/components/shop/CategoriesSection";
import { FeaturedProducts } from "@/components/shop/FeaturedProducts";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
    </>
  );
}