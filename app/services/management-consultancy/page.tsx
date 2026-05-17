'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ServiceDetailPage } from '@/components/services/detail-page';
import { PieChart, Settings2, Target } from 'lucide-react';

const services = [
  {
    title: 'Strategic / Boardroom Consulting',
    description:
      'Strategy consulting services include corporate strategy, business model transformation, economic policy, mergers and acquisitions, organisational strategy, functional strategy, strategy and operations, and digital strategy.',
    icon: Target,
  },
  {
    title: 'Operations Consulting',
    description:
      'Operations consulting supports organisations in improving operational efficiency, internal processes, sales and marketing, supply chain, sourcing and procurement, finance, business process management, research and development, and outsourcing.',
    icon: Settings2,
  },
  {
    title: 'Financial Advisory Services',
    description:
      'Financial advisory services help organisations with financial planning, business analysis, decision-making, investment support, cost control, and financial improvement strategies.',
    icon: PieChart,
  },
];

export default function ManagementConsultancyPage() {
  return (
    <main className="bg-background">
      <Navigation />
      <ServiceDetailPage
        eyebrow="Management Consultancy"
        title="Management Consultancy Services"
        breadcrumb="Management Consultancy"
        subtitle="Helping organisations improve strategy, operations, performance, and long-term business growth."
        description="Management Consultancy Services support organisations in improving business strategy, organisational performance, and operational processes. These services help clients identify problems, improve decision-making, restructure operations, and achieve business objectives more effectively."
        services={services}
        ctaTitle="Need management consultancy support?"
      />
      <Footer />
    </main>
  );
}
