'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageContact from '@/components/PageContact'
import { Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import { PhotoView } from 'react-photo-view'

export default function WorkshopPage() {
  const workshopImages = [
    {
      src: '/yuyi-peptide/res/img/workshop1.jpeg',
      alt: 'Production workshop equipment'
    },
    {
      src: '/yuyi-peptide/res/img/workshop2.jpeg',
      alt: 'Manufacturing process'
    },
    {
      src: '/yuyi-peptide/res/img/workshop3.jpeg',
      alt: 'Quality control station'
    },
    {
      src: '/yuyi-peptide/res/img/workshop4.jpeg',
      alt: 'Production line'
    },
    {
      src: '/yuyi-peptide/res/img/workshop5.jpeg',
      alt: 'Laboratory equipment'
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-80 bg-cover bg-center" style={{
        backgroundImage: `url('/yuyi-peptide/res/img/workshop-bg.jpeg')`
      }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">Workshop</h1>
            <div className="text-lg">
              <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span>Workshop</span>
            </div>
          </div>
        </div>
      </section>

      {/* Production Workshop Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16">
            Production workshop
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshopImages.map((image, index) => (
              <div key={index} className="group">
                <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                  <PhotoView src={image.src}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </PhotoView>
                </div>
                <p className="text-center mt-4 text-gray-700 font-medium">
                  Production workshop
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageContact />
      <Footer />
    </main>
  )
}
