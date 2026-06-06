'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ExternalLink, Facebook } from 'lucide-react';

type FacebookPost = {
  id: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  href: string;
  image?: string;
};

const facebookPageUrl = 'https://www.facebook.com/p/W-S-K-Business-Services-100063708244058/';

function isWithinLastDays(dateValue: string, days: number) {
  const publishedTime = new Date(dateValue).getTime();

  if (Number.isNaN(publishedTime)) {
    return false;
  }

  return Date.now() - publishedTime <= days * 24 * 60 * 60 * 1000;
}

function formatPostDate(dateValue: string) {
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(dateValue));
}

function getPostTitle(message: string) {
  const firstLine = message.split('\n').find(Boolean)?.trim();

  if (!firstLine) {
    return 'WSK Facebook Update';
  }

  return firstLine.length > 80 ? `${firstLine.slice(0, 80)}...` : firstLine;
}

export function FacebookUpdates() {
  const [posts, setPosts] = useState<FacebookPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function loadPosts() {
      try {
        const response = await fetch('/api/facebook-posts?days=14', {
          cache: 'no-store',
        });

        if (!response.ok) {
          throw new Error('Failed to load Facebook posts');
        }

        const data = (await response.json()) as { posts?: FacebookPost[] };

        if (!cancelled) {
          setPosts(Array.isArray(data.posts) ? data.posts : []);
        }
      } catch {
        if (!cancelled) {
          setPosts([]);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadPosts();

    return () => {
      cancelled = true;
    };
  }, []);

  const latestPosts = useMemo(
    () => posts.filter((post) => isWithinLastDays(post.publishedAt, 14)).slice(0, 6),
    [posts]
  );

  return (
    <section className="bg-background py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
              <Facebook className="h-4 w-4" />
              Facebook Updates
            </div>
            <h2 className="text-3xl font-bold text-primary md:text-4xl">
              Latest posts from the last 2 weeks
            </h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
              New posts shared on the official WSK Business Services Facebook page will appear here automatically after the API is connected.
            </p>
          </div>

          <a
            href={facebookPageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition-all hover:border-accent hover:text-accent"
          >
            View Facebook Page
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>

        {loading ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="h-80 animate-pulse rounded-3xl border border-border bg-card" />
            ))}
          </div>
        ) : latestPosts.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post, index) => (
              <motion.a
                key={post.id}
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg"
              >
                {post.image ? (
                  <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
                ) : (
                  <div className="flex h-48 w-full items-center justify-center bg-gradient-to-br from-primary/10 via-accent/10 to-background">
                    <Facebook className="h-12 w-12 text-primary" />
                  </div>
                )}

                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2 text-xs font-medium text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {formatPostDate(post.publishedAt)}
                  </div>
                  <h3 className="line-clamp-2 text-lg font-bold text-primary transition-colors group-hover:text-accent">
                    {post.title || getPostTitle(post.excerpt)}
                  </h3>
                  <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt || 'Open Facebook to view this WSK update.'}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-all group-hover:gap-3">
                    View Post
                    <ExternalLink className="h-4 w-4" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-border bg-card p-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <Facebook className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary">No recent Facebook posts</h3>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
              No posts were found from the last 2 weeks. When WSK uploads a new Facebook post, it will show here after the Facebook API is connected.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
