'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { CTA } from '@/components/home/cta';
import { MissionValuesSection } from '@/components/about/mission-values-section';
import {
  CheckCircle,
  MapPin,
  Mail,
  Phone,
  Users,
  BriefcaseBusiness,
  Target,
  FileText,
} from 'lucide-react';

export default function AboutPage() {
  const highlights = [
    'Accounting & Bookkeeping',
    'Tax Planning & Filing',
    'Payroll Management',
    'Company Registration',
  ];

  const approachItems = [
    {
      icon: Users,
      title: 'Understand Your Business',
      text: 'We take time to understand each client’s business needs, challenges, and goals before giving solutions.',
    },
    {
      icon: BriefcaseBusiness,
      title: 'Provide Practical Guidance',
      text: 'Our advice is practical, clear, and focused on helping businesses make better decisions.',
    },
    {
      icon: FileText,
      title: 'Keep You Compliant',
      text: 'We support clients with taxation, payroll, registration, and compliance requirements.',
    },
    {
      icon: Target,
      title: 'Support Long-Term Growth',
      text: 'We help businesses stay organised, improve performance, and move toward sustainable growth.',
    },
  ];

  const leaders = [
    {
      name: 'Suranga Mendis',
      role: 'Founder / CEO',
      image: '/images/team/team-1.jpg',
    },
    {
      name: 'Madhu Weththasinghe',
      role: 'Senior Consultant',
      image: '/images/team/team-2.jpg',
    },
  ];

  return (
    <main className="bg-[#F3F7FB]">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative min-h-[520px] overflow-hidden pt-36 pb-24">
        <div className="absolute inset-0">
          <Image
            src="/images/about-us1.png"
            alt="About W S K Business Services"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[#0B1F3A]/68" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[360px] max-w-7xl items-center justify-center px-6 text-center">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#D4A017]">
            
            </p>

            <h1 className="mx-auto max-w-5xl text-5xl font-semibold leading-[1.05] tracking-[-0.03em] text-white md:text-7xl">
              PRODUCING
              <span className="block text-[#D4A017]">
                ENDLESS GROWTH
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-[18px] leading-9 text-white/85">
              W S K Business Services (Pvt) Ltd provides professional accounting,
              taxation, payroll, business registration, and corporate consultancy
              services to help businesses grow with confidence, compliance, and
              financial clarity.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="relative overflow-hidden bg-[#EDF4FA] py-24">
        <div className="absolute right-[-180px] top-10 h-[450px] w-[450px] rounded-full bg-[#D4A017]/8 blur-3xl" />
        <div className="absolute left-[-180px] bottom-10 h-[450px] w-[450px] rounded-full bg-[#0B1F3A]/8 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4A017]">
              Who We Are
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#0B1F3A] md:text-5xl">
              Professional Business Support
              <span className="block text-[#D4A017]">
                Built Around Your Growth
              </span>
            </h2>

            <p className="mt-6 text-[17px] leading-8 text-[#475569]">
              W S K Business Services (Pvt) Ltd supports businesses with reliable
              accounting, taxation, payroll, business registration, and corporate
              advisory solutions.
            </p>

            <p className="mt-5 text-[17px] leading-8 text-[#475569]">
              Our goal is to help organisations operate with clarity, stay
              compliant, make better financial decisions, and achieve long-term
              sustainable growth.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-[#DCE6F2] bg-white p-4 shadow-sm"
                >
                  <CheckCircle className="h-5 w-5 shrink-0 text-[#D4A017]" />
                  <p className="font-medium text-[#0B1F3A]">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -bottom-5 -right-5 hidden h-full w-full rounded-[36px] bg-[#0B1F3A] lg:block" />

            <div className="relative overflow-hidden rounded-[36px] border-[10px] border-white bg-white shadow-2xl">
              <div className="relative h-[430px]">
                <Image
                  src="/images/about-who-we-are.png"
                  alt="WSK professional business team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

           
          </motion.div>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <MissionValuesSection />

      {/* OUR APPROACH */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4A017]">
              Our Approach
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#0B1F3A] md:text-5xl">
              Clear, Practical & Client-Focused
              <span className="block text-[#D4A017]">
                Professional Guidance
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-[17px] leading-8 text-slate-600">
              We work closely with clients to understand their needs, provide
              practical solutions, and support better business decisions.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {approachItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.12 }}
                viewport={{ once: true }}
                className="rounded-[28px] border border-[#DCE6F2] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4A017]/10">
                  <item.icon className="h-7 w-7 text-[#D4A017]" />
                </div>

                <h3 className="text-xl font-semibold leading-snug text-[#0B1F3A]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="bg-[#EAF1F8] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4A017]">
              Leadership
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#0B1F3A] md:text-5xl">
              Meet Our Company Heads
            </h2>

            <p className="mt-5 text-[17px] leading-8 text-slate-600">
              Our leadership team brings professional knowledge, business
              experience, and client-focused service.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {leaders.map((member, index) => (
              <motion.div
                key={member.role}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-[30px] border border-white/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-[340px]">
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

                  <p className="mt-2 text-[15px] font-medium text-[#D4A017]">
                    {member.role}
                  </p>
                </div>
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
