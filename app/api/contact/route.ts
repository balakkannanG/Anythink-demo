import nodemailer from "nodemailer";

import type { ContactFormValues } from "@/lib/types";

function isValidForm(values: Partial<ContactFormValues>) {
  return Boolean(
    values.name?.trim() &&
      values.email?.trim() &&
      values.phone?.trim() &&
      values.company?.trim() &&
      values.message?.trim(),
  );
}

export async function POST(request: Request) {
  try {
    const values = (await request.json()) as Partial<ContactFormValues>;

    if (!isValidForm(values)) {
      return Response.json({ ok: false, error: "Please complete all required fields." }, { status: 400 });
    }

    const port = Number(process.env.SMTP_PORT ?? 587);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD?.replace(/\s/g, ""),
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM ?? process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      replyTo: values.email,
      subject: `New inquiry from ${values.name}`,
      text: [
        `Name: ${values.name}`,
        `Email: ${values.email}`,
        `Phone: ${values.phone}`,
        `Company: ${values.company}`,
        "",
        "Message:",
        values.message,
      ].join("\n"),
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact form email failed", error);
    return Response.json({ ok: false, error: "Unable to send your message." }, { status: 500 });
  }
}