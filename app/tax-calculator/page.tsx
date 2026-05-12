'use client';

import { Navigation } from '@/components/navigation';
import { TaxCalculatorHero } from '@/components/tax-calculator/hero';
import { Calculator } from '@/components/tax-calculator/calculator';
import { TaxTips } from '@/components/tax-calculator/tips';
import { CTA } from '@/components/home/cta';
import { Footer } from '@/components/footer';

export default function TaxCalculatorPage() {
  return (
    <main className="bg-background">
      <Navigation />
      <TaxCalculatorHero />
      <Calculator />
      <TaxTips />
      <CTA />
      <Footer />
    </main>
  );
}
