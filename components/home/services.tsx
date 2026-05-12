'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export function Services() {
  const services = [
    {
      title: 'Tax Planning & Optimization',
      description: 'Strategic tax planning to minimize liabilities and maximize deductions.',
      icon: '📊',
      features: ['Quarterly reviews', 'Deduction maximization', 'State tax planning'],
    },
    {
      title: 'Accounting Services',
      description: 'Full-cycle accounting management for complete financial clarity.',
      icon: '📑',
      features: ['Bookkeeping', 'Financial statements', 'Monthly reconciliation'],
    },
    {
      title: 'Business Consulting',
      description: 'Expert guidance for sustainable growth and profitability.',
      icon: '🎯',
      features: ['Financial analysis', 'Growth strategies', 'Cost optimization'],
    },
    {
      title: 'Payroll & HR Services',
      description: 'Simplified payroll management and compliance solutions.',
      icon: '💼',
      features: ['Payroll processing', 'Tax filing', 'Compliance setup'],
    },
    {
      title: 'Audit & Assurance',
      description: 'Comprehensive audit services ensuring financial accuracy.',
      icon: '✓',
      features: ['Internal audits', 'Compliance audits', 'Financial review'],
    },
    {
      title: 'CFO Advisory Services',
      description: 'Part-time CFO services for strategic financial decision-making.',
      icon: '👨‍💼',
      features: ['Financial strategy', 'Cash flow planning', 'Business valuation'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive financial solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group bg-card border border-border rounded-xl p-8 hover:border-accent hover:shadow-lg transition-all duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="text-sm text-foreground flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all"
              >
                Learn More
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all"
          >
            View All Services
            <ChevronRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
