'use client';

import { motion } from 'framer-motion';

export function TaxCalculatorHero() {
  return (
    <section className="relative min-h-[72vh] pt-20 pb-10 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/TaxcalHe.png')" }}
      />
      <div className="absolute inset-0 bg-background/55" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-10 space-y-6 text-center md:mt-14"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
            Tax Table No. 01 Calculator
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calculate monthly tax deductions from regular profits from primary employment, and identify when
            Table No. 02, 03, or 05 should be used.
          </p>

        </motion.div>
      </div>
    </section>
  );
}
