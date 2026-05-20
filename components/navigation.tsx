'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, CreditCard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

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
    /*
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },*/
  ];

  const isActiveLink = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(`${href}/`));

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
          <Image
            src="/wsklogo.png"
            alt="WSK logo"
            width={44}
            height={44}
            className="h-11 w-11 rounded-xl object-contain"
            priority
          />
          <h2 className="text-[28px] font-bold text-[#0B1F3A]">WSK</h2>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                'text-base font-medium transition pb-1 border-b-2',
                isActiveLink(link.href)
                  ? 'text-[#D4A017] border-[#D4A017]'
                  : 'text-[#0B1F3A] border-transparent hover:text-[#D4A017]'
              )}
            >
              {link.name}
            </Link>
          ))}

          {/* PAYMENT BUTTON (kept feature) */}
          <Link
            href="/Payment_portal"
            className="flex items-center gap-2 border border-[#D4A017] text-[#D4A017] px-4 py-2 rounded-lg font-semibold text-base hover:bg-[#D4A017]/10 transition"
          >
            <CreditCard className="w-4 h-4" />
            Pay Online
          </Link>
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-[#D4A017] px-2 py-1 text-base font-semibold text-[#0B1F3A] transition-all duration-300 hover:scale-105 hover:bg-[#c89512]"
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
                  className={cn(
                    'border-b py-4 text-base font-medium',
                    isActiveLink(link.href)
                      ? 'border-[#D4A017] text-[#D4A017] underline underline-offset-4'
                      : 'border-slate-100 text-[#0B1F3A] hover:text-[#D4A017]'
                  )}
                >
                  {link.name}
                </Link>
              ))}

              {/* PAYMENT (mobile kept) */}
              <Link
                href="/Payment_portal"
                onClick={() => setIsOpen(false)}
                className="mt-5 flex items-center justify-center gap-2 border border-[#D4A017] text-[#D4A017] px-6 py-3 rounded-lg font-semibold"
              >
                <CreditCard className="w-4 h-4" />
                Pay Online
              </Link>

              {/* CONTACT CTA */}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-3 rounded-full bg-[#D4A017] px-6 py-4 font-semibold text-[#0B1F3A]"
              >
                Contact Us
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                  <ArrowRight size={16} />
                </span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
