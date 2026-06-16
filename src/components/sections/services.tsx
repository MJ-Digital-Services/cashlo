import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/content/services";

export function Services() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title="One platform, every financial service"
          subtitle="From cardless cash to insurance — everything your customers need, in one app."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-card border border-ink/5 bg-white p-6 transition-shadow hover:shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-jade-soft">
                <service.icon className="h-6 w-6 text-jade-deep" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                {service.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-ink-soft">
                    <Check className="h-4 w-4 shrink-0 text-jade" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}