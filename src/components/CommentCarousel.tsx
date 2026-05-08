'use client'

import { useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'
import Image from 'next/image'
import { FadeInUp } from '@/components/ui/fade-in'

const B = '/yuyi-peptide'

const commentImages = [
  ...Array.from({ length: 9 }, (_, i) => `${B}/res/comments/${String(i + 1).padStart(3, '0')}.PNG`),
  ...Array.from({ length: 20 }, (_, i) => `${B}/res/comments/${String(i + 10).padStart(3, '0')}.JPG`),
  ...Array.from({ length: 9 }, (_, i) => `${B}/res/comments/${String(i + 30).padStart(3, '0')}.PNG`),
]

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
  tablet: { breakpoint: { max: 1024, min: 640 }, items: 3 },
  mobile: { breakpoint: { max: 640, min: 0 }, items: 2 },
}

export default function CommentCarousel() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <FadeInUp>
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Customer Reviews
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Real feedback from our valued customers
            </p>
          </div>
        </FadeInUp>

        <FadeInUp delay={200}>
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <PhotoProvider>
              <Carousel
                responsive={responsive}
                autoPlay={!isHovered}
                autoPlaySpeed={2000}
                infinite
                keyBoardControl
                containerClass="carousel-container"
                itemClass="px-2"
                arrows={false}
                showDots={false}
                draggable
              >
                {commentImages.map((src, idx) => (
                  <PhotoView key={src} src={src}>
                    <div className="cursor-pointer group relative overflow-hidden rounded-lg">
                      <div className="aspect-[9/16] w-full bg-gray-100 overflow-hidden rounded-lg">
                        <Image
                          src={src}
                          alt={`Customer review ${idx + 1}`}
                          width={180}
                          height={320}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                          unoptimized
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                          View
                        </span>
                      </div>
                    </div>
                  </PhotoView>
                ))}
              </Carousel>
            </PhotoProvider>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
