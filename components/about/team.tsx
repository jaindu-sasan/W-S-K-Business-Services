'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';

export function Team() {
  const team = [
    {
      name: 'Robert Williams',
      title: 'Founder & CEO',
      email: 'robert@wskbusiness.com',
      bio: 'CPA with 20+ years of tax planning expertise.',
      initials: 'RW',
    },
    {
      name: 'Sarah Mitchell',
      title: 'Chief Financial Officer',
      email: 'sarah@wskbusiness.com',
      bio: 'Former Big 4 accountant with CFO advisory experience.',
      initials: 'SM',
    },
    {
      name: 'James Chen',
      title: 'Director of Tax Services',
      email: 'james@wskbusiness.com',
      bio: 'Specialized in business tax strategy and optimization.',
      initials: 'JC',
    },
    {
      name: 'Emily Rodriguez',
      title: 'Senior Accountant',
      email: 'emily@wskbusiness.com',
      bio: 'Expert in financial reporting and audit services.',
      initials: 'ER',
    },
    {
      name: 'Michael Thompson',
      title: 'Business Consultant',
      email: 'michael@wskbusiness.com',
      bio: 'Strategic consultant helping businesses scale and grow.',
      initials: 'MT',
    },
    {
      name: 'Lisa Anderson',
      title: 'Client Success Manager',
      email: 'lisa@wskbusiness.com',
      bio: 'Dedicated to ensuring exceptional client experiences.',
      initials: 'LA',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-card/50 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Expert Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the talented professionals dedicated to your financial success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-background border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all"
            >
              {/* Avatar */}
              <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                <div className="w-20 h-20 bg-accent/30 rounded-full flex items-center justify-center text-3xl font-bold text-primary">
                  {member.initials}
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-primary">{member.name}</h3>
                <p className="text-accent font-semibold text-sm mb-3">{member.title}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>

                {/* Contact Links */}
                <div className="flex gap-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex-1 bg-accent/10 hover:bg-accent/20 text-accent rounded-lg py-2 px-3 flex items-center justify-center gap-2 transition-colors text-sm font-medium"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                  <button
                    className="flex-1 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg py-2 px-3 flex items-center justify-center gap-2 transition-colors text-sm font-medium"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
