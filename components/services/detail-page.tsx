'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, LucideIcon, Sparkles } from 'lucide-react';

type ServiceItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type ServiceDetailPageProps = {
  eyebrow: string;
  title: string;
  breadcrumb: string;
  subtitle: string;
  description: string;
  services: ServiceItem[];
  ctaTitle: string;
};

export function ServiceDetailPage({
  eyebrow,
  title,
  breadcrumb,
  subtitle,
  description,
  services,
  ctaTitle,
}: ServiceDetailPageProps) {
  return (
    <>
      <section className="bg-[#F5F7FA] px-4 pb-14 pt-32 sm:px-6 lg:px-8 lg:pb-20 lg:pt-36">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-4xl"
          >
            <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm font-semibold text-[#5B6472]">
              <Link href="/" className="transition-colors hover:text-[#D4A017]">
                Home
              </Link>
              <ChevronRight className="h-4 w-4 text-[#D4A017]" aria-hidden="true" />
              <Link href="/services" className="transition-colors hover:text-[#D4A017]">
                Services
              </Link>
              <ChevronRight className="h-4 w-4 text-[#D4A017]" aria-hidden="true" />
              <span className="text-[#0B1F3A]">{breadcrumb}</span>
            </nav>

            <p className="mb-5 inline-flex rounded-full border border-[#D4A017]/25 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#D4A017] shadow-sm">
              {eyebrow}
            </p>
            <h1 className="text-4xl font-bold leading-tight text-[#0B1F3A] md:text-6xl">{title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5B6472]">{subtitle}</p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
            className="mx-auto max-w-5xl rounded-[26px] border border-[#E5EAF0] bg-[#F8FAFC] p-6 shadow-sm md:p-7"
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-start">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#D4A017] text-[#0B1F3A]">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-2xl font-bold leading-tight text-[#0B1F3A]">How We Help</h2>
                <p className="mt-3 max-w-4xl leading-7 text-[#5B6472]">{description}</p>
              </div>
            </div>
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex h-full flex-col rounded-[24px] border border-[#E5EAF0] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A017]/45 hover:shadow-xl hover:shadow-slate-200/70 md:p-7"
              >
                <div className="mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0B1F3A] text-[#D4A017]">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold leading-snug text-[#0B1F3A]">{service.title}</h3>
                <p className="mt-3 flex-1 leading-7 text-[#5B6472]">{service.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-6xl rounded-[30px] bg-[#0B1F3A] p-8 text-white shadow-xl shadow-slate-200/70 md:p-12"
        >
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-3xl font-bold leading-tight md:text-5xl">{ctaTitle}</h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
                Contact our team to discuss the right accounting, taxation, payroll, and advisory approach for your organisation.
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
