'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Calculator,
  Wallet,
  ReceiptText,
  TrendingUp,
} from 'lucide-react';

export function TaxSection() {
  return (
    <section className="relative overflow-hidden bg-[#F5F7FA] py-24">
      <div className="absolute -right-24 top-20 h-[420px] w-[420px] rounded-full bg-[#D4A017]/10 blur-3xl" />
      <div className="absolute -left-24 bottom-10 h-[360px] w-[360px] rounded-full bg-[#0B1F3A]/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="mb-5 flex items-center gap-3">
            <div className="h-[2px] w-10 bg-[#D4A017]" />
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4A017]">
              Tax Calculator
            </p>
          </div>

          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#0B1F3A] md:text-5xl">
            Calculate Your Tax
            <span className="block text-[#C69214]">
              With Confidence
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-[17px] leading-7 text-slate-600">
            Estimate annual income tax, monthly salary deductions,
            and tax obligations using simple tools designed for
            individuals and businesses in Sri Lanka.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { icon: ReceiptText, text: 'Annual Income Tax' },
              { icon: Wallet, text: 'Monthly Salary Tax' },
              { icon: TrendingUp, text: 'Updated 2025 Rates' },
              { icon: Calculator, text: 'Fast Tax Estimate' },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4A017]/10">
                  <item.icon className="h-5 w-5 text-[#D4A017]" />
                </div>
                <span className="text-sm font-medium text-[#0B1F3A]">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          <Link
            href="/tax-calculator"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#0B1F3A] px-8 py-4 text-white transition-all hover:bg-[#10284A]"
          >
            Open Tax Calculator
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0B1F3A]">
              <ArrowRight size={16} />
            </span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-[36px] bg-white p-8 shadow-2xl">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Tax Estimate Preview
                </p>
                <h3 className="mt-1 text-3xl font-semibold text-[#0B1F3A]">
                  Salary Tax
                </h3>
              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4A017]">
                <Calculator className="h-8 w-8 text-white" />
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-slate-500">Monthly Salary</span>
                  <span className="font-semibold text-[#0B1F3A]">
                    Rs. 250,000
                  </span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-[#F5F7FA]">
                  <div className="h-full w-[75%] rounded-full bg-[#D4A017]" />
                </div>
              </div>

              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-slate-500">Tax Deduction</span>
                  <span className="font-semibold text-[#0B1F3A]">
                    Rs. 8,000
                  </span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-[#F5F7FA]">
                  <div className="h-full w-[35%] rounded-full bg-[#0B1F3A]" />
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-[#F5F7FA] p-5">
                <p className="text-sm text-slate-500">Tax Year</p>
                <h4 className="mt-2 text-3xl font-semibold text-[#0B1F3A]">
                  2025
                </h4>
              </div>

              <div className="rounded-2xl bg-[#F5F7FA] p-5">
                <p className="text-sm text-slate-500">Relief</p>
                <h4 className="mt-2 text-3xl font-semibold text-[#0B1F3A]">
                  150K
                </h4>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}