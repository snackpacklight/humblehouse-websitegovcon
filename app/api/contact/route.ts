import { Resend } from "resend";

function getResendClient() {
    const key = process.env.RESEND_API_KEY;

    if (!key) {
        throw new Error("Missing RESEND_API_KEY");
    }

    return new Resend(key);
}

export async function POST(req: Request) {
    try {
        const resend = getResendClient();
        const data = await req.json();

        const name = data.name || "";
        const organization = data.organization || "";
        const email = data.email || "";
        const phone = data.phone || "";
        const message = data.message || "";

        await resend.emails.send({
            from: "Humble House <riccardo@humblehouseusa.com>",
            to: [process.env.CONTACT_TO_EMAIL || "riccardo@humblehouseusa.com"],
            subject: "New Humble House Contact Form Submission",
            replyTo: email,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
        });

        return Response.json({ success: true });
    } catch (error) {
        console.error("CONTACT FORM ERROR:", error);
        return Response.json(
            { success: false, error: "Failed to send email" },
            { status: 500 }
        );
    }
}