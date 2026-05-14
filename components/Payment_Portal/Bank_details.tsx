'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

type BankAccount = {
  name: string;
  displayName?: string;
  logo?: string;
  logoAlt?: string;
  branch?: string;
  accountNo: string;
  accountType?: string;
  holder?: string;
  swift?: string;
  aba?: string;
  note?: string;
  tag?: string;
};

const ACCOUNT_HOLDER = 'WSK BUSINESS SERVICES';

const localBanks: BankAccount[] = [
  {
    name: 'Commercial Bank',
    logo: '/bank-logos/commercial-bank.png',
    branch: 'Nawala',
    accountNo: 'XXXXX',
    accountType: 'Current',
    holder: ACCOUNT_HOLDER,
  },
  {
    name: 'Hatton National Bank',
    displayName: 'HNB Bank',
    logo: '/bank-logos/hnb.png',
    branch: 'Battaramulla',
    accountNo: 'XXXXX',
    accountType: 'Current',
    holder: ACCOUNT_HOLDER,
  },
  {
    name: 'Sampath Bank',
    logo: '/bank-logos/sampath-bank.png',
    branch: 'Battaramulla',
    accountNo: 'XXXXX',
    accountType: 'Current',
    holder: ACCOUNT_HOLDER,
  },
  {
    name: 'NDB Bank',
    logo: '/bank-logos/ndb-bank.png',
    branch: 'Rajagiriya',
    accountNo: 'XXXXX',
    accountType: 'Savings',
    holder: ACCOUNT_HOLDER,
  },
  {
    name: 'Nations Trust Bank',
    displayName: 'NTB Bank',
    logo: '/bank-logos/nations-trust-bank.png',
    branch: 'Nawala',
    accountNo: 'XXXXX',
    accountType: 'Savings',
    holder: ACCOUNT_HOLDER,
  },
  {
    name: 'Bank of Ceylon',
    logo: '/bank-logos/bank-of-ceylon.png',
    branch: 'Battaramulla',
    accountNo: 'XXXXX',
    accountType: 'Savings',
    holder: ACCOUNT_HOLDER,
  },
  {
    name: "People's Bank",
    logo: '/bank-logos/peoples-bank.png',
    branch: 'Battaramulla',
    accountNo: 'XXXXX',
    accountType: 'Savings',
    holder: ACCOUNT_HOLDER,
  },
  {
    name: 'Seylan Bank',
    logo: '/bank-logos/seylan-bank.png',
    branch: 'Battaramulla',
    accountNo: 'XXXXX',
    accountType: 'Savings',
    holder: ACCOUNT_HOLDER,
  },
  {
    name: 'Cargills Bank',
    logo: '/bank-logos/cargills-bank.png',
    branch: 'Rajagiriya',
    accountNo: 'XXXXX',
    accountType: 'Current',
    holder: ACCOUNT_HOLDER,
  },
];

const foreignBanks: BankAccount[] = [
  {
    name: 'Metropolitan Commercial Bank',
    displayName: 'Metropolitan Commercial Bank USA',
    logo: '/bank-logos/metropolitan-commercial-bank.png',
    accountNo: 'XXXXX',
    swift: 'XXXXX',
    aba: 'XXXXX',
    note: 'Demo account details only. Replace with real details when required.',
    tag: 'USD receiving account',
  },
  {
    name: 'First Century Bank',
    displayName: 'First Century Bank USA',
    logo: '/bank-logos/first-century-bank.png',
    accountNo: 'XXXXX',
    note: 'Demo account details only. Replace with real details when required.',
    tag: 'USA payments only',
  },
];

const currencies = ['USD', 'GBP', 'AUD', 'SGD', 'Payoneer'];

function getInitials(name: string) {
  return name
    .replace(/\(.*?\)/g, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 3)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-muted-foreground transition hover:border-accent hover:text-accent"
    >
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
}

