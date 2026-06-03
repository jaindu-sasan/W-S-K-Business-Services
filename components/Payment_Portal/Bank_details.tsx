'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Building2,
  Copy,
  Check,
  ShieldCheck,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  Landmark,
} from 'lucide-react';

type BankAccount = {
  name: string;
  displayName?: string;
  logo?: string;
  logoAlt?: string;
  bankCode: string;
  branch: string;
  branchCode: string;
  accountNo: string;
  holder: string;
};

const localBanks: BankAccount[] = [
  {
    name: 'HNB PLC',
    displayName: 'HNB PLC',
    logo: '/bank-logos/hnb.png',
    bankCode: '7083',
    branch: 'NAWALA',
    branchCode: '147',
    accountNo: '1470-100-77-742',
    holder: 'W S K BUSINESS SERVICES (PVT) LTD',
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-4 py-2 text-sm font-semibold text-[#D4A017] transition hover:bg-[#D4A017] hover:text-white"
    >
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
}

function BankLogo({ bank }: { bank: BankAccount }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="flex h-16 w-24 items-center justify-center rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
      {bank.logo && !hasError ? (
        <img
          src={bank.logo}
          alt={bank.logoAlt || `${bank.name} logo`}
          className="max-h-12 max-w-full object-contain"
          onError={() => setHasError(true)}
        />
      ) : (
        <Landmark className="h-8 w-8 text-[#D4A017]" />
      )}
    </div>
  );
}

function DetailRow({
  label,
  value,
  copyable = false,
}: {
  label: string;
  value: string;
  copyable?: boolean;
}) {
  return (
    <div className="rounded-2xl bg-[#F5F7FA] p-5">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
        {label}
      </p>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="break-words text-lg font-semibold text-[#0B1F3A]">
          {value}
        </p>

        {copyable && <CopyButton text={value} />}
      </div>
    </div>
  );
}

function BankCard({ bank, index }: { bank: BankAccount; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-[32px] bg-white shadow-xl"
    >
      {/* Card Header */}
      <div className="flex flex-col gap-5 bg-[#0B1F3A] p-8 text-white sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-5">
          <BankLogo bank={bank} />

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D4A017]">
              Business Account
            </p>

            <h3 className="mt-2 text-3xl font-semibold text-white">
              {bank.displayName || bank.name}
            </h3>

            <p className="mt-1 text-white/70">
              {bank.branch} Branch
            </p>
          </div>
        </div>

        <div className="rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-5 py-2 text-sm font-semibold text-[#D4A017]">
          Verified Account
        </div>
      </div>

      {/* Details */}
      <div className="p-8">
        <div className="mb-6 rounded-[24px] border border-[#D4A017]/20 bg-[#D4A017]/10 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4A017]">
            Account Number
          </p>

          <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h4 className="text-3xl font-semibold tracking-tight text-[#0B1F3A]">
              {bank.accountNo}
            </h4>

            <CopyButton text={bank.accountNo} />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <DetailRow label="Account Name" value={bank.holder} />
          <DetailRow label="Bank Code" value={bank.bankCode} copyable />
          <DetailRow label="Branch" value={`${bank.branch} Branch`} />
          <DetailRow label="Branch Code" value={bank.branchCode} copyable />
        </div>
      </div>
    </motion.div>
  );
}

export function BankDetails() {
  return (
    <section className="relative overflow-hidden bg-[#F5F7FA] py-24">
      <div className="absolute -right-32 top-20 h-[420px] w-[420px] rounded-full bg-[#D4A017]/10 blur-3xl" />
      <div className="absolute -left-32 bottom-20 h-[420px] w-[420px] rounded-full bg-[#0B1F3A]/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 overflow-hidden rounded-[36px] bg-[#0B1F3A] p-8 shadow-2xl md:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4A017]">
                Payment Information
              </p>

              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em] text-white md:text-5xl">
                Secure Bank
                <span className="block text-[#D4A017]">
                  Transfer Details
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-[17px] leading-8 text-white/75">
                Use the official WSK Business Services business bank account
                details below when making direct bank transfer payments.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4A017]">
                <ShieldCheck className="h-7 w-7 text-white" />
              </div>

              <h3 className="text-2xl font-semibold text-white">
                Important Notice
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/70">
                Please include your name, invoice number, or reference when
                completing the transfer.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Payment Methods */}
        <div className="mb-12 grid gap-5 md:grid-cols-3">
          {[
            {
              icon: Landmark,
              title: 'Bank Transfer',
              text: 'Transfer directly to WSK official business account.',
            },
            {
              icon: Building2,
              title: 'Business Account',
              text: 'Payments are made to registered company account.',
            },
            {
              icon: ShieldCheck,
              title: 'Secure Confirmation',
              text: 'Payment can be confirmed through WhatsApp or email.',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-[26px] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4A017]/10">
                <item.icon className="h-6 w-6 text-[#D4A017]" />
              </div>

              <h3 className="text-xl font-semibold text-[#0B1F3A]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bank Account */}
        <div className="mb-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4A017]">
            Sri Lanka
          </p>

          <h2 className="text-4xl font-semibold text-[#0B1F3A]">
            Local Bank Account
          </h2>

          <p className="mt-3 max-w-2xl text-[17px] leading-7 text-slate-600">
            Bank transfer details for W S K Business Services (Pvt) Ltd.
          </p>
        </div>

        <div className="grid gap-6">
          {localBanks.map((bank, index) => (
            <BankCard key={bank.accountNo} bank={bank} index={index} />
          ))}
        </div>

        {/* Help Box */}
        <div className="mt-12 rounded-[32px] bg-white p-8 shadow-lg">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4A017]">
                Need Assistance?
              </p>

              <h3 className="text-3xl font-semibold text-[#0B1F3A]">
                Confirm Your Payment Easily
              </h3>

              <p className="mt-4 text-[16px] leading-7 text-slate-600">
                After completing your transfer, please contact WSK Business
                Services with your payment reference or deposit slip.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <a
                href="tel:0115044433"
                className="rounded-2xl bg-[#F5F7FA] p-5 text-center transition hover:bg-[#D4A017]/10"
              >
                <Phone className="mx-auto mb-3 h-6 w-6 text-[#D4A017]" />
                <p className="text-sm font-semibold text-[#0B1F3A]">
                  011 5044 433
                </p>
              </a>

              <a
                href="mailto:info@wskbusiness.com"
                className="rounded-2xl bg-[#F5F7FA] p-5 text-center transition hover:bg-[#D4A017]/10"
              >
                <Mail className="mx-auto mb-3 h-6 w-6 text-[#D4A017]" />
                <p className="text-sm font-semibold text-[#0B1F3A]">
                  Email Us
                </p>
              </a>

              <Link
                href="/contact"
                className="rounded-2xl bg-[#0B1F3A] p-5 text-center text-white transition hover:bg-[#10284A]"
              >
                <MessageCircle className="mx-auto mb-3 h-6 w-6 text-[#D4A017]" />
                <p className="inline-flex items-center justify-center gap-2 text-sm font-semibold">
                  Contact Page
                  <ArrowRight className="h-4 w-4" />
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* Refund Policy */}
        <p className="mt-8 text-center text-sm text-slate-600">
          Please review our{' '}
          <Link
            href="/refund-policy"
            className="font-semibold text-[#D4A017] underline underline-offset-4"
          >
            Refund Policy
          </Link>{' '}
          before making any payments.
        </p>
      </div>
    </section>
  );
}