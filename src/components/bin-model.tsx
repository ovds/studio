'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Info } from 'lucide-react';

const hotspots = [
  {
    id: 'lid',
    position: { top: '15%', left: '50%' },
    title: 'Motion-Sensor Activated Lid',
    description: 'Our soft-close, motion-activated lid ensures hygienic, hands-free operation that proves essential in a busy kitchen environment. We have integrated an LED ring to indicates bin status.',
  },
  {
    id: 'sensor',
    position: { top: '35%', left: '20%' },
    title: 'AI Camera & Sensor Array',
    description: 'This is the brain of our bin. It not only identifies and classifies food waste as "green" or "brown" to easily help you track compost ratios, but identifies the specific food being wasted to provide analytics on how to reduce your overall wastage.',
  },
  {
    id: 'drawer',
    position: { top: '85%', left: '50%' },
    title: 'Compost Collection Drawer',
    description: 'Our ergonomic, pull-out drawer makes cleaning and collecting the finished compost effortless. Don\'t worry about this—we collect and redistribute it for you.',
  },
   {
    id: 'panel',
    position: { top: '50%', left: '80%' },
    title: 'Sleek Design',
    description: 'We keep it simple here. LED indicators on the bin allow information to be quickly disseminated, while deeper analytics are available via the companion app, linked to all devices',
  },
];

export default function BinModel() {
  const binImage = PlaceHolderImages.find((p) => p.id === 'bin-model');

  if (!binImage) return <div>Loading model...</div>;

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <Image
        src={binImage.imageUrl}
        alt={binImage.description}
        data-ai-hint={binImage.imageHint}
        width={600}
        height={800}
        className="rounded-xl shadow-2xl"
      />
      {hotspots.map((hotspot) => (
        <Popover key={hotspot.id}>
          <PopoverTrigger asChild>
            <motion.button
              style={hotspot.position}
              className={cn(
                'absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-accent/80 backdrop-blur-sm flex items-center justify-center text-accent-foreground shadow-lg'
              )}
              animate={{
                scale: [1, 1.2, 1],
                transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
              }}
              whileHover={{ scale: 1.3 }}
            >
              <Info className="w-5 h-5" />
            </motion.button>
          </PopoverTrigger>
          <PopoverContent side="top" className="w-64">
            <div className="space-y-2">
              <h4 className="font-semibold">{hotspot.title}</h4>
              <p className="text-sm text-muted-foreground">{hotspot.description}</p>
            </div>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  );
}
