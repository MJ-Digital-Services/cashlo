"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Volume2, Rss, Radio, Wifi } from "lucide-react";

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
    <section ref={ref} className="bg-brand-tint py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Image column */}
        <div className="relative mx-auto flex justify-center pb-6 pt-2">
        <div className="relative h-[340px] w-[420px] sm:h-[420px] sm:w-[520px]">
            <Image
            src="/sound-box/cashlo-sound-box.png"
            alt="Cashlo UPI Sound Box device"
            fill
            className="object-contain"
            />

            {/* Sound wave icon, positioned near the speaker grille on the device's right side */}
            {/* <div className="absolute right-[6%] top-[58%] flex h-14 w-14 items-center justify-center">
                <Volume2 className="h-35 w-35 rotate-[40deg] text-brand" strokeWidth={1.5} />
            </div> */}
        </div>

        {/* Floating toast - red speech-bubble style */}
        <div
            className={`absolute -right-3 top-2 max-w-[150px] rounded-2xl rounded-bl-sm bg-brand px-4 py-3 text-center shadow-lg transition-all duration-500 sm:right-3 sm:top-6 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
        >
            <p className="text-sm font-semibold leading-snug text-white">
            Payment Received
            </p>
            <p className="mt-0.5 text-lg font-extrabold text-white">₹500</p>
        </div>

        
        </div>

          {/* Text column */}
          <div className="text-center md:text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">
              Dynamic UPI Sound Box
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Har payment ka, turant awaaz ke saath confirmation
            </h2>
            <p className="mt-4 max-w-md text-base text-muted sm:mx-0 sm:text-lg">
              Cashlo ka UPI Sound Box har transaction ko loud aur clear announce
              karta hai — ab customer ko dikhana nahi padega screen, bas sun lo
              aur kaam jaari rakho.
            </p>

            <ul className="mt-6 space-y-3 text-left">
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

            <button className="mt-7 rounded-pill bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition-colors hover:bg-brand-dark">
              Activate Sound Box
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}