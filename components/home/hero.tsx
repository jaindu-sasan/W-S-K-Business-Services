'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="min-h-screen pt-24 pb-20 bg-gradient-to-b from-background via-background to-card/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-foreground">Trusted by 500+ Businesses</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-primary text-balance leading-tight"
          >
            Expert Financial Solutions for Your Business Growth
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance"
          >
            From tax planning to accounting optimization, we help entrepreneurs and businesses maximize profits and minimize tax burden.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link
              href="/contact"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all inline-flex items-center justify-center gap-2 group"
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/tax-calculator"
              className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-secondary/80 transition-all border border-border inline-flex items-center justify-center"
            >
              Try Tax Calculator
            </Link>
          </motion.div>

          {/* Features */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8"
          >
            {[
              { label: '24/7 Support', icon: '📞' },
              { label: 'Expert Team', icon: '👥' },
              { label: '100% Secure', icon: '🔒' },
            ].map((feature) => (
              <div key={feature.label} className="flex items-center justify-center gap-2 text-foreground">
                <span className="text-2xl">{feature.icon}</span>
                <span className="font-medium">{feature.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Visual element */}
        <motion.div
          variants={itemVariants}
          className="mt-16 relative"
        >
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-border/50 p-8 md:p-12 min-h-96 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="text-6xl font-bold text-accent">98%</div>
              <p className="text-lg text-foreground font-semibold">Client Satisfaction Rate</p>
              <p className="text-muted-foreground">Helping businesses achieve their financial goals</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
