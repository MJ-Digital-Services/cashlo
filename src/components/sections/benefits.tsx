import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { benefitGroups } from "@/content/benefits";

export function Benefits() {
  return (
    <section className="bg-mint py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Benefits"
            title="A win for customers and retailers alike"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {benefitGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.1}>
              <div className="h-full rounded-card border border-ink/5 bg-white p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-jade-soft">
                    <group.icon className="h-6 w-6 text-jade-deep" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-ink">{group.title}</h3>
                </div>
                <ul className="mt-6 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-ink-soft">
                      <Check className="h-5 w-5 shrink-0 text-jade" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}