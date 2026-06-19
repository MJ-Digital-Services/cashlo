import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand md:h-[600px]">
      {/* Background: red monuments banner, stretched to cover (desktop/tablet only) */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/hero/cashlo-hero-bg.png"
          alt=""
          fill
          className="object-cover object-[center_85%]"
          priority
        />
      </div>

      {/* ----- MOBILE LAYOUT: stacked, mascot first, normal flow ----- */}
      <div className="relative flex flex-col items-center px-4 pt-10 text-center md:hidden">
        <div className="relative h-[280px] w-[280px] sm:h-[340px] sm:w-[340px]">
          <Image
            src="/hero/cashlo-hero-mascot.png"
            alt="Cashlo dukandaar holding phone with UPI app"
            fill
            className="object-contain"
            priority
          />
        </div>

        <span className="mt-4 w-fit rounded-pill bg-white px-4 py-1.5 text-xs font-semibold text-brand shadow-sm">
          Sabhi Payment Services, Ek hi App mein
        </span>

        <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
          Cashlo ke saath{" "}
          <span className="text-ink">Har Dukandaar</span> ki Pehchaan
        </h1>

        <p className="mt-4 max-w-md text-base text-white/85">
          Aapka Vishwas, Aapki Kamai. UPI Cash Point, Recharge, BBPS aur
          Insurance — sab kuch ek hi platform par, real-time commission ke
          saath.
        </p>

        <div className="mt-7 flex w-full flex-col items-center gap-3">
          <Link
            href="/partner"
            className="w-full max-w-xs rounded-pill bg-white px-7 py-3.5 text-center text-sm font-semibold text-brand shadow-lg shadow-black/10 transition-colors hover:bg-white/90"
          >
            Become a Partner
          </Link>
          <Link
            href="/download"
            className="w-full max-w-xs rounded-pill border border-white/40 bg-transparent px-7 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Download App
          </Link>
        </div>

        <div className="mb-10 mt-6 flex items-center justify-center gap-6 text-xs text-white/80">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            RBI Compliant
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            100% Secure
          </span>
        </div>
      </div>

      {/* ----- DESKTOP/TABLET LAYOUT: overlay, text left, mascot pinned bottom-right ----- */}
      <div className="relative mx-auto hidden h-full max-w-7xl grid-cols-2 px-6 md:grid lg:px-8">
        <div className="relative z-10 flex flex-col items-start justify-center text-left">
          <span className="w-fit rounded-pill bg-white px-4 py-1.5 text-xs font-semibold text-brand shadow-sm">
            Sabhi Payment Services, Ek hi App mein
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-white lg:text-5xl">
            Cashlo ke saath{" "}
            <span className="text-ink">Har Dukandaar</span> ki Pehchaan
          </h1>

          <p className="mt-5 max-w-md text-base text-white/85 lg:text-lg">
            Aapka Vishwas, Aapki Kamai. UPI Cash Point, Recharge, BBPS aur
            Insurance — sab kuch ek hi platform par, real-time commission ke
            saath.
          </p>

          <div className="mt-8 flex flex-row gap-3">
            <Link
              href="/partner"
              className="rounded-pill bg-white px-7 py-3.5 text-center text-sm font-semibold text-brand shadow-lg shadow-black/10 transition-colors hover:bg-white/90"
            >
              Become a Partner
            </Link>
            <Link
              href="/download"
              className="rounded-pill border border-white/40 bg-transparent px-7 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Download App
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-6 text-xs text-white/80">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              RBI Compliant
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              100% Secure
            </span>
          </div>
        </div>
      </div>

      {/* Mascot: pinned to bottom-right of the section, sized in viewport units so it scales smoothly across md/lg/xl instead of jumping at breakpoints */}
      <div className="pointer-events-none absolute -bottom-6 right-0 z-10 hidden h-[42vw] max-h-[105%] min-h-[460px] w-[42vw] min-w-[460px] max-w-[640px] md:block">
        <Image
          src="/hero/cashlo-hero-mascot.png"
          alt="Cashlo dukandaar holding phone with UPI app"
          fill
          className="object-contain object-bottom scale-110"
          priority
        />
      </div>
    </section>
  );
}