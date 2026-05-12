'use client';

import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/home/hero';
import { Stats } from '@/components/home/stats';
import { Services } from '@/components/home/services';
import { CTA } from '@/components/home/cta';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="bg-background">
      <Navigation />
      <Hero />
      <Stats />
      <Services />
      <CTA />
      <Footer />
    </main>
  );
}
