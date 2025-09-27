import BinModel from '@/components/bin-model';
import WasteClassifier from '@/components/waste-classifier';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';

const features = [
  {
    title: 'Waste Identification and Tracking',
    description: 'Our cutting-edge waste-recognition software and sensors tracks the type of food being wasted and seamlessly transfers this valuable data to an easy-to-access database to provide insights on how much wasted food is produced. Knowledge is power.'
  },
  {
    title: 'Automatic Waste Classification',
    description: 'This waste is also classified as \'brown\' (carbon-rich items like paper or twigs) or \'green\' (nitrogen-rich items like fruit and veggie scraps) for easy composting. Simply top up to the necessary amounts and hit ideal green-to-brown ratios: no hassle, no fuss.',
    images: [
      {
        type: 'green',
        src: 'https://help.gardeningexpress.co.uk/wp-content/uploads/2023/06/7-2.jpg',
        alt: 'Green waste - nitrogen-rich organic materials like fruit and vegetable scraps'
      },
      {
        type: 'brown',
        src: '/brownwaste.png',
        alt: 'Brown waste - carbon-rich organic materials like paper and dry materials'
      }
    ]
  },
  {
    title: 'Odorless Composting',
    description: 'Scared of the smell? Don\'t worry. Our bin\'s design prevents any unpleasant from leaving it. Dispose responsibly, forget promptly.'
  },
  {
    title: 'Providing Predictive Analytics',
    description: 'Our AI software uses historical data to forecast future waste generation, thereby recommending measures to optimise inventory and procurement, as well as total food production (which dishes were most overproduced?). Save money, brain space, and the planet.'
  }
];

export default function ProductPage() {
  return (
    <>
      <section className="w-full bg-secondary/30">
        <div className="container text-center">
          <Badge variant="outline" className="text-sm">Our Innovation</Badge>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline mt-4">
            The Reroot Smart Bin
          </h1>
          <div className="max-w-[700px] mx-auto mt-4 space-y-4">
            <div className="bg-accent/30 border border-accent/50 rounded-lg p-4">
              <p className="text-accent-foreground font-semibold text-lg">
                Environmental Goal: Reduce the waste sent to landfill by 30% by 2030
              </p>
            </div>
            <p className="text-muted-foreground md:text-xl">
              The heart of our solution—click on the icons to learn more!
            </p>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <BinModel />
            </div>
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-3">
                <h2 className="text-2xl font-bold font-headline">Our Product</h2>
              </div>
              <div className="space-y-6">
                {features.map((feature) => (
                  <div key={feature.title} className="space-y-2">
                    <h3 className="text-lg font-semibold text-primary">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                    {feature.images && (
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        {feature.images.map((image) => (
                          <div key={image.type} className="text-center">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-32 object-cover rounded-lg border"
                            />
                            <p className="text-xs text-muted-foreground mt-1 capitalize">{image.type} Waste</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-secondary/30">
        <div className="container">
          <WasteClassifier />
        </div>
      </section>
    </>
  );
}
