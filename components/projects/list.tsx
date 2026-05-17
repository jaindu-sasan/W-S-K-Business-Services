'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BriefcaseBusiness, CheckCircle2 } from 'lucide-react';
import { projects } from '@/lib/projects';

export function ProjectsList() {
  return (
    <section className="bg-[#F8FAFC] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="mb-12 max-w-3xl"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#D4A017]">Project Showcase</p>
          <h2 className="text-3xl font-bold leading-tight text-[#0B1F3A] md:text-5xl">Practical work with measurable business value</h2>
          <p className="mt-5 text-base leading-8 text-[#5B6472] md:text-lg">
            A selection of project examples covering accounting, taxation, payroll, corporate development, reporting, and advisory support.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group flex min-h-[310px] flex-col rounded-[26px] border border-[#E5EAF0] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A017]/50 hover:shadow-xl hover:shadow-slate-200/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] focus-visible:ring-offset-4"
              >
                <div className="mb-8 flex items-start justify-between gap-5">
                  <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#D4A017]">
                    Project {String(project.id).padStart(2, '0')}
                  </span>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#E5EAF0] bg-[#F8FAFC] text-[#0B1F3A] transition-all duration-300 group-hover:border-[#D4A017] group-hover:bg-[#D4A017]">
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>

                <h3 className="text-2xl font-bold leading-tight text-[#0B1F3A]">{project.title}</h3>
                <p className="mt-4 flex-1 leading-7 text-[#5B6472]">{project.description}</p>

                <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#D4A017] transition-all group-hover:gap-3">
                  View Project
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="xl:col-span-1"
          >
            <div className="flex min-h-[310px] flex-col rounded-[26px] bg-[#0B1F3A] p-7 text-white shadow-xl shadow-slate-200/70">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#D4A017] text-[#0B1F3A]">
                <BriefcaseBusiness className="h-6 w-6" />
              </div>
              <h3 className="text-3xl font-bold leading-tight">Looking for similar support?</h3>
              <p className="mt-4 flex-1 leading-7 text-white/75">
                Contact our team to discuss how we can support your organisation.
              </p>
              <Link
                href="/contact"
                className="group mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#D4A017] px-6 py-3 font-semibold text-[#0B1F3A] transition-all duration-300 hover:bg-[#c89512] sm:w-auto"
              >
                Contact Us
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {['Accounting', 'Taxation', 'Payroll', 'Corporate Advisory', 'Reporting'].map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-2 rounded-full border border-[#E5EAF0] bg-white px-4 py-2 text-sm font-semibold text-[#0B1F3A]"
            >
              <CheckCircle2 className="h-4 w-4 text-[#D4A017]" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
