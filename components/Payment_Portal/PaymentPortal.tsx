'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { OnlinePaymentForm } from '@/components/Payment_Portal/Online_from';
import { BankDetails } from '@/components/Payment_Portal/Bank_details';

type PaymentMethod = 'online' | 'bank';

export function PaymentPortal() {
  const [method, setMethod] = useState<PaymentMethod>('online');

  return (
    <>
      <section className="bg-background py-10 border-b border-border">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="inline-flex flex-col gap-3 rounded-[2rem] border border-border bg-card/80 p-2 shadow-lg shadow-black/5 backdrop-blur sm:flex-row">
              <button
                type="button"
                onClick={() => setMethod('online')}
                aria-pressed={method === 'online'}
                className={`group relative inline-flex h-14 min-w-[190px] items-center justify-center gap-2 overflow-hidden rounded-full px-7 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  method === 'online'
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                    : 'bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-base transition-colors ${
                    method === 'online'
                      ? 'bg-white/15'
                      : 'bg-primary/10 text-primary group-hover:bg-primary/15'
                  }`}
                >
                  💳
                </span>

                <span>Pay Online</span>
              </button>

              <button
                type="button"
                onClick={() => setMethod('bank')}
                aria-pressed={method === 'bank'}
                className={`group relative inline-flex h-14 min-w-[190px] items-center justify-center gap-2 overflow-hidden rounded-full px-7 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  method === 'bank'
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                    : 'bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-base transition-colors ${
                    method === 'bank'
                      ? 'bg-white/15'
                      : 'bg-primary/10 text-primary group-hover:bg-primary/15'
                  }`}
                >
                  🏦
                </span>

                <span>Bank Transfer</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-10 md:py-14">
        <AnimatePresence mode="wait">
          {method === 'online' ? (
            <motion.div
              key="online"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >


              <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
                <OnlinePaymentForm />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="bank"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <div
                id="bank-transfer"
                className="mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8"
              >
                <div className="mb-10">
                  <span className="mb-3 inline-flex rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-accent">
                    Direct Bank Deposit
                  </span>

                  <h2 className="mb-3 text-4xl font-black tracking-[-0.04em] text-primary md:text-5xl">
                    Bank Transfer
                  </h2>

                  <p className="mx-auto max-w-2xl text-base font-medium leading-7 text-muted-foreground md:text-lg">
                    Deposit directly to any of our local or foreign currency bank
                    accounts.
                  </p>
                </div>

                <BankDetails />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}