'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Landmark,
  LineChart,
  ShieldCheck,
  Target,
} from 'lucide-react';

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
        backgroundImage: "url('/servise%20Header.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#06162B]/5 via-[#0B1F3A]/72 to-[#06162B]/84" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="relative md:min-h-[440px]">
          <AnimatePresence mode="wait" initial={false}>
          {activeSlide === 0 ? (
            <motion.div
              key="services-intro-slide"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mx-auto w-full max-w-6xl md:absolute md:inset-0 md:flex md:items-center"
            >
              <div className="grid w-full items-start gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="text-center lg:text-left">
                  <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
                    Our Services
                  </h1>

                  <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80 lg:mx-0">
                    Trusted accounting, taxation, payroll, and business consultancy services designed to help
                    organisations make confident decisions and operate with clarity.
                  </p>

                  <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
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
                      className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 font-semibold text-white shadow-sm backdrop-blur-sm transition-all hover:border-[#D4A017]/60 hover:text-[#D4A017]"
                    >
                      Explore Services
                    </a>
                  </div>
                </div>

                <div className="mt-2 ml-auto max-w-lg space-y-3 lg:mt-6">
                  <div
                    className="relative min-h-[160px] overflow-hidden rounded-xl p-4 shadow-lg ring-1 ring-inset ring-[#D4A017]/25"
                    style={{
                      backgroundImage: "url('/MCS.png')",
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute inset-0 bg-[#0B1F3A]/65" />
                    <div className="relative z-10">
                      <div className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-full bg-[#D4A017] text-[#0B1F3A]">
                        <Landmark className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-bold leading-tight text-white md:text-2xl">
                        Financial, Taxation & Compliance
                      </h3>
                    </div>
                  </div>

                  <div
                    className="relative min-h-[160px] overflow-hidden rounded-xl p-4 shadow-lg ring-1 ring-inset ring-[#D4A017]/25"
                    style={{
                      backgroundImage: "url('/CDS.png')",
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute inset-0 bg-[#0B1F3A]/65" />
                    <div className="relative z-10">
                      <div className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-full bg-[#D4A017] text-[#0B1F3A]">
                        <Target className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-bold leading-tight text-white md:text-2xl">
                        Strategy, Growth & Advisory
                      </h3>
                    </div>
                  </div>
                </div>
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

              <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
                Business support built around your goals.
              </h2>

              <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
                {highlightItems.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-sm backdrop-blur-sm">
                    <item.icon className="mb-3 h-6 w-6 text-[#D4A017]" />
                    <p className="text-lg font-semibold text-white">{item.label}</p>
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
                activeSlide === index ? 'bg-[#D4A017]' : 'bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
