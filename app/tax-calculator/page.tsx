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
