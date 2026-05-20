'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Kevin Andrew',
    role: 'Happy Client',
    image: '/images/clients/client1.png',
    review:
      'WSK Business Services helped streamline our accounting and tax processes. Their professional guidance gave us confidence to grow our business successfully.',
    active: false,
  },
  {
    id: 2,
    name: 'Peri James',
    role: 'Business Owner',
    image: '/images/clients/client2.png',
    review:
      'Their consultancy services are reliable, transparent, and extremely supportive. We now manage finances with much better clarity and planning.',
    active: true,
  },
  {
    id: 3,
    name: 'Naurth Reough',
    role: 'Startup Founder',
    image: '/images/clients/client3.png',
    review:
      'From payroll management to company registration support, WSK handled everything professionally and efficiently. Highly recommended service.',
    active: false,
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#F5F7FA] py-24">

      {/* Background Shape */}
      <div className="absolute left-0 top-0 h-full w-full opacity-[0.03]">
        <div className="absolute -left-20 top-10 text-[250px] font-bold text-[#0B1F3A]">
          “
        </div>

        <div className="absolute bottom-0 right-10 text-[250px] font-bold text-[#D4A017]">
          ”
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4A017]">
            Testimonials
          </p>

          <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-[#0B1F3A] md:text-6xl">
            Trusted By Businesses
            <span className="block">
              Across Sri Lanka
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">

          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-[32px] border transition-all duration-300 hover:-translate-y-2 ${
                item.active
                  ? 'border-[#0B1F3A] bg-[#0B1F3A] text-white shadow-2xl'
                  : 'border-white bg-white shadow-lg hover:shadow-2xl'
              }`}
            >

              {/* Top Accent */}
              <div
                className={`h-2 w-full ${
                  item.active
                    ? 'bg-[#D4A017]'
                    : 'bg-[#0B1F3A]'
                }`}
              />

              <div className="p-8">

                {/* Stars */}
                <div className="mb-6 flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 fill-current ${
                        item.active
                          ? 'text-[#D4A017]'
                          : 'text-[#D4A017]'
                      }`}
                    />
                  ))}
                </div>

                {/* Review */}
                <p
                  className={`mb-8 text-[17px] leading-8 ${
                    item.active
                      ? 'text-white/90'
                      : 'text-slate-600'
                  }`}
                >
                  “{item.review}”
                </p>

                {/* User */}
                <div className="flex items-center gap-4">

                  {/* Avatar */}
                  <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-[#D4A017]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div>
                    <h3
                      className={`text-lg font-bold ${
                        item.active
                          ? 'text-white'
                          : 'text-[#0B1F3A]'
                      }`}
                    >
                      {item.name}
                    </h3>

                    <p
                      className={`text-sm ${
                        item.active
                          ? 'text-white/70'
                          : 'text-slate-500'
                      }`}
                    >
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
