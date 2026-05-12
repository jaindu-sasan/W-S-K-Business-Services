'use client';

import { motion } from 'framer-motion';

export function TaxTips() {
  const tips = [
    {
      title: 'Maximize Deductions',
      description: 'Keep detailed records of business expenses, medical costs, and charitable contributions to maximize your deductions.',
      icon: '📝',
    },
    {
      title: 'Use Tax-Advantaged Accounts',
      description: 'Contribute to 401(k), IRA, HSA, and other tax-advantaged accounts to reduce your taxable income.',
      icon: '🏦',
    },
    {
      title: 'Plan Quarterly Taxes',
      description: 'If self-employed, make quarterly estimated tax payments to avoid penalties and interest.',
      icon: '📅',
    },
    {
      title: 'Consider Business Structure',
      description: 'The right business entity (LLC, S-Corp, etc.) can significantly reduce your tax burden.',
      icon: '🏢',
    },
    {
      title: 'Time Your Income & Expenses',
      description: 'Strategic timing of income recognition and expense deduction can optimize your tax position.',
      icon: '⏰',
    },
    {
      title: 'Get Professional Help',
      description: 'A tax professional can identify opportunities you might miss and ensure compliance.',
      icon: '👨‍💼',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-card/50 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Tax Savings Tips
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strategic approaches to reduce your tax liability
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-background border border-border rounded-lg p-6 hover:border-accent hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-4">{tip.icon}</div>
              <h3 className="text-lg font-bold text-primary mb-2">{tip.title}</h3>
              <p className="text-muted-foreground text-sm">{tip.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
