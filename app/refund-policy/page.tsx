import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

const refundableItems = [
  'Duplicate payments made by the client.',
  'Payments made in error.',
  'Services paid for but not yet commenced by the company.',
  'Inability to provide the agreed service due to reasons solely attributable to the company.',
];

const nonRefundableItems = [
  'Government fees, taxes, penalties, stamp duties, and statutory payments made to authorities.',
  'Services already completed or substantially performed.',
  'Consultation fees, advisory fees, or professional opinion fees.',
  'Company incorporation, tax registration, and statutory filing charges once processing has commenced.',
  'Customized reports, financial statements, tax computations, payroll processing, or outsourced work already delivered.',
];

export default function RefundPolicyPage() {
  return (
    <main className="bg-background">
      <Navigation />

      <section className="bg-[#0B1F3A] px-6 pb-16 pt-36 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#D4A017]">
            Payment Information
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Refund Policy
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">
            At W S K Business Services (Pvt) Ltd, we are committed to providing
            professional and reliable business consulting, accounting, taxation,
            company secretarial, and business process outsourcing services.
          </p>
          <p className="mt-4 text-sm font-medium text-white/60">Effective date: June 3, 2026</p>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl space-y-10">
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-bold text-[#0B1F3A]">
              Service Fees and Payments
            </h2>
            <p className="text-base leading-7 text-slate-600">
              All service fees agreed upon between the client and the company must be paid
              according to the agreed quotation, engagement letter, invoice, or service
              agreement. Payments made for professional services are generally non-refundable
              once the service has commenced, work has been performed, documents have been
              prepared, or submissions have been made to government or regulatory authorities.
            </p>
          </article>

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-[#0B1F3A]">Eligibility for Refunds</h2>
              <p className="mb-4 text-base leading-7 text-slate-600">
                Refunds may only be considered under the following circumstances:
              </p>
              <ul className="space-y-3 text-base leading-7 text-slate-600">
                {refundableItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#D4A017]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Any approved refund will be processed after reviewing the nature and stage of
                the work completed.
              </p>
            </article>

            <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-[#0B1F3A]">Non-Refundable Services</h2>
              <ul className="space-y-3 text-base leading-7 text-slate-600">
                {nonRefundableItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#D4A017]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-3 text-2xl font-bold text-[#0B1F3A]">Client Responsibilities</h2>
              <p className="text-base leading-7 text-slate-600">
                Clients are responsible for providing accurate, complete, and timely information
                and documentation required for the services. Delays or issues arising due to
                incomplete or inaccurate information provided by the client shall not qualify for
                refunds.
              </p>
            </article>

            <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-3 text-2xl font-bold text-[#0B1F3A]">Cancellation of Services</h2>
              <p className="text-base leading-7 text-slate-600">
                Clients may request cancellation of services by providing written notice. If work
                has not commenced, the company may consider a partial or full refund at its
                discretion. If work has already commenced, the company reserves the right to
                charge for the portion of work completed up to the date of cancellation.
              </p>
            </article>

            <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-3 text-2xl font-bold text-[#0B1F3A]">Processing of Refunds</h2>
              <p className="text-base leading-7 text-slate-600">
                Approved refunds will be processed within 7-14 business days through the
                original payment method or via bank transfer, depending on the payment
                arrangement.
              </p>
            </article>

            <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-3 text-2xl font-bold text-[#0B1F3A]">Limitation of Liability</h2>
              <p className="text-base leading-7 text-slate-600">
                W S K Business Services (Pvt) Ltd shall not be held responsible for delays,
                penalties, rejections, or losses arising due to inaccurate information, late
                submissions by clients, or decisions made by government authorities and third
                parties.
              </p>
            </article>
          </div>

          <div className="rounded-lg bg-slate-50 p-6">
            <h2 className="mb-3 text-2xl font-bold text-[#0B1F3A]">Contact Us</h2>
            <p className="text-base leading-7 text-slate-600">
              If you have any questions regarding this Refund Policy, please contact us through
              the contact information provided on our website.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
