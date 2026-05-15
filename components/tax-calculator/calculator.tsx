'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const numberFormatter = new Intl.NumberFormat('en-LK');
const moneyFormatter = new Intl.NumberFormat('en-LK', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const formatNumber = (value: number) => numberFormatter.format(value);
const formatMoney = (value: number) => `Rs. ${moneyFormatter.format(value)}`;
const DEFAULT_MONTHLY_INCOME = '0';

type SlabRow = {
  label: string;
  rateLabel: string;
  taxable: number;
  tax: number;
  showTax: boolean;
};

const parseIncome = (input: string) => {
  const cleaned = input.replace(/[^\d]/g, '');
  if (!cleaned) return 0;
  return Number(cleaned);
};

export function Calculator() {
  const [incomeInput, setIncomeInput] = useState(DEFAULT_MONTHLY_INCOME);

  const monthlyIncome = useMemo(() => parseIncome(incomeInput), [incomeInput]);

  const { annualIncome, monthlyTax, annualTax, rows } = useMemo(() => {
    const monthly = Math.max(0, monthlyIncome);
    const annual = monthly * 12;

    // Tax Table No. 01 progressive monthly slabs.
    const slabs = [
      { label: 'Up to 150,000', width: 150000, rate: 0, rateLabel: 'Relief' },
      { label: 'First 83,333 LKR', width: 83333, rate: 0.06, rateLabel: '6%' },
      { label: 'Next 41,667 LKR', width: 41667, rate: 0.18, rateLabel: '18%' },
      { label: 'Next 41,667 LKR', width: 41667, rate: 0.24, rateLabel: '24%' },
      { label: 'Next 41,666 LKR', width: 41666, rate: 0.3, rateLabel: '30%' },
    ];

    let remaining = monthly;
    const taxRows: SlabRow[] = [];
    let totalMonthlyTax = 0;

    for (const slab of slabs) {
      const taxable = Math.max(0, Math.min(remaining, slab.width));
      const tax = taxable * slab.rate;
      totalMonthlyTax += tax;

      taxRows.push({
        label: slab.label,
        rateLabel: slab.rateLabel,
        taxable,
        tax,
        showTax: slab.rate > 0,
      });

      remaining -= taxable;
    }

    const balanceTaxable = Math.max(0, remaining);
    const balanceTax = balanceTaxable * 0.36;
    totalMonthlyTax += balanceTax;

    taxRows.push({
      label: `Balance ${formatNumber(balanceTaxable)} LKR`,
      rateLabel: '36%',
      taxable: balanceTaxable,
      tax: balanceTax,
      showTax: balanceTaxable > 0,
    });

    const roundedMonthlyTax = Math.round(totalMonthlyTax * 100) / 100;
    const roundedAnnualTax = Math.round(roundedMonthlyTax * 12 * 100) / 100;

    return {
      annualIncome: annual,
      monthlyTax: roundedMonthlyTax,
      annualTax: roundedAnnualTax,
      rows: taxRows,
    };
  }, [monthlyIncome]);

  const handleIncomeChange = (value: string) => {
    const raw = value.replace(/[^\d]/g, '');
    setIncomeInput(raw);
  };

  const handleReset = () => {
    setIncomeInput(DEFAULT_MONTHLY_INCOME);
  };

  const visibleRows = useMemo(() => {
    // Show only relevant slabs that actually participate in the current calculation.
    // Keep relief row only when income is within relief band.
    return rows.filter((row) => row.taxable > 0 || (row.rateLabel === 'Relief' && monthlyIncome <= 150000));
  }, [rows, monthlyIncome]);

  return (
    <section className="py-10 md:py-14 bg-background">
      <div className="max-w-5xl mx-auto px-3 sm:px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-4 md:p-5 border-border/80 shadow-md gap-4">
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="text-3xl md:text-4xl font-bold text-primary text-center"
            >
              Local Tax Calculator
            </motion.h2>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Monthly Income (LKR)</label>
              <input
                type="text"
                inputMode="numeric"
                value={incomeInput ? formatNumber(parseIncome(incomeInput)) : ''}
                onChange={(e) => handleIncomeChange(e.target.value)}
                placeholder="Enter monthly income"
                className="h-11 w-full rounded-md border border-orange-400 bg-background px-3 text-foreground outline-none focus:border-accent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <motion.div
                key={`monthly-${monthlyIncome}-${monthlyTax}`}
                initial={{ opacity: 0, scale: 0.98, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="rounded-lg border border-border bg-muted/20 p-3 space-y-2"
              >
                <div>
                  <p className="text-sm text-muted-foreground">Monthly Income (LKR)</p>
                  <p className="text-3xl font-bold text-primary">{formatMoney(monthlyIncome)}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Monthly Tax (LKR)</p>
                  <p className="text-2xl font-bold text-primary">{formatMoney(monthlyTax)}</p>
                </div>
              </motion.div>
              <motion.div
                key={`annual-${annualIncome}-${annualTax}`}
                initial={{ opacity: 0, scale: 0.98, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut', delay: 0.04 }}
                className="rounded-lg border border-border bg-muted/20 p-3 space-y-2"
              >
                <div>
                  <p className="text-sm text-muted-foreground">Annual Income (LKR)</p>
                  <p className="text-3xl font-bold text-primary">{formatMoney(annualIncome)}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Annual Tax (LKR)</p>
                  <p className="text-2xl font-bold text-primary">{formatMoney(annualTax)}</p>
                </div>
              </motion.div>
            </div>

            <div className="rounded-lg border border-border overflow-hidden">
              <div className="grid grid-cols-[1.6fr_0.8fr_0.8fr] bg-muted/20 border-b border-border">
                <div className="p-3 text-sm font-semibold text-foreground">Monthly Salary (Annual Salary/12)</div>
                <div className="p-3 text-sm font-semibold text-foreground">Rate (%)</div>
                <div className="p-3 text-sm font-semibold text-foreground text-right">Tax</div>
              </div>

              <AnimatePresence initial={false} mode="popLayout">
                {visibleRows.map((row, index) => (
                  <motion.div
                    key={`${row.label}-${row.taxable}-${index}`}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.28, ease: 'easeOut' }}
                    className="grid grid-cols-[1.6fr_0.8fr_0.8fr] border-b last:border-b-0 border-border"
                  >
                    <div className="p-3 text-sm text-foreground">{row.label}</div>
                    <div className="p-3 text-sm text-foreground">{row.rateLabel}</div>
                    <div className="p-3 text-sm text-foreground text-right">
                      {row.showTax ? formatMoney(row.tax) : '-'}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              <div className="grid grid-cols-[1.6fr_0.8fr_0.8fr] bg-muted/20 border-t border-border">
                <div className="p-3 text-sm font-bold text-foreground">Monthly Total</div>
                <div className="p-3" />
                <div className="p-3 text-sm font-bold text-foreground text-right">{formatMoney(monthlyTax)}</div>
              </div>
            </div>

            <div className="flex justify-center pt-1">
              <motion.button
                type="button"
                onClick={handleReset}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-md border border-orange-400 px-6 py-2 text-sm font-medium text-orange-600 hover:bg-orange-50 transition-colors"
              >
                Reset Calculator
              </motion.button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
