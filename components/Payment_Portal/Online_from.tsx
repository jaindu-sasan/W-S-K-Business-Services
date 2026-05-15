'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

type FormData = {
  name: string;
  reference: string;
  email: string;
  mobile: string;
  amount: string;
};

type Field = {
  id: keyof FormData;
  label: string;
  type: 'input' | 'textarea';
  inputType?: string;
  placeholder: string;
};

type InfoCard = {
  title: string;
  description: string;
};

const COMPANY_NAME = 'WSK BUSINESS SERVICES';
const IPAYOS_URL = 'https://ebusinesseye.ipayos.lk';

const fields: Field[] = [
  {
    id: 'name',
    label: "Payer's Name",
    type: 'input',
    inputType: 'text',
    placeholder: 'Enter your full name',
  },
  {
    id: 'reference',
    label: 'Reference Details & Reason',
    type: 'textarea',
    placeholder: 'Enter payment reference and reason',
  },
  {
    id: 'email',
    label: 'Email Address',
    type: 'input',
    inputType: 'email',
    placeholder: 'Enter your email address',
  },
  {
    id: 'mobile',
    label: 'Mobile Number',
    type: 'input',
    inputType: 'tel',
    placeholder: 'Enter your mobile number',
  },
  {
    id: 'amount',
    label: 'Amount (Rs.)',
    type: 'input',
    inputType: 'number',
    placeholder: '0.00',
  },
];

const infoCards: InfoCard[] = [
  {
    title: 'Secure Payment',
    description: 'Protected hosted checkout through the payment gateway.',
  },
  {
    title: 'Demo Details',
    description: 'No real account or card number is displayed on this page.',
  },
  {
    title: 'Quick Process',
    description: 'Fill the form and continue to complete the payment.',
  },
];

function CommonInputField({
  field,
  value,
  onChange,
}: {
  field: Field;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}) {
  return (
    <div className={field.type === 'textarea' ? 'md:col-span-2' : ''}>
      <label className="mb-1.5 block text-xs font-semibold text-primary">
        {field.label}
      </label>

      {field.type === 'textarea' ? (
        <textarea
          name={field.id}
          value={value}
          onChange={onChange}
          placeholder={field.placeholder}
          rows={4}
          className="w-full resize-none rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-accent focus:ring-4 focus:ring-accent/10"
        />
      ) : (
        <input
          name={field.id}
          type={field.inputType}
          value={value}
          onChange={onChange}
          placeholder={field.placeholder}
          className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-accent focus:ring-4 focus:ring-accent/10"
        />
      )}
    </div>
  );
}

function CommonInfoCard({ item }: { item: InfoCard }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <p className="text-xs font-bold text-primary">{item.title}</p>
      <p className="mt-1.5 text-xs leading-5 text-muted-foreground">
        {item.description}
      </p>
    </div>
  );
}

function DemoPaymentCard() {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/10 p-5 shadow-xl backdrop-blur-xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
            {COMPANY_NAME}
          </p>

          <p className="mt-2 text-xl font-bold text-white">
            Demo Payment Card
          </p>
        </div>

        <div className="rounded-full border border-white/20 px-3 py-1.5 text-[10px] font-semibold text-white/80">
          Demo
        </div>
      </div>

      <div className="mt-7 h-8 w-14 rounded-lg bg-white/70" />

      <p className="mt-7 text-lg font-bold tracking-[0.18em] text-white">
        XXXX XXXX XXXX XXXX
      </p>

      <div className="mt-7 flex items-end justify-between gap-4">
        <div>
          <p className="text-[10px] text-white/60">Payment For</p>
          <p className="mt-1 text-xs font-semibold text-white">
            {COMPANY_NAME}
          </p>
        </div>

        <div className="text-right">
          <p className="text-[10px] text-white/60">Status</p>
          <p className="mt-1 text-xs font-semibold text-white">
            Secure Checkout
          </p>
        </div>
      </div>
    </div>
  );
}

function PaymentIntroPanel() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-accent p-7 md:p-8 xl:p-9">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_32%)]" />
      <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

      <div className="relative flex h-full min-h-[560px] flex-col justify-between">
        <div>
          <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-md">
            Secure Payment Portal
          </div>

          <h3 className="mt-5 max-w-md text-3xl font-black leading-tight text-white md:text-4xl">
            Fast, Safe & Trusted Online Payments
          </h3>

          <p className="mt-4 max-w-sm text-sm leading-6 text-white/80">
            Complete your payment securely through our hosted payment gateway.
            This page is prepared for demo purposes for {COMPANY_NAME}.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ duration: 0.6 }}
          className="mt-8 w-full max-w-md"
        >
          <DemoPaymentCard />
        </motion.div>

        <div className="mt-6 rounded-xl border border-white/15 bg-white/10 p-3 text-xs leading-5 text-white/85 backdrop-blur-md">
          Demo page only. No real card number, bank logo, or bank account number
          is shown here.
        </div>
      </div>
    </div>
  );
}

function PaymentFormPanel() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    reference: '',
    email: '',
    mobile: '',
    amount: '',
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleProceed = () => {
    window.open(IPAYOS_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-background/95 p-7 md:p-8 xl:p-9">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mx-auto w-full max-w-3xl"
      >
        <div className="mb-6">
          <div className="inline-flex rounded-full border border-accent/20 bg-accent/10 px-3.5 py-1.5 text-xs font-bold text-accent">
            Powered by iPayOS
          </div>

          <h4 className="mt-4 text-2xl font-black tracking-tight text-primary md:text-3xl">
            Enter Payment Information
          </h4>

          <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
            Fill in the details below and continue to the secure hosted payment
            page for {COMPANY_NAME}.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {fields.map((field) => (
            <CommonInputField
              key={field.id}
              field={field}
              value={formData[field.id]}
              onChange={handleChange}
            />
          ))}
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {infoCards.map((item) => (
            <CommonInfoCard key={item.title} item={item} />
          ))}
        </div>

        <div className="mt-6">
          <button
            type="button"
            onClick={handleProceed}
            className="group flex w-full items-center justify-center rounded-xl bg-accent px-5 py-3.5 text-base font-bold text-white shadow-lg shadow-accent/20 transition hover:-translate-y-0.5 hover:bg-accent/90"
          >
            Proceed to Payment
          </button>

          <p className="mt-3 text-center text-xs text-muted-foreground">
            Demo page only. No real account or card number is displayed.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export function OnlinePaymentForm() {
  return (
    <section className="w-full px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="overflow-hidden rounded-[28px] border border-border/70 bg-card shadow-xl">
          <div className="grid lg:grid-cols-[0.9fr_1.25fr]">
            <PaymentIntroPanel />
            <PaymentFormPanel />
          </div>
        </div>
      </div>
    </section>
  );
}