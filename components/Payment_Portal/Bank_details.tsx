'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

type Bank = {
  name: string;
  branch: string;
  accountNo: string;
  accountType: string;
  holder: string;
};

type ForeignBank = {
  name: string;
  accountNo: string;
  swift?: string;
  aba?: string;
  note?: string;
};

const localBanks: Bank[] = [
  {
    name: 'Commercial Bank',
    branch: 'Nawala',
    accountNo: '1101013945',
    accountType: 'Current',
    holder: 'Business Eye Management Services (Pvt) Ltd',
  },
  {
    name: 'HNB Bank',
    branch: 'Battaramulla',
    accountNo: '085010029609',
    accountType: 'Current',
    holder: 'Business Eye Management Services (Pvt) Ltd',
  },
  {
    name: 'Sampath Bank',
    branch: 'Battaramulla',
    accountNo: '006110011456',
    accountType: 'Current',
    holder: 'Business Eye Management Services (Pvt) Ltd',
  },
  {
    name: 'NDB Bank',
    branch: 'Rajagiriya',
    accountNo: '106003236733',
    accountType: 'Savings',
    holder: 'Business Eye Management Services (Pvt) Ltd',
  },
  {
    name: 'NTB (Nations Trust Bank)',
    branch: 'Nawala',
    accountNo: '100270001377',
    accountType: 'Savings',
    holder: 'Business Eye Management Services (Pvt) Ltd',
  },
  {
    name: 'Bank of Ceylon',
    branch: 'Battaramulla',
    accountNo: '87799032',
    accountType: 'Savings',
    holder: 'Business Eye Management Services (Pvt) Ltd',
  },
  {
    name: "People's Bank",
    branch: 'Battaramulla',
    accountNo: '208200110047561',
    accountType: 'Savings',
    holder: 'Business Eye Management Services (Pvt) Ltd',
  },
  {
    name: 'Seylan Bank',
    branch: 'Battaramulla',
    accountNo: '101013080078108',
    accountType: 'Savings',
    holder: 'Business Eye Management Services (Pvt) Ltd',
  },
  {
    name: 'Cargills Bank',
    branch: 'Rajagiriya',
    accountNo: '020103000030',
    accountType: 'Current',
    holder: 'Business Eye Management Services (Pvt) Ltd',
  },
];

const foreignBanks: ForeignBank[] = [
  {
    name: 'Metropolitan Commercial Bank (USA)',
    accountNo: '8799040455',
    swift: 'MCBEUS33',
    aba: '026013356',
    note: 'Accepts payments from any country (USD)',
  },
  {
    name: 'First Century Bank (USA)',
    accountNo: '4028078828854',
    note: 'Only for payments within the USA',
  },
];

const currencies = ['USD', 'GBP', 'AUD', 'SGD', 'Payoneer'];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="text-xs px-2 py-1 rounded border border-border text-muted-foreground hover:text-accent hover:border-accent transition-colors"
    >
      {copied ? '✓ Copied' : 'Copy'}
    </button>
  );
}

export function BankDetails() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto space-y-10"
    >
      {/* Instructions */}
      <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 flex items-start gap-3">
        <span className="text-xl mt-0.5">📌</span>
        <p className="text-sm text-muted-foreground">
          After making a bank deposit, please notify us via{' '}
          <span className="text-foreground font-medium">SMS, Email, Viber, or WhatsApp</span> and retain
          the deposit slip as proof of payment.
        </p>
      </div>

      {/* Local Banks */}
      <div>
        <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
          <span>🏦</span> Local Bank Accounts
        </h3>
        <div className="grid gap-4">
          {localBanks.map((bank, index) => (
            <motion.div
              key={bank.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-card border border-border rounded-lg p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
            >
              <div className="space-y-1">
                <h4 className="font-bold text-primary">{bank.name}</h4>
                <p className="text-sm text-muted-foreground">
                  Branch: {bank.branch} &nbsp;·&nbsp; {bank.accountType} Account
                </p>
                <p className="text-sm text-foreground font-mono">Acc No: {bank.accountNo}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <CopyButton text={bank.accountNo} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Foreign Currency */}
      <div>
        <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
          <span>🌐</span> Foreign Currency Payments
        </h3>

        {/* Accepted currencies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {currencies.map((c) => (
            <span
              key={c}
              className="bg-accent/10 border border-accent/20 text-accent text-sm font-semibold px-3 py-1 rounded-full"
            >
              {c}
            </span>
          ))}
        </div>

        <div className="grid gap-4">
          {foreignBanks.map((bank, index) => (
            <motion.div
              key={bank.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-card border border-border rounded-lg p-5 space-y-3"
            >
              <h4 className="font-bold text-primary">{bank.name}</h4>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm text-muted-foreground">Account No</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-mono text-foreground">{bank.accountNo}</span>
                    <CopyButton text={bank.accountNo} />
                  </div>
                </div>
                {bank.swift && (
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm text-muted-foreground">SWIFT Code</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-mono text-foreground">{bank.swift}</span>
                      <CopyButton text={bank.swift} />
                    </div>
                  </div>
                )}
                {bank.aba && (
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm text-muted-foreground">Fedwire ABA</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-mono text-foreground">{bank.aba}</span>
                      <CopyButton text={bank.aba} />
                    </div>
                  </div>
                )}
              </div>
              {bank.note && (
                <p className="text-xs text-muted-foreground border-t border-border pt-3">{bank.note}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact after payment */}
      <div className="bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 rounded-lg p-6 text-center">
        <p className="text-foreground font-medium mb-1">Need help or made a payment?</p>
        <p className="text-sm text-muted-foreground">
          Contact us at{' '}
          <a href="mailto:info@ebusinesseye.com" className="text-accent hover:underline">
            info@ebusinesseye.com
          </a>{' '}
          or call{' '}
          <a href="tel:0112889845" className="text-accent hover:underline">
            0112 889 845
          </a>
        </p>
      </div>
    </motion.div>
  );
}