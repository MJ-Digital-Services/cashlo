import { HeroCarousel } from "./hero-carousel";
import { heroSlides } from "@/content/hero-slides";

export function Hero() {
  return <HeroCarousel slides={heroSlides} />;
}