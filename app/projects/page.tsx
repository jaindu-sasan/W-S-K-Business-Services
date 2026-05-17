'use client';

import { Navigation } from '@/components/navigation';
import { ProjectsHero } from '@/components/projects/hero';
import { ProjectsList } from '@/components/projects/list';
import { Footer } from '@/components/footer';

export default function ProjectsPage() {
  return (
    <main className="bg-background">
      <Navigation />
      <ProjectsHero />
      <ProjectsList />
      <Footer />
    </main>
  );
}
