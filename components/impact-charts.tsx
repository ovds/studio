'use client';

import { Bar, BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer, RadialBar, RadialBarChart, Legend } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ChartTooltipContent, ChartContainer } from '@/components/ui/chart';

const wasteDiversionData = [
  { month: 'Jan', diverted: 1800, target: 2400 },
  { month: 'Feb', diverted: 2200, target: 2400 },
  { month: 'Mar', diverted: 2500, target: 2400 },
  { month: 'Apr', diverted: 2780, target: 2800 },
  { month: 'May', diverted: 2900, target: 3000 },
  { month: 'Jun', diverted: 3100, target: 3000 },
];

const compostCompositionData = [
  { name: 'Green Waste', value: 65, fill: 'hsl(var(--primary))' },
  { name: 'Brown Waste', value: 35, fill: 'hsl(180 100% 25% / 0.5)' },
];

export default function ImpactCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle>Waste Diversion Progress (kg)</CardTitle>
          <CardDescription>Monthly food waste diverted from landfills vs. target.</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={{}} className="h-[300px] w-full">
            <ResponsiveContainer>
              <BarChart data={wasteDiversionData}>
                <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} fontSize={12} />
                <YAxis />
                <Tooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
                <Bar dataKey="diverted" fill="hsl(var(--primary))" radius={4} name="Diverted" />
                <Bar dataKey="target" fill="hsl(var(--primary) / 0.2)" radius={4} name="Target" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Compost Composition</CardTitle>
          <CardDescription>Ideal ratio of green (nitrogen) to brown (carbon) materials.</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          <ChartContainer config={{}} className="h-[300px] w-full">
            <ResponsiveContainer>
              <RadialBarChart
                data={compostCompositionData}
                innerRadius="50%"
                outerRadius="100%"
                startAngle={90}
                endAngle={450}
              >
                <Tooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                <RadialBar dataKey="value" background={{ fill: 'hsl(var(--muted))' }} />
                <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" align="right" />
              </RadialBarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
