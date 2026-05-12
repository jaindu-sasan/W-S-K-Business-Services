'use client';

import { Navigation } from '@/components/navigation';
import { ServicesHero } from '@/components/services/hero';
import { ServicesList } from '@/components/services/list';
import { ServiceProcess } from '@/components/services/process';
import { CTA } from '@/components/home/cta';
import { Footer } from '@/components/footer';

export default function ServicesPage() {
  return (
    <main className="bg-background">
      <Navigation />
      <ServicesHero />
      <ServicesList />
      <ServiceProcess />
      <CTA />
      <Footer />
    </main>
  );
}
