import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-[480px] overflow-hidden sm:h-[560px] md:h-[600px]">
      {/* Background: red monuments banner, stretched to cover */}
      <div className="absolute inset-0">
        <Image
          src="/hero/cashlo-hero-bg.png"
          alt=""
          fill
          className="object-cover object-[center_85%]"
          priority
        />
      </div>

      <div className="relative mx-auto grid h-full max-w-7xl grid-cols-1 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        {/* Text column */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center md:items-start md:text-left">
          <span className="w-fit rounded-pill bg-white px-4 py-1.5 text-xs font-semibold text-brand shadow-sm">
            Sabhi Payment Services, Ek hi App mein
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            Cashlo ke saath{" "}
            <span className="text-ink">Har Dukandaar</span> ki Pehchaan
          </h1>

          <p className="mt-5 max-w-md text-base text-white/85 sm:text-lg md:mx-0">
            Aapka Vishwas, Aapki Kamai. UPI Cash Point, Recharge, BBPS aur
            Insurance — sab kuch ek hi platform par, real-time commission ke
            saath.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
            <Link
              href="/partner"
              className="w-full rounded-pill bg-white px-7 py-3.5 text-center text-sm font-semibold text-brand shadow-lg shadow-black/10 transition-colors hover:bg-white/90 sm:w-auto"
            >
              Become a Partner
            </Link>
            <Link
              href="/download"
              className="w-full rounded-pill border border-white/40 bg-transparent px-7 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              Download App
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-xs text-white/80 md:justify-start">
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

      {/* Mascot: pinned to the bottom edge of the section, feet touching the boundary */}
      <div className="pointer-events-none absolute -bottom-6 right-0 z-10 hidden h-[105%] w-[42%] md:block lg:w-[38%]">
        <div className="relative mx-auto h-full max-w-7xl">
          <Image
            src="/hero/cashlo-hero-mascot.png"
            alt="Cashlo dukandaar holding phone with UPI app"
            fill
            className="object-contain object-bottom scale-110"
            priority
          />
        </div>
      </div>

      {/* Mascot: mobile version, smaller, still bottom-anchored */}
      <div className="pointer-events-none absolute -bottom-4 left-1/2 z-0 block h-[70%] w-[80%] -translate-x-1/2 opacity-90 md:hidden">
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