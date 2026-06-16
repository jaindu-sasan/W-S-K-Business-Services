'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BadgeDollarSign, BriefcaseBusiness, ShieldCheck, Users } from 'lucide-react';

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [displayValues, setDisplayValues] = useState({ clients: 0, revenue: 0, experience: 0, success: 0 });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const start = Date.now();
    const targets = { clients: 1000, revenue: 50, experience: 15, success: 98 };

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
      icon: Users,
    },

    {
      value: `${displayValues.experience}+`,
      label: 'Years Experience',
      icon: BriefcaseBusiness,
    },
    {
      value: `${displayValues.success}%`,
      label: 'Success Rate',
      icon: ShieldCheck,
    },
  ];

  return (
    <section ref={ref} className="border-y border-border bg-card/50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-3 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F7C948] text-[#0B1F3A] shadow-sm">
                  <stat.icon className="h-9 w-9 stroke-[2.2]" />
                </div>
              </div>
              <div className="mb-2 text-4xl font-bold text-primary md:text-5xl">{stat.value}</div>
              <p className="font-medium text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
