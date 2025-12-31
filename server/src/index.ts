import "dotenv/config";
import cors from "cors";
import express from "express";
import multer from "multer";
import nodemailer from "nodemailer";
import { z } from "zod";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    files: 5,
    fileSize: 10 * 1024 * 1024, // 10 MB / file
  },
});

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().optional().default(""),
  message: z.string().min(1),
});

app.get("/health", (_req, res) => res.json({ ok: true }));

app.post("/api/inquiry", upload.array("files", 5), async (req, res) => {
  try {
    const parsed = schema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        ok: false,
        error: "VALIDATION_ERROR",
        details: parsed.error.flatten(),
      });
    }

    const { name, email, company, message } = parsed.data;
    const files = (req.files ?? []) as Express.Multer.File[];

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `MicroVolt poptávka: ${name}${company ? ` (${company})` : ""}`,
      text:
        `Jméno: ${name}\n` +
        `E-mail: ${email}\n` +
        `Firma: ${company}\n\n` +
        `Zpráva:\n${message}\n`,
      attachments: files.map((f) => ({
        filename: f.originalname,
        content: f.buffer,
        contentType: f.mimetype,
      })),
    });

    res.json({ ok: true });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, error: "INTERNAL_ERROR" });
  }
});

const port = Number(process.env.PORT ?? "5175");
app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});