'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const articles = [
    {
      id: 1,
      title: '5 Tax Deductions Small Businesses Miss Every Year',
      excerpt: 'Learn about the most commonly overlooked deductions that could save you thousands in taxes.',
      category: 'tax-tips',
      date: 'Dec 15, 2024',
      readTime: '5 min read',
      icon: '📊',
    },
    {
      id: 2,
      title: 'Why S-Corp Conversion Could Save Your Business Money',
      excerpt: 'Explore the benefits of converting to an S-Corp structure and how it can reduce self-employment taxes.',
      category: 'business-strategy',
      date: 'Dec 10, 2024',
      readTime: '7 min read',
      icon: '🏢',
    },
    {
      id: 3,
      title: 'Complete Guide to Quarterly Tax Estimated Payments',
      excerpt: 'Everything you need to know about making quarterly estimated tax payments and avoiding penalties.',
      category: 'tax-tips',
      date: 'Dec 5, 2024',
      readTime: '6 min read',
      icon: '📅',
    },
    {
      id: 4,
      title: 'Maximizing Retirement Contributions for Business Owners',
      excerpt: 'Strategic retirement planning to minimize taxes while building your financial future.',
      category: 'accounting',
      date: 'Nov 28, 2024',
      readTime: '8 min read',
      icon: '🏦',
    },
    {
      id: 5,
      title: 'Bookkeeping Best Practices for E-Commerce Businesses',
      excerpt: 'Implement robust bookkeeping systems specifically designed for online retail operations.',
      category: 'accounting',
      date: 'Nov 20, 2024',
      readTime: '6 min read',
      icon: '💻',
    },
    {
      id: 6,
      title: 'Managing Cash Flow During Seasonal Business Fluctuations',
      excerpt: 'Strategies for maintaining healthy cash flow when your business has significant seasonal variations.',
      category: 'business-strategy',
      date: 'Nov 15, 2024',
      readTime: '7 min read',
      icon: '💹',
    },
    {
      id: 7,
      title: 'Home Office Deductions: What You Can and Cannot Claim',
      excerpt: 'Get clarity on home office deduction rules and maximize your eligible expenses.',
      category: 'tax-tips',
      date: 'Nov 10, 2024',
      readTime: '5 min read',
      icon: '🏠',
    },
    {
      id: 8,
      title: 'Year-End Tax Planning Checklist for 2024',
      excerpt: 'A comprehensive checklist of tax planning strategies to implement before December 31st.',
      category: 'tax-tips',
      date: 'Nov 1, 2024',
      readTime: '8 min read',
      icon: '✓',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'tax-tips', label: 'Tax Tips' },
    { id: 'accounting', label: 'Accounting' },
    { id: 'business-strategy', label: 'Business Strategy' },
  ];

  const filtered =
    selectedCategory === 'all'
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-border text-foreground hover:border-accent'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Articles Grid */}
        <div className="space-y-6">
          {filtered.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-card border border-border rounded-lg p-6 md:p-8 hover:border-accent hover:shadow-lg transition-all group"
            >
              <div className="flex gap-6">
                {/* Icon */}
                <div className="text-4xl flex-shrink-0">{article.icon}</div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
