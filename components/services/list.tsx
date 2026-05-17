'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileCog,
  FilePlus2,
  Handshake,
  PieChart,
  SearchCheck,
  Settings2,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react';

const departments = [
  {
    title: 'Management Consultancy Services',
    description:
      'Professional advisory support for strategy, organisational performance, and operational improvement.',
    icon: BriefcaseBusiness,
    href: '/services/management-consultancy',
  },
  {
    title: 'Corporate Development Services',
    description:
      'Administrative and operational services that help organisations implement, restructure, and improve.',
    icon: Building2,
    href: '/services/corporate-development',
  },
];

const managementServices = [
  {
    title: 'Strategic / Boardroom Consulting',
    description:
      'Corporate strategy, business model transformation, economic policy, mergers and acquisitions, organisational strategy, functional strategy, strategy and operations, and digital strategy.',
    icon: Target,
  },
  {
    title: 'Operations Consulting',
    description:
      'Support for operations, sales and marketing, supply chain, sourcing and procurement, finance, business process management, research and development, and outsourcing.',
    icon: Settings2,
  },
  {
    title: 'Financial Advisory Services',
    description:
      'Financial planning, business analysis, decision-making, investment support, and financial improvement strategies.',
    icon: PieChart,
  },
];

const corporateServices = [
  {
    title: 'Company Incorporations and Secretarial Services',
    description: 'End-to-end company formation and compliant secretarial support for new and existing entities.',
    icon: FilePlus2,
  },
  {
    title: 'Project Approvals and Management Services',
    description: 'Structured assistance with project approvals, coordination, timelines, and implementation control.',
    icon: ClipboardCheck,
  },
  {
    title: 'Corporate Business Planning',
    description: 'Practical business planning that aligns objectives, resources, financial direction, and growth priorities.',
    icon: BarChart3,
  },
  {
    title: 'Performance Improvements',
    description: 'Cost transformation, operations, and customer support improvement.',
    icon: TrendingUp,
  },
  {
    title: 'Business Process Outsourcing',
    description: 'Accounting, taxation, payroll management, staff recruitment, training, and development.',
    icon: FileCog,
  },
  {
    title: 'Mergers and Acquisitions',
    description: 'Advisory support for transaction planning, evaluation, coordination, and post-deal integration.',
    icon: Handshake,
  },
  {
    title: 'Business Research and Development',
    description: 'Research-led support for market understanding, service development, and better business decisions.',
    icon: SearchCheck,
  },
];

const industries = [
  'Tourism and Hospitality',
  'Shipping, Transport and Logistics',
  'Manufacturing',
  'Telecommunications',
  'Agriculture',
  'Social Services',
  'Healthcare',
  'Professional Services',
  'Construction',
  'Trading',
];

function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55 }}
      className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
    >
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#D4A017]">{eyebrow}</p>
      <h2 className="text-3xl font-bold leading-tight text-[#0B1F3A] md:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-[#5B6472] md:text-lg">{description}</p>
    </motion.div>
  );
}

export function ServicesList() {
  return (
    <>
      <section id="services-overview" className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Services and Solutions"
            title="Support across the full business journey"
            description="We offer a full spectrum of services to organisations under two main departments to help them operate, grow, and improve with confidence."
            centered
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {departments.map((department, index) => (
              <motion.div
                key={department.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <Link
                  href={department.href}
                  className="group block h-full rounded-[26px] border border-[#E5EAF0] bg-[#F8FAFC] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A017]/40 hover:bg-white hover:shadow-xl hover:shadow-slate-200/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] focus-visible:ring-offset-4"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#D4A017] text-[#0B1F3A]">
                    <department.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold leading-snug text-[#0B1F3A]">{department.title}</h3>
                  <p className="mt-4 leading-7 text-[#5B6472]">{department.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#D4A017] transition-all group-hover:gap-3">
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F7FA] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Management Consultancy Services"
            title="Sharper strategy, stronger operations"
            description="Management consultancy is regarded as one of the professional service segments that supports organisations in improving business strategy, organisational performance, and operational processes."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {managementServices.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group flex h-full flex-col rounded-[24px] border border-[#E5EAF0] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A017]/50 hover:shadow-xl hover:shadow-slate-200/70"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B1F3A] text-[#D4A017]">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold leading-snug text-[#0B1F3A]">{service.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-[#5B6472]">{service.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <SectionHeader
              eyebrow="Corporate Development Services"
              title="Practical support for implementation and growth"
              description="Corporate Development Services provide administrative and operational support for clients, including corporate implementation, organisational restructuring, business process improvement, management systems, culture, and other value-chain elements."
            />

            <div className="grid gap-5 sm:grid-cols-2">
              {corporateServices.map((service, index) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group rounded-[22px] border border-[#E5EAF0] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A017]/45 hover:shadow-lg hover:shadow-slate-200/70"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#D4A017]/12 text-[#D4A017]">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold leading-snug text-[#0B1F3A]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#5B6472]">{service.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="List of Industry"
            title="Industries We Serve"
            description="We support clients across diverse industrial segments with reliable accounting, taxation, payroll, and advisory services."
            centered
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: index * 0.03 }}
                className="flex min-h-20 items-center gap-3 rounded-2xl border border-[#E5EAF0] bg-white px-5 py-4 shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D4A017]/12 text-[#D4A017]">
                  <CheckCircle2 className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold leading-5 text-[#0B1F3A]">{industry}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-6xl overflow-hidden rounded-[30px] bg-[#0B1F3A] p-8 text-white shadow-xl shadow-slate-200/70 md:p-12"
        >
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#D4A017] text-[#0B1F3A]">
                <Sparkles className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold leading-tight md:text-5xl">Need expert support for your business?</h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
                Contact our team to discuss accounting, taxation, payroll, and business consultancy solutions tailored to your organisation.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#D4A017] px-6 py-3 font-semibold text-[#0B1F3A] transition-all duration-300 hover:bg-[#c89512] sm:w-auto"
            >
              Contact Us
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
