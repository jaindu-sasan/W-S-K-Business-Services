'use client';

import { Navigation } from '@/components/navigation';
import { BlogHero } from '@/components/blog/hero';
import { BlogList } from '@/components/blog/list';
import { CTA } from '@/components/home/cta';
import { Footer } from '@/components/footer';

export default function BlogPage() {
  return (
    <main className="bg-background">
      <Navigation />
      <BlogHero />
      <BlogList />
      <CTA />
      <Footer />
    </main>
  );
}
