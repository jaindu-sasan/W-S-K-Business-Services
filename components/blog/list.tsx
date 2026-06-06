'use client';

import { motion } from 'framer-motion';
import { BarChart3, ExternalLink, Newspaper, PlayCircle, ShieldCheck } from 'lucide-react';
import { FacebookUpdates } from './FacebookUpdates';

const marketStats = [
  { label: 'Main Focus', value: 'ASPI & S&P SL20' },
  { label: 'Frequency', value: 'Weekly' },
  { label: 'Coverage', value: 'Sri Lanka Market' },
];

export function BlogList() {
  return (
    <>
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
          >
            <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="p-6 md:p-8 lg:p-10">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-foreground">
                  <BarChart3 className="h-4 w-4 text-accent" />
                  Weekly Sri Lanka Share Market Analysis
                </div>

                <h2 className="text-3xl font-bold leading-tight text-primary md:text-4xl">
                  Sri Lanka market movement, investor sentiment, and weekly insights
                </h2>

                <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                  WSK can publish a weekly market review covering ASPI, S&P SL20, turnover, foreign activity, sector movement, top counters, and a short expert comment for business owners and investors.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {marketStats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-border bg-background p-4">
                      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        {stat.label}
                      </p>
                      <p className="mt-1 font-semibold text-foreground">{stat.value}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                  This analysis is for informational and educational purposes only. It is not investment advice or a recommendation to buy or sell securities.
                </p>
              </div>

              <div className="border-t border-border bg-gradient-to-br from-primary/10 via-accent/10 to-background p-6 md:p-8 lg:border-l lg:border-t-0">
                <div className="rounded-3xl border border-border bg-background/80 p-5 shadow-sm backdrop-blur">
                  <p className="text-sm font-semibold text-primary">Weekly report format</p>
                  <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                    <li>ASPI and S&P SL20 weekly change</li>
                    <li>Market turnover and volume summary</li>
                    <li>Top gainers, losers, and active counters</li>
                    <li>Sector performance and foreign activity</li>
                    <li>WSK expert market comment</li>
                  </ul>
                  <a
                    href="https://tradingeconomics.com/sri-lanka/stock-market"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
                  >
                    View Market Reference
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
            >
              <div className="p-6 md:p-8">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  <PlayCircle className="h-4 w-4" />
                  Featured Business Video
                </div>
                <h2 className="text-2xl font-bold text-primary">WSK Business Knowledge Video</h2>
                <p className="mt-2 text-muted-foreground">
                  Interviews, business education videos, and client-awareness content from WSK.
                </p>
              </div>

              <div className="aspect-video w-full bg-background">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/IdymPw-MBwo"
                  title="WSK Business Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8"
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                <ShieldCheck className="h-4 w-4" />
                Company Channels
              </div>

              <h2 className="text-2xl font-bold text-primary">Follow WSK updates</h2>
              <p className="mt-2 text-muted-foreground">
                Connect the Facebook API for automatic post loading, and use LinkedIn as a professional company profile link.
              </p>

              <div className="mt-6 grid gap-4">
                <a
                  href="https://www.facebook.com/p/W-S-K-Business-Services-100063708244058/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-border bg-background p-5 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-md"
                >
                  <span className="font-semibold text-primary">Facebook Page</span>
                  <ExternalLink className="h-4 w-4 text-accent" />
                </a>

                <a
                  href="https://lk.linkedin.com/company/w-s-k-business-services-pvt-ltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-border bg-background p-5 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-md"
                >
                  <span className="font-semibold text-primary">LinkedIn Company Page</span>
                  <ExternalLink className="h-4 w-4 text-accent" />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8"
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  <Newspaper className="h-4 w-4" />
                  News & Partnerships
                </div>
                <h2 className="text-2xl font-bold text-primary">WSK related news and business activities</h2>
                <p className="mt-2 max-w-2xl text-muted-foreground">
                  Newspaper articles, partnership updates, business events, incubator programmes, and public mentions.
                </p>
              </div>

              <a
                href="https://dailynews.lk/2024/01/18/local/352954/vta-signs-mou-for-start-up-incubator-programmes/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition-all hover:border-accent hover:text-accent"
              >
                Read News Article
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <FacebookUpdates />
    </>
  );
}
