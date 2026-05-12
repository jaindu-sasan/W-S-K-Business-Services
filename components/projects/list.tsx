'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Award } from 'lucide-react';

export function ProjectsList() {
  const projects = [
    {
      company: 'Tech Startup Inc.',
      industry: 'Software Development',
      challenge: 'No formal accounting system, inconsistent tax planning',
      results: [
        'Reduced tax liability by $87,000 annually',
        'Implemented cloud-based accounting system',
        'Improved cash flow visibility by 150%',
      ],
      savings: '$87K',
      icon: '💻',
    },
    {
      company: 'Urban Real Estate Group',
      industry: 'Real Estate',
      challenge: 'Complex multi-property accounting needs',
      results: [
        'Optimized depreciation strategies',
        'Saved $156,000 in first year taxes',
        'Streamlined property-by-property tracking',
      ],
      savings: '$156K',
      icon: '🏠',
    },
    {
      company: 'Artisan Bakery Co.',
      industry: 'Food & Beverage',
      challenge: 'Growing business, needed CFO guidance without hiring',
      results: [
        'Improved profitability margins by 12%',
        'Established financial KPIs and dashboards',
        'Implemented cost optimization plan',
      ],
      savings: '$42K',
      icon: '🍰',
    },
    {
      company: 'Medical Practice Group',
      industry: 'Healthcare',
      challenge: 'Complex payroll and compliance requirements',
      results: [
        'Achieved 100% audit compliance',
        'Reduced payroll processing costs by 40%',
        'Saved $73,000 through strategic planning',
      ],
      savings: '$73K',
      icon: '⚕️',
    },
    {
      company: 'E-Commerce Ventures',
      industry: 'Retail',
      challenge: 'Multi-channel sales, needed tax strategy',
      results: [
        'Optimized inventory accounting',
        'Reduced tax burden by $95,000',
        'Improved quarterly reporting accuracy',
      ],
      savings: '$95K',
      icon: '🛍️',
    },
    {
      company: 'Consulting Services LLC',
      industry: 'Professional Services',
      challenge: 'S-Corp conversion and strategy',
      results: [
        'Successfully converted to S-Corp structure',
        'Saved $64,000 in payroll taxes first year',
        'Optimized retirement planning strategy',
      ],
      savings: '$64K',
      icon: '📊',
    },
  ];

  const totalSavings = 517; // in thousands

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-accent mb-2">${totalSavings}M+</div>
            <p className="text-muted-foreground">Total Tax Savings Delivered</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-accent mb-2">500+</div>
            <p className="text-muted-foreground">Successful Client Projects</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-accent mb-2">98%</div>
            <p className="text-muted-foreground">Client Satisfaction Rate</p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-card border border-border rounded-lg p-8 hover:shadow-lg hover:border-accent transition-all"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-4xl mb-3">{project.icon}</div>
                  <h3 className="text-xl font-bold text-primary">{project.company}</h3>
                  <p className="text-sm text-accent font-medium">{project.industry}</p>
                </div>
                <div className="bg-accent/10 px-3 py-1 rounded-full">
                  <div className="flex items-center gap-1 text-accent">
                    <TrendingUp className="w-4 h-4" />
                    <span className="font-bold text-lg">{project.savings}</span>
                  </div>
                </div>
              </div>

              {/* Challenge */}
              <div className="mb-4 pb-4 border-b border-border">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Challenge: </strong>
                  {project.challenge}
                </p>
              </div>

              {/* Results */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-accent" />
                  Results Achieved
                </h4>
                <ul className="space-y-2">
                  {project.results.map((result) => (
                    <li key={result} className="text-sm text-foreground flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
