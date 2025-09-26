import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Target, Users, Globe } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <section className="w-full pt-16 md:pt-24 lg:pt-32">
        <div className="px-4 md:px-6 text-center">
          <Badge variant="outline" className="text-sm">About Our Organisation</Badge>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline mt-4">
            Why Reroot?
          </h1>
          <p className="max-w-[800px] mx-auto mt-4 text-muted-foreground md:text-xl">
            Discover the story behind our name and our mission to transform waste management in Singapore.
          </p>
        </div>
      </section>

      <section className="w-full">
        <div className="px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-12">

            <Card className="p-8">
              <CardContent className="space-y-6">
                <div className="flex items-center gap-3">
                  <Leaf className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl font-bold font-headline">The Meaning Behind "Reroot"</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg">
                    <strong className="text-foreground">Reroot</strong> represents our fundamental belief in transformation and renewal. Just as plants establish new roots to grow stronger and more resilient, we help businesses establish new foundations for their waste management practices.
                  </p>
                  <p>
                    The name embodies our dual mission: to <strong className="text-foreground">uproot</strong> outdated, wasteful practices and to help organizations <strong className="text-foreground">re-root</strong> themselves in sustainable, data-driven solutions that benefit both their operations and the environment.
                  </p>
                  <p>
                    When you choose Reroot, you're not just adopting a smart composting system—you're rerooting your entire approach to waste, turning it from a disposal problem into a circular economy opportunity.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <CardContent className="space-y-4">
                  <Target className="w-12 h-12 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold">Our Mission</h3>
                  <p className="text-sm text-muted-foreground">
                    To transform Singapore's hospitality sector into a leader of circular economy practices through intelligent waste management solutions.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardContent className="space-y-4">
                  <Users className="w-12 h-12 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold">Our Values</h3>
                  <p className="text-sm text-muted-foreground">
                    Innovation, sustainability, and partnership drive everything we do. We believe in creating solutions that serve businesses, communities, and the environment.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardContent className="space-y-4">
                  <Globe className="w-12 h-12 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold">Our Vision</h3>
                  <p className="text-sm text-muted-foreground">
                    A Singapore where zero food waste goes to landfill, and every grain of discarded food nourishes local agriculture and strengthens food security.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="p-8 bg-secondary/30">
              <CardContent className="space-y-6">
                <h2 className="text-2xl font-bold font-headline text-center">Aligned with Singapore's Green Future</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Reroot is proudly aligned with the <strong className="text-foreground">Singapore Green Plan 2030</strong>, supporting the nation's ambitious sustainability goals. Our smart composting solutions directly contribute to:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li>• <strong className="text-foreground">30 by 30 Initiative:</strong> Enhancing local food production through nutrient-rich compost</li>
                    <li>• <strong className="text-foreground">Zero Waste Masterplan:</strong> Reducing food waste sent to landfills by 30% by 2030</li>
                    <li>• <strong className="text-foreground">Circular Economy:</strong> Creating closed-loop systems that turn waste into valuable resources</li>
                    <li>• <strong className="text-foreground">Carbon Reduction:</strong> Decreasing greenhouse gas emissions from food waste decomposition</li>
                  </ul>
                  <p>
                    By choosing Reroot, businesses become active participants in Singapore's sustainable transformation, contributing to a greener, more food-secure future for all.
                  </p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </>
  );
}