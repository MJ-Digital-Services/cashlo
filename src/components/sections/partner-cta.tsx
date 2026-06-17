"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function PartnerCta() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative overflow-hidden py-24 sm:py-28">
      {/* Parallax image — oversized so movement never reveals edges */}
      <motion.div
        style={{ y: reduce ? 0 : y }}
        className="absolute inset-x-0 -top-[20%] h-[140%]"
      >
        <picture>
          <source media="(min-width: 768px)" srcSet="/hero/slide-cashpoint.png" />
          <img src="/hero/slide-cashpoint.png" alt="" className="h-full w-full object-cover object-bottom" />
        </picture>
      </motion.div>

      {/* Jade brand overlay for tint + legibility */}
      <div className="absolute inset-0 bg-jade-deep/85" />

      {/* Content */}
      <Container className="relative">
        <Reveal>
          <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                Turn your store into a digital banking point
              </h2>
              <p className="mt-3 text-white/80">
                Join Cashlo as a Cashpoint Partner and start earning with every transaction.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <Button href="/become-a-partner" size="lg" className="bg-white text-jade-deep hover:bg-white/90">
                Become a Partner
              </Button>
              <Button href="/download" variant="outline" size="lg">
                Download App
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}