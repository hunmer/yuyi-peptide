import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageContact from '@/components/PageContact'
import Link from 'next/link'
import { ArrowLeft, Mail, Phone, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import productsData from '@/data/products.json'
import { ProductImageViewer, RelatedProductsCarousel } from './ProductComponents'
import './carousel-styles.css'

interface Product {
  id: number
  name: string
  filename: string
  image: string
}

// 生成静态参数，用于静态导出
export async function generateStaticParams() {
  return productsData.map((product) => ({
    productDetailsId: product.id.toString(),
  }))
}

export default async function ProductDetailPage({ 
  params 
}: { 
  params: Promise<{ productDetailsId: string }> 
}) {
  const resolvedParams = await params
  const productId = resolvedParams.productDetailsId
  const product = productsData.find(p => p.id === parseInt(productId))
  const currentIndex = productsData.findIndex(p => p.id === parseInt(productId))

  if (!product) {
    notFound()
  }

  // 获取上一个和下一个产品
  const prevProduct = currentIndex > 0 ? productsData[currentIndex - 1] : null
  const nextProduct = currentIndex < productsData.length - 1 ? productsData[currentIndex + 1] : null

  return (
    <main className="min-h-screen">
      <Header />

      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-gray-600 hover:text-green-600">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/products" className="text-gray-600 hover:text-green-600">Products</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              href="/products" 
              className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Product Image Section */}
            <div className="space-y-6">
              {/* Main Product Image */}
              <ProductImageViewer product={product} />
            </div>

            {/* Product Info - 简化版 */}
            <div className="space-y-8">
              <Card className="shadow-lg">
                <CardContent className="p-8 space-y-6">
                  {/* 产品名称 */}
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
                  </div>

                  {/* 联系信息 */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Phone className="w-5 h-5 text-green-600" />
                        <div>
                          <div className="font-medium text-gray-900">Phone</div>
                          <a href="tel:+85254211365" className="text-green-600 hover:text-green-700">
                            +86  17700658265
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Mail className="w-5 h-5 text-blue-600" />
                        <div>
                          <div className="font-medium text-gray-900">Email</div>
                          <a href="mailto:2124427370@qq.com" className="text-blue-600 hover:text-blue-700">
                            2124427370@qq.com
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <MessageCircle className="w-5 h-5 text-green-500" />
                        <div>
                          <div className="font-medium text-gray-900">WhatsApp</div>
                          <a href="https://wa.me/message/X6AYI4S63EPDH1" className="text-green-500 hover:text-green-600" target="_blank" rel="noopener noreferrer">
                            +86  17700658265
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 上下页跳转 */}
                  <div className="pt-6 border-t">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Navigation</h3>
                    <div className="flex justify-between gap-4">
                      {prevProduct ? (
                        <Link href={`/products/pro-detail/${prevProduct.id}`} className="flex-1">
                          <Button variant="outline" className="w-full justify-start">
                            <ChevronLeft className="w-4 h-4 mr-2" />
                            <div className="text-left">
                              <div className="text-xs text-gray-500">Previous</div>
                              <div className="text-sm truncate">{prevProduct.name}</div>
                            </div>
                          </Button>
                        </Link>
                      ) : (
                        <div className="flex-1"></div>
                      )}
                      
                      {nextProduct ? (
                        <Link href={`/products/pro-detail/${nextProduct.id}`} className="flex-1">
                          <Button variant="outline" className="w-full justify-end">
                            <div className="text-right">
                              <div className="text-xs text-gray-500">Next</div>
                              <div className="text-sm truncate">{nextProduct.name}</div>
                            </div>
                            <ChevronRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      ) : (
                        <div className="flex-1"></div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Related Products Carousel */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Related Products</h2>
            <RelatedProductsCarousel products={productsData} currentProductId={product.id} />
          </div>
        </div>
      </section>

      <PageContact />
      <Footer />
    </main>
  )
}
