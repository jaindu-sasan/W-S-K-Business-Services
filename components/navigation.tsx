'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight, CreditCard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Tax Calculator', href: '/tax-calculator' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-4 pt-5">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-6 py-2 transition-all duration-300 lg:px-8 ${
          isScrolled
            ? 'border-white/20 bg-white/90 shadow-xl backdrop-blur-xl'
            : 'border-white/40 bg-white/80 backdrop-blur-md'
        }`}
      >
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4A017] text-sm font-bold text-white shadow-md">
            WSK
          </div>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/payment"
            className="border border-accent text-accent px-5 py-2 rounded-lg font-semibold hover:bg-accent/10 transition-colors flex items-center gap-2 text-sm"
          >
            <CreditCard className="w-4 h-4" />
            Pay Online
          </Link>

 
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-[#D4A017] px-2 py-1 font-semibold text-[#0B1F3A] transition-all duration-300 hover:scale-105 hover:bg-[#c89512]"
          >
            Contact Us
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight size={16} />
            </span>
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0B1F3A] lg:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-4 max-w-7xl overflow-hidden rounded-3xl border border-white/20 bg-white/95 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="border-b border-slate-100 py-4 text-base font-medium text-[#0B1F3A] hover:text-[#D4A017]"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-6 inline-flex items-center justify-center gap-3 rounded-full bg-[#D4A017] px-6 py-4 font-semibold text-[#0B1F3A]"
              >
                Contact Us
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                  <ArrowRight size={16} />
                </span>
              </Link>

              <Link
                href="/payment"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 border border-accent text-accent px-6 py-2 rounded-lg font-semibold hover:bg-accent/10 mt-4"
              >
                <CreditCard className="w-4 h-4" />
                Pay Online
              </Link>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block bg-accent text-primary px-6 py-2 rounded-lg font-semibold hover:bg-accent/90 text-center mt-2"
              >
                Get Help
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}