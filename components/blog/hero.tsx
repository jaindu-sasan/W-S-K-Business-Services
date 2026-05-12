'use client';

import { motion } from 'framer-motion';

export function BlogHero() {
  return (
    <section className="min-h-[50vh] pt-24 pb-16 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <div className="inline-block">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2">
              <span className="text-2xl">📝</span>
              <span className="text-sm font-medium text-foreground">Insights & Articles</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
            Financial Insights & Tax Tips
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed with expert articles on tax strategies, accounting best practices, and business financial guidance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
