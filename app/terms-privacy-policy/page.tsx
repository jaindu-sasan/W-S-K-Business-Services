import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

const policySections = [
  {
    title: 'Privacy Policy',
    items: [
      {
        heading: 'Information We Collect',
        text:
          'We may collect personal and business information you provide when you contact us, request a service, submit a form, make a payment, or communicate with W S K Business Services (Pvt) Ltd. This may include your name, contact details, company information, tax or accounting related details, and service requirements.',
      },
      {
        heading: 'How We Use Information',
        text:
          'We use collected information to respond to inquiries, provide accounting, tax, consultancy, payroll, and related business services, process payments, maintain records, improve our services, and comply with applicable legal, tax, regulatory, and professional obligations.',
      },
      {
        heading: 'Information Sharing',
        text:
          'We do not sell personal information. Information may be shared only where necessary with authorised team members, professional advisers, service providers, payment processors, or government and regulatory authorities when required by law or for the delivery of requested services.',
      },
      {
        heading: 'Data Security',
        text:
          'We take reasonable administrative, technical, and organisational measures to protect information against unauthorised access, loss, misuse, alteration, or disclosure. However, no electronic transmission or storage method can be guaranteed to be completely secure.',
      },
      {
        heading: 'Retention of Information',
        text:
          'We retain information for as long as necessary to provide services, maintain business records, resolve disputes, and meet legal, tax, accounting, and regulatory requirements.',
      },
      {
        heading: 'Your Rights',
        text:
          'You may contact us to request access to, correction of, or clarification about personal information held by us, subject to applicable legal and professional record keeping requirements.',
      },
    ],
  },
  {
    title: 'Terms & Conditions',
    items: [
      {
        heading: 'Use of This Website',
        text:
          'By using this website, you agree to use it for lawful purposes only and in a way that does not damage, disable, or interfere with the website, its content, or the experience of other users.',
      },
      {
        heading: 'Service Information',
        text:
          'The information on this website is provided for general informational purposes. It should not be treated as final accounting, tax, legal, financial, or business advice without a formal engagement and review of your specific circumstances.',
      },
      {
        heading: 'Professional Engagement',
        text:
          'Submitting an inquiry or using this website does not automatically create a client relationship. Services are provided after W S K Business Services (Pvt) Ltd confirms the scope, requirements, fees, timelines, and any applicable engagement terms.',
      },
      {
        heading: 'Payments',
        text:
          'Payments made through the website or related payment channels must relate to agreed services or authorised invoices. Users are responsible for entering accurate payment and reference details.',
      },
      {
        heading: 'Intellectual Property',
        text:
          'Website content, branding, design, text, graphics, and other materials are owned by or licensed to W S K Business Services (Pvt) Ltd and may not be copied, reproduced, or used without permission, except where allowed by law.',
      },
      {
        heading: 'Limitation of Liability',
        text:
          'To the fullest extent permitted by law, W S K Business Services (Pvt) Ltd is not liable for losses arising from website use, reliance on general website information, technical interruptions, or unauthorised third-party activity.',
      },
      {
        heading: 'Policy Updates',
        text:
          'We may update these Terms & Privacy Policy from time to time. Updated content will be posted on this page with the latest effective date.',
      },
    ],
  },
];

export default function TermsPrivacyPolicyPage() {
  return (
    <main className="bg-background">
      <Navigation />

      <section className="bg-[#0B1F3A] px-6 pb-16 pt-36 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#D4A017]">
            Legal Information
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Terms & Privacy Policy
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">
            This page explains how W S K Business Services (Pvt) Ltd handles information
            and the basic terms that apply when using our website and services.
          </p>
          <p className="mt-4 text-sm font-medium text-white/60">Effective date: June 3, 2026</p>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl space-y-14">
          {policySections.map((section) => (
            <div key={section.title}>
              <h2 className="mb-6 text-3xl font-bold text-[#0B1F3A]">{section.title}</h2>
              <div className="grid gap-5 md:grid-cols-2">
                {section.items.map((item) => (
                  <article
                    key={item.heading}
                    className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <h3 className="mb-3 text-xl font-semibold text-[#0B1F3A]">{item.heading}</h3>
                    <p className="text-base leading-7 text-slate-600">{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}

          <div className="rounded-lg bg-slate-50 p-6">
            <h2 className="mb-3 text-2xl font-bold text-[#0B1F3A]">Contact Us</h2>
            <p className="text-base leading-7 text-slate-600">
              For questions about these terms or privacy practices, contact us at{' '}
              <a href="mailto:admin@wskbiz.com" className="font-semibold text-[#0B1F3A] underline">
                admin@wskbiz.com
              </a>{' '}
              or call{' '}
              <a href="tel:+94115044433" className="font-semibold text-[#0B1F3A] underline">
                011 5044 433
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
