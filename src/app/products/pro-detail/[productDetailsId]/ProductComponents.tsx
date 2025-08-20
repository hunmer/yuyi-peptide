'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'

interface Product {
  id: number
  name: string
  filename: string
  image: string
}

interface ProductImageViewerProps {
  product: Product
}

interface RelatedProductsCarouselProps {
  products: Product[]
  currentProductId: number
}

export function ProductImageViewer({ product }: ProductImageViewerProps) {
  return (
    <PhotoProvider>
      <PhotoView src={product.image}>
        <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden cursor-pointer group">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </PhotoView>
    </PhotoProvider>
  )
}

export function RelatedProductsCarousel({ products, currentProductId }: RelatedProductsCarouselProps) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  }

  return (
    <PhotoProvider>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {products.filter(p => p.id !== currentProductId).map((relatedProduct) => (
          <div key={relatedProduct.id} className="px-2">
            <Card className="group hover:shadow-lg transition-shadow h-full">
              <CardContent className="p-4">
                <PhotoView src={relatedProduct.image}>
                  <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden mb-4 cursor-pointer">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                </PhotoView>
                <h3 className="font-semibold text-gray-900 mb-3 text-center">{relatedProduct.name}</h3>
                <Link 
                  href={`/products/pro-detail/${relatedProduct.id}`}
                  className="block"
                >
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        ))}
      </Carousel>
    </PhotoProvider>
  )
}
