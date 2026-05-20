'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, FileText, LineChart, ShieldCheck } from 'lucide-react';

const highlightItems = [
  { icon: LineChart, label: 'Strategic consulting' },
  { icon: FileText, label: 'Corporate development' },
  { icon: CheckCircle2, label: 'Accounting and payroll' },
  { icon: ShieldCheck, label: 'Taxation support' },
];

export function ServicesHero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative overflow-hidden px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pb-10 lg:pt-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(245, 247, 250, 0.5), rgba(245, 247, 250, 0.5)), url('/servise%20Header.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative md:min-h-[400px]">
          <AnimatePresence mode="wait" initial={false}>
          {activeSlide === 0 ? (
            <motion.div
              key="services-intro-slide"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-4xl text-center md:absolute md:inset-0 md:flex md:flex-col md:justify-center"
            >
              <h1 className="text-5xl font-bold leading-tight text-[#0B1F3A] md:text-6xl lg:text-7xl">
                Our Services
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5B6472]">
                Trusted accounting, taxation, payroll, and business consultancy services designed to help
                organisations make confident decisions and operate with clarity.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#D4A017] px-6 py-3 font-semibold text-[#0B1F3A] transition-all duration-300 hover:bg-[#c89512]"
                >
                  Contact Us
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
                <a
                  href="#services-overview"
                  className="inline-flex items-center justify-center rounded-full border border-[#E5EAF0] bg-white px-6 py-3 font-semibold text-[#0B1F3A] shadow-sm transition-all hover:border-[#D4A017]/50 hover:text-[#D4A017]"
                >
                  Explore Services
                </a>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="services-highlight-slide"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-5xl text-center md:absolute md:inset-0 md:flex md:flex-col md:justify-center"
            >
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#D4A017] text-[#0B1F3A]">
                <ShieldCheck className="h-6 w-6" />
              </div>

              <h2 className="text-4xl font-bold leading-tight text-[#0B1F3A] md:text-5xl">
                Business support built around your goals.
              </h2>

              <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
                {highlightItems.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/70 bg-white/70 p-5 shadow-sm backdrop-blur-sm">
                    <item.icon className="mb-3 h-6 w-6 text-[#D4A017]" />
                    <p className="text-lg font-semibold text-[#0B1F3A]">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          {[0, 1].map((index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-3 w-3 rounded-full transition-colors ${
                activeSlide === index ? 'bg-[#0B1F3A]' : 'bg-[#0B1F3A]/30 hover:bg-[#0B1F3A]/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
