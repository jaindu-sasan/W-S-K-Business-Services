'use client';

import { motion } from 'framer-motion';

export function AboutHero() {
  return (
    <section className="min-h-screen pt-24 pb-20 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <div className="inline-block">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2">
              <span className="text-2xl">📖</span>
              <span className="text-sm font-medium text-foreground">Our Story</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight">
            Building Trust Through Excellence
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
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
                <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
