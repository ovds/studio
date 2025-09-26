'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const navLinks = [
  { href: '/product', label: 'Product' },
  { href: '/impact', label: 'Impact' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/for-businesses', label: 'For Businesses' },
  { href: '/about', label: 'About' },
];

export function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      className={cn(
        'transition-colors hover:text-primary',
        pathname === href ? 'text-primary font-semibold' : 'text-muted-foreground'
      )}
      onClick={() => setMobileMenuOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
          <Image src="/reroot-logo.png" alt="Reroot Logo" width={24} height={24} />
          <span className="font-bold text-lg">Reroot</span>
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2">
          <Button asChild className="hidden sm:inline-flex">
            <Link href="/contact">Partner With Us</Link>
          </Button>

          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b pb-4">
                    <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                      <Image src="/reroot-logo.png" alt="Reroot Logo" width={24} height={24} />
                      <span className="font-bold">Reroot</span>
                    </Link>
                </div>
                <nav className="flex flex-col gap-6 mt-6 text-lg font-medium">
                  {navLinks.map((link) => (
                    <NavLink key={link.href} {...link} />
                  ))}
                </nav>
                <div className="mt-auto">
                    <Button asChild className="w-full">
                        <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Partner With Us</Link>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
