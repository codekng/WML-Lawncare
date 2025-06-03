"use server";

import emailjs from "@emailjs/nodejs";

const privateKey = process.env.EMAILJS_PRIVATE_KEY;

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string | null;
  const email = formData.get("email") as string | null;
  const phone = formData.get("phone") as string | null;
  const service = formData.get("service") as string | null;
  const message = formData.get("message") as string | null;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
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
        user_phone: phone?.trim() || "Not provided",
        user_service: service?.trim() || "General Inquiry",
        message: message.trim(),
      },
      {
        publicKey: "6CNgiWyxJaQCvSW9J",
        privateKey: privateKey,
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

