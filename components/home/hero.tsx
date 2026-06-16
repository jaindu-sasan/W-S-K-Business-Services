'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import CountUp from 'react-countup';
import Link from 'next/link';

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
    <section className="relative overflow-hidden bg-[#EEF2F6]">
      {/* Background Shapes */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#0B1F3A]/5 blur-3xl" />
      <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#D4A017]/15 blur-3xl" />

      <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-10 px-6 pb-12 pt-28 md:pb-14 lg:grid-cols-2 lg:gap-14 lg:px-8">
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

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D4A017]">
              Welcome
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="max-w-2xl text-5xl font-semibold leading-[1.05] tracking-tight text-[#0B1F3A] md:text-7xl"
          >
            Fuelling
            <br />
            Sustainable
            <br />
            <span className="text-[#D4A017]">
              Growth
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-xl text-lg leading-relaxed text-slate-600"
          >
            We deliver trusted financial and advisory services that fuel sustainable
            growth, giving businesses the clarity and confidence to scale responsibly.
            Through practical guidance, compliance support, and capacity building,
            we help organisations optimise performance, manage risk, and achieve
            long-term success.
          </motion.p>

          {/* Button */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 rounded-full bg-[#0B1F3A] px-8 py-4 text-white shadow-lg transition-all duration-300 hover:bg-[#10284A]"
            >
              Discover More

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0B1F3A] transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={16} />
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative flex items-center justify-center"
        >
          {/* Trusted Card */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="absolute -left-5 top-8 z-20 rounded-full bg-[#0B1F3A] px-4 py-3 shadow-2xl md:left-2 lg:-left-8"
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

                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[#22C55E] text-lg font-bold text-white">
                  +
                </div>
              </div>

              {/* Counter */}
              <div>
                <p className="text-xl font-bold text-white">
                  <CountUp
                    start={0}
                    end={1000}
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

          {/* Main Full Image */}
          <div className="relative h-[430px] w-full overflow-hidden rounded-[40px] border-[8px] border-white bg-white shadow-2xl md:h-[500px] lg:h-[540px]">
            <Image
              src="/images/hero-business1.png"
              alt="Business Professional"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}