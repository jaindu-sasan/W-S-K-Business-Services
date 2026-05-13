'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export function OnlinePaymentForm() {
  const [formData, setFormData] = useState({
    name: '',
    reference: '',
    email: '',
    mobile: '',
    amount: '',
  });

  const IPAYOS_URL = 'https://ebusinesseye.ipayos.lk';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleProceed = () => {
    // Open iPayOS gateway in a new tab; fields are filled on the hosted page
    window.open(IPAYOS_URL, '_blank');
  };

  const fields = [
    {
      id: 'name',
      label: "Payer's Name",
      icon: '👤',
      type: 'input',
      inputType: 'text',
      placeholder: 'Enter your full name',
    },
    {
      id: 'reference',
      label: 'Reference Details & Reason',
      icon: '📋',
      type: 'textarea',
      placeholder: 'Enter payment reference and reason',
    },
    {
      id: 'email',
      label: 'Email Address',
      icon: '✉️',
      type: 'input',
      inputType: 'email',
      placeholder: 'Enter your email address',
    },
    {
      id: 'mobile',
      label: 'Mobile Number',
      icon: '📱',
      type: 'input',
      inputType: 'tel',
      placeholder: 'Enter your mobile number',
    },
    {
      id: 'amount',
      label: 'Amount (Rs.)',
      icon: '💰',
      type: 'input',
      inputType: 'number',
      placeholder: '0.00',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      {/* Info banner */}
      <div className="mb-8 bg-accent/10 border border-accent/20 rounded-lg p-4 flex items-start gap-3">
        <span className="text-xl mt-0.5">ℹ️</span>
        <div>
          <p className="text-sm font-medium text-foreground">Powered by iPayOS</p>
          <p className="text-sm text-muted-foreground mt-1">
            Clicking "Proceed to Payment" will open the secure iPayOS hosted payment gateway where you can complete your transaction safely.
          </p>
        </div>
      </div>

      {/* Form preview */}
      <div className="space-y-5">
        {fields.map((field, index) => (
          <motion.div
            key={field.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
          >
            <label className="flex items-center gap-2 text-sm font-semibold text-primary mb-2">
              <span>{field.icon}</span>
              {field.label}
            </label>
            {field.type === 'textarea' ? (
              <textarea
                name={field.id}
                value={(formData as Record<string, string>)[field.id]}
                onChange={handleChange}
                placeholder={field.placeholder}
                rows={3}
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
              />
            ) : (
              <input
                name={field.id}
                type={field.inputType}
                value={(formData as Record<string, string>)[field.id]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Proceed button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8"
      >
        <button
          onClick={handleProceed}
          className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-3 text-lg shadow-lg shadow-accent/20 hover:shadow-accent/30"
        >
          <span>🔒</span>
          PROCEED TO PAYMENT
        </button>
        <p className="text-center text-sm text-muted-foreground mt-4 flex items-center justify-center gap-2">
          <span>🛡️</span>
          Your payment is secured with 256-bit SSL encryption
        </p>
      </motion.div>
    </motion.div>
  );
}