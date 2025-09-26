import ImpactCharts from '@/components/impact-charts';
import ImpactCounters from '@/components/impact-counters';
import { Badge } from '@/components/ui/badge';

export default function ImpactPage() {
  return (
    <>
      <section className="w-full text-center">
        <div className="container">
          <Badge variant="default" className="text-sm bg-accent text-accent-foreground">Our Impact</Badge>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline mt-4">
            Our Impact
          </h1>
          <div className="max-w-[800px] mx-auto mt-4 text-muted-foreground md:text-xl space-y-4">
            <p className="text-lg font-semibold">Championing a Circular Economy, laying one root at a time.</p>

            <p>Here at Reroot, we believe in championing sustainability in everything we do. With our Semakau landfill almost full, sustainability is an existential threat that we urgently need to address.</p>

            <p>We help your organisation not only streamline their waste management in alignment with the recent amendments to the Resource Sustainability Act, but do good for our local farmers.</p>

            <p>It's a win-win-win-win-win-win—for us, you, the farmers, consumers, Singapore, and the planet.</p>

            <p className="font-semibold">With your help, this could be our potential impact:</p>

            <div className="mt-8">
              <ImpactCounters />
            </div>
          </div>
        </div>
      </section>


      <section className="w-full">
        <div className="container">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Visualizing Our Impact</h2>
             <p className="max-w-[700px] mx-auto mt-4 text-muted-foreground md:text-lg">
                Data-driven insights into our sustainability efforts.
             </p>
           </div>
          <ImpactCharts />
        </div>
      </section>
    </>
  );
}
