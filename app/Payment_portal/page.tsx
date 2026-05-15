'use client';
import { Navigation } from '@/components/navigation';
import { PaymentHero } from '@/components/Payment_Portal/Hero';
import { PaymentPortal } from '@/components/Payment_Portal/PaymentPortal';
import { CTA } from '@/components/home/cta';
import { Footer } from '@/components/footer';

export default function PaymentPage() {
  return (
    <main className="bg-background">
      <Navigation />
      <PaymentHero />
      <PaymentPortal />
      <CTA />
      <Footer />
    </main>
  );
}