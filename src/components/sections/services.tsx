import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { featuredService, services } from "@/content/services";

export function Services() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Our Services"
            title="One platform, every financial service"
            subtitle="From cardless cash to insurance — everything your customers need, in one app."
          />
        </Reveal>

        {/* Featured flagship card */}
        <Reveal>
          <div className="mt-12 rounded-card border border-jade-soft bg-mint p-6 transition-colors hover:border-jade/40 sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
              <div className="lg:flex-1">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-jade text-white">
                    <featuredService.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <span className="inline-block rounded-pill border border-jade-soft bg-white px-2.5 py-0.5 text-[11px] font-semibold text-jade-deep">
                      Flagship
                    </span>
                    <h3 className="mt-1 font-display text-xl font-bold text-ink">
                      {featuredService.title}
                    </h3>
                  </div>
                </div>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
                  {featuredService.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 lg:flex-1">
                {featuredService.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-xl border border-jade-soft bg-white px-3 py-2 text-sm text-ink"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Four supporting services */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.08}>
              <div className="group h-full rounded-card border border-ink/5 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-jade/40 hover:shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-jade-soft text-jade-deep transition-colors duration-300 group-hover:bg-jade group-hover:text-white">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-1 text-sm text-ink-soft">{service.items.join(" · ")}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}