import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageContact from '@/components/PageContact'
import { MessageCircle, FileText, CheckCircle, Settings, Truck, Star, User, FileSpreadsheet, HeadphonesIcon, MessagesSquare, BarChart4, RefreshCw } from 'lucide-react'
import Link from 'next/link'

export default function CooperatePage() {
  const processSteps = [
    {
      id: '01',
      title: 'Contact and communication',
      description: 'The first step in the collaboration process is establishing contact and having initial communication. Customers can contact our sales team via phone, email or online channels to describe their needs and requirements.',
      icon: MessageCircle
    },
    {
      id: '02',
      title: 'Demand confirmation and customization services',
      description: 'Our sales team will further communicate with customers to confirm their needs and provide corresponding customized services. We will understand the customer\'s requirements in detail, including product specifications, quantity, delivery time, etc., and provide personalized solutions.',
      icon: Settings
    },
    {
      id: '03',
      title: 'Sample provision and evaluation',
      description: 'Based on customer needs, we will provide samples for customer evaluation. Customers can have samples tested and evaluated to ensure products meet their expected quality standards and requirements.',
      icon: FileText
    },
    {
      id: '04',
      title: 'Contract signing',
      description: 'When the customer is satisfied with the sample and decides to cooperate, we will sign a contract with the customer. The contract will clearly stipulate the rights and responsibilities of both parties, including product specifications, prices, delivery terms, etc.',
      icon: CheckCircle
    },
    {
      id: '05',
      title: 'Production and delivery',
      description: 'After the contract is signed, we will start the production process and arrange shipment according to the delivery time agreed in the contract. We will ensure that products are delivered on time and adopt appropriate transportation methods to ensure the safety and integrity of products during transportation.',
      icon: Truck
    },
    {
      id: '06',
      title: 'After-sales service and feedback',
      description: 'We provide comprehensive after-sales service to ensure that any problems customers have during the use of products can be solved and supported in a timely manner. We welcome customer feedback so that we can continually improve and improve our products and services.',
      icon: Star
    }
  ]

  const afterSalesServices = [
    {
      title: 'Multi-language online technical support',
      description: 'We provide global multi-lingual online technical support services to ensure that customers can get professional help and answers at any time and anywhere.',
      icon: HeadphonesIcon
    },
    {
      title: 'Product usage training',
      description: 'We provide customers with detailed product usage training, including operating guides and technical guidance, to help customers fully understand and use our products correctly.',
      icon: FileSpreadsheet
    },
    {
      title: 'Online technical guidance',
      description: 'When customers encounter problems or confusion when using the product, they can contact our online technical support team at any time to obtain timely technical guidance and answers.',
      icon: MessagesSquare
    },
    {
      title: 'Advanced technical consultation',
      description: 'We provide advanced technical consulting services to help customers solve deeper technical problems and provide professional advice and guidance to ensure that customers can fully utilize the performance and value of their products.',
      icon: User
    },
    {
      title: 'User satisfaction survey',
      description: 'Regularly conduct user satisfaction surveys, collect customer feedback and suggestions, continuously improve and improve our after-sales services, and improve customer satisfaction and experience.',
      icon: BarChart4
    },
    {
      title: 'Feedback and improvements',
      description: 'We welcome any feedback from customers about the use of our products so that we can promptly improve and improve our products and services to meet customer needs and expectations.',
      icon: RefreshCw
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-80 bg-cover bg-center" style={{
        backgroundImage: `url('https://ext.same-assets.com/1764536919/4038582220.jpeg')`
      }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">Cooperate</h1>
            <div className="text-lg">
              <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span>Cooperate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16">
            Process
          </h2>

          <div className="space-y-12">
            {processSteps.map((step) => (
              <div key={step.id} className="flex flex-col md:flex-row gap-6 items-start">
                <div className="md:w-24 flex-shrink-0">
                  <div className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md inline-block text-center">
                    {step.id}
                  </div>
                </div>
                <div className="flex-grow space-y-2">
                  <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* After-sales Service Section */}
      <section className="py-16 lg:py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            After-sales service
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {afterSalesServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4">{service.title}</h3>
                  <p className="text-gray-100">{service.description}</p>
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
