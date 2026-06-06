'use client';

import { motion } from 'framer-motion';
import { BarChart3, Newspaper, ShieldCheck, Youtube } from 'lucide-react';

const highlights = [
  { icon: BarChart3, label: 'Weekly Sri Lanka Market Analysis' },
  { icon: ShieldCheck, label: 'Audit, Tax & Accounting Insights' },
  { icon: Youtube, label: 'Business Videos & Interviews' },
  { icon: Newspaper, label: 'WSK News & Company Updates' },
];

export function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-background pb-16 pt-24 md:pb-20 md:pt-32">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/blog.png')",
        }}
      />

      <div className="absolute inset-0 bg-background/45" />
      {/* <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background to-background" /> */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_45%)]" />
      <div className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" /> */}

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-background/60 px-4 py-2 shadow-sm backdrop-blur-md">
            <span className="text-sm font-semibold text-primary/100">
              WSK Insights & Market Updates
            </span>
          </div>

          <h1 className="text-4xl font-extrabold leading-tight text-primary/150 drop-shadow-md md:text-6xl">
            Financial Insights, Market Analysis & Business Knowledge
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg font-semibold leading-relaxed text-muted-foreground/100">
            Stay updated with weekly Sri Lanka share market analysis, audit and tax guidance,
            business articles, WSK company updates, and featured business videos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-2xl border border-border/80 bg-card/75 p-5 text-left shadow-sm backdrop-blur-md transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>

                <p className="text-sm font-semibold text-foreground">
                  {item.label}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}