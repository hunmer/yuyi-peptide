import React from 'react'
import { MessageCircle, FileText, CheckCircle, Settings, Truck, Star } from 'lucide-react'

export default function CooperationProcess() {
  const steps = [
    {
      icon: MessageCircle,
      title: 'Contact and communication',
      description: 'Initial consultation and requirement discussion',
    },
    {
      icon: FileText,
      title: 'Sample provision and evaluation',
      description: 'Provide samples for quality assessment',
    },
    {
      icon: CheckCircle,
      title: 'Contract signing',
      description: 'Finalize terms and sign agreement',
    },
    {
      icon: Settings,
      title: 'Demand confirmation and customization services',
      description: 'Customize products according to specifications',
    },
    {
      icon: Truck,
      title: 'Production and delivery',
      description: 'Manufacturing and timely delivery',
    },
    {
      icon: Star,
      title: 'After-sales service and feedback',
      description: 'Ongoing support and quality assurance',
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-700 to-blue-600 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Cooperation Process
          </h2>
        </div>

        {/* Desktop Process Flow */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection lines */}
            <svg
              className="absolute top-1/2 left-0 w-full h-2 -translate-y-1"
              viewBox="0 0 1000 20"
              fill="none"
            >
              <path
                d="M50 10 L950 10"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="2"
                strokeDasharray="10,5"
              />
            </svg>

            <div className="grid grid-cols-3 gap-8">
              {/* Top row */}
              <div className="flex justify-center">
                <ProcessStep step={steps[0]} index={1} />
              </div>
              <div className="flex justify-center">
                <ProcessStep step={steps[1]} index={2} />
              </div>
              <div className="flex justify-center">
                <ProcessStep step={steps[2]} index={3} />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-16">
              {/* Bottom row (reversed) */}
              <div className="flex justify-center">
                <ProcessStep step={steps[5]} index={6} />
              </div>
              <div className="flex justify-center">
                <ProcessStep step={steps[4]} index={5} />
              </div>
              <div className="flex justify-center">
                <ProcessStep step={steps[3]} index={4} />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Process Flow */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <ProcessStep key={index} step={step} index={index + 1} mobile />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProcessStep({
  step,
  index,
  mobile = false
}: {
  step: { icon: React.ComponentType<{ className?: string }>; title: string; description: string }
  index: number
  mobile?: boolean
}) {
  const Icon = step.icon

  return (
    <div className={`text-center ${mobile ? 'flex items-center space-x-4 text-left' : 'max-w-xs'}`}>
      <div className={`${mobile ? 'flex-shrink-0' : 'mx-auto mb-4'} relative`}>
        <div className="mx-auto w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
          <Icon className="w-8 h-8 text-white" />
        </div>
      </div>

      <div className={mobile ? 'flex-1' : ''}>
        <h3 className="font-semibold text-lg mb-2">
          {step.title}
        </h3>
        <p className="text-white/80 text-sm">
          {step.description}
        </p>
      </div>
    </div>
  )
}
