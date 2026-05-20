'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Globe, Landmark, ShieldCheck, Zap } from 'lucide-react';

type PaymentHeroProps = {
  action?: ReactNode;
};

const trustBadges = [
  { icon: ShieldCheck, label: '256-bit SSL' },
  { icon: Zap, label: 'Instant Confirmation' },
  { icon: Landmark, label: '9 Local Banks' },
  { icon: Globe, label: 'Foreign Currency' },
];

export function PaymentHero({ action }: PaymentHeroProps) {
  return (
    <section
      className="relative overflow-hidden pb-10 pt-20 md:pb-12 md:pt-24"
      style={{
        backgroundImage:  `url('https://images.pexels.com/photos/164501/pexels-photo-164501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/70 to-background/85" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.45, scale: 1 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        className="absolute left-1/2 top-12 h-56 w-56 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />

      <motion.div
        animate={{ y: [0, -14, 0], x: [0, 10, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute right-10 top-24 hidden h-20 w-20 rounded-full border border-accent/20 bg-accent/5 md:block"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="mx-auto mt-2 max-w-3xl text-4xl font-bold leading-tight text-primary md:text-5xl"
          >
            Pay Online or via Bank
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28 }}
            className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted-foreground"
          >
            Choose your preferred payment method. Online transactions are
            protected via iPayOS, and bank transfers can be made to our local or
            foreign currency accounts.
          </motion.p>

          {action && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.38 }}
              className="mt-7 flex justify-center"
            >
              {action}
            </motion.div>
          )}

          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.42,
                },
              },
            }}
            className="mt-6 flex flex-wrap items-center justify-center gap-3"
          >
            {trustBadges.map((badge) => (
              <motion.div
                key={badge.label}
                variants={{
                  hidden: { opacity: 0, y: 10, scale: 0.96 },
                  show: { opacity: 1, y: 0, scale: 1 },
                }}
                whileHover={{ y: -3, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="flex items-center gap-2 rounded-full border border-border bg-card/90 px-3 py-1.5 text-xs text-muted-foreground shadow-sm backdrop-blur-md"
              >
                <badge.icon className="h-3.5 w-3.5 text-[#D4A017]" />
                <span>{badge.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}