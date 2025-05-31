"use server";

import emailjs from "@emailjs/nodejs";
const privateKey = process.env.EMAILJS_PRIVATE_KEY;

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const service = formData.get("service");
  const message = formData.get("message");

  // Validation: required fields must be strings and not empty
  if (
    typeof name !== "string" || !name.trim() ||
    typeof email !== "string" || !email.trim() ||
    typeof message !== "string" || !message.trim()
  ) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    };
  }

  try {
    await emailjs.send(
      "service_2djge6b",
      "template_tx7kuqd",
      {
        user_name: name.trim(),
        user_email: email.trim(),
        user_phone: typeof phone === "string" && phone.trim() ? phone.trim() : "Not provided",
        user_service: typeof service === "string" && service.trim() ? service.trim() : "General Inquiry",
        message: message.trim(),
      },
      {
        publicKey: "6CNgiWyxJaQCvSW9J",
        privateKey: process.env.EMAILJS_PRIVATE_KEY,
      }
    );

    return {
      success: true,
      message: "Thank you! We'll get back to you within 24 hours.",
    };
  } catch (error: any) {
    console.error("EmailJS error:", error);
    return {
      success: false,
      message: "Sorry, there was an error. Please try again later.",
    };
  }
}
