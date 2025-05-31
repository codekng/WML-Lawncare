"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Scissors, Leaf, Shovel, Sprout, Calendar, CheckCircle2, ChevronRight } from "lucide-react"
import { EmailJSContactForm } from "@/components/emailjs-contact-form"

export default function LandingPage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 transition-all duration-300">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                WML Lawncare
              </span>
              <div className="text-xs text-gray-500 font-medium">Professional Lawn Care</div>
            </div>
          </div>
          <nav className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium hover:text-green-600 transition-colors relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium hover:text-green-600 transition-colors relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-sm font-medium hover:text-green-600 transition-colors relative group"
            >
              Testimonials
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-sm font-medium hover:text-green-600 transition-colors relative group"
            >
              Gallery
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
            </button>
            <Link href="/contact" className="text-sm font-medium hover:text-green-600 transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden md:flex">
              <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105">
                Get a Quote
              </Button>
            </Link>
            <Button variant="outline" size="icon" className="md:hidden rounded-full">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/Lawn1.jpg?height=1080&width=1920&text=Beautiful+Green+Lawn+with+House"
              alt="Beautiful maintained lawn with house"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>
          </div>

          {/* Floating elements for visual interest */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-green-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-32 h-32 bg-green-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-lg animate-pulse delay-500"></div>

          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="max-w-4xl space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-green-600/20 backdrop-blur-sm border border-green-400/30 rounded-full px-4 py-2 text-green-100">
                  <Leaf className="h-4 w-4" />
                  <span className="text-sm font-medium">Professional Lawn Care Since 2022</span>
                </div>
                <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl leading-tight">
                  Transform Your
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                    Outdoor Space
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed">
                  Expert lawn maintenance, landscaping, and garden care services in White Lake. Creating beautiful outdoor
                  spaces that you'll love to call home.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105">
                    Get a Free Quote
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button
                  onClick={() => scrollToSection("gallery")}
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border-white/30 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  View Our Work
                  <Leaf className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white">3+</div>
                  <div className="text-white/80 text-sm">Years Experience</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white">100%</div>
                  <div className="text-white/80 text-sm">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white">24/7</div>
                  <div className="text-white/80 text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Services Section */}
<section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
  {/* Background decoration */}
  <div className="absolute top-0 left-0 w-full h-full">
    <div className="absolute top-20 right-10 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-30"></div>
    <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-20"></div>
  </div>

  <div className="container relative z-10">
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-4 py-2 text-green-700 mb-4">
        <Scissors className="h-4 w-4" />
        <span className="text-sm font-medium">Our Services</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
        Complete Lawn Care
        <span className="block text-green-600">Solutions</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        We offer comprehensive lawn care and landscaping services to keep your property looking its best all
        year round with professional expertise and attention to detail.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm group">
        <CardContent className="pt-8 pb-6">
          <div className="mb-6 p-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Scissors className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-gray-900">Lawn Mowing</h3>
          <p className="text-gray-600 leading-relaxed">
            Regular mowing service with professional equipment to keep your lawn healthy and looking great all
            season long.
          </p>
          <div className="mt-4 text-green-600 font-semibold group-hover:text-green-700 transition-colors">
            Starting at $45/visit →
          </div>
        </CardContent>
      </Card>

      <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm group">
        <CardContent className="pt-8 pb-6">
          <div className="mb-6 p-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Shovel className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-gray-900">Garden Maintenance</h3>
          <p className="text-gray-600 leading-relaxed">
            Comprehensive garden care including weeding, pruning, and seasonal planting for year-round beauty.
          </p>
          <div className="mt-4 text-green-600 font-semibold group-hover:text-green-700 transition-colors">
            Starting at $75/visit →
          </div>
        </CardContent>
      </Card>

      <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm group">
        <CardContent className="pt-8 pb-6">
          <div className="mb-6 p-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Calendar className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-gray-900">Seasonal Clean-up</h3>
          <p className="text-gray-600 leading-relaxed">
            Spring and fall clean-up services to prepare your lawn for the changing seasons with thorough care.
          </p>
          <div className="mt-4 text-green-600 font-semibold group-hover:text-green-700 transition-colors">
            Seasonal rates →
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</section>
        {/* About Section */}
        <section id="about" className="py-20 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-50 to-transparent"></div>

          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl transform rotate-3"></div>
                <Image
                  src="/IMG_5692.JPG?height=600&width=800&text=Professional+Lawn+Care+Team"
                  alt="WML Lawncare professional team"
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-2xl relative z-10 transform -rotate-1 hover:rotate-0 transition-transform duration-300"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="text-3xl font-bold text-green-600">15+</div>
                  <div className="text-gray-600 font-medium">Years of Excellence</div>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-4 py-2 text-green-700 mb-4">
                    <CheckCircle2 className="h-4 w-4" />
                    <span className="text-sm font-medium">About Us</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                    Your Trusted
                    <span className="block text-green-600">Lawn Care Experts</span>
                  </h2>
                </div>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                   Founded by ambitious teens with a passion for lawn care, WML Lawn Care has been serving the White Meadow Lake community for over 3 years. What started as a summer job has grown into a trusted local business known for its reliability and attention to detail.
                  </p>
                  <p>
                    Our team of skilled professionals is dedicated to providing top-quality service and creating
                    beautiful outdoor spaces that our clients can enjoy year-round, using the latest techniques and
                    equipment.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <CheckCircle2 className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Fair Prices</h3>
                      <p className="text-sm text-gray-600">
                        Know that you are getting the best deal.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <CheckCircle2 className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Expert Team</h3>
                      <p className="text-sm text-gray-600">
                        Years of experience in professional lawn care and landscaping.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <CheckCircle2 className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Quality Guarantee</h3>
                      <p className="text-sm text-gray-600">
                        We stand behind our work with a 100% satisfaction guarantee.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <CheckCircle2 className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Eco-Friendly</h3>
                      <p className="text-sm text-gray-600">
                        Environmentally conscious practices and sustainable solutions.
                      </p>
                    </div>
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105">
                  Learn More About Us
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our satisfied customers have to say about our services.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#FBBF24"
                        stroke="#FBBF24"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="italic mb-4">
                    "WML Lawncare has been taking care of my lawn for over 3 years now. Their attention to detail and
                    reliability is unmatched. My lawn has never looked better!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                    <div>
                      <p className="font-medium">Sarah Johnson</p>
                      <p className="text-sm text-muted-foreground">White Lake Resident</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#FBBF24"
                        stroke="#FBBF24"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="italic mb-4">
                    "I hired WML for a complete landscape redesign and couldn't be happier with the results.
                    Professional, courteous, and they finished ahead of schedule!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                    <div>
                      <p className="font-medium">Michael Thompson</p>
                      <p className="text-sm text-muted-foreground">Business Owner</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#FBBF24"
                        stroke="#FBBF24"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="italic mb-4">
                    "The team at WML is fantastic! They're always on time, do excellent work, and their prices are very
                    reasonable. I highly recommend their services."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                    <div>
                      <p className="font-medium">Jennifer Davis</p>
                      <p className="text-sm text-muted-foreground">Homeowner</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

       {/* Gallery Section */}
        <section id="gallery" className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Work</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Browse through our gallery to see examples of our lawn care and landscaping projects.
              </p>
            </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {[
    { src: '/IMG_6604.jpg', alt: 'Front yard before renovation - overgrown grass'},
    { src: '/IMG_6610.jpg', alt: 'Landscaping work in progress with curved edging'},
    { src: '/IMG_6770.jpg', alt: 'Professional lawn mowing equipment'},
    { src: '/IMG_8867.jpg', alt: 'Completed lawn with perfect striping'},
    { src: '/IMG_8904.jpg', alt: 'Commercial mower on residential property'},
    { src: '/IMG_8905.jpg', alt: 'Backyard transformation complete'}
  ].map((project, index) => (
    <div key={index} className="overflow-hidden rounded-lg shadow-md">
      <Image
        src={project.src}
        alt={project.alt}
        width={600}
        height={400}
        className="object-cover w-full h-64 hover:scale-105 transition-transform duration-300"
      />
      <div className="p-3">
        <h3 className="text-sm font-medium text-gray-900">{project.title}</h3>
      </div>
    </div>
  ))}
</div>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 via-green-700 to-emerald-600 text-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white/90 mb-6">
                <Leaf className="h-5 w-5" />
                <span className="font-medium">Ready to Get Started?</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Transform Your Lawn
                <span className="block text-green-200">Into Paradise</span>
              </h2>
              <p className="mb-10 text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
                Contact us today for a free consultation and quote. Let us help you create the outdoor space
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-white text-green-700 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105">
                    Get Your Free Quote
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-white/30 bg-transparent text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  <span className="text-white">Call Now: (973) 713-0504</span>
                  <Phone className="ml-2 h-5 w-5 text-white" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
                <p className="text-muted-foreground mb-8">
                  Have questions or ready to get started? Reach out to us using the contact information below or fill
                  out the form and we'll get back to you as soon as possible.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-green-100 rounded-full">
                      <Phone className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">(973) 713-0504</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-green-100 rounded-full">
                      <Mail className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">wmllawncare@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-green-100 rounded-full">
                      <MapPin className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-muted-foreground">White Lake and Surounding Areas</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <EmailJSContactForm />
              </div>
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
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
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
                  <Link href="/#testimonials" className="text-gray-400 hover:text-white">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/#gallery" className="text-gray-400 hover:text-white">
                    Gallery
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
             
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Seasonal Clean-up
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
                  <span className="text-gray-400">wmllawncare@gmail.com</span>
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
