'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function ContactHero() {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '011 5044 433',
      href: 'tel:+115044433',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@wskbusiness.com',
      href: 'mailto:info@wskbusiness.com',
    },
    {
      icon: MapPin,
      label: 'Office',
      value: 'No. 329/1 Nawala Rd, Sri Jayawardenepura Kotte',
      href: '#',
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Monday to Friday: 8:30 AM - 5:00 PM',
      href: '#',
    },
  ];

  return (
    <section className="relative min-h-[78vh] overflow-hidden pb-12 pt-20 md:min-h-[72vh] md:pb-14 md:pt-24">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/123.png')" }}
      />
      <div className="absolute inset-0 bg-background/45" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 space-y-6 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
            Let&apos;s Work Together
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your finances? Contact our team today and schedule your free consultation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {contactInfo.map((info, index) => {
            const Icon = info.icon;

            return (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-accent hover:shadow-lg transition-all text-center group"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-accent/10 p-3 rounded-full group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                <p className="font-semibold text-foreground group-hover:text-accent transition-colors">
                  {info.value}
                </p>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
