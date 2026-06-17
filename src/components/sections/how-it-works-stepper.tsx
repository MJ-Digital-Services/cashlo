"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import type { CashpointStep } from "@/content/cashpoint-steps";

export function HowItWorksStepper({ steps }: { steps: CashpointStep[] }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.6"],
  });
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative mt-14">
      {/* Center line — desktop */}
      <div className="absolute left-1/2 top-0 bottom-0 hidden w-0.5 -translate-x-1/2 md:block">
        <div className="absolute inset-0 bg-jade-soft" />
        <motion.div
          className="absolute inset-x-0 top-0 h-full origin-top bg-jade"
          style={{ scaleY: reduce ? 1 : lineScaleY }}
        />
      </div>

      {/* Left line — mobile */}
      <div className="absolute left-[21px] top-0 bottom-0 w-0.5 md:hidden">
        <div className="absolute inset-0 bg-jade-soft" />
        <motion.div
          className="absolute inset-x-0 top-0 h-full origin-top bg-jade"
          style={{ scaleY: reduce ? 1 : lineScaleY }}
        />
      </div>

      <ol className="space-y-14 md:space-y-0">
        {steps.map((s, i) => {
          const illusLeft = i % 2 === 0;
          return (
            <motion.li
              key={s.number}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative pl-16 md:grid md:grid-cols-2 md:items-center md:gap-16 md:py-8 md:pl-0"
            >
              {/* Node */}
              <div className="absolute left-[22px] top-0 z-10 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border-4 border-mint bg-jade font-display text-base font-bold text-white md:left-1/2 md:top-1/2 md:-translate-y-1/2">
                {s.number}
              </div>

              {/* Illustration */}
              <div
                className={cn(
                  "flex",
                  illusLeft ? "md:order-1 md:justify-end" : "md:order-2 md:justify-start",
                )}
              >
                <div className="w-full max-w-sm rounded-3xl border border-jade-soft bg-white p-8">
                  <img src={s.illustration} alt="" className="mx-auto max-h-48 w-auto" />
                </div>
              </div>

              {/* Text */}
              <div
                className={cn(
                  "mt-6 md:mt-0 md:flex md:flex-col md:justify-center",
                  illusLeft
                    ? "md:order-2 md:items-start md:text-left"
                    : "md:order-1 md:items-end md:text-right",
                )}
              >
                <h3 className="font-display text-xl font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-ink-soft">{s.description}</p>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}