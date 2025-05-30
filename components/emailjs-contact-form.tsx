"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import emailjs from "@emailjs/browser"

export function EmailJSContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    if (!formRef.current) return

    try {
      // Initialize EmailJS with your public key
      emailjs.init("6CNgiWyxJaQCvSW9J")

      const result = await emailjs.sendForm(
        "service_klmq1wi", // Your service ID
        "template_contact", // Template ID - you need to create this in EmailJS dashboard
        formRef.current,
        "6CNgiWyxJaQCvSW9J", // Your public key
      )

      console.log("EmailJS Success:", result)
      setSubmitMessage("Thank you for your message! We'll get back to you within 24 hours.")
      formRef.current.reset()
    } catch (error) {
      console.error("EmailJS error:", error)
      setSubmitMessage("Sorry, there was an error sending your message. Please try calling us at (555) 123-4567.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="from_name" className="text-sm font-medium">
              Name *
            </label>
            <input
              id="from_name"
              name="from_name"
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
              placeholder="Your name"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="from_email" className="text-sm font-medium">
              Email *
            </label>
            <input
              id="from_email"
              name="from_email"
              type="email"
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
              placeholder="Your email"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
            placeholder="Your phone number"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="service" className="text-sm font-medium">
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
          >
            <option value="">Select a service</option>
            <option value="Lawn Mowing">Lawn Mowing</option>
            <option value="Landscaping">Landscaping</option>
            <option value="Garden Maintenance">Garden Maintenance</option>
            <option value="Fertilization">Fertilization</option>
            <option value="Seasonal Clean-up">Seasonal Clean-up</option>
            <option value="Lawn Treatments">Lawn Treatments</option>
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors resize-none"
            placeholder="Tell us about your project or questions"
          ></textarea>
        </div>

        {submitMessage && (
          <div
            className={`p-4 rounded-lg border ${
              submitMessage.includes("error") || submitMessage.includes("Sorry")
                ? "bg-red-50 text-red-700 border-red-200"
                : "bg-green-50 text-green-700 border-green-200"
            } transition-all duration-300`}
          >
            <div className="flex items-center gap-2">
              {submitMessage.includes("error") || submitMessage.includes("Sorry") ? (
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              <span>{submitMessage}</span>
            </div>
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? (
            <div className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </div>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>

      {/* Debug Information */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
        <h4 className="font-semibold mb-2">📧 EmailJS Setup Status:</h4>
        <ul className="space-y-1">
          <li>✅ Service ID: service_klmq1wi</li>
          <li>✅ Public Key: 6CNgiWyxJaQCvSW9J</li>
          <li>⚠️ Template ID: template_contact (needs to be created)</li>
        </ul>
        <p className="mt-2 text-xs">
          <strong>Next Step:</strong> Create a template called "template_contact" in your EmailJS dashboard with these
          variables: from_name, from_email, phone, service, message
        </p>
      </div>
    </div>
  )
}
