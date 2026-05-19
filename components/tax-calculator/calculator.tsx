'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const numberFormatter = new Intl.NumberFormat('en-LK');
const moneyFormatter = new Intl.NumberFormat('en-LK', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const formatNumber = (value: number) => numberFormatter.format(value);
const formatMoney = (value: number) => `LKR ${moneyFormatter.format(value)}`;
const DEFAULT_ANNUAL_INCOME = '0';
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

const calculateProgressiveTax = (
  income: number,
  slabs: Array<{ label: string; width: number; rate: number; rateLabel: string }>,
  balanceLabel: string
) => {
  let remaining = Math.max(0, income);
  const rows: SlabRow[] = [];
  let totalTax = 0;

  for (const slab of slabs) {
    const taxable = Math.max(0, Math.min(remaining, slab.width));
    const tax = taxable * slab.rate;
    totalTax += tax;

    rows.push({
      label: slab.label,
      rateLabel: slab.rateLabel,
      taxable,
      tax,
      showTax: slab.rate > 0 && taxable > 0,
    });

    remaining -= taxable;
  }

  const balanceTaxable = Math.max(0, remaining);
  const balanceTax = balanceTaxable * 0.36;
  totalTax += balanceTax;

  rows.push({
    label: balanceLabel,
    rateLabel: '36%',
    taxable: balanceTaxable,
    tax: balanceTax,
    showTax: balanceTaxable > 0,
  });

  return {
    rows,
    totalTax: Math.round(totalTax * 100) / 100,
  };
};

export function Calculator() {
  const [activeCalculator, setActiveCalculator] = useState<'annual' | 'monthly'>('annual');
  const [incomeInput, setIncomeInput] = useState(DEFAULT_ANNUAL_INCOME);
  const [submittedAnnualIncome, setSubmittedAnnualIncome] = useState(0);
  const [monthlyIncomeInput, setMonthlyIncomeInput] = useState(DEFAULT_MONTHLY_INCOME);
  const [submittedMonthlyIncome, setSubmittedMonthlyIncome] = useState(0);

  const annualIncomeInputValue = useMemo(() => parseIncome(incomeInput), [incomeInput]);
  const monthlyIncomeInputValue = useMemo(() => parseIncome(monthlyIncomeInput), [monthlyIncomeInput]);

  const { annualIncome, annualTax, quarterPayment, rows } = useMemo(() => {
    const annual = Math.max(0, submittedAnnualIncome);

    // Annual slabs equivalent to monthly relief of 150,000.
    const annualSlabs = [
      { label: 'Up to 150,000', width: 1800000, rate: 0, rateLabel: 'Relief' },
      { label: '1st 1,000,000', width: 1000000, rate: 0.06, rateLabel: '6%' },
      { label: '2nd 500,000', width: 500000, rate: 0.18, rateLabel: '18%' },
      { label: '3rd 500,000', width: 500000, rate: 0.24, rateLabel: '24%' },
      { label: '4th 500,000', width: 500000, rate: 0.3, rateLabel: '30%' },
    ];
    const annualResult = calculateProgressiveTax(annual, annualSlabs, 'Above 4,300,000');
    const roundedQuarterPayment = Math.round((annualResult.totalTax / 4) * 100) / 100;

    return {
      annualIncome: annual,
      annualTax: annualResult.totalTax,
      quarterPayment: roundedQuarterPayment,
      rows: annualResult.rows,
    };
  }, [submittedAnnualIncome]);

  const { monthlyIncome, monthlyTax, monthlyAnnualTax, monthlyQuarterPayment, monthlyRows } = useMemo(() => {
    const monthly = Math.max(0, submittedMonthlyIncome);

    const monthlySlabs = [
      { label: 'Up to 150,000', width: 150000, rate: 0, rateLabel: 'Relief' },
      { label: '1st 83,333', width: 83333, rate: 0.06, rateLabel: '6%' },
      { label: '2nd 41,667', width: 41667, rate: 0.18, rateLabel: '18%' },
      { label: '3rd 41,667', width: 41667, rate: 0.24, rateLabel: '24%' },
      { label: '4th 41,666', width: 41666, rate: 0.3, rateLabel: '30%' },
    ];

    const monthlyResult = calculateProgressiveTax(monthly, monthlySlabs, 'Above 358,333');
    const monthlyAnnual = Math.round(monthlyResult.totalTax * 12 * 100) / 100;
    const quarterly = Math.round((monthlyAnnual / 4) * 100) / 100;

    return {
      monthlyIncome: monthly,
      monthlyTax: monthlyResult.totalTax,
      monthlyAnnualTax: monthlyAnnual,
      monthlyQuarterPayment: quarterly,
      monthlyRows: monthlyResult.rows,
    };
  }, [submittedMonthlyIncome]);

  const visibleAnnualRows = useMemo(() => {
    return rows.filter((row) => row.rateLabel === 'Relief' || row.taxable > 0);
  }, [rows]);

  const visibleMonthlyRows = useMemo(() => {
    return monthlyRows.filter((row) => row.rateLabel === 'Relief' || row.taxable > 0);
  }, [monthlyRows]);

  const handleIncomeChange = (value: string) => {
    const raw = value.replace(/[^\d]/g, '');
    setIncomeInput(raw);
    setSubmittedAnnualIncome(raw ? Number(raw) : 0);
  };

  const handleCalculate = () => {
    setSubmittedAnnualIncome(annualIncomeInputValue);
  };

  const handleReset = () => {
    setIncomeInput(DEFAULT_ANNUAL_INCOME);
    setSubmittedAnnualIncome(0);
  };

  const handleMonthlyIncomeChange = (value: string) => {
    const raw = value.replace(/[^\d]/g, '');
    setMonthlyIncomeInput(raw);
    setSubmittedMonthlyIncome(raw ? Number(raw) : 0);
  };

  const handleMonthlyCalculate = () => {
    setSubmittedMonthlyIncome(monthlyIncomeInputValue);
  };

  const handleMonthlyReset = () => {
    setMonthlyIncomeInput(DEFAULT_MONTHLY_INCOME);
    setSubmittedMonthlyIncome(0);
  };

  return (
    <section className="py-10 md:py-14 bg-background">
      <div className="max-w-5xl mx-auto px-3 sm:px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <Card className="p-5 border-border/80 shadow-md">
              <h3 className="text-xl font-bold text-primary">Annual Income Tax Calculator</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Calculate tax based on your taxable annual income with quarterly payment details.
              </p>
              <button
                type="button"
                onClick={() => setActiveCalculator('annual')}
                className={`mt-4 rounded-md px-5 py-2 text-sm font-medium transition-colors ${
                  activeCalculator === 'annual'
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-orange-400 text-orange-600 hover:bg-orange-50'
                }`}
              >
                Open Annual Calculator
              </button>
            </Card>

            <Card className="p-5 border-border/80 shadow-md">
              <h3 className="text-xl font-bold text-primary">Monthly Salary Tax Calculator</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Enter your monthly salary and view monthly tax, annual estimate, and quarter payment.
              </p>
              <button
                type="button"
                onClick={() => setActiveCalculator('monthly')}
                className={`mt-4 rounded-md px-5 py-2 text-sm font-medium transition-colors ${
                  activeCalculator === 'monthly'
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-orange-400 text-orange-600 hover:bg-orange-50'
                }`}
              >
                Open Monthly Calculator
              </button>
            </Card>
          </div>

          {activeCalculator === 'annual' && (
            <Card className="p-4 md:p-5 border-border/80 shadow-md gap-4">
              <motion.h2
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="text-3xl md:text-4xl font-bold text-primary"
              >
                Annual Income Tax Calculator
              </motion.h2>
              <p className="text-lg text-muted-foreground">Tax Calculator w.e.f 01.04.2025</p>
              <p className="text-sm text-muted-foreground">Relief: up to LKR 150,000 per month (LKR 1,800,000 annually)</p>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Enter your Annual Income (taxable)</label>
                <input
                  type="text"
                  inputMode="numeric"
                  value={incomeInput ? formatNumber(parseIncome(incomeInput)) : ''}
                  onChange={(e) => handleIncomeChange(e.target.value)}
                  placeholder="Enter annual income"
                  className="h-11 w-full rounded-md border border-orange-400 bg-background px-3 text-foreground outline-none focus:border-accent"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                <motion.button
                  type="button"
                  onClick={handleCalculate}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
                >
                  Calculate
                </motion.button>
                <motion.button
                  type="button"
                  onClick={handleReset}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-md border border-orange-400 px-6 py-2 text-sm font-medium text-orange-600 hover:bg-orange-50 transition-colors"
                >
                  Reset
                </motion.button>
              </div>

              <div className="rounded-lg border border-border overflow-hidden">
                <div className="grid grid-cols-[1.6fr_0.8fr_0.8fr] bg-muted/20 border-b border-border">
                  <div className="p-3 text-sm font-semibold text-foreground">Annual income</div>
                  <div className="p-3 text-sm font-semibold text-foreground">Rate</div>
                  <div className="p-3 text-sm font-semibold text-foreground text-right">Tax</div>
                </div>

                {visibleAnnualRows.map((row, index) => (
                  <motion.div
                    key={`${row.label}-${row.taxable}-${index}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.24, ease: 'easeOut', delay: index * 0.02 }}
                    className="grid grid-cols-[1.6fr_0.8fr_0.8fr] border-b last:border-b-0 border-border"
                  >
                    <div className="p-3 text-sm text-foreground">{row.label}</div>
                    <div className="p-3 text-sm text-foreground">{row.rateLabel}</div>
                    <div className="p-3 text-sm text-foreground text-right">{row.showTax ? formatMoney(row.tax) : '-'}</div>
                  </motion.div>
                ))}

                <div className="grid grid-cols-[1.6fr_0.8fr_0.8fr] bg-muted/20 border-t border-border">
                  <div className="p-3 text-sm font-bold text-foreground">Total</div>
                  <div className="p-3" />
                  <div className="p-3 text-sm font-bold text-foreground text-right">{formatMoney(annualTax)}</div>
                </div>
                <div className="grid grid-cols-[1.6fr_0.8fr_0.8fr] bg-muted/20 border-t border-border">
                  <div className="p-3 text-sm font-bold text-foreground">Quarter payment</div>
                  <div className="p-3" />
                  <div className="p-3 text-sm font-bold text-foreground text-right">{formatMoney(quarterPayment)}</div>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-muted/10 p-3 text-sm text-foreground">
                Taxable annual income entered: <span className="font-semibold">{formatMoney(annualIncome)}</span>
              </div>
            </Card>
          )}

          {activeCalculator === 'monthly' && (
            <Card className="p-4 md:p-5 border-border/80 shadow-md gap-4">
              <motion.h2
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="text-3xl md:text-4xl font-bold text-primary"
              >
                Monthly Salary Tax Calculator
              </motion.h2>
              <p className="text-lg text-muted-foreground">Enter Monthly Salary and calculate tax</p>
              <p className="text-sm text-muted-foreground">Relief: up to LKR 150,000 per month</p>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Enter your Monthly Salary</label>
                <input
                  type="text"
                  inputMode="numeric"
                  value={monthlyIncomeInput ? formatNumber(parseIncome(monthlyIncomeInput)) : ''}
                  onChange={(e) => handleMonthlyIncomeChange(e.target.value)}
                  placeholder="Enter monthly salary"
                  className="h-11 w-full rounded-md border border-orange-400 bg-background px-3 text-foreground outline-none focus:border-accent"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                <motion.button
                  type="button"
                  onClick={handleMonthlyCalculate}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
                >
                  Calculate
                </motion.button>
                <motion.button
                  type="button"
                  onClick={handleMonthlyReset}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-md border border-orange-400 px-6 py-2 text-sm font-medium text-orange-600 hover:bg-orange-50 transition-colors"
                >
                  Reset
                </motion.button>
              </div>

              <div className="rounded-lg border border-border overflow-hidden">
                <div className="grid grid-cols-[1.6fr_0.8fr_0.8fr] bg-muted/20 border-b border-border">
                  <div className="p-3 text-sm font-semibold text-foreground">Monthly salary</div>
                  <div className="p-3 text-sm font-semibold text-foreground">Rate</div>
                  <div className="p-3 text-sm font-semibold text-foreground text-right">Tax</div>
                </div>

                {visibleMonthlyRows.map((row, index) => (
                  <motion.div
                    key={`monthly-${row.label}-${row.taxable}-${index}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.24, ease: 'easeOut', delay: index * 0.02 }}
                    className="grid grid-cols-[1.6fr_0.8fr_0.8fr] border-b last:border-b-0 border-border"
                  >
                    <div className="p-3 text-sm text-foreground">{row.label}</div>
                    <div className="p-3 text-sm text-foreground">{row.rateLabel}</div>
                    <div className="p-3 text-sm text-foreground text-right">{row.showTax ? formatMoney(row.tax) : '-'}</div>
                  </motion.div>
                ))}

                <div className="grid grid-cols-[1.6fr_0.8fr_0.8fr] bg-muted/20 border-t border-border">
                  <div className="p-3 text-sm font-bold text-foreground">Monthly tax</div>
                  <div className="p-3" />
                  <div className="p-3 text-sm font-bold text-foreground text-right">{formatMoney(monthlyTax)}</div>
                </div>
                <div className="grid grid-cols-[1.6fr_0.8fr_0.8fr] bg-muted/20 border-t border-border">
                  <div className="p-3 text-sm font-bold text-foreground">Annual tax (x12)</div>
                  <div className="p-3" />
                  <div className="p-3 text-sm font-bold text-foreground text-right">{formatMoney(monthlyAnnualTax)}</div>
                </div>
                <div className="grid grid-cols-[1.6fr_0.8fr_0.8fr] bg-muted/20 border-t border-border">
                  <div className="p-3 text-sm font-bold text-foreground">Quarter payment</div>
                  <div className="p-3" />
                  <div className="p-3 text-sm font-bold text-foreground text-right">{formatMoney(monthlyQuarterPayment)}</div>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-muted/10 p-3 text-sm text-foreground">
                Monthly salary entered: <span className="font-semibold">{formatMoney(monthlyIncome)}</span>
              </div>
            </Card>
          )}
        </motion.div>
      </div>
    </section>
  );
}
