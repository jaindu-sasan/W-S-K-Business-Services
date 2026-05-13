'use client';

import { motion } from 'framer-motion';

export function PaymentHero() {
  return (
    <section className="min-h-[60vh] pt-24 pb-16 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <div className="inline-block">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2">
              <span className="text-2xl">🔐</span>
              <span className="text-sm font-medium text-foreground">Secure Payments</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
            Pay Online or via Bank
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your preferred payment method. All online transactions are protected with 256-bit SSL encryption via iPayOS. Bank transfers can be made to any of our local or foreign currency accounts.
          </p>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6 pt-4"
          >
            {[
              { icon: '🛡️', label: '256-bit SSL' },
              { icon: '⚡', label: 'Instant Confirmation' },
              { icon: '🏦', label: '9 Local Banks' },
              { icon: '🌐', label: 'Foreign Currency' },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{badge.icon}</span>
                <span>{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}