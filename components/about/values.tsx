'use client';

import { motion } from 'framer-motion';

export function Values() {
  const values = [
    {
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our dealings and financial advice.',
      icon: '⚖️',
    },
    {
      title: 'Excellence',
      description: 'We strive for perfection in every service we provide to our clients.',
      icon: '✨',
    },
    {
      title: 'Transparency',
      description: 'Clear communication and honest reporting are at the heart of our practice.',
      icon: '🔍',
    },
    {
      title: 'Innovation',
      description: 'We embrace modern technology to deliver cutting-edge financial solutions.',
      icon: '🚀',
    },
    {
      title: 'Partnership',
      description: 'Your success is our success. We grow together with our clients.',
      icon: '🤝',
    },
    {
      title: 'Dedication',
      description: 'We are committed to delivering exceptional results and ongoing support.',
      icon: '💪',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Values</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that guide every decision we make
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card border border-border rounded-lg p-8 hover:border-accent hover:shadow-lg transition-all"
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
