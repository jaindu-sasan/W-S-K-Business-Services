'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const logoFiles = [
  'ACRUS.png',
  'AEL_ENGINEERING.png',
  'amusync.jpeg',
  'bonfire.png',
  'BONFIRE_DISTRIBUTION.jpeg',
  'ceegreen_engineeing.png',
  'COMMERCIAL_PROJECTS.png',
  'FLAMING_TREE.png',
  'kanola_hotel.png',
  'kantrans.jpeg',
  'KIMGSMAN_CORPORATION.png',
  'KINGWON.jpeg',
  'M_N_ELEGANT_INTERIORS.jpeg',
  'M_N_GROUP.png',
  'M_N_HOMES.png',
  'M_N_MULTI_TRADING.png',
  'NOVIGI.png',
  'redfluence.jpeg',
  'redfox.jpeg',
  'ROHANA_SAMILTA.png',
  'SAYLANKA.jpg',
  'sewmini_rice.jpeg',
  'shiftcoshipping_lanka_pvt_ltd_logo.jpeg',
  'SKY9.png',
  'SKYRED.jpeg',
  'SUPERIOR_LOGO.avif',
  'TCC_Logo.png',
  'THE_PICTURE_HOUSE_CREATIONS.png',
  'tokyo_elevators.png',
  'Touch_base_data services.png',
  'TSIA.jpeg',
  'ugs.jpeg',
  'WEST_WIND.jpeg',
  'WIMALADHARMA&SONS.png',
  'ZERO_GRAVITY.jpeg',
];

const clientLogos = logoFiles.map((file, index) => {
  const name = file
    .replace(/\.[^/.]+$/, '')
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

  return {
    id: index + 1,
    name,
    image: `/images/logos/${file}`,
    alt: `${name} logo`,
  };
});

const marqueeLogos = [...clientLogos, ...clientLogos];

export function ClientLogosMarquee() {
  return (
    <section className="overflow-hidden bg-[#F8FAFC] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#D4A017]">Our Clients</p>
          <h2 className="text-3xl font-bold leading-tight text-[#0B1F3A] md:text-5xl">
            Trusted Across Sectors
          </h2>
          <p className="mt-5 text-base leading-8 text-[#5B6472] md:text-lg">
            Delivering dependable business advisory and operational support to organisations worldwide.
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#F8FAFC] to-transparent md:w-28" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#F8FAFC] to-transparent md:w-28" />

          <div className="client-logo-marquee flex w-max gap-4 py-2 md:gap-6">
            {marqueeLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex h-20 w-36 shrink-0 items-center justify-center rounded-2xl border border-[#E5EAF0] bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D4A017]/50 hover:shadow-md sm:h-24 sm:w-44 md:w-52"
              >
                <Image
                  src={logo.image}
                  alt={logo.alt}
                  width={180}
                  height={72}
                  className="max-h-11 w-auto max-w-full object-contain transition-all duration-300 sm:max-h-14"
                  sizes="(max-width: 640px) 144px, (max-width: 768px) 176px, 208px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .client-logo-marquee {
          animation: client-logo-scroll 48s linear infinite;
        }

        .client-logo-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes client-logo-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50% - 0.75rem));
          }
        }

        @media (min-width: 768px) {
          @keyframes client-logo-scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(calc(-50% - 1rem));
            }
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .client-logo-marquee {
            animation: none;
            flex-wrap: wrap;
            justify-content: center;
            width: 100%;
          }

          .client-logo-marquee:hover {
            animation-play-state: running;
          }
        }
      `}</style>
    </section>
  );
}
