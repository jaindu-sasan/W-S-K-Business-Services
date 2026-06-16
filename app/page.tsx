'use client';

import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/home/hero';
import { Stats } from '@/components/home/stats';
import { Services } from '@/components/home/services';
import { CTA } from '@/components/home/cta';
import { Footer } from '@/components/footer';
import { AboutUs } from '@/components/home/aboutUs';
import { Testimonials } from '@/components/home/testimonials';
import {TaxSection} from '@/components/home/taxSection'
import { ClientLogosMarquee } from '@/components/home/client-logos-marquee';

export default function Home() {
  return (
    <main className="bg-background">
      <Navigation />
      <Hero />
      <Services />
      <ClientLogosMarquee />
      <TaxSection/>
    
      
      <Stats />
      <Testimonials/>
      
      <CTA />
      <Footer />
    </main>
  );
}
