"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

const BENEFITS = [
  "Har payment par turant awaaz mein confirmation",
  "No more 'paisa aaya ya nahi' confusion",
  "Plug & play setup — koi technical jhanjhat nahi",
];

export function SoundBoxSection() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section ref={ref} className="bg-brand-tint py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* Image column */}
          <div className="relative mx-auto flex w-full max-w-[360px] justify-center pb-6 pt-2 sm:max-w-[420px] md:max-w-none">
            <div className="relative aspect-[5/4] w-full max-w-[320px] sm:max-w-[400px] md:max-w-[440px] lg:max-w-[500px]">
              <Image
                src="/sound-box/cashlo-sound-box.png"
                alt="Cashlo UPI Sound Box device"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 80vw, 40vw"
              />

              {/* Sound wave icon (Wifi arcs, dot omitted), positioned near the speaker grille */}
              <div className="absolute right-[6%] top-[58%] flex h-[12%] w-[12%] min-h-8 min-w-8 items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-full w-full rotate-[60deg] text-brand"
                >
                  <path d="M5 13a10 10 0 0 1 14 0" />
                  <path d="M8.5 16.5a5 5 0 0 1 7 0" />
                  <path d="M2 8.82a15 15 0 0 1 20 0" />
                </svg>
              </div>

              {/* Floating toast - red speech-bubble style, uniform radius, tail at bottom-left */}
              <div
                className={`absolute -right-1 top-0 transition-all duration-500 sm:right-1 sm:top-2 md:-right-2 md:top-0 ${
                  inView ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                <div className="relative max-w-[110px] rounded-2xl bg-brand px-3 py-2 text-center shadow-lg sm:max-w-[130px] sm:px-4 sm:py-2.5 md:max-w-[150px] md:py-3">
                  <p className="text-xs font-semibold leading-snug text-white sm:text-sm">
                    Payment Received
                  </p>
                  <p className="mt-0.5 text-base font-extrabold text-white sm:text-lg">
                    ₹500
                  </p>
                  {/* Speech-bubble tail, tucked under the bottom-left corner */}
                  <div className="absolute -bottom-1.5 left-5 -z-10 h-3.5 w-3.5 rotate-45 bg-brand sm:left-6 sm:h-4 sm:w-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="text-center md:text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand sm:text-sm">
              Dynamic UPI Sound Box
            </span>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl md:text-4xl lg:text-[2.75rem]">
              Har payment ka, turant awaaz ke saath confirmation
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-muted sm:text-base md:mx-0 lg:text-lg">
              Cashlo ka UPI Sound Box har transaction ko loud aur clear announce
              karta hai — ab customer ko dikhana nahi padega screen, bas sun lo
              aur kaam jaari rakho.
            </p>

            <ul className="mx-auto mt-6 max-w-md space-y-3 text-left md:mx-0">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-sm text-ink/80 sm:text-base">{benefit}</span>
                </li>
              ))}
            </ul>

            <button className="mt-7 w-full rounded-pill bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition-colors hover:bg-brand-dark sm:w-auto">
              Activate Sound Box
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}