function BankLogo({ bank }: { bank: BankAccount }) {
  const [hasError, setHasError] = useState(false);
  const initials = getInitials(bank.displayName || bank.name);

  return (
    <div className="flex h-14 w-20 shrink-0 items-center justify-center rounded-xl border border-border bg-white p-2 shadow-sm">
      {bank.logo && !hasError ? (
        <img
          src={bank.logo}
          alt={bank.logoAlt || `${bank.name} logo`}
          className="max-h-10 max-w-full object-contain"
          onError={() => setHasError(true)}
        />
      ) : (
        <span className="text-sm font-black tracking-tight text-primary">
          {initials}
        </span>
      )}
    </div>
  );
}

function InfoLine({
  label,
  value,
  copyable = false,
}: {
  label: string;
  value?: string;
  copyable?: boolean;
}) {
  if (!value) return null;

  return (
    <div className="flex flex-col gap-1 border-t border-border/70 py-3 sm:flex-row sm:items-center sm:justify-between">
      <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {label}
      </span>

      <div className="flex items-center gap-2 sm:justify-end">
        <span className="text-sm font-semibold text-foreground sm:text-right">
          {value}
        </span>

        {copyable && <CopyButton text={value} />}
      </div>
    </div>
  );
}

function CommonBankCard({
  bank,
  index,
  variant = 'local',
}: {
  bank: BankAccount;
  index: number;
  variant?: 'local' | 'foreign';
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="rounded-2xl border border-border bg-card p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md"
    >
      <div className="flex items-start gap-4">
        <BankLogo bank={bank} />

        <div className="min-w-0 flex-1">
          <h4 className="truncate text-base font-bold text-primary">
            {bank.displayName || bank.name}
          </h4>

          <p className="mt-1 text-sm text-muted-foreground">
            {variant === 'local'
              ? `${bank.branch} Branch · ${bank.accountType} Account`
              : bank.tag || 'Foreign currency payment account'}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <InfoLine label="Account No" value={bank.accountNo} />
        <InfoLine label="SWIFT Code" value={bank.swift} />
        <InfoLine label="Fedwire ABA" value={bank.aba} />
        <InfoLine label="Account Holder" value={bank.holder} />
      </div>

      {bank.note && (
        <p className="mt-2 rounded-xl bg-accent/10 px-3 py-2 text-xs leading-5 text-muted-foreground">
          {bank.note}
        </p>
      )}
    </motion.article>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-5 flex flex-col gap-1">
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">
        {eyebrow}
      </p>

      <h3 className="text-2xl font-black text-primary">{title}</h3>

      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

export function BankDetails() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-5xl space-y-10"
    >
      <div className="rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/10 via-card to-primary/5 p-6 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">
          Payment information
        </p>

        <h2 className="mt-2 text-3xl font-black tracking-tight text-primary">
          Bank Account Details
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
          These bank details are shown for demo purposes only. Real account
          numbers are hidden with XXXXX.
        </p>
      </div>

      <section>
        <SectionHeader
          eyebrow="Sri Lanka"
          title="Local Bank Accounts"
          description="Demo Sri Lankan bank account details for WSK BUSINESS SERVICES."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {localBanks.map((bank, index) => (
            <CommonBankCard key={bank.name} bank={bank} index={index} />
          ))}
        </div>
      </section>

      <section>
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="International"
            title="Foreign Currency Payments"
            description="Demo international payment details only."
          />

          <div className="flex flex-wrap gap-2">
            {currencies.map((currency) => (
              <span
                key={currency}
                className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm font-bold text-accent"
              >
                {currency}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {foreignBanks.map((bank, index) => (
            <CommonBankCard
              key={bank.name}
              bank={bank}
              index={index}
              variant="foreign"
            />
          ))}
        </div>
      </section>

      <div className="rounded-2xl border border-accent/20 bg-card p-6 text-center shadow-sm">
        <p className="text-lg font-black text-primary">
          Need help or made a payment?
        </p>

        <p className="mt-2 text-sm text-muted-foreground">
          Contact WSK BUSINESS SERVICES for payment confirmation.
        </p>
      </div>
    </motion.section>
  );
}