"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const service = formData.get("service") as string
  const message = formData.get("message") as string

  // Basic validation
  if (!name || !email || !message) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    }
  }

  try {
    // Send email TO YOU (the business owner)
    await resend.emails.send({
      from: "Website Contact <onboarding@resend.dev>", // Use this for testing
      to: ["your-email@gmail.com"], // ← PUT YOUR EMAIL HERE
      subject: `New Contact: ${name} - ${service || "General Inquiry"}`,
      text: `
New contact form submission:

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Service: ${service || "General inquiry"}

Message:
${message}

---
Reply to this email or call them directly.
      `,
    })

    return {
      success: true,
      message: "Thank you! We'll get back to you within 24 hours.",
    }
  } catch (error) {
    console.error("Failed to send email:", error)
    return {
      success: false,
      message: "Sorry, there was an error. Please call us at (555) 123-4567.",
    }
  }
}
