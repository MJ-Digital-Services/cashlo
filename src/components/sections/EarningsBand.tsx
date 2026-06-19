"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { label: "Today's Commission", value: 325.6, prefix: "₹", decimals: 2 },
  { label: "This Month", value: 4758.9, prefix: "₹", decimals: 2 },
  { label: "Total Transactions", value: 248, prefix: "", decimals: 0 },
];

// Last 7 "days" of commission earned, for the trend bar chart
const TREND = [180, 220, 160, 290, 240, 310, 325.6];

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

function useCountUp(target: number, inView: boolean, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start: number | null = null;
    let frame: number;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, target, duration]);

  return value;
}

function StatCard({
  label,
  value,
  prefix,
  decimals,
  inView,
}: {
  label: string;
  value: number;
  prefix: string;
  decimals: number;
  inView: boolean;
}) {
  const animated = useCountUp(value, inView);

  return (
    <div className="rounded-card border-2 border-brand/15 bg-white p-6 shadow-sm transition-colors hover:border-brand/30">
      <p className="text-sm font-medium text-muted">{label}</p>
      <p className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        {prefix}
        {animated.toLocaleString("en-IN", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })}
      </p>
      <p className="mt-2 flex items-center gap-1 text-xs font-medium text-success">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12l7-7 7 7M12 5v14" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        18.6% vs last period
      </p>
    </div>
  );
}

function TrendChart({ inView }: { inView: boolean }) {
  const max = Math.max(...TREND);

  return (
    <div className="rounded-card border-2 border-brand/15 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-ink">Commission Trend</p>
        <p className="text-xs text-muted">Last 7 days</p>
      </div>

      <div className="mt-6 flex h-32 items-stretch justify-between gap-2 sm:gap-3">
        {TREND.map((val, i) => {
            const heightPct = (val / max) * 100;
            const isLast = i === TREND.length - 1;
            return (
            <div key={i} className="flex flex-1 flex-col items-center justify-end gap-2">
              <div className="relative flex h-full w-full items-end overflow-hidden rounded-t-md bg-brand-tint">
                <div
                  className={`w-full rounded-t-md transition-[height] duration-700 ease-out ${
                    isLast ? "bg-brand" : "bg-brand/50"
                  }`}
                  style={{
                    height: inView ? `${heightPct}%` : "0%",
                    transitionDelay: `${i * 80}ms`,
                  }}
                />
              </div>
              <span className="text-[10px] font-medium text-muted">D{i + 1}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function EarningsBand() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section ref={ref} className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            Real-Time Earnings
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Aapki Kamai, Real-time mein
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} inView={inView} />
          ))}
        </div>

        <div className="mt-5">
          <TrendChart inView={inView} />
        </div>
      </div>
    </section>
  );
}