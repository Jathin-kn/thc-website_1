require('dotenv').config();
const express    = require('express');
const nodemailer = require('nodemailer');
const cors       = require('cors');

const app  = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: 'https://www.thehospitalcare.in'
}));
app.use(express.json());

const transporter = nodemailer.createTransport({
  host:   'smtp.gmail.com',
  port:   465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

transporter.verify((err) => {
  if (err) console.error('SMTP connection failed:', err);
  else     console.log('SMTP connected — ready to send mail');
});

app.post('/contact', async (req, res) => {
  const { name, phone, city, surgery, insurance, message } = req.body;

  if (!name || !phone || !message) {
    return res.status(400).json({ error: 'Name, phone and message are required.' });
  }

  const mailOptions = {
    from:    `"The Hospital Care Website" <${process.env.MAIL_USER}>`,
    to:      process.env.MAIL_USER,
    replyTo: phone,
    subject: `New inquiry — ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden">
        <div style="background:#22B04B;padding:24px 32px">
          <h2 style="color:#fff;margin:0;font-size:20px;font-weight:600">
            New Contact Form Submission
          </h2>
          <p style="color:rgba(255,255,255,0.8);margin:6px 0 0;font-size:13px">
            thehospitalcare.in
          </p>
        </div>
        <div style="padding:32px">
          <table style="width:100%;border-collapse:collapse;font-size:15px">
            <tr>
              <td style="padding:12px 0;color:#6b7280;width:140px;border-bottom:1px solid #f3f4f6">Name</td>
              <td style="padding:12px 0;color:#111827;font-weight:500;border-bottom:1px solid #f3f4f6">${name}</td>
            </tr>
            <tr>
              <td style="padding:12px 0;color:#6b7280;border-bottom:1px solid #f3f4f6">Phone</td>
              <td style="padding:12px 0;color:#111827;font-weight:500;border-bottom:1px solid #f3f4f6">${phone}</td>
            </tr>
            <tr>
              <td style="padding:12px 0;color:#6b7280;border-bottom:1px solid #f3f4f6">City</td>
              <td style="padding:12px 0;color:#111827;border-bottom:1px solid #f3f4f6">${city || '—'}</td>
            </tr>
            <tr>
              <td style="padding:12px 0;color:#6b7280;border-bottom:1px solid #f3f4f6">Surgery type</td>
              <td style="padding:12px 0;color:#111827;border-bottom:1px solid #f3f4f6">${surgery || '—'}</td>
            </tr>
            <tr>
              <td style="padding:12px 0;color:#6b7280;border-bottom:1px solid #f3f4f6">Insurance</td>
              <td style="padding:12px 0;color:#111827;border-bottom:1px solid #f3f4f6">${insurance || '—'}</td>
            </tr>
            <tr>
              <td style="padding:12px 0;color:#6b7280;vertical-align:top">Message</td>
              <td style="padding:12px 0;color:#111827;line-height:1.6">${message}</td>
            </tr>
          </table>
        </div>
        <div style="background:#f9fafb;padding:16px 32px;border-top:1px solid #e5e7eb">
          <p style="color:#9ca3af;font-size:12px;margin:0">
            Sent from the contact form at thehospitalcare.in
          </p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Mail error:', err.message);
    res.status(500).json({ error: 'Failed to send email. Please try again.' });
  }
});

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));