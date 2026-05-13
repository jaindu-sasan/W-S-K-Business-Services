'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Briefcase, Building2 } from 'lucide-react';

export function Services() {
  const services = [
    {
      title: 'Management Consultancy Services',
      description:
        'Professional accounting, taxation, payroll, and advisory solutions.',
      image: '/images/service-1.png',
      icon: <Briefcase className="h-6 w-6 text-white" />,
    },
    {
      title: 'Corporate Development Services',
      description:
        'Business registration and company support services.',
      image: '/images/service-2.png',
      icon: <Building2 className="h-6 w-6 text-white" />,
    },
  ];

  return (
    <section className="bg-[#F5F7FA] py-16">
      <div className="mx-auto max-w-5xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4A017]">
            What We Do
          </p>

          <h2 className="text-3xl font-bold leading-tight text-[#0B1F3A] md:text-5xl">
            Customized Financial Planning
            <span className="block">
              & Advisory Services
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-[26px] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              {/* Image */}
              <div className="relative h-[210px] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative px-6 pb-6 pt-12 text-center">

                {/* Floating Icon */}
                <div className="absolute left-1/2 top-0 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-[#D4A017] shadow-lg">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-[28px] font-bold leading-snug text-[#0B1F3A]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  {service.description}
                </p>

                {/* Button */}
                <Link
                  href="/services"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#D4A017] transition-all hover:gap-3"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}