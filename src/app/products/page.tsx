'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageContact from '@/components/PageContact'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import productsData from '@/data/products.json'

const PRODUCTS_PER_PAGE = 9

export default function ProductsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(productsData.length / PRODUCTS_PER_PAGE)

  const paginatedProducts = productsData.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  )

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  const renderPagination = () => {
    const pages = []
    const maxPagesToShow = 5
    let startPage, endPage

    if (totalPages <= maxPagesToShow) {
      startPage = 1
      endPage = totalPages
    } else {
      const maxPagesBeforeCurrent = Math.floor(maxPagesToShow / 2)
      const maxPagesAfterCurrent = Math.ceil(maxPagesToShow / 2) - 1
      if (currentPage <= maxPagesBeforeCurrent) {
        startPage = 1
        endPage = maxPagesToShow
      } else if (currentPage + maxPagesAfterCurrent >= totalPages) {
        startPage = totalPages - maxPagesToShow + 1
        endPage = totalPages
      } else {
        startPage = currentPage - maxPagesBeforeCurrent
        endPage = currentPage + maxPagesAfterCurrent
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-4 py-2 border rounded transition-colors ${
            currentPage === i
              ? 'bg-green-600 text-white'
              : 'hover:bg-gray-100'
          }`}
        >
          {i}
        </button>
      )
    }

    if (startPage > 1) {
      pages.unshift(<span key="start-ellipsis" className="px-2">...</span>)
      pages.unshift(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className="px-4 py-2 border rounded hover:bg-gray-100 transition-colors"
        >
          1
        </button>
      )
    }

    if (endPage < totalPages) {
      pages.push(<span key="end-ellipsis" className="px-2">...</span>)
      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className="px-4 py-2 border rounded hover:bg-gray-100 transition-colors"
        >
          {totalPages}
        </button>
      )
    }

    return pages
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-80 bg-cover bg-center" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200')`
      }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">Products</h1>
            <div className="text-lg">
              <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span>Products</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Peptide Products</h2>
            <div className="flex justify-center items-center gap-4 mb-8">
              <Link href="/about#coa" className="text-green-600 hover:text-green-700 font-medium underline">
                COA
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {paginatedProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-all duration-300 border border-gray-200 overflow-hidden group">
                <Link href={`/products/pro-detail/${product.id}`}>
                  <div className="relative aspect-square bg-gray-100 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-gray-900 group-hover:text-green-600 transition-colors">
                        {product.name}
                      </h3>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" />
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1} 
                className="px-4 py-2 border rounded hover:bg-gray-100 transition-colors disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
              >
                ←
              </button>
              {renderPagination()}
              <button 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border rounded hover:bg-gray-100 transition-colors disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
              >
                →
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
