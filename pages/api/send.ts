/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "@/lib/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message)
    return res.status(400).json({ error: "Please fill all the fields" });

  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: "flavianmaina23@gmail.com",
    subject: "Contact Form Submission from " + name,
    react: EmailTemplate({ firstName: name, email: email, message: message }),
    text: "Hello world", // Add the 'text' property with a value
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};
