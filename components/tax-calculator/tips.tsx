'use client';

import { motion } from 'framer-motion';

export function TaxTips() {
  const notes = [
    {
      title: 'Regular Profits Definition',
      description:
        'Include salary, wages, overtime, allowances, commissions, pension, non-cash benefits, and qualifying third-party payments.',
    },
    {
      title: 'Personal Relief Already Included',
      description:
        'Tax Table No. 01 already includes Rs. 150,000 monthly personal relief. Do not deduct any extra amount before applying the table.',
    },
    {
      title: 'When To Use Table 05',
      description:
        'Use Table No. 05 if the employee joined/retired during the year, or if monthly regular profits are below Rs. 150,000 but cumulative profits exceed Rs. 1,800,000.',
    },
    {
      title: 'When To Use Table 02',
      description:
        'Use Table No. 02 for salary arrears and lump-sum payments from employment.',
    },
    {
      title: 'When To Use Table 03',
      description:
        'Use Table No. 03 for once-and-for-all payments.',
    },
    {
      title: 'Mandatory Deduction',
      description:
        'Employers must deduct tax according to the relevant table regardless of employee consent.',
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
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Key APIT Rules</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quick reference points from Tax Table No. 01 guidance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {notes.map((note, index) => (
            <motion.div
              key={note.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-background border border-border rounded-lg p-6 hover:border-accent hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-bold text-primary mb-2">{note.title}</h3>
              <p className="text-muted-foreground text-sm">{note.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
