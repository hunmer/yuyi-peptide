import { Mail, Phone } from 'lucide-react'

export default function PageContact() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact us</h2>
        <p className="text-lg text-gray-700 mb-4">
          You can contact us through the following four ways, we will communicate with you immediately after receiving your inquiry!
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-gray-700 mb-6">
          <span>1. Call us.</span>
          <span>2. Send e-mail.</span>
          <span>3. Leave a message.</span>
          <span>4. Add Whatsapp.</span>
        </div>
        <p className="text-gray-700 mb-8">
          You can also click the chat button to communicate with us online in real time!
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Mail className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900">E-mail</h4>
              <p className="text-gray-600">2124427370@qq.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Phone className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900">WhatsApp</h4>
              <p className="text-gray-600">+852 7052 3171</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
