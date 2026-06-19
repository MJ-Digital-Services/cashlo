const TRUST_ITEMS = [
  {
    label: "100% Secure",
    description: "End-to-end encrypted transactions, every time",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
      </svg>
    ),
  },
  {
    label: "RBI Compliant",
    description: "Fully aligned with RBI guidelines and norms",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l8 4v5c0 5-3.5 9-8 11-4.5-2-8-6-8-11V6l8-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "Secure Transactions",
    description: "Bank-grade UPI rails for every single payment",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
        <path d="M6 15h4" />
      </svg>
    ),
  },
  {
    label: "Data Protected",
    description: "Your data and your customers' data, always safe",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
  },
];

export function TrustBand() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand sm:text-sm">
            Trusted by Dukandaars Everywhere
          </span>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl md:text-4xl">
            Aapka Vishwas, Hamari Zimmedari
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.label}
              className="rounded-card border border-border bg-white p-6 text-center transition-shadow duration-200 hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] sm:text-left"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-tint text-brand sm:mx-0">
                <div className="h-6 w-6">{item.icon}</div>
              </div>
              <h3 className="mt-4 text-base font-bold text-ink">{item.label}</h3>
              <p className="mt-1.5 text-sm leading-snug text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}