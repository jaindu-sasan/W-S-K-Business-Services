'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { Newsletter } from './newsletter';
import { cn } from '@/lib/utils';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  const footerLinks = {
    Services: [
      { label: 'Tax Planning', href: '/services' },
      { label: 'Accounting', href: '/services' },
      { label: 'Business Consulting', href: '/services' },
      { label: 'Payroll Services', href: '/services' },
    ],
    Company: [
      { label: 'About Us', href: '/about' },
      /*
      { label: 'Blog', href: '/blog' },
      { label: 'Projects', href: '/projects' },
       */
      { label: 'Contact', href: '/contact' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Disclaimer', href: '#' },
      { label: 'Sitemap', href: '#' },
    ],
  };

  return (
    <>
      
      <footer className="bg-primary text-primary-foreground">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-4 lg:px-4">
        {/* Main Footer Content */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-3 flex items-center gap-3 text-2xl font-bold">
              <Image
                src="/wsklogo.png"
                alt="WSK logo"
                width={48}
                height={48}
                className="h-12 w-12 rounded-md bg-white/10 object-contain"
              />
              <span>WSK</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm mb-4">
              Premier financial solutions for businesses of all sizes.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Instagram, href: '#' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg p-2 transition-colors"
                  aria-label="Social link"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold mb-3">{title}</h3>
              <ul className="space-y-1.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={cn(
                        'transition-colors text-sm',
                        pathname === link.href
                          ? 'text-accent font-semibold'
                          : 'text-primary-foreground/70 hover:text-primary-foreground'
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="border-t border-primary-foreground/10 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-accent" />
              <div>
                <p className="text-sm text-primary-foreground/70">Phone</p>
                <a href="tel:+94115044433" className="font-semibold hover:underline">
                  011 5044 433
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-accent" />
              <div>
                <p className="text-sm text-primary-foreground/70">Email</p>
                <a href="mailto:admin@wskbiz.com" className="font-semibold hover:underline">
                  admin@wskbiz.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-accent" />
              <div>
                <p className="text-sm text-primary-foreground/70">Address</p>
                <p className="font-semibold">123 Business St, Suite 100</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/10 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-primary-foreground/70 text-sm">
            &copy; {currentYear} WSK Business Services. All rights reserved.
          </p>
          <p className="text-primary-foreground/70 text-sm">
            Designed & built with care for your financial success.
          </p>
        </div>
      </div>
      </footer>
    </>
  );
}
