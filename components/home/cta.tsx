'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Phone, Mail } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Ready to Transform Your Finances?
          </h2>

          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto text-balance">
            Let our expert team help you save money, grow your business, and achieve your financial goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link
              href="/contact"
              className="bg-accent text-primary px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition-all inline-flex items-center justify-center gap-2 group"
            >
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+1234567890"
              className="bg-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground/30 transition-all inline-flex items-center justify-center gap-2 border border-primary-foreground/30"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-8 justify-center pt-8 border-t border-primary-foreground/20"
          >
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <a href="tel:+1234567890" className="hover:underline">
                (123) 456-7890
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <a href="mailto:info@wskbusiness.com" className="hover:underline">
                info@wskbusiness.com
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
