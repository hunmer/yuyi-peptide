'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageContact from '@/components/PageContact'
import { Heart, Beaker, Leaf, FlaskConical, Cpu } from 'lucide-react'
import Link from 'next/link'
import { PhotoView } from 'react-photo-view'
import { useState, useEffect } from 'react'
import AnimatedNumbers from 'react-animated-numbers'

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const coaImages = [
    '',
  ]

  const industries = [
    {
      title: 'Health industry',
      icon: Heart,
      usage: 'Our products can be used to produce health products and nutritional products, such as protein powder, nutritional liquid, etc.',
      benefits: 'Provides a high-quality protein source to support muscle growth and repair; promotes immune system health; supplements the essential amino acids required by the human body to maintain normal body functions.'
    },
    {
      title: 'Medical beauty',
      icon: Beaker,
      usage: 'Our products can be used to manufacture anti-aging products, whitening products, anti-freckle products, anti-acne products, etc.',
      benefits: 'Promote skin cell regeneration and slow down skin aging; inhibit melanin production, reduce spots and dullness; inhibit the growth of acne bacteria and improve acne problems; moisturize and moisturize, improve dry skin problems.'
    },
    {
      title: 'Green agriculture',
      icon: Leaf,
      usage: 'Our products can be used to produce biopesticides, such as bioinsecticides, biofungicides, etc.',
      benefits: 'Effectively control pests and diseases, reduce pesticide usage, and reduce pesticide residues; it will not cause pollution to the environment and is conducive to ecological balance and sustainable agricultural development.'
    },
    {
      title: 'Biomedicine',
      icon: FlaskConical,
      usage: 'Our products can be used in drug development and production, such as peptide drugs, biological preparations, etc.',
      benefits: 'It has high biological activity and biodegradability, reducing adverse reactions; it can accurately target treatment and improve the therapeutic effect; the production process is simple and the cost is low, which helps to reduce drug prices.'
    },
    {
      title: 'Cosmetics',
      icon: Cpu,
      usage: 'Our products can be used to manufacture high-quality cosmetics, such as skin care products, color cosmetics, etc.',
      benefits: 'Increase the active ingredient content of the product and enhance product efficacy; has good skin permeability, can deeply moisturize and repair the skin; is highly safe, does not contain harmful chemical ingredients, and is skin-friendly.'
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-80 bg-cover bg-center" style={{
        backgroundImage: `url('/yuyi-peptide/res/img/about-bg.jpeg')`
      }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">About</h1>
            <div className="text-lg">
              <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span>About</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
            About us
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                YuYi peptide is a professional enterprise engaged in beauty peptides products, mainly used in weight loss, bodybuilding, cosmetic, anti-aging, and skincare areas. With their expertise and high-quality products, you can unlock the incredible benefits of peptides and take your skincare regimen to the next level.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                To adapt to international and domestic economic development, our strategic direction focuses on high-tech research and development and high value-added product sales.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                For over 10 years, we have managed the entire trade process with a focus on customer satisfaction, accurate quotes, consistent quality, and attention to detail, offering comprehensive services such as product procurement, customization, R&D, quality control, and logistics management, making us a reliable long-term partner.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Products are mainly exported to North America, Europe, the Middle East, Southeast Asia, and other regions, with more than 30 countries establishing high-quality cooperative relations. The company always adheres to the "innovation, professionalism, integrity, and pragmatism" spirit of enterprise, providing customers with the most valuable products and services. We can provide a wide range of product solutions to help customers in various industries around the world improve their competitiveness and productivity.
              </p>
            </div>
            <div>
              <img src="/yuyi-peptide/res/img/Laboratory production.jpeg" alt="Laboratory production" className="rounded-lg shadow-lg" />
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            <div className="border-l-4 border-green-600 pl-6">
              <div className="text-4xl font-bold text-gray-900 flex items-end">
                <AnimatedNumbers
                  animateToNumber={isVisible ? 12000 : 0}
                  fontStyle={{
                    fontSize: '2.25rem',
                    fontWeight: 'bold',
                    color: '#111827'
                  }}
                  transitions={(index) => ({
                    type: "spring",
                    duration: index + 0.3,
                  })}
                />
                <span className="text-xl text-green-600 ml-1">+</span>
              </div>
              <div className="text-gray-700">Plant Areas</div>
            </div>
            <div className="border-l-4 border-green-600 pl-6">
              <div className="text-4xl font-bold text-gray-900 flex items-end">
                <AnimatedNumbers
                  animateToNumber={isVisible ? 30 : 0}
                  fontStyle={{
                    fontSize: '2.25rem',
                    fontWeight: 'bold',
                    color: '#111827'
                  }}
                  transitions={(index) => ({
                    type: "spring",
                    duration: index + 0.3,
                  })}
                />
                <span className="text-xl text-green-600 ml-1">+</span>
              </div>
              <div className="text-gray-700">Export Areas</div>
            </div>
            <div className="border-l-4 border-green-600 pl-6">
              <div className="text-4xl font-bold text-gray-900 flex items-end">
                <AnimatedNumbers
                  animateToNumber={isVisible ? 2 : 0}
                  fontStyle={{
                    fontSize: '2.25rem',
                    fontWeight: 'bold',
                    color: '#111827'
                  }}
                  transitions={(index) => ({
                    type: "spring",
                    duration: index + 0.3,
                  })}
                />
                <span className="text-xl text-green-600 ml-1">+</span>
              </div>
              <div className="text-gray-700">Labs</div>
            </div>
            <div className="border-l-4 border-green-600 pl-6">
              <div className="text-4xl font-bold text-gray-900 flex items-end">
                <AnimatedNumbers
                  animateToNumber={isVisible ? 20 : 0}
                  fontStyle={{
                    fontSize: '2.25rem',
                    fontWeight: 'bold',
                    color: '#111827'
                  }}
                  transitions={(index) => ({
                    type: "spring",
                    duration: index + 0.3,
                  })}
                />
                <span className="text-xl text-green-600 ml-1">+</span>
              </div>
              <div className="text-gray-700">COAs</div>
            </div>
          </div>
        </div>
      </section>

      {/* World Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="w-full max-w-4xl mx-auto">
            <img
              src="https://www.globalywYuYi.com/images/cur/servicei-map1.png"
              alt="Global Distribution"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* COA Section */}
      {/* <section className="py-16 lg:py-24 bg-white" id="coa">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
            COA
          </h2>

          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-6">
              {[...coaImages, ...coaImages].map((image, index) => (
                <div key={index} className="flex-none w-80">
                  <PhotoView src={image}>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow">
                      <img 
                        src={image} 
                        alt={`Certificate of Analysis ${(index % coaImages.length) + 1}`} 
                        className="w-full h-auto"
                      />
                    </div>
                  </PhotoView>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Application Industries */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
            Application industry
          </h2>

          <div className="space-y-12">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div key={index} className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-1 flex justify-center">
                    <div className="w-32 h-32 bg-green-600 rounded-full flex items-center justify-center">
                      <Icon className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  <div className="md:col-span-2 space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900">{industry.title}</h3>
                    <div className="space-y-2">
                      <p className="text-gray-700"><span className="font-medium">Usage:</span> {industry.usage}</p>
                      <p className="text-gray-700"><span className="font-medium">Benefits:</span> {industry.benefits}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <PageContact />
      <Footer />
    </main>
  )
}
