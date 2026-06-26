'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

export function Services() {
  const serviceAreas = [
    'Financial & Taxation',
    'Business Formation & Governance',
    'Investment Promotion & Facilitation',
    'Enterprise Growth & Support',
    'Market & Strategy',
    'Operational & Performance Improvement',
    'Legal & Compliance Support',
    'Trade & Internationalization',
    'Technology & Digital Transformation',
    'Specialist Advisory',
  ];

  return (
    <section className="relative overflow-hidden bg-[#F3F0EA] py-20 md:py-24">
      {/* Background Glow */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#0B1F3A]/10 blur-3xl" />
      <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#D4A017]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#C69214]">
              What We Do
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#0B1F3A] md:text-5xl">
              Complete Business Advisory
              <span className="block text-[#C69214]">
                Under One Service Platform
              </span>
            </h2>

            <p className="mt-6 text-[17px] leading-8 text-[#334155]">
              W S K Business Services provides a wide range of professional
              advisory, financial, taxation, compliance, corporate, and business
              development services designed to support organisations at every
              stage of growth.
            </p>

            <p className="mt-5 text-[17px] leading-8 text-[#334155]">
              From company formation and taxation to operational improvement,
              investment support, digital transformation, and specialist
              advisory, our services help businesses operate with clarity,
              compliance, and long-term direction.
            </p>

            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#0B1F3A] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#C69214] hover:text-[#0B1F3A]"
            >
              Explore All Services
              <ArrowRight size={17} />
            </Link>
          </motion.div>

          {/* Right Summary List */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[34px] border border-[#E5E0D6] bg-white/75 p-6 shadow-[0_20px_60px_rgba(11,31,58,0.10)] backdrop-blur md:p-8">
              <div className="mb-6 flex items-center justify-between gap-4 border-b border-[#E5E0D6] pb-5">
                <div>
                  <h3 className="text-2xl font-semibold text-[#0B1F3A]">
                    Service Areas
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    A quick overview of our main professional service categories.
                  </p>
                </div>

                <div className="hidden h-14 w-14 items-center justify-center rounded-full bg-[#D4A017]/15 text-[#C69214] md:flex">
                  <CheckCircle size={26} />
                </div>
              </div>

              <div className="grid gap-x-8 gap-y-4 md:grid-cols-2">
                {serviceAreas.map((service, index) => (
                  <div
                    key={service}
                    className="flex items-start gap-3 border-b border-[#E5E0D6]/70 pb-4 last:border-b-0 md:last:border-b md:[&:nth-last-child(-n+2)]:border-b-0"
                  >
                    <span className="mt-0.5 text-sm font-semibold text-[#C69214]">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <p className="text-[15px] font-medium leading-6 text-[#0B1F3A]">
                      {service}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-2xl bg-[#0B1F3A] p-5 text-white">
                <p className="text-sm leading-7 text-white/80">
                  View the full Services page to explore detailed solutions,
                  service breakdowns, and how WSK can support your business.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}