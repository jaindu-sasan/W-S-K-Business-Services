'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function AboutUs() {
  return (
    <section className="bg-[#F5F7FA] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[600px] overflow-hidden rounded-[32px] shadow-xl">
              <Image
                src="/images/about-us.png"
                alt="WSK Business Team"
                fill
                loading="eager"
                className="object-cover"
              />
            </div>

            {/* Small Floating Card */}
            <div className="absolute -bottom-6 -right-6 rounded-3xl bg-white p-6 shadow-2xl">
              <h4 className="text-3xl font-bold text-[#0B1F3A]">
                10+
              </h4>

              <p className="mt-1 text-sm text-slate-500">
                Years of Professional Experience
              </p>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Small Text */}
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4A017]">
              About Us
            </p>

            {/* Heading */}
            <h2 className="text-4xl font-bold leading-tight text-[#0B1F3A] md:text-5xl">
              Building Financial
              <span className="block text-[#D4A017]">
                Confidence Together
              </span>
            </h2>

            {/* Description */}
            <p className="mt-8 text-lg leading-relaxed text-slate-600">
              W S K Business Services (Pvt) Ltd provides trusted accounting,
              taxation, payroll, and corporate consultancy
              solutions for businesses across Sri Lanka.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              We help companies simplify financial management,
              maintain compliance, and achieve long-term
              business growth with reliable professional
              support and expert guidance.
            </p>

            {/* Features */}
            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-4">
                <div className="h-3 w-3 rounded-full bg-[#D4A017]" />
                <p className="text-lg font-medium text-[#0B1F3A]">
                  Professional Accounting Solutions
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-3 w-3 rounded-full bg-[#D4A017]" />
                <p className="text-lg font-medium text-[#0B1F3A]">
                  Trusted Tax Consultancy Services
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-3 w-3 rounded-full bg-[#D4A017]" />
                <p className="text-lg font-medium text-[#0B1F3A]">
                  Business Registration & Compliance
                </p>
              </div>

            </div>

            {/* Button */}
            <Link
              href="/about"
              className="mt-12 inline-flex items-center gap-3 rounded-full bg-[#0B1F3A] px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-[#10294d]"
            >
              Learn More
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
