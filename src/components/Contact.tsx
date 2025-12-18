'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, Mail, MessageSquare, UserPlus } from 'lucide-react'

export default function Contact() {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Call us',
      description: 'Speak directly with our team',
      action: () => window.open('tel:+85270523171'),
    },
    {
      icon: Mail,
      title: 'Send e-mail',
      description: 'Get in touch via email',
      action: () => window.open('mailto:2124427370@qq.com'),
    },
    {
      icon: MessageSquare,
      title: 'Leave a message',
      description: 'Fill out our contact form',
      action: () => document.getElementById('contact-form')?.scrollIntoView(),
    },
    {
      icon: UserPlus,
      title: 'Add WhatsApp',
      description: 'Chat with us instantly',
      action: () => window.open('https://wa.me/message/RATP775SVRXLC1'),
    },
  ]

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Contact us
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
            You can contact us through the following four ways, we will communicate with you
            immediately after receiving your inquiry!
          </p>
        </div>

        {/* Contact methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1"
              onClick={method.action}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors">
                  <method.icon className="w-6 h-6 text-green-600 group-hover:text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {method.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Information */}
        <div className="max-w-2xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Get in touch
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
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
                  <p className="text-gray-600">+852 7052 3171</p>
                </div>
              </div>
            </div>
          </div>

          {/* Business hours or additional info */}
          <div className="bg-gray-50 rounded-lg p-6 mt-8">
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
    </section>
  )
}
