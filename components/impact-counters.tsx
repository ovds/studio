'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { Trash2, Recycle, Wheat } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

function AnimatedCounter({ to, suffix }: { to: number, suffix: string }) {
  const count = useSpring(0, { duration: 2000 });
  const rounded = useTransform(count, (latest) => {
    const num = Math.round(latest);
    // Format large numbers with commas
    return num.toLocaleString();
  });

  useEffect(() => {
    count.set(to);
  }, [to, count]);

  return (
    <div className="flex items-end">
      <motion.span className="text-4xl md:text-5xl font-bold text-primary">
        {rounded}
      </motion.span>
      <span className="text-2xl md:text-3xl font-medium text-primary/80 ml-1">{suffix}</span>
    </div>
  );
}

const stats = [
  {
    icon: Trash2,
    value: 450,
    suffix: '+',
    title: 'Hotels Helped',
    description: 'Hotels partnering with us to transform their waste management.',
  },
  {
    icon: Recycle,
    value: 200000,
    suffix: '+',
    title: 'Tonnes Converted',
    description: 'Tonnes of food waste converted to valuable compost.',
  },
  {
    icon: Wheat,
    value: 260,
    suffix: '+',
    title: 'Farms Supported',
    description: 'Local farms benefiting from our redistributed compost.',
  },
];

export default function ImpactCounters() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      {stats.map((stat, index) => (
        <Card key={index} className="text-center shadow-lg">
          <CardHeader className="flex flex-col items-center gap-4">
            <stat.icon className="w-12 h-12 text-accent" />
            <CardTitle>{stat.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            {isInView && <AnimatedCounter to={stat.value} suffix={stat.suffix} />}
            <p className="text-muted-foreground mt-2 max-w-xs mx-auto text-sm">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
