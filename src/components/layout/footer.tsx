import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="w-full bg-secondary/50 border-t">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-12 px-4 md:px-6">
        <div className="col-span-1 space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/reroot-logo.png" alt="Reroot Logo" width={24} height={24} />
            <span className="font-bold text-lg">Reroot</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Reduce. Repurpose. Redistribute.
          </p>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold">Explore</h4>
          <ul className="space-y-1">
            <li><Link href="/product" className="text-sm text-muted-foreground hover:text-primary">Product</Link></li>
            <li><Link href="/impact" className="text-sm text-muted-foreground hover:text-primary">Impact</Link></li>
            <li><Link href="/how-it-works" className="text-sm text-muted-foreground hover:text-primary">How It Works</Link></li>
            <li><Link href="/for-businesses" className="text-sm text-muted-foreground hover:text-primary">For Businesses</Link></li>
            <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About</Link></li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold">Connect</h4>
          <ul className="space-y-1">
            <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="flex justify-between items-center py-4 px-4 md:px-6">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Reroot. All rights reserved.
          </p>
           <p className="text-sm text-muted-foreground">
            Aligned with the Singapore Green Plan.
          </p>
        </div>
      </div>
    </footer>
  );
}
