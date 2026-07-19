'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Mr. D W Thisara Ashan',
    role: 'Director',
    company: 'Ortho Care Ceylon (Private) Limited & The Consultants Collab (Pvt) Ltd',
    image: '/images/clients/client1.jpeg',
    review: `I highly recommend WSK Business Services to any business or individual looking for expert tax and corporate secretarial support. They are incredibly sharp, methodical, and precise, making sure that both complex tax matters and statutory company secretary duties are handled seamlessly and with absolute compliance.

What really sets WSK Business Services apart is how dedicated they are to safeguarding their clients' interests. Their advice is always spot-on, clear, and perfectly timed, which gives you complete peace of mind.

On top of their expertise, they are exceptionally easy to work with—combining professional rigor with a smooth, collaborative approach. They are an invaluable partner for any business.`,
    active: false,
  },
  {
    id: 2,
    name: 'Dinesh Kanagaratnam ',
    role: 'Director',
    company: 'Oviyan (Private) Limited ',
    image: '/images/clients/client2.jpeg',
    review: `W S K's service to our company, OVIYAN, has been truly impeccable. The way they handle all our requests and requirements is highly professional, efficient, and consistently timely.

We have been associated with W S K for almost a year, and throughout this period, they have continuously demonstrated their commitment by giving our business the attention and priority it deserves. Their dedication, responsiveness, and reliability have made them a trusted partner.

From the accountants to the secretarial team, every member of the organization treats us with the utmost professionalism and respect. They ensure that all our documentation and administrative requirements are handled accurately, efficiently, and within the required timelines.

We sincerely appreciate our partnership with W S K and highly recommend their services to any organization seeking a reliable, professional, and dependable corporate service provider.`,
    active: true,
  },
  {
    id: 3,
    name: 'Pasan Liyanage',
    role: 'Director',
    company: 'Redfox (Pvt) Ltd',
    image: '/images/clients/client3.jpg',
    review: `It has been a pleasure working with W S K Business Services (Pvt) Ltd for the past 11 years as the accounting and business services partner for Redfox (Pvt) Ltd.

What stands out most is their excellent communication, prompt responses, and professional service. Their team has consistently provided valuable guidance on accounting, taxation, and legal matters throughout the year, ensuring our business remains compliant and well-informed.

The staff are friendly, approachable, and always keep us updated on important deadlines, tax returns, and regulatory requirements. Their reliability and dedication have given us great peace of mind, allowing us to focus on growing our business.

I highly recommend W S K Business Services (Pvt) Ltd to any individual or business looking for a trustworthy, knowledgeable, and efficient accounting and business advisory partner.`,
    active: false,
  },
];

export function Testimonials() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-[#F5F7FA] py-24">
      {/* Background Shape */}
      <div className="absolute left-0 top-0 h-full w-full opacity-[0.03]">
        <div className="absolute -left-20 top-10 text-[250px] font-bold text-[#0B1F3A]">
          “
        </div>

        <div className="absolute bottom-0 right-10 text-[650px] font-bold text-[#D4A017]">
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
            The Trusted
            <span className="block">Choice for Business</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3 items-start">
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
                  item.active ? 'bg-[#D4A017]' : 'bg-[#0B1F3A]'
                }`}
              />

              <div className="p-8">
                {/* Stars */}
                <div className="mb-6 flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 fill-current text-[#D4A017]"
                    />
                  ))}
                </div>

                {/* Review */}
                <div className="mb-8">
                  <p
                    className={`text-[17px] leading-8 whitespace-pre-line ${
                      item.active ? 'text-white/90' : 'text-slate-600'
                    } ${
                      expanded === item.id ? '' : 'line-clamp-8'
                    }`}
                  >
                    “{item.review}”
                  </p>

                  <button
                    onClick={() =>
                      setExpanded(
                        expanded === item.id ? null : item.id
                      )
                    }
                    className={`mt-4 font-semibold transition-colors ${
                      item.active
                        ? 'text-[#D4A017] hover:text-yellow-300'
                        : 'text-[#0B1F3A] hover:text-[#D4A017]'
                    }`}
                  >
                    {expanded === item.id
                      ? 'Show Less'
                      : 'Read More'}
                  </button>
                </div>

                {/* User */}
               {/* User */}
<div className="mt-auto flex items-start gap-4 border-t border-black/10 pt-6">
  {/* Avatar */}
  <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full border-2 border-[#D4A017]">
    <Image
      src={item.image}
      alt={item.name}
      fill
      className="object-cover"
    />
  </div>

  {/* Details */}
  <div className="min-w-0 flex-1">
    {/* Company */}
    <p
      className={`mb-2 line-clamp-2 text-sm font-semibold leading-5 ${
        item.active
          ? 'text-[#D4A017]'
          : 'text-[#D4A017]'
      }`}
    >
      {item.company}
    </p>

    {/* Name */}
    <h3
      className={`text-xl font-bold leading-tight ${
        item.active
          ? 'text-white'
          : 'text-[#0B1F3A]'
      }`}
    >
      {item.name}
    </h3>

    {/* Role */}
    <p
      className={`mt-1 text-sm ${
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