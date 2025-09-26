import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { DollarSign, Star, TrendingUp, CheckCircle } from 'lucide-react';

const benefits = [
  {
    icon: DollarSign,
    title: 'Cost Savings',
    description: 'Reduce waste disposal fees and create a new revenue stream through compost sales or internal use.',
  },
  {
    icon: Star,
    title: 'Sustainability Branding',
    description: 'Enhance your brand reputation by showcasing a tangible commitment to sustainability that resonates with modern consumers.',
  },
  {
    icon: TrendingUp,
    title: 'Compliance & Future-Proofing',
    description: 'Stay ahead of regulations and align your business with the Singapore Green Plan 2030 goals.',
  },
  {
    icon: CheckCircle,
    title: 'Operational Efficiency',
    description: 'Our smart bin seamlessly integrates into your kitchen workflow, providing data to optimize your operations.',
  },
];

const testimonials = [
  {
    name: 'John Doe',
    title: 'General Manager, Marina Bay Hotel',
    quote: "Reroot has transformed our waste management. It's not just about sustainability; it's about efficiency and cost savings. Our guests love that we're part of this initiative.",
    image: PlaceHolderImages.find((p) => p.id === 'testimonial-1'),
  },
  {
    name: 'Jane Smith',
    title: 'Head Chef, The Fullerton Restaurant',
    quote: "The ease of use is incredible. The AI classification means my team can focus on what they do best. Knowing our waste is helping local farms is the cherry on top.",
    image: PlaceHolderImages.find((p) => p.id === 'testimonial-2'),
  },
];

export default function ForBusinessesPage() {
  return (
    <>
      <section className="w-full pt-16 md:pt-24 lg:pt-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
            Elevate Your Business with Sustainable Practices
          </h1>
          <p className="max-w-[700px] mx-auto mt-4 md:text-xl">
            Join the movement of forward-thinking businesses in Singapore. See how Reroot can benefit your bottom line and your brand.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-6">
            <Link href="/contact">Request a Demo</Link>
          </Button>
        </div>
      </section>

      <section>
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">The Business Case for Smart Composting</h2>
            <p className="max-w-[700px] mx-auto mt-4 text-muted-foreground md:text-lg">
              Investing in Reroot is investing in the future of your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="flex flex-col sm:flex-row items-start gap-6 p-6">
                <div className="bg-primary/10 text-primary p-3 rounded-full">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                  <p className="text-muted-foreground mt-1">{benefit.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">From Our Partners</h2>
            <p className="max-w-[700px] mx-auto mt-4 text-muted-foreground md:text-lg">
              Hear from leaders in the hospitality industry who are making a difference with Reroot.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name}>
                <CardContent className="p-6">
                  <blockquote className="text-lg italic">"{testimonial.quote}"</blockquote>
                </CardContent>
                <CardHeader className="flex flex-row items-center gap-4 pt-0">
                  {testimonial.image && (
                    <Avatar>
                      <AvatarImage src={testimonial.image.imageUrl} alt={testimonial.name} data-ai-hint={testimonial.image.imageHint} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  )}
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
