import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function PartnerCta() {
  return (
    <section className="bg-jade py-16">
      <Container>
        <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Turn your store into a digital banking point
            </h2>
            <p className="mt-3 text-white/80">
              Join Cashlo as a Cashpoint Partner and start earning with every transaction.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Button
              href="/become-a-partner"
              size="lg"
              className="bg-white text-jade-deep hover:bg-white/90"
            >
              Become a Partner
            </Button>
            <Button href="/download" variant="outline" size="lg">
              Download App
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}