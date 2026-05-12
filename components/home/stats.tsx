'use client';

import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [displayValues, setDisplayValues] = useState({ clients: 0, revenue: 0, experience: 0, success: 0 });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const start = Date.now();
    const targets = { clients: 500, revenue: 50, experience: 15, success: 98 };

    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);

      setDisplayValues({
        clients: Math.floor(targets.clients * progress),
        revenue: Math.floor(targets.revenue * progress),
        experience: Math.floor(targets.experience * progress),
        success: Math.floor(targets.success * progress),
      });

      if (progress === 1) clearInterval(timer);
    }, 30);

    return () => clearInterval(timer);
  }, [isInView]);

  const stats = [
    {
      value: `${displayValues.clients}+`,
      label: 'Satisfied Clients',
      icon: '👥',
    },
    {
      value: `$${displayValues.revenue}M+`,
      label: 'Tax Savings Delivered',
      icon: '💰',
    },
    {
      value: `${displayValues.experience}+`,
      label: 'Years Experience',
      icon: '📈',
    },
    {
      value: `${displayValues.success}%`,
      label: 'Success Rate',
      icon: '✅',
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-card/50 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
