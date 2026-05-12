'use client';

import { motion } from 'framer-motion';

export function ServiceProcess() {
  const steps = [
    {
      number: '1',
      title: 'Free Consultation',
      description: 'We meet with you to understand your needs, goals, and current financial situation.',
      icon: '📞',
    },
    {
      number: '2',
      title: 'Custom Proposal',
      description: 'We develop a tailored service package and pricing that matches your specific requirements.',
      icon: '📋',
    },
    {
      number: '3',
      title: 'Engagement',
      description: 'Sign our service agreement and we begin implementation with your assigned team.',
      icon: '✍️',
    },
    {
      number: '4',
      title: 'Ongoing Support',
      description: 'Regular communication, quarterly reviews, and continuous optimization of your financial strategy.',
      icon: '🤝',
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
            Our Service Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From initial consultation to ongoing support, here's how we work with you
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Card */}
              <div className="bg-background border border-border rounded-lg p-8 text-center h-full flex flex-col items-center justify-center">
                <div className="text-5xl mb-4">{step.icon}</div>
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold text-lg mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-1 bg-gradient-to-r from-accent to-transparent"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 rounded-lg p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <p className="text-foreground font-medium">Client Support</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">Dedicated</div>
              <p className="text-foreground font-medium">Account Manager</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">Flexible</div>
              <p className="text-foreground font-medium">Engagement Terms</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
