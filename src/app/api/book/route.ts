import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, condition, preferredDate, message } = body;

    if (!name || !phone || !condition) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const doctorEmail = process.env.DOCTOR_EMAIL || "dranjugoyalhomeo.clinic@gmail.com";

    // Email to the doctor
    const { data, error: sendError } = await resend.emails.send({
      from: "Dr. Anju's Homeo Clinic <onboarding@resend.dev>",
      to: doctorEmail,
      subject: `New Appointment: ${name} — ${condition}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4a5d3a;">New Appointment Booking</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #888;">Name</td><td style="padding: 8px 0; font-weight: bold;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #888;">Phone</td><td style="padding: 8px 0;">${phone}</td></tr>
            <tr><td style="padding: 8px 0; color: #888;">Condition</td><td style="padding: 8px 0;">${condition}</td></tr>
            <tr><td style="padding: 8px 0; color: #888;">Preferred Date</td><td style="padding: 8px 0;">${preferredDate || "Not specified"}</td></tr>
            <tr><td style="padding: 8px 0; color: #888;">Message</td><td style="padding: 8px 0;">${message || "—"}</td></tr>
          </table>
          <p style="color: #888; font-size: 12px; margin-top: 20px;">Submitted on ${new Date().toLocaleString()}</p>
        </div>
      `,
    });

    console.log("Resend response:", { data, sendError });

    if (sendError) {
      console.error("Resend error:", sendError);
      return NextResponse.json(
        { error: "Failed to send booking email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Booking email error:", error);
    return NextResponse.json(
      { error: "Failed to send booking email" },
      { status: 500 }
    );
  }
}
