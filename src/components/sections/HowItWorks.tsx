const STEPS = [
  {
    label: "Enter Amount",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="6" width="18" height="13" rx="2" />
        <path d="M3 10h18" />
        <path d="M8 15h.01M12 15h4" />
      </svg>
    ),
  },
  {
    label: "Generate QR",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <path d="M14 14h3v3M14 21h7v-4M21 14v3" />
      </svg>
    ),
  },
  {
    label: "Customer Pays",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M9 18h6" />
        <path d="M9 7l3 3 3-3" />
        <path d="M12 6v4" />
      </svg>
    ),
  },
  {
    label: "Earn Commission",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <section className="bg-brand-tint py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand sm:text-sm">
            How It Works
          </span>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl md:text-4xl">
            Char Step Mein, Kamai Shuru
          </h2>
        </div>

        <div className="relative mt-10 flex flex-col items-center gap-8 sm:grid sm:grid-cols-4 sm:gap-x-4 sm:gap-y-0">
          {STEPS.map((step, i) => (
            <div key={step.label} className="relative flex flex-col items-center gap-3 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-brand shadow-sm sm:h-20 sm:w-20">
                <div className="h-7 w-7 sm:h-9 sm:w-9">{step.icon}</div>
              </div>
              <span className="text-sm font-semibold text-ink sm:text-base">
                {step.label}
              </span>

              {/* Connector to next step — horizontal arrow on desktop's single row, vertical arrow on mobile's single column */}
              {i < STEPS.length - 1 && (
                <>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="absolute left-full top-7 hidden h-6 w-6 -translate-x-1/2 text-brand/40 sm:block sm:top-9"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="absolute -bottom-8 left-1/2 block h-6 w-6 -translate-x-1/2 text-brand/40 sm:hidden"
                  >
                    <path d="M12 5v14M6 13l6 6 6-6" />
                  </svg>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}