import HeroInteractive from '@/components/hero-interactive';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const binImage = PlaceHolderImages.find(p => p.id === 'bin-model');
  return (
    <div className="w-full">
      <HeroInteractive />
      <section className="w-full bg-secondary/30">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
                Why Us?
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                The Future of Urban Composting is Here
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Want a one-stop solution to food waste management that takes the mental load off your organisation? Turn your waste management from a messy chore into a data-driven feedback loop for operational excellence, while contributing positively to Singapore's food sustainability.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/product">Discover the Bin</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/for-businesses">For Businesses</Link>
                </Button>
              </div>
            </div>
             {binImage && (
              <div className="flex items-center justify-center">
                <Image
                  src={binImage.imageUrl}
                  alt={binImage.description}
                  data-ai-hint={binImage.imageHint}
                  width={400}
                  height={533}
                  className="rounded-xl object-cover shadow-2xl"
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
