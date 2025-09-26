'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const loopData = {
  reduce: {
    title: 'Reduce',
    description: 'The first step in our circular economy model is reducing food waste at the source. The hospitality sector in Singapore generates significant amounts of food scraps daily. By partnering with hotels, restaurants, and F&B groups, Reroot helps businesses track and manage their waste, leading to direct cost savings and a smaller environmental footprint.',
    image: PlaceHolderImages.find(p => p.id === 'reduce-waste'),
  },
  repurpose: {
    title: 'Repurpose',
    description: 'This is where our smart bin shines. Food waste is classified into "green" (nitrogen-rich) and "brown" (carbon-rich) materials using advanced AI and sensor technology. The bin then processes these materials to create nutrient-rich compost, ensuring the ideal ratio for optimal decomposition. This repurposes what was once waste into a valuable resource.',
    image: PlaceHolderImages.find(p => p.id === 'repurpose-compost'),
  },
  redistribute: {
    title: 'Redistribute',
    description: 'The final, crucial step is closing the loop. The high-quality compost produced by our bins is collected and redistributed to local farms across Singapore. This initiative directly supports the nation\'s "30 by 30" goal by boosting local food production, enhancing soil quality, and creating a truly sustainable farm-to-table-to-farm ecosystem.',
    image: PlaceHolderImages.find(p => p.id === 'redistribute-farm'),
  },
};

type Stage = keyof typeof loopData | null;

const StageButton = ({ text, onClick, className }: { text: string; onClick: () => void; className?: string }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`text-lg font-headline uppercase font-bold text-primary hover:text-accent transition-colors ${className}`}
  >
    {text}
  </motion.button>
);

const LeafCycleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M41.8,24.3A25.8,25.8,0,0,0,20.5,45.5c0,12.5,12.5,20.8,20.8,20.8,8.3,0,16.7-4.2,18.8-12.5" />
    <path d="M51,20.5c-4.2,0-8.3,2.1-10.4,4.2-8.3,8.3,0,25,8.3,33.3,6.3,6.3,16.7,8.3,23-2.1,6.3-10.4-2.1-23-12.5-29.2" />
    
    <path d="M76.4,59.3A25.8,25.8,0,0,0,55.1,79.5c-12.5,0-20.8-12.5-20.8-20.8,0-8.3,4.2-16.7,12.5-18.8" />
    <path d="M79.8,50.8c0-4.2-2.1-8.3-4.2-10.4-8.3-8.3-25,0-33.3,8.3-6.3,6.3-8.3,16.7-2.1,23,10.4,6.3,23-2.1,29.2-12.5" />

    <path d="M24,42.2A25.8,25.8,0,0,0,45.3,21c12.5,0,20.8,12.5,20.8,20.8,0,8.3-4.2,16.7-12.5,18.8" />
    <path d="M20.2,49.2c0,4.2,2.1,8.3,4.2,10.4,8.3,8.3,25,0,33.3-8.3,6.3-6.3,8.3-16.7,2.1-23-10.4-6.3-23,2.1-29.2,12.5" />
  </svg>
);


export default function HeroInteractive() {
  const [selectedStage, setSelectedStage] = useState<Stage>(null);

  return (
    <section className="w-full">
      <div className="container">
        <div className="grid gap-12 items-center lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4 text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Reduce. Repurpose. Redistribute.
            </h1>
            <p className="max-w-[600px] mx-auto lg:mx-0 text-muted-foreground md:text-xl">
              Uproot your outdated waste management with our smart compost solution for Singapore's hospitality sector, championing a circular economy from kitchen to farm.
            </p>
          </div>
          <div className="w-full max-w-sm mx-auto py-8">
            <div className="relative w-80 h-80 mx-auto flex items-center justify-center">
              {/* Circular background with dashed border */}
              <div className="absolute inset-8 rounded-full border-2 border-dashed border-primary/30"></div>

            
              {/* PNG Logo in the very center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image src="/reroot-logo.png" alt="Reroot Logo" width={80} height={80} />
              </div>


              {/* Reduce - Top */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                <StageButton
                  text="Reduce"
                  onClick={() => setSelectedStage('reduce')}
                  className="text-center"
                />
              </div>

              {/* Repurpose - Bottom Right */}
              <div className="absolute bottom-0 right-0 transform translate-x-8 translate-y-4">
                <StageButton
                  text="Repurpose"
                  onClick={() => setSelectedStage('repurpose')}
                  className="text-center"
                />
              </div>

              {/* Redistribute - Bottom Left */}
              <div className="absolute bottom-0 left-0 transform -translate-x-8 translate-y-4">
                <StageButton
                  text="Redistribute"
                  onClick={() => setSelectedStage('redistribute')}
                  className="text-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Sheet open={!!selectedStage} onOpenChange={(isOpen) => !isOpen && setSelectedStage(null)}>
        <SheetContent className="w-full max-w-lg overflow-y-auto">
          {selectedStage && (
            <>
              <SheetHeader>
                <SheetTitle className="text-3xl font-bold font-headline text-primary">{loopData[selectedStage].title}</SheetTitle>
              </SheetHeader>
              <div className="py-4 space-y-4">
                {loopData[selectedStage].image && (
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <Image
                      src={loopData[selectedStage].image!.imageUrl}
                      alt={loopData[selectedStage].image!.description}
                      data-ai-hint={loopData[selectedStage].image!.imageHint}
                      width={600}
                      height={400}
                      className="object-cover"
                    />
                  </div>
                )}
                <SheetDescription className="text-base text-foreground">
                  {loopData[selectedStage].description}
                </SheetDescription>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </section>
  );
}
