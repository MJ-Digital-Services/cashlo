import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { HowItWorksStepper } from "./how-it-works-stepper";
import { cashpointSteps } from "@/content/cashpoint-steps";

export function HowItWorks() {
  return (
    <section className="bg-mint py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title="Cash withdrawal in 6 simple steps"
            subtitle="No ATM card, no hassle — just a QR scan and a UPI PIN."
          />
        </Reveal>

        <HowItWorksStepper steps={cashpointSteps} />
      </Container>
    </section>
  );
}