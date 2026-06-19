import Image from "next/image";

const SERVICES = [
  { label: "UPI Cash Point", icon: "upi-cash-point" },
  { label: "Mobile Recharge", icon: "mobile-recharge" },
  { label: "DTH Recharge", icon: "dth-recharge" },
  { label: "BBPS", icon: "bbps" },
  { label: "Electricity", icon: "electricity" },
  { label: "Cylinder Gas", icon: "cylinder-gas" },
  { label: "Piped Gas", icon: "piped-gas" },
  { label: "Water", icon: "water" },
  { label: "More", icon: "more" },
];

export function QuickServices() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            Quick Services
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Sabhi Payment Services, Ek hi App mein
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:gap-5">
          {SERVICES.map((service) => (
            <button
              key={service.label}
              type="button"
              className="group flex flex-col items-center gap-2.5 rounded-card p-3 text-center transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-[0_4px_16px_-2px_rgba(0,0,0,0.08)] sm:gap-3 sm:p-5 md:p-6"
            >
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-tint transition-colors duration-200 group-hover:bg-brand/10 sm:h-14 sm:w-14 md:h-16 md:w-16">
                <div className="relative h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8">
                  <Image
                    src={`/services/${service.icon}.png`}
                    alt={service.label}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <span className="text-[11px] font-semibold leading-tight text-ink sm:text-xs md:text-sm">
                {service.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}