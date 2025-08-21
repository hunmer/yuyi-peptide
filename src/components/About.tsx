'use client'

import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { PhotoView } from 'react-photo-view'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Link from 'next/link'
import { FadeInUp, FadeInLeft, FadeInRight } from '@/components/ui/fade-in'

export default function About() {
  const images = [
    {
      src: '/yuyi-peptide/res/img/about1.png',
      alt: 'Lab Equipment'
    },
    {
      src: '/yuyi-peptide/res/img/about2.png',
      alt: 'Manufacturing Process'
    },
    {
      src: '/yuyi-peptide/res/img/about3.png',
      alt: 'Quality Control'
    },
    {
      src: '/yuyi-peptide/res/img/about4.png',
      alt: 'Research Lab'
    },
    {
      src: '/yuyi-peptide/res/img/about5.png',
      alt: 'Production Line'
    },
    {
      src: '/yuyi-peptide/res/img/about6.png',
      alt: 'Testing Equipment'
    },
  ]

  // 响应式配置
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1 // 每次只滚动一张图片
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 1
    },
    smallTablet: {
      breakpoint: { max: 768, min: 640 },
      items: 2,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  }

  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left content */}
          <FadeInLeft>
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                  About us
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  YuYi peptide is a professional enterprise engaged in beauty peptides products,
                  mainly used in weight loss, bodybuilding, cosmetic, anti-aging, and skincare areas.
                  With their expertise and high-quality products, you can unlock the incredible
                  benefits of peptides and take your skincare regimen to the next level.
                </p>
              </div>

              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3"
                >
                  Read more
                </Button>
              </Link>
            </div>
          </FadeInLeft>

          {/* Right content - Building image */}
          <FadeInRight>
            <div className="relative">
              <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="/yuyi-peptide/res/img/about3.png"
                  alt="YuYi Company Building"
                  className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </FadeInRight>
        </div>

        {/* Factory/Lab images carousel */}
        <FadeInUp delay={200}>
          <div className="relative overflow-hidden">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900">
                Our Manufacturing Facilities
              </h3>
              <div className="text-sm text-gray-500">
                {images.length} images
              </div>
            </div>

            {/* Carousel using react-multi-carousel */}
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              customTransition="all 1s ease"
              transitionDuration={1000}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-10-px"
              arrows={true}
              showDots={false}
              swipeable={true}
              draggable={true}
            >
              {images.map((image, index) => (
                <div key={index} className="px-2">
                  <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden group hover:scale-105 transition-transform duration-300">
                    <PhotoView src={image.src}>
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover cursor-pointer"
                      />
                    </PhotoView>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
