'use client';

import { motion } from 'framer-motion';

const OFFICE_LAT = 6.889623769065248;
const OFFICE_LNG = 79.88770525388509;
const OFFICE_ADDRESS = 'VVQQ+Q2 Sri Jayawardenepura Kotte';
const MAP_EMBED_URL = `https://www.google.com/maps?q=${OFFICE_LAT},${OFFICE_LNG}&z=17&output=embed`;
const MAP_OPEN_URL = `https://www.google.com/maps/search/?api=1&query=${OFFICE_LAT},${OFFICE_LNG}`;
const MAP_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${OFFICE_LAT},${OFFICE_LNG}&travelmode=driving`;

export function ContactMap() {
  return (
    <section className="py-20 md:py-28 bg-background border-t border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Find Us on Google Maps</h2>
          <p className="text-lg text-muted-foreground">
            Visit our office location or open directions in Google Maps.
          </p>
          <p className="text-sm text-muted-foreground mt-2">{OFFICE_ADDRESS}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-xl overflow-hidden border border-border shadow-sm bg-card"
        >
          <iframe
            title="W-S-K Business Services Office Location"
            src={MAP_EMBED_URL}
            className="w-full h-[420px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </motion.div>

        <div className="text-center mt-6 flex flex-wrap gap-3 items-center justify-center">
          <a
            href={MAP_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Get Directions
          </a>
          <a
            href={MAP_OPEN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-colors"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
