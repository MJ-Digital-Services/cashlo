import { Container } from "@/components/ui/Container";
import { withdrawalLimits } from "@/content/withdrawal-limits";

export function WithdrawalLimits() {
  return (
    <section className="bg-ink py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-pill bg-white/10 px-3 py-1 text-xs font-semibold text-jade">
            Withdrawal Limits
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Clear, transparent UPI Cash limits
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {withdrawalLimits.map((limit) => (
            <div key={limit.label} className="text-center">
              <div className="font-display text-5xl font-bold text-jade sm:text-6xl">
                {limit.amount}
              </div>
              <div className="mt-2 text-sm font-medium uppercase tracking-wide text-white/60">
                {limit.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}