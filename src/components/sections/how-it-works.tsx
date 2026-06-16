import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cashpointSteps } from "@/content/cashpoint-steps";

export function HowItWorks() {
  return (
    <section className="bg-mint py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="Cash withdrawal in 6 simple steps"
          subtitle="No ATM card, no hassle — just a QR scan and a UPI PIN."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cashpointSteps.map((step) => (
            <div
              key={step.number}
              className="rounded-card border border-ink/5 bg-white p-6 transition-shadow hover:shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-jade font-display text-lg font-bold text-white">
                {step.number}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-1 text-sm text-ink-soft">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}