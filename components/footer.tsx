'use client';

import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { Newsletter } from './newsletter';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { label: 'Tax Planning', href: '/services' },
      { label: 'Accounting', href: '/services' },
      { label: 'Business Consulting', href: '/services' },
      { label: 'Payroll Services', href: '/services' },
    ],
    Company: [
      { label: 'About Us', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Projects', href: '/projects' },
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-2xl mb-4">
              <div className="w-10 h-10 bg-accent rounded-md flex items-center justify-center text-primary text-xs font-bold">
                WSK
              </div>
              WSK
            </Link>
            <p className="text-primary-foreground/70 text-sm mb-6">
              Premier financial solutions for businesses of all sizes.
            </p>
            <div className="flex gap-4">
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
              <h3 className="font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
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
        <div className="border-t border-primary-foreground/10 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-accent" />
              <div>
                <p className="text-sm text-primary-foreground/70">Phone</p>
                <a href="tel:+1234567890" className="font-semibold hover:underline">
                  (123) 456-7890
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-accent" />
              <div>
                <p className="text-sm text-primary-foreground/70">Email</p>
                <a href="mailto:info@wskbusiness.com" className="font-semibold hover:underline">
                  info@wskbusiness.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-accent" />
              <div>
                <p className="text-sm text-primary-foreground/70">Address</p>
                <p className="font-semibold">123 Business St, Suite 100</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/10 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
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
