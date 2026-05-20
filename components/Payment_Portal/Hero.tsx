'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

type PaymentHeroProps = {
  action?: ReactNode;
};

const trustBadges = [
  { icon: '🛡️', label: '256-bit SSL' },
  { icon: '⚡', label: 'Instant Confirmation' },
  { icon: '🏦', label: '9 Local Banks' },
  { icon: '🌐', label: 'Foreign Currency' },
];

export function PaymentHero({ action }: PaymentHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-card/20 pt-20 pb-10 md:pt-24 md:pb-12">
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

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="inline-block"
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3.5 py-1.5"
            >
              <motion.span
                animate={{ rotate: [0, -8, 8, 0] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  repeatDelay: 2.5,
                }}
                className="text-xl"
              >
                🔐
              </motion.span>

              <span className="text-xs font-semibold text-foreground">
                Secure Payments
              </span>
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="mx-auto mt-5 max-w-3xl text-4xl font-bold leading-tight text-primary md:text-5xl"
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
                className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground shadow-sm"
              >
                <span>{badge.icon}</span>
                <span>{badge.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
