"use server"

import nodemailer from "nodemailer"

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const service = formData.get("service") as string
  const message = formData.get("message") as string

  // Validate required fields
  if (!name || !email || !message) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    }
  }

  try {
    // Create transporter using Gmail
    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Your Gmail App Password
      },
    })

    // Send email to yourself
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: "charandangeti7@gmail.com",
      subject: `New Lawn Care Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #16a34a;">🌱 New Customer Inquiry</h2>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Customer Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone ? `<a href="tel:${phone}">${phone}</a>` : "Not provided"}</p>
            <p><strong>Service Interest:</strong> ${service || "General inquiry"}</p>
          </div>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #374151;">Their Message</h3>
            <p style="white-space: pre-wrap; font-style: italic;">"${message}"</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #dcfce7; border-radius: 8px;">
            <p style="margin: 0; color: #166534;">
              <strong>💡 Reply directly to:</strong> ${email}<br>
              ${phone ? `<strong>📞 Call them at:</strong> ${phone}` : ""}
            </p>
          </div>
        </div>
      `,
    })

    // Send confirmation to customer
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Thank you for contacting MWL Lawncare!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; padding: 20px; background: linear-gradient(135deg, #16a34a, #059669); color: white; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0;">MWL Lawncare</h1>
            <p style="margin: 10px 0 0 0;">Professional Lawn Care Services</p>
          </div>
          
          <div style="padding: 30px; background: white; border-radius: 0 0 8px 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h2 style="color: #16a34a; margin-top: 0;">Thank you, ${name}!</h2>
            
            <p>We've received your message and will get back to you within 24 hours.</p>
            
            <div style="background: #dcfce7; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #166534;">What happens next?</h3>
              <ul style="color: #166534; margin: 0;">
                <li>We'll review your inquiry within 24 hours</li>
                <li>One of our lawn care experts will contact you</li>
                <li>We'll schedule a free consultation</li>
              </ul>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <p><strong>Need immediate assistance?</strong></p>
              <p>Call us at <a href="tel:5551234567" style="color: #16a34a; text-decoration: none; font-weight: bold;">(555) 123-4567</a></p>
            </div>
          </div>
        </div>
      `,
    })

    return {
      success: true,
      message: "Thank you for your message! We'll get back to you within 24 hours.",
    }
  } catch (error) {
    console.error("Email sending failed:", error)
    return {
      success: false,
      message: "Sorry, there was an error sending your message. Please try again or call us directly.",
    }
  }
}
