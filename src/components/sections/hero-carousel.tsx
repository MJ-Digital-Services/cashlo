"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { HeroSlide } from "@/content/hero-slides";

const upiApps = ["GPay", "PhonePe", "Paytm", "BHIM"];

function SlideContent({ slide }: { slide: HeroSlide }) {
  return (
    <div className="max-w-xl text-white">
      <span className="inline-block rounded-pill bg-jade-soft px-3 py-1 text-xs font-medium text-jade-deep">
        {slide.badge}
      </span>
      <h1 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
        {slide.titleLead} <span className="text-jade">{slide.titleHighlight}</span>
      </h1>
      <p className="mt-4 max-w-md text-base text-white/80">{slide.subtitle}</p>
      <div className="mt-7 flex flex-wrap gap-3">
        <Button href="/download" size="lg">Download App</Button>
        <Button href="/contact" variant="outline" size="lg">Contact Us</Button>
      </div>
      <div className="mt-7 flex flex-wrap items-center gap-2 text-sm text-white/70">
        <span>Works with</span>
        {upiApps.map((app) => (
          <span key={app} className="rounded-md bg-white/10 px-2 py-1 text-xs text-white/90">{app}</span>
        ))}
      </div>
    </div>
  );
}

export function HeroCarousel({ slides }: { slides: HeroSlide[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selected, setSelected] = useState(0);

  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={slide.id} className="min-w-0 flex-[0_0_100%]">
              {/* Stacked on mobile, overlay on md+ */}
              <div className="relative md:h-[clamp(520px,78vh,880px)]">
                {/* One picture = one download: portrait on mobile, landscape on md+ */}
                <div className="relative md:absolute md:inset-0">
                  <picture>
                    <source media="(min-width: 768px)" srcSet={slide.image} />
                    <img
                      src={slide.imageMobile}
                      alt={slide.imageAlt}
                      loading={index === 0 ? "eager" : "lazy"}
                      className="block h-auto w-full md:h-full md:object-cover"
                    />
                  </picture>
                  {/* darken: uniform on mobile, left gradient on desktop */}
                  <div className="absolute inset-0 bg-ink/35 md:bg-transparent md:bg-gradient-to-r md:from-ink/85 md:via-ink/55 md:to-ink/10" />
                </div>

                {/* Text: ink panel on mobile, centered overlay on md+ */}
                <div className="bg-ink pt-10 pb-16 md:absolute md:inset-0 md:flex md:items-center md:bg-transparent md:py-0">
                  <Container>
                    <SlideContent slide={slide} />
                  </Container>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows (desktop) */}
      <button onClick={scrollPrev} aria-label="Previous slide" className="absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur transition-colors hover:bg-white/30 md:block">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6" /></svg>
      </button>
      <button onClick={scrollNext} aria-label="Next slide" className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur transition-colors hover:bg-white/30 md:block">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 18l6-6-6-6" /></svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button key={i} aria-label={`Go to slide ${i + 1}`} onClick={() => scrollTo(i)} className={cn("h-2 rounded-full transition-all", i === selected ? "w-6 bg-jade" : "w-2 bg-white/50 hover:bg-white/80")} />
        ))}
      </div>
    </section>
  );
}