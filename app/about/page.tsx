'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import {
  ArrowRight,
  CheckCircle,
  MapPin,
  Mail,
  Phone,
  ShieldCheck,
  Users,
  BriefcaseBusiness,
  Building2,
} from 'lucide-react';
import { CTA } from '@/components/home/cta';

export default function AboutPage() {
  return (
    <main className="bg-[#F5F7FA]">
      <Navigation />

      {/* HERO SECTION - KEEP THIS */}
 <section className="relative min-h-[520px] overflow-hidden pt-36 pb-24">

  {/* Background Image */}
  <div className="absolute inset-0">
    <Image
      src="/images/about-hero.png"
      alt="About WSK Business Services"
      fill
      priority
      className="object-cover"
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-[#0B1F3A]/80" />
  </div>

  {/* Content */}
  <div className="relative z-10 mx-auto flex min-h-[360px] max-w-7xl items-center justify-center px-6 text-center">
    <div>

   

      {/* Heading */}
      <h1 className="mx-auto max-w-5xl text-5xl font-semibold leading-[1.05] tracking-[-0.03em] text-white md:text-7xl">
        Building Trusted
        <span className="block text-[#D4A017]">
          Financial Solutions
        </span>
      </h1>

      {/* Description */}
      <p className="mx-auto mt-8 max-w-3xl text-[18px] leading-9 text-white/80">
        WSK Business Services delivers professional accounting,
        taxation, payroll, business registration, and corporate
        consultancy services designed to support business growth
        with confidence, compliance, and financial clarity.
      </p>

    </div>
  </div>
</section>
      {/* COMPANY OVERVIEW */}
   {/* COMPANY OVERVIEW - NEW LAYOUT */}
<section className="relative overflow-hidden bg-[#F5F7FA] py-24">
  <div className="absolute right-[-180px] top-10 h-[450px] w-[450px] rounded-full bg-[#D4A017]/10 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
    {/* Top Heading */}
    <div className="mx-auto mb-16 max-w-4xl text-center">
      <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4A017]">
        Company Overview
      </p>

      <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#0B1F3A] md:text-5xl">
        Professional Business Support
        <span className="block text-[#D4A017]">
          Built Around Your Growth
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-[17px] leading-8 text-slate-600">
        WSK Business Services helps businesses manage accounting, taxation,
        payroll, registration, and corporate compliance with reliable
        professional guidance.
      </p>
    </div>

    {/* Main Overview Card */}
    <div className="grid overflow-hidden rounded-[36px] bg-white shadow-xl lg:grid-cols-3">
      {/* Left Large Content */}
      <div className="p-8 lg:col-span-2 lg:p-12">
        <h3 className="text-3xl font-semibold leading-tight text-[#0B1F3A]">
          Helping Businesses Operate With Confidence
        </h3>

        <p className="mt-5 text-[17px] leading-8 text-slate-600">
          Our team provides practical financial and corporate solutions that
          support better decision-making, compliance, and long-term business
          success.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {[
            'Accounting & Bookkeeping',
            'Tax Planning & Filing',
            'Payroll Management',
            'Company Registration',
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-100 bg-[#F5F7FA] p-5"
            >
              <div className="mb-3 h-2 w-10 rounded-full bg-[#D4A017]" />
              <p className="font-medium text-[#0B1F3A]">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Highlight Panel */}
      <div className="bg-[#0B1F3A] p-8 text-white lg:p-10">
        <p className="text-sm uppercase tracking-[0.3em] text-[#D4A017]">
          Why WSK
        </p>

        <div className="mt-8 space-y-8">
          <div>
            <h4 className="text-4xl font-semibold text-white">500+</h4>
            <p className="mt-2 text-white/70">Businesses Supported</p>
          </div>

          <div>
            <h4 className="text-4xl font-semibold text-white">10+</h4>
            <p className="mt-2 text-white/70">Years Experience</p>
          </div>

          <div>
            <h4 className="text-4xl font-semibold text-white">100%</h4>
            <p className="mt-2 text-white/70">Client-Focused Service</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* COMPANY HEAD / LEADERSHIP */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4A017]">
              Leadership
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#0B1F3A] md:text-5xl">
              Meet Our Company Heads
            </h2>

            <p className="mt-5 text-[17px] leading-8 text-slate-600">
              Our leadership team brings professional knowledge,
              business experience, and client-focused service.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: 'Company Director',
                role: 'Founder/ CEO',
                image: '/images/team/team-1.jpg',
              },
              {
                name: 'Madhu Weththasinghe',
                role: 'Senior Consultant',
                image: '/images/team/team-2.jpg',
              },
             
            ].map((member, index) => (
              <motion.div
                key={member.role}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-[30px] bg-[#F5F7FA] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-[320px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-7 text-center">
                  <h3 className="text-2xl font-semibold text-[#0B1F3A]">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-[15px] text-[#D4A017]">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4A017]">
              Our Values
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#0B1F3A] md:text-5xl">
              Professional Service Built On Trust
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ShieldCheck,
                title: 'Trust',
                text: 'We protect client information and handle financial matters with care.',
              },
              {
                icon: CheckCircle,
                title: 'Accuracy',
                text: 'We focus on accurate accounting, tax, and compliance support.',
              },
              {
                icon: Users,
                title: 'Client Focus',
                text: 'We understand each client’s business needs before giving solutions.',
              },
              {
                icon: BriefcaseBusiness,
                title: 'Growth',
                text: 'We support long-term growth with practical business guidance.',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.12 }}
                viewport={{ once: true }}
                className="rounded-[28px] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4A017]/10">
                  <value.icon className="h-7 w-7 text-[#D4A017]" />
                </div>

                <h3 className="text-2xl font-semibold text-[#0B1F3A]">
                  {value.title}
                </h3>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  {value.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    

      <CTA />
      <Footer />
    </main>
  );
}