import { NextResponse } from 'next/server';
import { Resend } from 'resend';

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
  website?: string;
};

const requiredEnv = ['RESEND_API_KEY', 'CONTACT_RECEIVER_EMAIL', 'CONTACT_FROM_EMAIL'] as const;

const hasRequiredEnv = () => requiredEnv.every((key) => Boolean(process.env[key]));

const validate = (payload: ContactPayload) => {
  if (!payload.name?.trim()) return 'Name is required.';
  if (!payload.email?.trim()) return 'Email is required.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email.trim())) return 'Enter a valid email address.';
  if (!payload.message?.trim()) return 'Message is required.';
  return '';
};

const escapeHtml = (value = '') =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

export async function POST(request: Request) {
  try {
    if (!hasRequiredEnv()) {
      return NextResponse.json(
        {
          error: 'Email service is not configured. Please set the Resend environment variables.',
        },
        { status: 500 }
      );
    }

    const payload = (await request.json()) as ContactPayload;

    if (payload.website?.trim()) {
      return NextResponse.json({ ok: true });
    }

    const validationError = validate(payload);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const fromEmail = process.env.CONTACT_FROM_EMAIL as string;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL as string;
    const resend = new Resend(process.env.RESEND_API_KEY);
    const subject = 'New Website Inquiry - W S K Business Services';
    const textBody = [
      `Name: ${payload.name?.trim()}`,
      `Email: ${payload.email?.trim()}`,
      `Phone: ${payload.phone?.trim() || '-'}`,
      `Company: ${payload.company?.trim() || '-'}`,
      `Service: ${payload.service?.trim() || '-'}`,
      '',
      'Message:',
      payload.message?.trim() || '',
    ].join('\n');

    const htmlBody = `
      <h2>New Website Inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(payload.name?.trim())}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email?.trim())}</p>
      <p><strong>Phone:</strong> ${escapeHtml(payload.phone?.trim() || '-')}</p>
      <p><strong>Company:</strong> ${escapeHtml(payload.company?.trim() || '-')}</p>
      <p><strong>Service:</strong> ${escapeHtml(payload.service?.trim() || '-')}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(payload.message?.trim()).replace(/\n/g, '<br/>')}</p>
    `;

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: receiverEmail,
      replyTo: payload.email,
      subject,
      text: textBody,
      html: htmlBody,
    });

    if (error) {
      console.error('Resend contact email failed:', error);
      return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact form send failed:', error);
    return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 });
  }
}
