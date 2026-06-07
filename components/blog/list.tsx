'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Newspaper, PlayCircle, ShieldCheck } from 'lucide-react';
import { FacebookUpdates } from './FacebookUpdates';

export function BlogList() {
  return (
    <>
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
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

                <h2 className="text-2xl font-bold text-primary">
                  WSK Business Knowledge Video
                </h2>

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
                Connect the Facebook API for automatic post loading, and use LinkedIn as a
                professional company profile link.
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
            className="mt-8"
          >
            <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  <Newspaper className="h-4 w-4" />
                  News & Partnerships
                </div>

                <h2 className="text-2xl font-bold text-primary">
                  WSK related news and business activities
                </h2>

                <p className="mt-2 max-w-2xl text-muted-foreground">
                  Newspaper articles, partnership updates, business events, incubator programmes,
                  and public mentions.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <article className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="relative h-56 overflow-hidden bg-background">
                  <img
                    src="/images/blog/news-article.jpg"
                    alt="VTA signs MOU for start-up incubator programmes"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                  <div className="absolute left-4 top-4 rounded-full bg-background/90 px-4 py-2 text-xs font-semibold text-primary shadow-sm backdrop-blur">
                    Partnership News
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm font-medium text-accent">January 18, 2024</p>

                  <h3 className="mt-3 line-clamp-2 text-xl font-bold leading-snug text-primary">
                    VTA signs MOU for start-up incubator programmes
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    A related business news article covering start-up incubator programmes,
                    business development, and partnership activities.
                  </p>

                  <a
                    href="https://dailynews.lk/2024/01/18/local/352954/vta-signs-mou-for-start-up-incubator-programmes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
                  >
                    Read More
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </article>

              <article className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="relative h-56 overflow-hidden bg-background">
                  <img
                    src="/images/blog/business-event.jpg"
                    alt="WSK business events and public activities"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                  <div className="absolute left-4 top-4 rounded-full bg-background/90 px-4 py-2 text-xs font-semibold text-primary shadow-sm backdrop-blur">
                    Business Activities
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm font-medium text-accent">Company Updates</p>

                  <h3 className="mt-3 line-clamp-2 text-xl font-bold leading-snug text-primary">
                    WSK business activities and professional updates
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    Updates about WSK events, client awareness programmes, professional activities,
                    and business development initiatives.
                  </p>

                  <a
                    href="https://www.facebook.com/p/W-S-K-Business-Services-100063708244058/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition-all hover:border-accent hover:text-accent"
                  >
                    Read More
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </article>

              <article className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:col-span-2 lg:col-span-1">
                <div className="relative h-56 overflow-hidden bg-background">
                  <img
                    src="/images/blog/partnership.jpg"
                    alt="WSK partnerships and business collaborations"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                  <div className="absolute left-4 top-4 rounded-full bg-background/90 px-4 py-2 text-xs font-semibold text-primary shadow-sm backdrop-blur">
                    Partnerships
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm font-medium text-accent">Professional Network</p>

                  <h3 className="mt-3 line-clamp-2 text-xl font-bold leading-snug text-primary">
                    Partnerships, public mentions and collaborations
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    WSK highlights professional collaborations, public mentions, and business
                    network activities through official channels.
                  </p>

                  <a
                    href="https://lk.linkedin.com/company/w-s-k-business-services-pvt-ltd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition-all hover:border-accent hover:text-accent"
                  >
                    Read More
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </div>
          </motion.div>
        </div>
      </section>

      <FacebookUpdates />
    </>
  );
}