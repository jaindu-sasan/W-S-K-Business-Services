'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ServiceDetailPage } from '@/components/services/detail-page';
import { BarChart3, ClipboardCheck, FileCog, FilePlus2, Handshake, SearchCheck, TrendingUp } from 'lucide-react';

const services = [
  {
    title: 'Company Incorporations and Secretarial Services',
    description:
      'Support for company registration, incorporation documentation, statutory compliance, and secretarial service requirements.',
    icon: FilePlus2,
  },
  {
    title: 'Project Approvals and Management Services',
    description:
      'Assistance with project approval processes, coordination, documentation, and management support for business projects.',
    icon: ClipboardCheck,
  },
  {
    title: 'Corporate Business Planning',
    description:
      'Development of business plans, corporate strategies, operational plans, and growth-focused planning documents.',
    icon: BarChart3,
  },
  {
    title: 'Performance Improvements',
    description:
      'Support for cost transformation, operational improvement, customer support improvement, and overall organisational performance enhancement.',
    icon: TrendingUp,
  },
  {
    title: 'Business Process Outsourcing',
    description:
      'Outsourcing support for accounting, taxation, payroll management, staff recruitment, training, and development.',
    icon: FileCog,
  },
  {
    title: 'Mergers and Acquisitions',
    description:
      'Support for business restructuring, acquisition planning, merger coordination, due diligence support, and transaction-related advisory.',
    icon: Handshake,
  },
  {
    title: 'Business Research and Development',
    description:
      'Research and analysis support to help organisations identify opportunities, improve services, and make informed business decisions.',
    icon: SearchCheck,
  },
];

export default function CorporateDevelopmentPage() {
  return (
    <main className="bg-background">
      <Navigation />
      <ServiceDetailPage
        eyebrow="Corporate Development"
        title="Corporate Development Services"
        breadcrumb="Corporate Development"
        subtitle="Supporting organisations with business setup, process improvement, administrative services, and corporate growth."
        description="Corporate Development Services provide administrative, operational, and strategic support for clients. These services support the implementation of corporate, organisational, and functional strategies while helping businesses improve processes, systems, culture, and value-chain performance."
        services={services}
        ctaTitle="Need corporate development support?"
      />
      <Footer />
    </main>
  );
}
