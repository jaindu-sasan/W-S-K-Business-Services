'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function ServicesList() {
  const [expandedId, setExpandedId] = useState<string | null>('tax-planning');

  const services = [
    {
      id: 'tax-planning',
      title: 'Tax Planning & Optimization',
      icon: '📊',
      shortDesc: 'Strategic tax planning to minimize liabilities.',
      fullDesc: 'Our comprehensive tax planning services help you navigate complex tax situations and identify opportunities for significant savings. We stay updated with current tax laws and regulations to ensure you benefit from all available deductions and credits.',
      benefits: [
        'Quarterly tax reviews and planning sessions',
        'Strategic deduction maximization',
        'State and federal tax optimization',
        'Tax-efficient business structure advice',
        'Estimated tax payment planning',
      ],
      price: 'Custom Pricing',
    },
    {
      id: 'accounting',
      title: 'Accounting & Bookkeeping',
      icon: '📑',
      shortDesc: 'Complete accounting management for clarity.',
      fullDesc: 'From day-to-day bookkeeping to comprehensive financial reporting, we manage your accounting needs with precision and expertise. Our cloud-based solutions provide real-time financial visibility.',
      benefits: [
        'Monthly bookkeeping and reconciliation',
        'Financial statement preparation',
        'Account coding and categorization',
        'Cloud-based accounting setup',
        'Month-end and year-end close',
      ],
      price: 'Starting at $500/month',
    },
    {
      id: 'consulting',
      title: 'Business Consulting',
      icon: '🎯',
      shortDesc: 'Strategic guidance for sustainable growth.',
      fullDesc: 'Our business consultants work with you to analyze financial performance, identify growth opportunities, and implement strategies for sustainable profitability and expansion.',
      benefits: [
        'Financial analysis and benchmarking',
        'Growth strategy development',
        'Cost optimization analysis',
        'Cash flow management',
        'Business valuation services',
      ],
      price: 'Custom Pricing',
    },
    {
      id: 'payroll',
      title: 'Payroll & HR Services',
      icon: '💼',
      shortDesc: 'Simplified payroll with full compliance.',
      fullDesc: 'We handle all aspects of payroll processing, tax withholding, and regulatory compliance, allowing you to focus on running your business with confidence.',
      benefits: [
        'Payroll processing (bi-weekly/monthly)',
        'Tax withholding and filing',
        'Year-end W-2 and 1099 processing',
        'Compliance with federal and state laws',
        'Employee benefit setup support',
      ],
      price: 'Starting at $300/month',
    },
    {
      id: 'audit',
      title: 'Audit & Assurance',
      icon: '✓',
      shortDesc: 'Comprehensive audit and verification services.',
      fullDesc: 'Our audit services provide independent verification of your financial statements and ensure compliance with applicable accounting standards and regulations.',
      benefits: [
        'Financial statement audits',
        'Internal control evaluations',
        'Compliance audits',
        'Fraud risk assessments',
        'Audit readiness preparation',
      ],
      price: 'Custom Pricing',
    },
    {
      id: 'cfo',
      title: 'CFO Advisory Services',
      icon: '👨‍💼',
      shortDesc: 'Part-time CFO expertise for your business.',
      fullDesc: 'Get the strategic financial leadership of a seasoned CFO without the full-time expense. Perfect for growing businesses needing high-level financial guidance.',
      benefits: [
        'Strategic financial planning',
        'Cash flow forecasting',
        'Business valuation',
        'Investor relations support',
        'Financial strategy consultation',
      ],
      price: 'Starting at $2,000/month',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Detailed Service Offerings
          </h2>
          <p className="text-lg text-muted-foreground">
            Click on any service to learn more about what we offer
          </p>
        </motion.div>

        <div className="space-y-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="border border-border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setExpandedId(expandedId === service.id ? null : service.id)}
                className="w-full bg-card hover:bg-card/80 transition-colors p-6 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4 text-left flex-1">
                  <span className="text-4xl">{service.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-primary">{service.title}</h3>
                    <p className="text-muted-foreground">{service.shortDesc}</p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expandedId === service.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-accent" />
                </motion.div>
              </button>

              {expandedId === service.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-border bg-card/50 p-6 space-y-4"
                >
                  <p className="text-foreground">{service.fullDesc}</p>

                  <div>
                    <h4 className="font-semibold text-primary mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <span className="text-accent mt-1">✓</span>
                          <span className="text-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-accent font-semibold">{service.price}</p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
