'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MessageCircle, X } from 'lucide-react'

const B = '/yuyi-peptide'

const staffs = [
  { name: 'Lulu', image: `${B}/res/staffs/Lulu.png`, link: 'https://wa.me/message/DGXNJOK4YD5IN1' },
  { name: 'Mimi', image: `${B}/res/staffs/Mimi.png`, link: 'https://wa.me/message/UQYZTS6O4FMIB1' },
  { name: 'Yuan', image: `${B}/res/staffs/Yuan.png`, link: 'https://wa.me/message/BH4JIO3UASIRJ1' },
  { name: 'Yuyi', image: `${B}/res/staffs/Yuyi.png`, link: 'https://wa.me/message/LIXTHS5OV64TP1' },
]

export default function FloatingStaff() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
          {staffs.map((staff) => (
            <a
              key={staff.name}
              href={staff.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white rounded-full shadow-lg px-4 py-2 border border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex-none">
                <Image
                  src={staff.image}
                  alt={staff.name}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">{staff.name}</span>
            </a>
          ))}
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg flex items-center justify-center transition-all duration-300"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  )
}
