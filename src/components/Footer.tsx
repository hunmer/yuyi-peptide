import { Facebook, MessageCircle, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const navigation = {
    main: [
      { name: 'Products', href: '/products' },
      { name: 'Workshop', href: '/workshop' },
      { name: 'Cooperate', href: '/cooperate' },
      { name: 'About', href: '/about' },
      { name: 'FAQ', href: '/news' },
      { name: 'Contact', href: '/contact' },
    ]
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-green-600 rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm">Y</span>
              </div>
              <span className="text-xl font-bold">YuYi</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Professional enterprise engaged in beauty peptide products, dedicated to providing
              high-quality peptides for skincare and body care benefits.
            </p>
            <p className="text-xs text-gray-500 mb-4">
              For research use only. Not for human or animal consumption.
            </p>

            {/* Social links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/+85254211365"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/message/RATP775SVRXLC1"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="mailto:2124427370@qq.com"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm mb-1">Follow us</p>
                <p className="text-white">Social Media</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Mobile</p>
                <p className="text-white">+852 6275 8070</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Email</p>
                <p className="text-white">2124427370@qq.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              <p>Copyright © 2025 <a href="#" className="text-white hover:text-green-600 transition-colors">YuYi peptide</a></p>
              <p className="mt-1">By: YuYi peptide</p>
            </div>

            <div className="mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Site Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
