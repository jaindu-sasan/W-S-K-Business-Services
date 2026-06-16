'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Globe2,
  Handshake,
  Landmark,
  MonitorCog,
  Rocket,
  Scale,
  Settings2,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react';

const serviceCategories = [
  {
    title: 'Financial & Taxation',
    icon: Landmark,
    services: [
      'Personal Taxation Services',
      'Corporate Taxation Services',
      'Tax Planning and Compliance',
      'Transfer Pricing Advisor',
    ],
  },
  {
    title: 'Business Formation & Governance',
    icon: Building2,
    services: [
      'Company Formation and Registration',
      'Corporate Secretarial Services',
      'Corporate Governance Advisory',
      'Board and Shareholder Support Services',
    ],
  },
  {
    title: 'Investment Promotion and Facilitation',
    subtitle: 'Local and international',
    icon: TrendingUp,
    services: [
      'Investment Advisory Services',
      'Capital Raising and Fundraising Support',
      'Financial Due Diligence',
    ],
  },
  {
    title: 'Enterprise Growth & Support',
    icon: Rocket,
    services: [
      'Entrepreneurship Development Programs',
      'Business Incubation and Acceleration Services',
      'SME Development and Support',
      'Business Succession Planning',
    ],
  },
  {
    title: 'Market & Strategy',
    icon: Target,
    services: [
      'Market Research and Business Intelligence',
      'Business Promotion and Go-to-Market Strategy',
      'Marketing Strategy and Digital Marketing Services',
      'Competitive Benchmarking and Industry Analysis',
    ],
  },
  {
    title: 'Operational & Performance Improvement',
    icon: Settings2,
    services: [
      'Organizational Design and Restructuring',
      'Business Process Reengineering',
      'Performance Management and KPI Design',
      'Operational Efficiency and Cost Optimization',
    ],
  },
  {
    title: 'Legal & Compliance Support',
    icon: Scale,
    services: [
      'Regulatory Compliance Advisory',
      'Contract Review and Drafting Support',
      'Licensing and Permit Assistance',
    ],
  },
  {
    title: 'Trade & Internationalization',
    icon: Globe2,
    services: [
      'Export Promotion and Market Entry Services',
      'International Business Advisory',
      'Cross-border Transaction Support',
    ],
  },
  {
    title: 'Technology & Digital Transformation',
    icon: MonitorCog,
    services: [
      'Digital Transformation Strategy',
      'IT Advisory and Systems Implementation',
      'Data Analytics and Business Intelligence',
    ],
  },
  {
    title: 'Specialist Advisory',
    icon: Handshake,
    services: [
      'Mergers & Acquisitions Advisory',
      'Valuation Services',
      'ESG Advisory and Sustainability Strategy',
    ],
  },
];

function SectionHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55 }}
      className="mx-auto max-w-3xl text-center"
    >
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#D4A017]">
        Our Services and Solutions
      </p>
      <h2 className="text-3xl font-bold leading-tight text-[#0B1F3A] md:text-5xl">
        Support across the full business journey
      </h2>
      <p className="mt-5 text-base leading-8 text-[#5B6472] md:text-lg">
        We provide a wide range of financial, taxation, governance, advisory, and business support services to help organisations grow with confidence.
      </p>
    </motion.div>
  );
}

export function ServicesList() {
  return (
    <>
      <section id="services-overview" className="bg-[#F8FAFC] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceCategories.map((category, index) => (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                className="group flex h-full flex-col rounded-[24px] border border-[#E5EAF0] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A017]/50 hover:shadow-xl hover:shadow-slate-200/70 md:p-7"
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0B1F3A] text-[#D4A017]">
                    <category.icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-[#D4A017]/10 px-3 py-1 text-xs font-bold text-[#D4A017]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-xl font-bold leading-snug text-[#0B1F3A]">{category.title}</h3>
                {category.subtitle ? (
                  <p className="mt-1 text-sm font-semibold text-[#D4A017]">{category.subtitle}</p>
                ) : null}

                <ul className="mt-5 space-y-3">
                  {category.services.map((service) => (
                    <li key={service} className="flex gap-3 text-sm leading-6 text-[#5B6472]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#D4A017]" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
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
                Contact our team to discuss accounting, taxation, governance, advisory, and business support solutions tailored to your organisation.
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
