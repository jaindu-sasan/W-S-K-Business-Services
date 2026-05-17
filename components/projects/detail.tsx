'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, ClipboardList, Target } from 'lucide-react';
import type { Project } from '@/lib/projects';

type ProjectDetailProps = {
  project: Project;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <>
      <section className="bg-[#F5F7FA] px-4 pb-14 pt-32 sm:px-6 lg:px-8 lg:pb-20 lg:pt-36">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-4xl"
          >
            <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm font-semibold text-[#5B6472]">
              <Link href="/" className="transition-colors hover:text-[#D4A017]">
                Home
              </Link>
              <ChevronRight className="h-4 w-4 text-[#D4A017]" aria-hidden="true" />
              <Link href="/projects" className="transition-colors hover:text-[#D4A017]">
                Projects
              </Link>
              <ChevronRight className="h-4 w-4 text-[#D4A017]" aria-hidden="true" />
              <span className="text-[#0B1F3A]">{project.title}</span>
            </nav>

            <p className="mb-5 inline-flex rounded-full border border-[#D4A017]/25 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#D4A017] shadow-sm">
              Project {String(project.id).padStart(2, '0')}
            </p>
            <h1 className="text-4xl font-bold leading-tight text-[#0B1F3A] md:text-6xl">{project.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5B6472]">{project.summary}</p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
            className="rounded-[28px] border border-[#E5EAF0] bg-[#F8FAFC] p-7 shadow-sm md:p-8"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#D4A017] text-[#0B1F3A]">
              <ClipboardList className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold leading-tight text-[#0B1F3A]">Project Overview</h2>
            <p className="mt-5 leading-8 text-[#5B6472]">{project.overview}</p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="rounded-[28px] border border-[#E5EAF0] bg-white p-7 shadow-sm md:p-8"
          >
            <h2 className="text-2xl font-bold leading-tight text-[#0B1F3A]">Services Involved</h2>
            <ul className="mt-5 space-y-3">
              {project.servicesInvolved.map((service) => (
                <li key={service} className="flex items-start gap-3 text-[#5B6472]">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#D4A017]" />
                  <span className="leading-6">{service}</span>
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-[28px] bg-[#0B1F3A] p-7 text-white shadow-xl shadow-slate-200/70 md:p-8 lg:col-span-2"
          >
            <div className="grid gap-8 md:grid-cols-[auto_1fr_auto] md:items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D4A017] text-[#0B1F3A]">
                <Target className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-3xl font-bold leading-tight">Outcome</h2>
                <p className="mt-4 max-w-3xl leading-8 text-white/75">{project.outcome}</p>
              </div>
              <Link
                href="/projects"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-[#0B1F3A] transition-all duration-300 hover:bg-[#D4A017] sm:w-auto"
              >
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                Back to Projects
              </Link>
            </div>
          </motion.article>
        </div>
      </section>

      <section className="bg-[#F8FAFC] px-4 pb-16 sm:px-6 md:pb-24 lg:px-8">
        <div className="mx-auto flex max-w-7xl justify-end">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#D4A017] px-6 py-3 font-semibold text-[#0B1F3A] transition-all duration-300 hover:bg-[#c89512]"
          >
            Discuss a Similar Project
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
