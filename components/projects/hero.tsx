'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, FileCheck2, LineChart, ShieldCheck } from 'lucide-react';

export function ProjectsHero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1F3A] px-4 pb-16 pt-32 text-white sm:px-6 lg:px-8 lg:pb-24 lg:pt-36">
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#F8FAFC] to-transparent" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-4xl"
        >
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm font-semibold text-white/65">
            <Link href="/" className="transition-colors hover:text-[#D4A017]">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-[#D4A017]" aria-hidden="true" />
            <span className="text-white">Projects</span>
          </nav>

          <p className="mb-5 inline-flex rounded-full border border-[#D4A017]/30 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#D4A017]">
            Selected Client Work
          </p>
          <h1 className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">Our Projects</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
            Explore selected business, accounting, taxation, and advisory projects delivered to support organisational growth and financial clarity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative z-10"
        >
          <div className="rounded-[30px] border border-white/10 bg-white/8 p-5 shadow-2xl shadow-black/20 backdrop-blur">
            <div className="rounded-[24px] bg-white p-6 text-[#0B1F3A]">
              <div className="flex items-center justify-between gap-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A017]">Project Focus</p>
                  <h2 className="mt-3 text-3xl font-bold leading-tight">Clarity-led business support.</h2>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#D4A017]">
                  <LineChart className="h-6 w-6" />
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: FileCheck2, label: 'Accounting reviews' },
                  { icon: ShieldCheck, label: 'Tax compliance' },
                  { icon: LineChart, label: 'Business planning' },
                  { icon: FileCheck2, label: 'Reporting support' },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-[#E5EAF0] bg-[#F8FAFC] p-4">
                    <item.icon className="mb-4 h-6 w-6 text-[#D4A017]" />
                    <p className="text-sm font-semibold leading-6">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
