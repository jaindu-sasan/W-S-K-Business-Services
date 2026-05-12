'use client';

import { Navigation } from '@/components/navigation';
import { AboutHero } from '@/components/about/hero';
import { Timeline } from '@/components/about/timeline';
import { Team } from '@/components/about/team';
import { Values } from '@/components/about/values';
import { CTA } from '@/components/home/cta';
import { Footer } from '@/components/footer';

export default function AboutPage() {
  return (
    <main className="bg-background">
      <Navigation />
      <AboutHero />
      <Timeline />
      <Values />
      <Team />
      <CTA />
      <Footer />
    </main>
  );
}
