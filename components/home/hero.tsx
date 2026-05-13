'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import CountUp from 'react-countup';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#F5F7FA]">
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:px-8">
        
        {/* LEFT CONTENT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          {/* Small Top Text */}
          <motion.div
            variants={itemVariants}
            className="mb-8 flex items-center gap-4"
          >
            <div className="h-[2px] w-12 bg-[#D4A017]" />

            <span className="text-sm font-semibold tracking-wide text-[#D4A017]">
              WELCOME TO WSK BUSINESS SERVICES
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="max-w-2xl text-5xl font-semibold leading-[1.05] tracking-tight text-[#0B1F3A] md:text-7xl"
          >
            Guiding You
            <br />
            Toward Financial
            <br />
            <span className="text-[#D4A017]">
              Confidence.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-xl text-lg leading-relaxed text-slate-600"
          >
            We provide trusted accounting, taxation,
            payroll, and business consultancy services
            to help your company grow with confidence
            and financial clarity.
          </motion.p>

          {/* Button */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button className="group inline-flex items-center gap-3 rounded-full bg-[#0B1F3A] px-8 py-4 text-white transition-all duration-300 hover:bg-[#10284A]">
              Discover More

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0B1F3A] transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={16} />
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="relative flex items-center justify-center">
          
          {/* Background Circle */}
          <div className="absolute h-[650px] w-[650px] rounded-full bg-white" />

          {/* Trusted Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="absolute -left-6 top-5 z-20 rounded-full bg-[#0B1F3A] px-4 py-3 shadow-2xl"
          >
            <div className="flex items-center gap-3">

              {/* Client Images */}
              <div className="flex -space-x-4">

                <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white">
                  <Image
                    src="/images/clients/client1.png"
                    alt="Client 1"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white">
                  <Image
                    src="/images/clients/client2.png"
                    alt="Client 2"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white">
                  <Image
                    src="/images/clients/client3.png"
                    alt="Client 3"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Plus Circle */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[#22C55E] text-lg font-bold text-white">
                  +
                </div>
              </div>

              {/* Counter */}
              <div>
                <p className="text-xl font-bold text-white">
                  <CountUp
                    start={0}
                    end={500}
                    duration={3}
                    separator=","
                  />
                  +
                </p>

                <p className="text-xs text-slate-300">
                  Trusted Clients
                </p>
              </div>
            </div>
          </motion.div>

          {/* Main Image */}
          <div className="relative z-10 overflow-hidden rounded-[40px] shadow-2xl">
            <Image
              src="/images/hero-business1.png"
              alt="Business Professional"
              width={850}
              height={700}
              priority
              className="h-auto w-full max-w-[700px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}