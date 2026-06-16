'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export function Services() {
  const serviceAreas = [
    {
      title: 'Financial & Taxation',
      image: '/images/services/financial-taxation.png',
      services: [
        'Personal Taxation Services',
        'Corporate Taxation Services',
        'Tax Planning and Compliance',
        'Transfer Pricing Advisory',
      ],
    },
    {
      title: 'Business Formation & Governance',
      image: '/images/services/business-formation.jpeg',
      services: [
        'Company Formation and Registration',
        'Corporate Secretarial Services',
        'Corporate Governance Advisory',
        'Board and Shareholder Support Services',
      ],
    },
    {
      title: 'Investment Promotion & Facilitation',
      image: '/images/services/investment-promotion.png',
      services: [
        'Investment Advisory Services',
        'Capital Raising and Fundraising Support',
        'Financial Due Diligence',
      ],
    },
    {
      title: 'Enterprise Growth & Support',
      image: '/images/services/enterprise-growth.png',
      services: [
        'Entrepreneurship Development Programs',
        'Business Incubation and Acceleration Services',
        'SME Development and Support',
        'Business Succession Planning',
      ],
    },
    {
      title: 'Market & Strategy',
      image: '/images/services/market-strategy.jpeg',
      services: [
        'Market Research and Business Intelligence',
        'Business Promotion and Go-to-Market Strategy',
        'Marketing Strategy and Digital Marketing Services',
        'Competitive Benchmarking and Industry Analysis',
      ],
    },
    {
      title: 'Operational & Performance Improvement',
      image: '/images/services/operational-improvement.jpg',
      services: [
        'Organizational Design and Restructuring',
        'Business Process Reengineering',
        'Performance Management and KPI Design',
        'Operational Efficiency and Cost Optimization',
      ],
    },
    {
      title: 'Legal & Compliance Support',
      image: '/images/services/legal-compliance.jpeg',
      services: [
        'Regulatory Compliance Advisory',
        'Contract Review and Drafting Support',
        'Licensing and Permit Assistance',
      ],
    },
    {
      title: 'Trade & Internationalization',
      image: '/images/services/trade-internationalization.jpeg',
      services: [
        'Export Promotion and Market Entry Services',
        'International Business Advisory',
        'Cross-border Transaction Support',
      ],
    },
    {
      title: 'Technology & Digital Transformation',
      image: '/images/services/digital-transformation.jpeg',
      services: [
        'Digital Transformation Strategy',
        'IT Advisory and Systems Implementation',
        'Data Analytics and Business Intelligence',
      ],
    },
    {
      title: 'Specialist Advisory',
      image: '/images/services/specialist-advisory.jpeg',
      services: [
        'Mergers & Acquisitions Advisory',
        'Valuation Services',
        'ESG Advisory and Sustainability Strategy',
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F3F0EA] py-14 md:py-16">
      {/* Background Glow */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#0B1F3A]/10 blur-3xl" />
      <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#D4A017]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* See All Services Link */}
        <Link
          href="/services"
          className="absolute right-6 top-3 hidden items-center gap-2 text-sm font-semibold text-[#0B1F3A] transition-all duration-300 hover:text-[#C69214] md:inline-flex lg:right-10"
        >
          See all services
          <ArrowRight size={16} />
        </Link>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-4xl text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#C69214]">
            What We Do
          </p>

          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#0B1F3A] md:text-5xl">
            Management & Advisory 360
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-[17px] leading-8 text-[#334155]">
            Comprehensive operational and advisory support that helps businesses
            streamline processes, improve performance, and achieve sustainable growth.
          </p>

          {/* Mobile Link */}
          <Link
            href="/services"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0B1F3A] transition-all duration-300 hover:text-[#C69214] md:hidden"
          >
            See all services
            <ArrowRight size={16} />
          </Link>
        </motion.div>

        {/* Services Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1180: {
              slidesPerView: 3,
            },
          }}
          className="!pb-12 [&_.swiper-wrapper]:items-stretch [&_.swiper-slide]:!h-auto [&_.swiper-pagination-bullet]:!bg-[#D4A017] [&_.swiper-pagination-bullet-active]:!bg-[#0B1F3A]"
        >
          {serviceAreas.map((service, index) => (
            <SwiperSlide key={service.title} className="!h-auto">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
                className="group flex h-[465px] flex-col overflow-hidden rounded-[26px] border border-[#E5E0D6] bg-white shadow-[0_18px_45px_rgba(11,31,58,0.10)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(11,31,58,0.18)]"
              >
                {/* Image */}
                <div className="relative h-[205px] w-full shrink-0 overflow-hidden md:h-[215px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/45 via-transparent to-transparent" />


                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="min-h-[48px] text-lg font-semibold leading-snug text-[#0B1F3A]">
                    {service.title}
                  </h3>

                  {/* Bullet Points */}
                  <ul className="mt-4 space-y-2">
                    {service.services.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-[13px] leading-5 text-slate-700"
                      >
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#C69214]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/services"
                    className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-semibold text-[#C69214] transition-all duration-300 group-hover:gap-3"
                  >
                    Read More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}