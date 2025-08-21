import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { FadeInUp, FadeInLeft, FadeInRight } from '@/components/ui/fade-in'
import productsData from '@/data/products.json'

export default function Hero() {
  // Get first 4 products for display
  const featuredProducts = productsData.slice(0, 4)
  return (
    <section className="relative text-white overflow-hidden min-h-screen">
      {/* Factory Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/yuyi-peptide/res/img/factory-background.jpeg')`
        }}
      ></div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <FadeInLeft>
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  ONE-STOP SERVICE PROVIDER
                </h1>
                <div className="space-y-4">
                  <h2 className="text-xl lg:text-2xl font-medium">
                    Engaged in beauty peptides products:
                  </h2>
                  <p className="text-lg lg:text-xl leading-relaxed">
                    Mainly used in weight loss & bodybuilding & cosmetic/anti-aging/skincare areas.
                  </p>
                  <p className="text-xs text-yellow-300 font-semibold">
                    For research use only, not for human or animal consumption.
                  </p>
                </div>
              </div>

              <Link href="/products">
                <Button
                  size="lg"
                  className="mt-3 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3"
                >
                  Read more
                </Button>
              </Link>
            </div>
          </FadeInLeft>

          {/* Right content - Product showcase */}
          <FadeInRight delay={200}>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {/* Product images */}
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 h-32 flex items-center justify-center">
                    <div className="text-center">
                      <div className="relative w-16 h-20 mx-auto mb-2">
                        <Image
                          src={featuredProducts[0]?.image || ''}
                          alt={featuredProducts[0]?.name || 'Product 1'}
                          fill
                          className="object-contain rounded"
                        />
                      </div>
                      <p className="text-sm">{featuredProducts[0]?.name || 'Product 1'}</p>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 h-32 flex items-center justify-center">
                    <div className="text-center">
                      <div className="relative w-16 h-20 mx-auto mb-2">
                        <Image
                          src={featuredProducts[1]?.image || ''}
                          alt={featuredProducts[1]?.name || 'Product 2'}
                          fill
                          className="object-contain rounded"
                        />
                      </div>
                      <p className="text-sm">{featuredProducts[1]?.name || 'Product 2'}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 h-32 flex items-center justify-center">
                    <div className="text-center">
                      <div className="relative w-16 h-20 mx-auto mb-2">
                        <Image
                          src={featuredProducts[2]?.image || ''}
                          alt={featuredProducts[2]?.name || 'Product 3'}
                          fill
                          className="object-contain rounded"
                        />
                      </div>
                      <p className="text-sm">{featuredProducts[2]?.name || 'Product 3'}</p>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 h-32 flex items-center justify-center">
                    <div className="text-center">
                      <div className="relative w-16 h-20 mx-auto mb-2">
                        <Image
                          src={featuredProducts[3]?.image || ''}
                          alt={featuredProducts[3]?.name || 'Product 4'}
                          fill
                          className="object-contain rounded"
                        />
                      </div>
                      <p className="text-sm">{featuredProducts[3]?.name || 'Product 4'}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/5 rounded-full"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full"></div>
            </div>
          </FadeInRight>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <FadeInUp delay={400}>
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-center">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </FadeInUp>
    </section>
  )
}
