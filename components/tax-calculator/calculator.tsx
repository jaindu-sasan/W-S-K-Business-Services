'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export function Calculator() {
  const [income, setIncome] = useState(75000);
  const [fillingStatus, setFilingStatus] = useState('single');
  const [deductions, setDeductions] = useState(12950);
  const [dependents, setDependents] = useState(0);

  // Simple tax calculation (2024 tax brackets for demonstration)
  const calculateTax = () => {
    const taxableIncome = Math.max(0, income - deductions);
    let tax = 0;

    if (fillingStatus === 'single') {
      if (taxableIncome > 191950) tax = 46440.75 + (taxableIncome - 191950) * 0.37;
      else if (taxableIncome > 100525) tax = 18096 + (taxableIncome - 100525) * 0.32;
      else if (taxableIncome > 47150) tax = 5219.50 + (taxableIncome - 47150) * 0.22;
      else if (taxableIncome > 11600) tax = 1160 + (taxableIncome - 11600) * 0.12;
      else if (taxableIncome > 0) tax = taxableIncome * 0.10;
    } else {
      if (taxableIncome > 243725) tax = 56302.50 + (taxableIncome - 243725) * 0.37;
      else if (taxableIncome > 182100) tax = 20550 + (taxableIncome - 182100) * 0.32;
      else if (taxableIncome > 94300) tax = 10852 + (taxableIncome - 94300) * 0.22;
      else if (taxableIncome > 23200) tax = 2320 + (taxableIncome - 23200) * 0.12;
      else if (taxableIncome > 0) tax = taxableIncome * 0.10;
    }

    const childCredit = dependents * 2000;
    const finalTax = Math.max(0, tax - childCredit);
    const effectiveRate = income > 0 ? ((finalTax / income) * 100).toFixed(2) : '0.00';

    return { tax: Math.round(finalTax), taxRate: effectiveRate };
  };

  const { tax, taxRate } = calculateTax();
  const averageTaxPerMonth = Math.round(tax / 12);

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Input Form */}
          <Card className="p-8 border-border">
            <h2 className="text-2xl font-bold text-primary mb-6">Enter Your Information</h2>

            <div className="space-y-6">
              {/* Annual Income */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Annual Gross Income
                </label>
                <input
                  type="number"
                  value={income}
                  onChange={(e) => setIncome(Number(e.target.value))}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:border-accent"
                />
                <p className="text-sm text-muted-foreground mt-2">
                  ${income.toLocaleString()}
                </p>
              </div>

              {/* Filing Status */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Filing Status
                </label>
                <select
                  value={fillingStatus}
                  onChange={(e) => setFilingStatus(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:border-accent"
                >
                  <option value="single">Single</option>
                  <option value="married">Married Filing Jointly</option>
                </select>
              </div>

              {/* Standard Deduction */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Deductions
                </label>
                <input
                  type="number"
                  value={deductions}
                  onChange={(e) => setDeductions(Number(e.target.value))}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:border-accent"
                />
                <p className="text-xs text-muted-foreground mt-2">
                  2024 Standard Deduction: {fillingStatus === 'single' ? '$14,600' : '$29,200'}
                </p>
              </div>

              {/* Dependents */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Number of Dependents
                </label>
                <input
                  type="number"
                  value={dependents}
                  onChange={(e) => setDependents(Number(e.target.value))}
                  min="0"
                  max="10"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:border-accent"
                />
                <p className="text-sm text-muted-foreground mt-2">
                  Child Tax Credit: ${(dependents * 2000).toLocaleString()}
                </p>
              </div>
            </div>
          </Card>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {/* Main Result Card */}
            <Card className="p-8 bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
              <p className="text-sm text-muted-foreground mb-2">Estimated Annual Tax Liability</p>
              <div className="text-5xl font-bold text-primary mb-4">
                ${tax.toLocaleString()}
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <div>
                  <p className="text-xs text-muted-foreground">Effective Tax Rate</p>
                  <p className="text-2xl font-bold text-accent">{taxRate}%</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Monthly Tax</p>
                  <p className="text-2xl font-bold text-accent">
                    ${averageTaxPerMonth.toLocaleString()}
                  </p>
                </div>
              </div>
            </Card>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 border-border">
                <p className="text-xs text-muted-foreground mb-2">Taxable Income</p>
                <p className="text-lg font-bold text-primary">
                  ${Math.max(0, income - deductions).toLocaleString()}
                </p>
              </Card>
              <Card className="p-4 border-border">
                <p className="text-xs text-muted-foreground mb-2">Income After Tax</p>
                <p className="text-lg font-bold text-primary">
                  ${(income - tax).toLocaleString()}
                </p>
              </Card>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-muted-foreground">
              This is a simplified estimate. Actual tax liability may vary based on additional factors. Consult with a tax professional for personalized guidance.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
