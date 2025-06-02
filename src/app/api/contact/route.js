import nodemailer from 'nodemailer';
import CONTACT_TEMPLATE from '@/templates/contact-template';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: "arnabgogoi83@gmail.com",
        pass: "erzs cmdi xlkv opkf",
      },
    });

    const mailOptions = {
      to: "arnabgogoi83@gmail.com",
      from: email,
      subject: 'INCOMING CONTACT REQUEST',
      text: `New message from ${name} (${email}):\n\n${message}`,
      html: CONTACT_TEMPLATE
        .replace('{name}', name)
        .replace('{email}', email)
        .replace('{message}', message),
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ message: 'success' }, { status: 200 });
  } catch (error) {
    console.error('Email error:', error);
    return Response.json({ message: 'error', error }, { status: 500 });
  }
}