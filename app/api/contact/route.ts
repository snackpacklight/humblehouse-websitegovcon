import { Resend } from "resend";

function field(value: unknown, limit: number) {
  if (typeof value !== "string") return "";
  const trimmed = value.trim();
  return trimmed.length <= limit ? trimmed : "";
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const name = field(body?.name, 120);
  const organization = field(body?.organization, 180);
  const email = field(body?.email, 254);
  const phone = field(body?.phone, 50);
  const message = field(body?.message, 5000);

  if (!name || !organization || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    || (body?.phone != null && (typeof body.phone !== "string" || body.phone.trim().length > 50))) {
    return Response.json({ success: false, error: "Check the required fields and email address." }, { status: 400 });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: "Humble House <riccardo@humblehouseusa.com>",
      to: [process.env.CONTACT_TO_EMAIL || "riccardo@humblehouseusa.com"],
      subject: "New Humble House Contact Form Submission",
      replyTo: email,
      text: [`Name: ${name}`, `Organization: ${organization}`, `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`, "", message].join("\n"),
    });
    if (error || !data?.id) throw new Error("Email not accepted");
    return Response.json({ success: true });
  } catch {
    console.error("Contact email could not be accepted for delivery.");
    return Response.json({ success: false, error: "Email could not be sent." }, { status: 502 });
  }
}
