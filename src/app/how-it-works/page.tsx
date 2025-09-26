import HowItWorksFlow from "@/components/how-it-works-flow";
import { Badge } from "@/components/ui/badge";

export default function HowItWorksPage() {
  return (
    <>
        <section className="w-full text-center">
            <div className="container">
                <Badge variant="outline" className="text-sm">The Ecosystem</Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline mt-4">
                    From Kitchen to Farm, and Back Again
                </h1>
                <p className="max-w-[800px] mx-auto mt-4 text-muted-foreground md:text-xl">
                    Follow your waste as we re-root it from the landfill to your plate!
                </p>
            </div>
        </section>

        <section className="w-full">
            <div className="container">
                <HowItWorksFlow />
            </div>
        </section>
    </>
  );
}
