"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Leaf, ArrowLeft, MessageCircle, Calendar } from "lucide-react"
import { EmailJSContactForm } from "@/components/emailjs-contact-form"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 transition-all duration-300">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                WML Lawncare
              </span>
              <div className="text-xs text-gray-500 font-medium">Professional Lawn Care</div>
            </div>
          </Link>

          <nav className="hidden md:flex gap-8">
            <Link href="/" className="text-sm font-medium hover:text-green-600 transition-colors">
              Home
            </Link>
            <Link href="/#services" className="text-sm font-medium hover:text-green-600 transition-colors">
              Services
            </Link>
            <Link href="/#about" className="text-sm font-medium hover:text-green-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-green-600 border-b-2 border-green-600">
              Contact
            </Link>
          </nav>

          <Link href="/" className="hidden md:flex">
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <Image
              src="/placeholder.svg?height=600&width=400&text=Contact+Background"
              alt="Contact background"
              fill
              className="object-cover"
            />
          </div>

          <div className="container relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-4 py-2 text-green-700 mb-6">
                <MessageCircle className="h-4 w-4" />
                <span className="text-sm font-medium">Get In Touch</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                Contact
                <span className="block text-green-600">WML Lawncare</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Ready to transform your outdoor space? Get in touch with our expert team for a free consultation and
                quote. We're here to help bring your lawn care vision to life.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: (973) 713-0504
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-green-50 to-emerald-50">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="mb-6 p-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                    <Phone className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Call Us</h3>
                  <p className="text-gray-600 mb-4">Speak directly with our lawn care experts</p>
                  <a
                    href="tel:9737130504"
                    className="text-green-600 font-semibold text-lg hover:text-green-700 transition-colors"
                  >
                    (973) 713-0504
                  </a>
                  <p className="text-sm text-gray-500 mt-2">Mon-Fri: 7AM-6PM</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="mb-6 p-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                    <Mail className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Email Us</h3>
                  <p className="text-gray-600 mb-4">Send us a message anytime</p>
                  <a
                    href="mailto:lawncarewml@gmail.com"
                    className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    lawncarewml@gmail.com
                  </a>
                  <p className="text-sm text-gray-500 mt-2">We respond within 24 hours</p>
                </CardContent>
              </Card>
                  <p className="text-sm text-gray-500 mt-2">By appointment only</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-4 py-2 text-green-700 mb-6">
                  <MessageCircle className="h-4 w-4" />
                  <span className="text-sm font-medium">Send us a Message</span>
                </div>

                <h2 className="text-4xl font-bold mb-6 text-gray-900">
                  Get Your Free
                  <span className="block text-green-600">Lawn Care Quote</span>
                </h2>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Fill out the form below and we'll get back to you within 24 hours with a personalized quote for your
                  lawn care needs.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Clock className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Quick Response</h3>
                      <p className="text-sm text-gray-600">
                        We respond to all inquiries within 24 hours, often much sooner.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Calendar className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Free Consultation</h3>
                      <p className="text-sm text-gray-600">
                        Every quote includes a free on-site consultation and assessment.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <MessageCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Expert Advice</h3>
                      <p className="text-sm text-gray-600">
                        Get professional recommendations tailored to your specific needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <EmailJSContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Business Hours Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Business Hours</h2>
                <p className="text-gray-600">
                  We're here when you need us. Contact us during business hours or leave a message anytime.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-none shadow-lg">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="h-6 w-6 text-green-600" />
                      <h3 className="text-xl font-bold text-gray-900">Office Hours</h3>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Monday - Friday</span>
                        <span className="font-semibold">7:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Saturday</span>
                        <span className="font-semibold">8:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sunday</span>
                        <span className="font-semibold">8:00 AM - 4:00 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

              
              </div>
            </div>
          </div>
        </section>

        {/* Map Section (Placeholder) */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Find Us</h2>
              <p className="text-gray-600">
                Located in Rockaway, NJ. We serve the surrounding areas within a 20-mile radius.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-6 w-6 text-green-400" />
                <span className="text-xl font-bold">WML Lawncare</span>
              </div>
              <p className="text-gray-400 mb-4">
                Professional lawn care and landscaping services in White Lake and surrounding areas.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="text-gray-400 hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Lawn Mowing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Landscaping
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Garden Maintenance
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-400">(973) 713-0504</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-400">lawncarewml@gmail.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-400">White Meadow Lake, New Jersey</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} WML Lawncare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
