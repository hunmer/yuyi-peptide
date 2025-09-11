'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the form data to a server
    alert('Thank you for your message. We will get back to you soon!')
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    })
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-80 bg-cover bg-center" style={{
        backgroundImage: `url('/yuyi-peptide/res/img/contact.jpeg')`
      }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">Contact</h1>
            <div className="text-lg">
              <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span>Contact</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12">
            Contact us
          </h2>

          <div className="text-center mb-16">
            <p className="text-lg text-gray-700 mb-4">
              You can contact us through the following four ways, we will communicate with you immediately after receiving your inquiry!
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-700 mb-6">
              <span>1. Call us.</span>
              <span>2. Send e-mail.</span>
              <span>3. Leave a message.</span>
              <span>4. Add Whatsapp.</span>
            </div>
            <p className="text-gray-700">
              You can also click the chat button to communicate with us online in real time!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Get in touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">E-mail</h4>
                      <p className="text-gray-600">2124427370@qq.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">WhatsApp</h4>
                      <p className="text-gray-600">+852 6275 8070</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why choose us */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Why choose us?</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Professional enterprise with expertise in beauty peptides</li>
                  <li>• High-quality products for skincare and body care</li>
                  <li>• Customized solutions for global customers</li>
                  <li>• Immediate response to your inquiries</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
