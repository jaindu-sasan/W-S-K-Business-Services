'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  Calculator,
  Wallet,
  ReceiptText,
  TrendingUp,
} from 'lucide-react';

export function TaxSection() {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' });
  const [taxYearCount, setTaxYearCount] = useState(0);
  const [reliefCount, setReliefCount] = useState(0);

  useEffect(() => {
    if (!statsInView) return;

    let yearFrame = 0;
    let reliefFrame = 0;

    const animateCount = (
      target: number,
      duration: number,
      setValue: (value: number) => void,
      setFrame: (id: number) => void
    ) => {
      const startTime = performance.now();

      const step = (time: number) => {
        const progress = Math.min((time - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.floor(target * eased));

        if (progress < 1) {
          setFrame(requestAnimationFrame(step));
        }
      };

      setFrame(requestAnimationFrame(step));
    };

    animateCount(2025, 1200, setTaxYearCount, (id) => {
      yearFrame = id;
    });
    animateCount(150, 1100, setReliefCount, (id) => {
      reliefFrame = id;
    });

    return () => {
      cancelAnimationFrame(yearFrame);
      cancelAnimationFrame(reliefFrame);
    };
  }, [statsInView]);

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
          <motion.div
            whileInView={{ scale: [1, 1.015, 1], y: [0, -4, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="rounded-[36px] bg-white p-8 shadow-2xl"
          >
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Tax Estimate Preview
                </p>
                <h3 className="mt-1 text-3xl font-semibold text-[#0B1F3A]">
                  Salary Tax
                </h3>
              </div>

              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4A017]"
              >
                <Calculator className="h-8 w-8 text-white" />
              </motion.div>
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
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '75%' }}
                    transition={{ duration: 1.1, delay: 0.15, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="h-full rounded-full bg-[#D4A017]"
                  />
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
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '35%' }}
                    transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="h-full rounded-full bg-[#0B1F3A]"
                  />
                </div>
              </div>
            </div>

            <div ref={statsRef} className="mt-8 grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="rounded-2xl bg-[#F5F7FA] p-5"
              >
                <p className="text-sm text-slate-500">Tax Year</p>
                <h4 className="mt-2 text-3xl font-semibold text-[#0B1F3A]">{taxYearCount}</h4>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="rounded-2xl bg-[#F5F7FA] p-5"
              >
                <p className="text-sm text-slate-500">Relief</p>
                <h4 className="mt-2 text-3xl font-semibold text-[#0B1F3A]">{reliefCount}K</h4>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
