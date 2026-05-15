import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
};

const requiredEnv = [
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_USER',
  'SMTP_PASS',
  'CONTACT_TO_EMAIL',
  'CONTACT_FROM_EMAIL',
] as const;

const hasRequiredEnv = () => requiredEnv.every((key) => Boolean(process.env[key]));

const validate = (payload: ContactPayload) => {
  if (!payload.name?.trim()) return 'Name is required.';
  if (!payload.email?.trim()) return 'Email is required.';
  if (!payload.message?.trim()) return 'Message is required.';
  return '';
};

export async function POST(request: Request) {
  try {
    if (!hasRequiredEnv()) {
      return NextResponse.json(
        {
          error:
            'Email service is not configured. Please set SMTP and CONTACT_* environment variables.',
        },
        { status: 500 }
      );
    }

    const payload = (await request.json()) as ContactPayload;
    const validationError = validate(payload);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const subject = `New Contact Inquiry - ${payload.service || 'general'}`;
    const textBody = [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone?.trim() || '-'}`,
      `Company: ${payload.company?.trim() || '-'}`,
      `Service: ${payload.service?.trim() || '-'}`,
      '',
      'Message:',
      payload.message || '',
    ].join('\n');

    const htmlBody = `
      <h2>New Contact Inquiry</h2>
      <p><strong>Name:</strong> ${payload.name}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      <p><strong>Phone:</strong> ${payload.phone?.trim() || '-'}</p>
      <p><strong>Company:</strong> ${payload.company?.trim() || '-'}</p>
      <p><strong>Service:</strong> ${payload.service?.trim() || '-'}</p>
      <p><strong>Message:</strong></p>
      <p>${(payload.message || '').replace(/\n/g, '<br/>')}</p>
    `;

    await transporter.sendMail({
      from: process.env.CONTACT_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: payload.email,
      subject,
      text: textBody,
      html: htmlBody,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact form send failed:', error);
    return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 });
  }
}
