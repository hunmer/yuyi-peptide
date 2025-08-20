import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { FadeInUp } from '@/components/ui/fade-in'
import productsData from '@/data/products.json'

export default function Products() {
  // Randomly select 12 products from productsData
  const getRandomProducts = () => {
    const shuffled = [...productsData].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, 12)
  }

  const products = getRandomProducts().map((product, index) => ({
    name: product.name,
    id: product.id,
    image: product.image,
    productName: product.name
  }))

  return (
    <section id="products" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeInUp>
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Products
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              YIWU YuYi is a professional enterprise engaged in beauty peptide products, dedicated
              to the research, development, and production of high-quality peptides aimed at providing
              significant skincare and body care benefits. The company continuously innovates and offers
              a range of customized solutions to help global customers enhance their competitiveness
              and productivity.
            </p>
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3"
            >
              Read more
            </Button>
          </div>
        </FadeInUp>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <FadeInUp key={product.id} delay={index * 100}>
              <Link href="/products">
                <Card
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border border-gray-200 cursor-pointer h-full"
                >
                <CardContent className="p-6">
                  <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                    <div className="relative w-full h-full">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-4"
                      />
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-green-600" />
                    </div>
                  </div>

                  <h3 className="font-semibold text-gray-900 text-sm leading-tight group-hover:text-green-600 transition-colors">
                    {product.name}
                  </h3>
                </CardContent>
              </Card>
            </Link>
            </FadeInUp>
          ))}
        </div>

        {/* View all products button */}
        <FadeInUp delay={400}>
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold px-8 py-3"
            >
              View All Products
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
