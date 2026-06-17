import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { withdrawalLimits } from "@/content/withdrawal-limits";

export function WithdrawalLimits() {
  return (
    <section className="bg-ink py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-pill bg-white/10 px-3 py-1 text-xs font-semibold text-jade">
              Withdrawal Limits
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              Clear, transparent UPI Cash limits
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {withdrawalLimits.map((limit, index) => (
            <Reveal key={limit.label} delay={index * 0.1}>
              <div className="text-center">
                <CountUp
                  value={limit.value}
                  prefix={limit.prefix}
                  className="font-display text-5xl font-bold text-jade sm:text-6xl"
                />
                <div className="mt-2 text-sm font-medium uppercase tracking-wide text-white/60">
                  {limit.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}