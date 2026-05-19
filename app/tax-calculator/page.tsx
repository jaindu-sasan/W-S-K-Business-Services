'use client';

import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { TaxCalculatorHero } from '@/components/tax-calculator/hero';
import { Calculator } from '@/components/tax-calculator/calculator';
import { TaxTips } from '@/components/tax-calculator/tips';
import { CTA } from '@/components/home/cta';
import { Footer } from '@/components/footer';

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function TaxCalculatorPage() {
  return (
    <main className="bg-background">
      <Navigation />
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <TaxCalculatorHero />
      </motion.div>
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="px-4 sm:px-6 lg:px-8 -mt-10 md:-mt-12 relative z-10"
      >
        <div className="mx-auto max-w-6xl rounded-2xl border border-border bg-card p-5 md:p-7 shadow-lg">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-3 h-2 w-12 rounded-full bg-[#D4A017]" />
              <h2 className="text-xl md:text-2xl font-bold text-primary">TAX TABLE NO: 01</h2>
              <p className="mt-2 text-sm md:text-base text-muted-foreground">
                Monthly Tax Deductions from Regular Profits from Primary Employment
              </p>
              <p className="mt-1 text-sm text-muted-foreground">For more about tax calculation, download the brochure.</p>
            </div>
            <a
              href="/brochures/02.%20APIT_2526_Table_01_Text.pdf"
              download
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </motion.section>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
      >
        <Calculator />
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
      >
        <TaxTips />
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
      >
        <CTA />
      </motion.div>
      <Footer />
    </main>
  );
}
