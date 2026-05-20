'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { OnlinePaymentForm } from '@/components/Payment_Portal/Online_from';
import { BankDetails } from '@/components/Payment_Portal/Bank_details';

type PaymentMethod = 'online' | 'bank';

export function PaymentPortal() {
  const [method, setMethod] = useState<PaymentMethod>('online');

  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Real background image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/payment-bg.jpg')",
        }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 -z-10 bg-background/85" />

      {/* Light blur overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/85 to-background" />

      {/* Payment method buttons */}
      <section className="relative border-b border-border/70 py-10">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="inline-flex flex-col gap-3 rounded-[2rem] border border-border bg-card/90 p-2 shadow-xl shadow-black/10 backdrop-blur-md sm:flex-row">
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
  className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
    method === 'online'
      ? 'bg-white/15'
      : 'bg-primary/10 text-primary group-hover:bg-primary/15'
  }`}
>
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M2 10h20" />
    <path d="M6 15h2" />
    <path d="M10 15h4" />
  </svg>
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
  className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
    method === 'bank'
      ? 'bg-white/15'
      : 'bg-primary/10 text-primary group-hover:bg-primary/15'
  }`}
>
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 10h18" />
    <path d="M5 10V7l7-4 7 4v3" />
    <path d="M6 10v8" />
    <path d="M10 10v8" />
    <path d="M14 10v8" />
    <path d="M18 10v8" />
    <path d="M4 18h16" />
    <path d="M3 21h18" />
  </svg>
</span>

                <span>Bank Transfer</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="relative py-10 md:py-14">
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
                <div className="rounded-[2rem] border border-border/70 bg-card/95 p-4 shadow-2xl shadow-black/10 backdrop-blur-md sm:p-6">
                  <OnlinePaymentForm />
                </div>
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
                <div className="rounded-[2rem] border border-border/70 bg-card/95 px-4 py-10 shadow-2xl shadow-black/10 backdrop-blur-md sm:px-6 lg:px-8">
                  <div className="mb-10">
                    <span className="mb-3 inline-flex rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-accent">
                      Direct Bank Deposit
                    </span>

                    <h2 className="mb-3 text-4xl font-black tracking-[-0.04em] text-primary md:text-5xl">
                      Bank Transfer
                    </h2>

                    <p className="mx-auto max-w-2xl text-base font-medium leading-7 text-muted-foreground md:text-lg">
                      Deposit directly to any of our local or foreign currency
                      bank accounts.
                    </p>
                  </div>

                  <BankDetails />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </section>
  );
}