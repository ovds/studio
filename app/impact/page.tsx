import ImpactCounters from '@/components/impact-counters';
import { Badge } from '@/components/ui/badge';

export default function ImpactPage() {
  return (
    <>
      <section className="w-full text-center">
        <div className="container">
          {/* Removed small green "Our Impact" badge per content update */}
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline mt-4">
            Our Impact
          </h1>
          <div className="max-w-[800px] mx-auto mt-4 text-muted-foreground md:text-xl space-y-4">
            <p>Here at Reroot, we believe in championing sustainability in everything we do.</p>

            <p>We help your organisation streamline waste management in alignment with the Resource Sustainability Act, and help our local farmers too.</p>

            <p>It's a win-win-win-win-win-win—for us, you, the farmers, consumers, Singapore, and the planet.</p>

            <p className="font-semibold">With your help, this could be our potential impact:</p>

            <div className="mt-8">
              <ImpactCounters />
            </div>
          </div>
        </div>
      </section>


      {/* Removed "Visualizing Our Impact" section per content update */}
    </>
  );
}
