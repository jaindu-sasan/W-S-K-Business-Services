'use client';

import { motion } from 'framer-motion';

export function Timeline() {
  const milestones = [
    {
      year: '2009',
      title: 'Company Founded',
      description: 'Started with a vision to revolutionize tax and accounting services.',
      icon: '🚀',
    },
    {
      year: '2013',
      title: '100 Clients Milestone',
      description: 'Expanded team and opened new office locations.',
      icon: '🎯',
    },
    {
      year: '2016',
      title: 'Industry Recognition',
      description: 'Received "Best Accounting Firm" award from industry leaders.',
      icon: '🏆',
    },
    {
      year: '2019',
      title: 'Digital Transformation',
      description: 'Launched cloud-based solutions for seamless client collaboration.',
      icon: '💻',
    },
    {
      year: '2022',
      title: '500+ Clients',
      description: 'Reached milestone of serving over 500 satisfied clients nationwide.',
      icon: '⭐',
    },
    {
      year: '2024',
      title: 'Innovation Hub',
      description: 'Introduced AI-powered tax calculator and predictive analytics tools.',
      icon: '🤖',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-card/50 border-y border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Timeline</h2>
          <p className="text-lg text-muted-foreground">
            Key milestones in our journey to excellence
          </p>
        </motion.div>

        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
            >
              {/* Content */}
              <div className="flex-1">
                <div className="bg-background border border-border rounded-lg p-6">
                  <span className="inline-block text-3xl mb-3">{milestone.icon}</span>
                  <h3 className="text-xl font-bold text-primary mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>

              {/* Timeline center */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-accent/10 border-2 border-accent rounded-full flex items-center justify-center font-bold text-primary mb-4">
                  {milestone.year}
                </div>
                {index !== milestones.length - 1 && (
                  <div className="w-1 h-20 bg-gradient-to-b from-accent to-transparent"></div>
                )}
              </div>

              {/* Empty space for alignment */}
              <div className="flex-1"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
