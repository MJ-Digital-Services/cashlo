import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { benefitGroups } from "@/content/benefits";
import { cn } from "@/lib/utils";

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
          {benefitGroups.map((group, index) => {
            const isFirst = index === 0;
            return (
              <Reveal key={group.title} delay={index * 0.1}>
                <div className="h-full overflow-hidden rounded-card border border-ink/5 bg-white">
                  {/* Coloured header */}
                  <div
                    className={cn(
                      "flex items-center justify-between p-6",
                      isFirst ? "bg-jade" : "bg-ink",
                    )}
                  >
                    <div>
                      <h3 className="font-display text-xl font-bold text-white">
                        {group.title}
                      </h3>
                      <p
                        className={cn(
                          "mt-1 text-sm",
                          isFirst ? "text-jade-soft" : "text-white/60",
                        )}
                      >
                        {group.tagline}
                      </p>
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                      <group.icon
                        className={cn("h-7 w-7", isFirst ? "text-white" : "text-jade")}
                      />
                    </div>
                  </div>

                  {/* Checklist */}
                  <ul className="space-y-3 p-6">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-ink-soft">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-jade-soft">
                          <Check className="h-3 w-3 text-jade-deep" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}