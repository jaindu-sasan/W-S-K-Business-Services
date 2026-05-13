'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { OnlinePaymentForm } from '@/components/Payment_Portal/Online_from';
import { BankDetails } from '@/components/Payment_Portal/Bank_details';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { CTA } from '@/components/home/cta';
import { PaymentHero } from '@/components/Payment_Portal/Hero';

type PaymentMethod = 'online' | 'bank';

export default function PaymentPage() {
  const [method, setMethod] = useState<PaymentMethod>('online');

  return (
    <main>
      <Navigation />
      <PaymentHero />

      {/* Method selector */}
      <section className="py-12 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="inline-flex bg-card border border-border rounded-xl p-1.5 gap-1">
              {(
                [
                  { id: 'online', label: 'Pay Online', icon: '💳' },
                  { id: 'bank', label: 'Bank Transfer', icon: '🏦' },
                ] as { id: PaymentMethod; label: string; icon: string }[]
              ).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setMethod(tab.id)}
                  className={`relative flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-colors ${
                    method === tab.id
                      ? 'text-white'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {method === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-accent rounded-lg"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{tab.icon}</span>
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {method === 'online' ? (
              <motion.div
                key="online"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                    Online Payment
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Pay securely using your credit or debit card via the iPayOS gateway.
                  </p>
                </div>
                <OnlinePaymentForm />
              </motion.div>
            ) : (
              <motion.div
                key="bank"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                    Bank Transfer
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Deposit directly to any of our local or foreign currency bank accounts.
                  </p>
                </div>
                <BankDetails />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}