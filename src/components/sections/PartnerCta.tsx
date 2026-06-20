import Image from "next/image";

export function PartnerCta() {
  return (
    <section className="relative overflow-hidden bg-brand pt-10 pb-0 sm:pt-12 sm:pb-0 md:h-[440px] md:py-0 lg:h-[480px]">
      <div className="mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:h-full md:grid-cols-2 md:items-center md:gap-8">
          {/* Text column */}
          <div className="relative z-10 text-center md:text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-white/70 sm:text-sm">
              Become a Partner
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-[2.75rem]">
              Dukandaar ki Dukaan,{" "}
              <span className="text-ink">Digital Pehchaan</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base text-white/85 sm:text-lg md:mx-0">
              Apni dukaan ko digital banayein — UPI Cash Point, recharge,
              BBPS aur real-time commission ke saath. Aaj hi Cashlo partner
              banein.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
              <button className="w-full rounded-pill bg-white px-7 py-3.5 text-center text-sm font-semibold text-brand shadow-lg shadow-black/10 transition-colors hover:bg-white/90 sm:w-auto">
                Become a Partner
              </button>
              <button className="w-full rounded-pill border border-white/40 bg-transparent px-7 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto">
                Talk to Us
              </button>
            </div>
          </div>

          {/* Mascot column — mobile only, normal flow */}
        <div className="relative mx-auto flex w-full max-w-[420px] justify-center pb-0 pt-2 md:hidden">
            <div
                className="relative aspect-[5/4] w-full max-w-[380px]"
                style={{ transform: "scale(1.25)" }}
            >
                <Image
                src="/partner-cta/cashlo-partner-mascot.png"
                alt="Cashlo dukandaar standing outside his shop"
                fill
                className="object-contain"
                sizes="90vw"
                />
            </div>
            </div>
        </div>
      </div>

      {/* Mascot — desktop/tablet, pinned to bottom-right of the section, spanning ~half the section width */}
      <div className="pointer-events-none absolute bottom-25 right-0 hidden h-auto w-[52%] md:block lg:w-[50%]" style={{transform: "scale(1.3)"}}>
        <div className="relative aspect-[5/4] w-full">
          <Image
            src="/partner-cta/cashlo-partner-mascot.png"
            alt="Cashlo dukandaar standing outside his shop"
            fill
            className="object-contain object-bottom"
            sizes="50vw"
          />
        </div>
      </div>
    </section>
  );
}