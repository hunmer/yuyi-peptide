'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageContact from '@/components/PageContact'
import Link from 'next/link'
import { useState } from 'react'

export default function NewsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 4

  const faqItems = [
    {
      id: '1',
      title: 'Ordering Process',
      description: 'You can place orders 24/7 through our official WhatsApp and E-mail(mentioned as follows). Once your order is submitted, approved, and payment is processed, it will be promptly filled and shipped using a reputable delivery service.'
    },
    {
      id: '2',
      title: 'Accepted Payment Methods',
      description: 'We accept payment via Alibaba/Paypal/Bitcoin/USDT/WesternUnion/Wise.etc'
    },
    {
      id: '3',
      title: 'Shipping Policy',
      description: 'All orders will be processed within 1-3 business days after payment is confirmed received. Orders received after 1 pm CST, weekends, or holidays will begin processing on the next business day. Orders received on weekends or holidays will begin processing on the next business day. Shipping timee:Japan/Indonesia/Philipine/Vietnam--3days; North America/Italy/Thailand/UK--9 days; New Zealand/Australia--9~12 days; German/France/Spain/Other EU countries--12~15 days.'
    },
    {
      id: '4',
      title: 'Incorrect Shipping Addresses and Refused Delivery',
      description: 'We make every attempt to validate the shipping address provided at checkout to ensure it\'s recognized as a valid address by common express. If we cannot validate the address, we will try to contact the customer to provide an updated address. If we cannot update the address, the order will be canceled and refunded. YuYi peptideS will not be held responsible if the customer provides the wrong shipping address and we cannot recover the package.'
    },
    {
      id: '5',
      title: 'Return Policy',
      description: 'If you are not satisfied with your purchase, please contact us within 14 days of receiving your order. We will work with you to resolve any issues and provide a return or replacement if necessary. Returns must be unopened and in the original packaging to be eligible for a refund.'
    },
    {
      id: '6',
      title: 'Privacy Policy',
      description: 'We respect your privacy and are committed to protecting your personal information. All data collected through our website is used solely for processing orders and improving our services. We do not share your information with third parties except as necessary to fulfill your order.'
    },
    {
      id: '7',
      title: 'Product Quality Guarantee',
      description: 'All our products undergo rigorous quality testing to ensure they meet the highest standards. Each product comes with a Certificate of Analysis (COA) that verifies its purity and composition. If you have any concerns about product quality, please contact our customer service team.'
    },
    {
      id: '8',
      title: 'Custom Orders',
      description: 'We offer customized solutions for our clients. If you need a specific peptide formulation or packaging, please contact us with your requirements. Our team will work with you to develop a solution that meets your needs and provide a quote for the custom order.'
    }
  ]

  // 计算分页
  const totalPages = Math.ceil(faqItems.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = faqItems.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-80 bg-cover bg-center" style={{
        backgroundImage: `url('https://ext.same-assets.com/1764536919/294812594.jpeg')`
      }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">FAQ</h1>
            <div className="text-lg">
              <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span>FAQ</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {currentItems.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row gap-6 items-start border-b pb-12">
                <div className="md:w-24 flex-shrink-0">
                  <div className="bg-green-600 text-white font-bold py-2 px-4 rounded-md inline-block text-center">
                    {item.id}
                  </div>
                </div>
                <div className="flex-grow space-y-2">
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 border rounded bg-gray-100 text-gray-400 disabled:cursor-not-allowed hover:bg-gray-200 disabled:hover:bg-gray-100"
              >
                &lt;
              </button>
              {[...Array(totalPages)].map((_, index) => {
                const page = index + 1
                return (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 border rounded ${
                      currentPage === page
                        ? 'bg-green-600 text-white'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    {page}
                  </button>
                )
              })}
              <button 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border rounded bg-gray-100 text-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed hover:bg-gray-200 disabled:hover:bg-gray-100"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </section>

      <PageContact />
      <Footer />
    </main>
  )
}
