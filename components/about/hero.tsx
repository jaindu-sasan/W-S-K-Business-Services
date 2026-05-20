'use client';

import { motion } from 'framer-motion';

export function AboutHero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-background to-card/20 pb-20 pt-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-center"
        >
          <h1 className="text-5xl font-bold leading-tight text-primary md:text-7xl">
            Building Trust Through Excellence
          </h1>

          <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
            For over 15 years, WSK Business Services has been the trusted partner for businesses seeking financial clarity, tax optimization, and strategic growth. Our commitment to excellence has helped hundreds of entrepreneurs achieve their financial goals.
          </p>

          <div className="grid grid-cols-3 gap-8 pt-8">
            {[
              { value: '15+', label: 'Years of Excellence' },
              { value: '500+', label: 'Clients Served' },
              { value: '100%', label: 'Dedication' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="mb-2 text-4xl font-bold text-accent">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
