import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    // 1. Parse and validate request body
    const { name, email, business, service, message } = await request.json();

    if (
      !name?.trim() ||
      !email?.trim() ||
      !message?.trim() ||
      !service?.trim()
    ) {
      return NextResponse.json(
        { error: "All fields (name, email, service, message) are required." },
        { status: 400 }
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // 2. Check environment variables
    const hostUser = process.env.EMAIL_HOST_USER;
    const hostPass = process.env.EMAIL_HOST_PASSWORD;
    const reciverMail = process.env.EMAIL_RECIVER_MAIL;

    if (!hostUser || !hostPass) {
      return NextResponse.json(
        { error: "Email configuration is missing in environment variables." },
        { status: 500 }
      );
    }

    // 3. Configure Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: hostUser,
        pass: hostPass,
      },
    });

    // 4. Compose Email (HTML + Text)
    const mailOptions = {
      from: hostUser,
      to: reciverMail,
      subject: "New Message from Contact Form",
      text: `
      Name: ${name}
      Email: ${email}
      Business: ${business || "N/A"}
      Service: ${service}
      Message:
      ${message}
      `,
      html: `
      <!DOCTYPE html>
      <html lang="en" style="margin:0; padding:0;">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>New Message</title>
        </head>
        <body style="margin:0; padding:0; background:#1a1a1a; font-family:Arial, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="padding:1rem;">
            <tr>
              <td align="center">
                <!-- Card Container -->
                <table width="600" cellpadding="0" cellspacing="0" 
                       style="
                         background: #2c2c2c;
                         border-radius: 8px;
                         padding: 2rem;
                         color: #ffffff;
                         max-width:600px;
                       ">
                  <tr>
                    <td align="center" style="padding-bottom: 1rem;">
                      <!-- Logo & Heading -->
                      <img src="/logo.jpeg" alt="Logo" width="80" height="80" 
                           style="border-radius:50%; margin-bottom:1rem;" />
                      <h1 style="margin:0; color:#4CAF50;">New Message</h1>
                      <p style="margin:0; color:#cccccc;">
                        You've received a new message from your contact form
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:1rem 0; color:#e0e0e0;">
                      <!-- Content -->
                      <p style="margin:0 0 0.5rem;"><strong>Name:</strong> ${name}</p>
                      <p style="margin:0 0 0.5rem;"><strong>Email:</strong> ${email}</p>
                      <p style="margin:0 0 0.5rem;"><strong>Business:</strong> ${
                        business || "N/A"
                      }</p>
  <p style="margin:0 0 0.5rem;"><strong>Service:</strong> ${service}</p>
                      <p style="margin:0.5rem 0 0.5rem;"><strong>Message:</strong></p>
                      <div style="white-space:pre-wrap; line-height:1.5;">${message}</div>
                    </td>
                  </tr>

                  <tr>
                    <td align="center" style="padding-top:2rem;">
                      <p style="margin:0; color:#777; font-size:0.8rem;">
                        &copy; ${new Date().getFullYear()} Your Company. All Rights Reserved.
                      </p>
                      <p style="margin:0; color:#777; font-size:0.8rem;">
                        Powered by <strong>Next.js &amp; Nodemailer</strong>
                      </p>
                    </td>
                  </tr>

                </table>
                <!-- End Card Container -->
              </td>
            </tr>
          </table>
        </body>
      </html>
      `,
    };

    // 5. Send Email
    await transporter.sendMail(mailOptions);

    // 6. Respond with success
    return NextResponse.json(
      {
        message: "Email sent successfully!",
        data: { name, email, business, service, message },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while sending the email." },
      { status: 500 }
    );
  }
}
