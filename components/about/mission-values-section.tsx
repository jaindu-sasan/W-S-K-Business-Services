'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Compass, HeartHandshake, ShieldCheck } from 'lucide-react';

const missionPoints = [
  'To exceed our clients expectations by providing quality, timely, and cost-effective services through continuous improvement and customer interaction.',
  'To provide the highest quality service possible through our qualified and dedicated staff, while continuing to invest in staff training and development.',
  'To sustain our objectives through continuous education, learning, and the application of new technologies and best business practices.',
  'To provide a pleasant, nurturing, and growth-oriented environment that encourages employees to be highly productive and grow personally and professionally.',
  'To maintain a superior level of integrity in interactions with business partners and associates.',
  'To grow our business profitably while staying true to our mission and core values.',
];

const coreValuePoints = [
  'We are real, authentic, and trusted by our clients. As a company, we strive to build upon this legacy with every decision we make.',
  'We deliver services that create value and support the long-term success of our clients.',
  'We work with people and organisations we trust, with an emphasis on quality, professionalism, and sustainability.',
  'We act responsibly and aim to be a positive role model for clients, employees, and the wider business community.',
  'We treat clients, employees, suppliers, stakeholders, and business partners with respect, fairness, honesty, and professionalism.',
];

const sections = [
  {
    title: 'Our Mission',
    intro:
      'Our mission is to offer high-quality services to the corporate sector while striving to act in a socially responsible and environmentally sustainable manner. We focus on building our history of service excellence by following key principles.',
    points: missionPoints,
    icon: Compass,
  },
  {
    title: 'Our Core Values',
    intro: 'Our corporate culture is anchored by the following core values.',
    points: coreValuePoints,
    icon: HeartHandshake,
    closing:
      'These core values are woven into our culture and serve as important guiding principles for our strategies and business decisions. They help us build trust with our clients and support long-term relationships based on integrity, service quality, and professionalism.',
  },
];

export function MissionValuesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="absolute left-[-180px] top-16 h-[420px] w-[420px] rounded-full bg-[#0B1F3A]/5 blur-3xl" />
      <div className="absolute bottom-[-220px] right-[-160px] h-[460px] w-[460px] rounded-full bg-[#D4A017]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-14 max-w-4xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4A017]">
            Mission & Values
          </p>
          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#0B1F3A] md:text-5xl">
            Principles That Guide
            <span className="block text-[#D4A017]">Every Client Relationship</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-[17px] leading-8 text-slate-600">
            Our work is shaped by service excellence, professional integrity, and a commitment to responsible business support.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {sections.map((section, index) => (
            <motion.article
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              className="rounded-[32px] border border-slate-100 bg-[#F8FAFC] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-9"
            >
              <div className="mb-6 flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#D4A017] text-[#0B1F3A] shadow-sm">
                  <section.icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-3xl font-semibold leading-tight text-[#0B1F3A]">
                    {section.title}
                  </h3>
                  <div className="mt-3 h-1 w-16 rounded-full bg-[#D4A017]" />
                </div>
              </div>

              <p className="text-[16px] leading-8 text-slate-600">{section.intro}</p>

              <ul className="mt-7 space-y-4">
                {section.points.map((point) => (
                  <li key={point} className="flex gap-3 text-[15px] leading-7 text-slate-600">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#D4A017]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {section.closing ? (
                <div className="mt-8 rounded-2xl border border-[#D4A017]/20 bg-white p-5">
                  <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#D4A017]">
                    <ShieldCheck className="h-4 w-4" />
                    Guiding Principles
                  </div>
                  <p className="text-[15px] leading-7 text-slate-600">{section.closing}</p>
                </div>
              ) : null}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
