'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Facebook, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
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
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
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
            <p className="mb-4 text-base text-primary-foreground/70">
              Premier financial solutions for businesses of all sizes.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: 'https://www.facebook.com/p/W-S-K-Business-Services-100063708244058/' },
                { icon: Linkedin, href: 'https://lk.linkedin.com/company/w-s-k-business-services-pvt-ltd' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
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
              <h3 className="mb-3 text-lg font-semibold">{title}</h3>
              <ul className="space-y-1.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('#') ? (
                      <a
                        href={link.href}
                        className="text-base text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className={cn(
                          'text-base transition-colors',
                          pathname === link.href
                            ? 'text-accent font-semibold'
                            : 'text-primary-foreground/70 hover:text-primary-foreground'
                        )}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="border-t border-primary-foreground/10 py-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-accent" />
              <div>
                <p className="text-base text-primary-foreground/70">Phone</p>
                <a href="tel:+94115044433" className="text-lg font-semibold hover:underline">
                  011 5044 433
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-accent" />
              <div>
                <p className="text-base text-primary-foreground/70">Email</p>
                <a href="mailto:admin@wskbiz.com" className="text-lg font-semibold hover:underline">
                  admin@wskbiz.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-accent" />
              <div>
                <p className="text-base text-primary-foreground/70">Address</p>
                <p className="text-lg font-semibold">329/1, Nawala Road, Nawala</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/10 py-6 text-center">
          <p className="text-base text-primary-foreground/70">
            &copy; {currentYear} WSK Business Services. All Rights Reserved.
          </p>
          <div className="mx-auto my-2 h-px w-40 bg-primary-foreground/25" />
          <p className="mt-1 text-base text-primary-foreground/70">
            Design and Development by Trust Code
          </p>
        </div>
      </div>
      </footer>
    </>
  );
}
