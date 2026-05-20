'use client';

import { FormEvent, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  CreditCard,
  Loader2,
  LockKeyhole,
  Mail,
  Phone,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  User,
  WalletCards,
} from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  mobile: string;
  amount: string;
  reference: string;
};

type PayHereFieldMap = Record<string, string>;

type CreatePaymentResponse = {
  ok: boolean;
  mode: 'approval_pending' | 'payhere_redirect';
  message: string;
  orderId?: string;
  endpoint?: string;
  fields?: PayHereFieldMap;
};

const COMPANY_NAME = 'WSK BUSINESS SERVICES';

const initialFormData: FormData = {
  name: '',
  email: '',
  mobile: '',
  amount: '',
  reference: '',
};

const inputBase =
  'w-full rounded-2xl border border-border/80 bg-background/80 px-4 py-3.5 text-sm text-foreground shadow-sm outline-none transition placeholder:text-muted-foreground/50 focus:border-accent focus:ring-4 focus:ring-accent/10';

function submitPayHereForm(endpoint: string, fields: PayHereFieldMap) {
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = endpoint;
  form.style.display = 'none';

  Object.entries(fields).forEach(([name, value]) => {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = name;
    input.value = value;
    form.appendChild(input);
  });

  document.body.appendChild(form);
  form.submit();
  form.remove();
}

export function OnlinePaymentForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notice, setNotice] = useState<{
    type: 'success' | 'error' | 'info';
    message: string;
  } | null>(null);

  const amountPreview = useMemo(() => {
    const amount = Number(formData.amount || 0);
    if (!Number.isFinite(amount) || amount <= 0) return 'LKR 0.00';
    return new Intl.NumberFormat('en-LK', {
      style: 'currency',
      currency: 'LKR',
      minimumFractionDigits: 2,
    }).format(amount);
  }, [formData.amount]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNotice(null);

    if (!formData.name || !formData.email || !formData.mobile || !formData.amount) {
      setNotice({ type: 'error', message: 'Please fill name, email, mobile and amount.' });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/payments/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = (await response.json()) as CreatePaymentResponse;

      if (!response.ok || !data.ok) {
        throw new Error(data.message || 'Unable to create payment request.');
      }

      if (data.mode === 'payhere_redirect' && data.endpoint && data.fields) {
        setNotice({ type: 'info', message: 'Redirecting to secure PayHere checkout...' });
        submitPayHereForm(data.endpoint, data.fields);
        return;
      }

      setNotice({
        type: 'success',
        message:
          data.message ||
          `Payment request saved. Reference: ${data.orderId}. Online gateway can be enabled after approval.`,
      });
    } catch (error) {
      setNotice({
        type: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-2xl shadow-black/5">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.aside
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent p-7 text-white sm:p-9"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.24),transparent_28%),radial-gradient(circle_at_80%_40%,rgba(255,255,255,0.16),transparent_30%)]" />

          <div className="relative flex h-full min-h-[420px] flex-col justify-between gap-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold backdrop-blur">
                <ShieldCheck className="h-4 w-4" />
                Secure Payment Request
              </div>

              <h3 className="mt-8 text-3xl font-black leading-tight sm:text-4xl">
                Pay {COMPANY_NAME} safely and smoothly.
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-6 text-white/75">
                This frontend is ready now. The backend is already prepared, and PayHere can be connected later by adding your approved merchant credentials only on the server.
              </p>
            </div>

            <div className="rounded-[1.6rem] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-md">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
                    Amount
                  </p>
                  <p className="mt-2 text-3xl font-black">{amountPreview}</p>
                </div>
                <div className="rounded-2xl bg-white/15 p-3">
                  <WalletCards className="h-7 w-7" />
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 text-xs text-white/70">
                <div className="rounded-2xl bg-white/10 p-3">
                  <LockKeyhole className="mb-2 h-4 w-4" />
                  Server hash only
                </div>
                <div className="rounded-2xl bg-white/10 p-3">
                  <Sparkles className="mb-2 h-4 w-4" />
                  Gateway-ready
                </div>
              </div>
            </div>
          </div>
        </motion.aside>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="relative p-6 sm:p-8 lg:p-10"
        >
          <div className="mb-8">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-accent">
              Online payment
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-primary sm:text-4xl">
              Payment Details
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Fill the details below. For now, the request is safely sent to your backend. After PayHere approval, add environment keys and the same button will redirect to PayHere.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  <User className="h-3.5 w-3.5" /> Payer Name
                </span>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  className={inputBase}
                />
              </label>

              <label className="space-y-2">
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  <Phone className="h-3.5 w-3.5" /> Mobile Number
                </span>
                <input
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="07X XXX XXXX"
                  className={inputBase}
                />
              </label>
            </div>

            <label className="space-y-2 block">
              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                <Mail className="h-3.5 w-3.5" /> Email Address
              </span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="customer@example.com"
                className={inputBase}
              />
            </label>

            <div className="grid gap-4 sm:grid-cols-[0.8fr_1.2fr]">
              <label className="space-y-2">
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  <CreditCard className="h-3.5 w-3.5" /> Amount LKR
                </span>
                <input
                  type="number"
                  min="1"
                  step="0.01"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  placeholder="0.00"
                  className={inputBase}
                />
              </label>

              <label className="space-y-2">
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  <ReceiptText className="h-3.5 w-3.5" /> Reference / Reason
                </span>
                <input
                  name="reference"
                  value={formData.reference}
                  onChange={handleChange}
                  placeholder="Invoice number or service reason"
                  className={inputBase}
                />
              </label>
            </div>

            {notice && (
              <div
                className={`flex gap-3 rounded-2xl border p-4 text-sm ${
                  notice.type === 'success'
                    ? 'border-emerald-500/25 bg-emerald-500/10 text-emerald-700'
                    : notice.type === 'error'
                      ? 'border-red-500/25 bg-red-500/10 text-red-700'
                      : 'border-accent/25 bg-accent/10 text-accent'
                }`}
              >
                {notice.type === 'success' ? (
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                ) : (
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                )}
                <span>{notice.message}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-4 text-sm font-black text-white shadow-lg shadow-accent/20 transition hover:-translate-y-0.5 hover:bg-accent/90 disabled:pointer-events-none disabled:opacity-70"
            >
              {isSubmitting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <LockKeyhole className="h-4 w-4" />
              )}
              {isSubmitting ? 'Preparing secure request...' : 'Continue Secure Payment'}
              {!isSubmitting && <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />}
            </button>

            <p className="text-center text-xs leading-5 text-muted-foreground">
              No card details are collected on this website. When enabled, PayHere will handle the secure checkout screen.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
