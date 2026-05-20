'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, FileText, LineChart, ShieldCheck } from 'lucide-react';

export function ServicesHero() {
  return (
    <section
      className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24 lg:pt-36"
      style={{
        backgroundImage:
          "linear-gradient(rgba(245, 247, 250, 0.5), rgba(245, 247, 250, 0.5)), url('/servise%20Header.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl lg:order-2"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D4A017]/25 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#D4A017] shadow-sm">
            Accounting and Business Advisory
          </div>

          <h1 className="text-5xl font-bold leading-tight text-[#0B1F3A] md:text-6xl lg:text-7xl">
            Our Services
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5B6472]">
            Trusted accounting, taxation, payroll, and business consultancy services designed to help organisations make confident decisions and operate with clarity.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#D4A017] px-6 py-3 font-semibold text-[#0B1F3A] transition-all duration-300 hover:bg-[#c89512]"
            >
              Contact Us
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <a
              href="#services-overview"
              className="inline-flex items-center justify-center rounded-full border border-[#E5EAF0] bg-white px-6 py-3 font-semibold text-[#0B1F3A] shadow-sm transition-all hover:border-[#D4A017]/50 hover:text-[#D4A017]"
            >
              Explore Services
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative lg:order-1"
          aria-label="Service highlights"
        >
          <div className="rounded-[32px] border border-white bg-white p-5 shadow-xl shadow-slate-200/70">
            <div className="rounded-[24px] bg-[#0B1F3A] p-6 text-white">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4A017]">WSK Services</p>
                  <h2 className="mt-4 text-3xl font-bold leading-tight">Business support built around your goals.</h2>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#D4A017] text-[#0B1F3A]">
                  <ShieldCheck className="h-6 w-6" />
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: LineChart, label: 'Strategic consulting' },
                  { icon: FileText, label: 'Corporate development' },
                  { icon: CheckCircle2, label: 'Accounting and payroll' },
                  { icon: ShieldCheck, label: 'Taxation support' },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <item.icon className="mb-4 h-6 w-6 text-[#D4A017]" />
                    <p className="text-sm font-semibold leading-6 text-white/90">{item.label}</p>
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
