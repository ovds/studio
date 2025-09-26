'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    title: 'Hospitality Sector',
    description: 'Hotels and restaurants dispose of food waste into the Reroot bin.',
    image: {
      imageUrl: 'https://files.worldwildlife.org/wwfcmsprod/images/Hotel_Buffet_Food_Waste/story_full_width/6d6la51dj1_shutterstock_501472864.jpg',
      description: 'Hotel buffet food waste disposal',
      imageHint: 'Hotel buffet with food waste being disposed'
    },
  },
  {
    title: 'Reroot Bin',
    description: 'Within a singular bin, waste is classified and treated to be converted into compost.',
    image: PlaceHolderImages.find((p) => p.id === 'how-it-works-2'),
  },
  {
    title: 'Centralised Compost Collection',
    description: 'Our team collects the processed compost on a regular schedule, from the kitchens themselves.',
    image: {
      imageUrl: 'https://i0.wp.com/www.onegreenplanet.org/wp-content/uploads/2019/01/shutterstock_1912459132-scaled.jpg?fit=1920%2C1280&ssl=1',
      description: 'Compost collection and processing',
      imageHint: 'Workers collecting and processing compost materials'
    },
  },
  {
    title: 'Redistribution to Farms',
    description: 'The finished compost is delivered to local farms to enrich their soil, contributing to the production of new food in Singapore, bolstering the 30 by 30 efforts.',
    image: {
      imageUrl: 'https://sfa.gov.sg/images/default-source/from-sg-to-sg/from-sg-to-sg/farms/yili-farm/yili-farm-135.jpg',
      description: 'Local Singapore farm receiving compost',
      imageHint: 'Singapore farm with fresh produce grown using compost'
    },
  },
  {
    title: 'Back to your plate!',
    description: 'Farms\' fresh produce makes its way back to consumers, partly through hospitality industry. This closes the food loop, ensuring food and waste sustainability.',
    image: {
      imageUrl: 'https://cdn.apartmenttherapy.info/image/upload/v1601939792/video/2020-10/19_plating_-_overhead.jpg',
      description: 'Fresh produce on plate completing the food loop',
      imageHint: 'Beautifully plated fresh produce completing the circular food economy'
    },
  },
];

function Step({ step, index, progress }: { step: any, index: number, progress: any }) {
  const opacity = useTransform(progress, [index - 0.5, index, index + 0.5], [0.3, 1, 0.3]);
  const scale = useTransform(progress, [index - 0.5, index, index + 0.5], [0.9, 1, 0.9]);

  return (
    <motion.div style={{ opacity, scale }} className="relative">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl flex-shrink-0">
              {index + 1}
            </div>
            <div>
              <h3 className="font-bold text-lg">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      {index < steps.length - 1 && (
        <div className="absolute left-1/2 -bottom-8 -translate-x-1/2">
            <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90" />
        </div>
      )}
    </motion.div>
  );
}

export default function HowItWorksFlow() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start center', 'end center'],
  });

  const progress = useTransform(scrollYProgress, (val) => val * (steps.length - 1));

  const imageIndex = useTransform(progress, (p) => Math.floor(p));
  const imageOpacity = useTransform(progress, [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4], [1, 0.5, 1, 0.5, 1, 0.5, 1, 0.5, 1]);


  return (
    <div ref={targetRef} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
      <div className="space-y-16">
        {steps.map((step, i) => (
          <Step key={step.title} step={step} index={i} progress={progress} />
        ))}
      </div>
      <div className="sticky top-24 h-[400px] hidden lg:block">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            style={{
                opacity: useTransform(imageIndex, (latest) => (latest === i ? 1 : 0)),
                transition: "opacity 0.3s ease-in-out"
            }}
          >
            {step.image && (
                <Image
                    src={step.image.imageUrl}
                    alt={step.image.description}
                    data-ai-hint={step.image.imageHint}
                    fill
                    className="object-cover rounded-xl shadow-lg"
                />
            )}
           </motion.div>
        ))}
      </div>
    </div>
  );
}
