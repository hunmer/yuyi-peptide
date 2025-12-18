'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone, Mail, Globe } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/lib/LanguageContext'
import { locales, localeNames, Locale } from '@/lib/i18n'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const { locale, setLocale, t } = useLanguage()
  const pathname = usePathname()

  const navigation = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.products, href: '/products' },
    { name: t.nav.workshop, href: '/workshop' },
    { name: t.nav.cooperate, href: '/cooperate' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.news, href: '/news' },
    { name: t.nav.contact, href: '/contact' },
  ]

  const handleLanguageChange = (newLocale: Locale) => {
    setLocale(newLocale)
    setIsLangMenuOpen(false)
  }

  return (
    <>
      {/* Top contact bar */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-end items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-gray-600" />
              <span>2124427370@qq.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-gray-600" />
              <span>+852 7052 3171</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-600 rounded-sm flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Y</span>
                </div>
                <span className="text-xl font-bold text-gray-800">YuYi</span>
              </div>
            </div>

            {/* Desktop Navigation & Language Switcher */}
            <div className="hidden md:flex items-center space-x-8">
              <nav className="flex items-center space-x-8">
                {navigation.map((item) => {
                  const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`transition-colors font-medium ${
                        isActive 
                          ? 'text-green-600 border-b-2 border-green-600 pb-1' 
                          : 'text-gray-700 hover:text-green-600'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )
                })}
              </nav>

              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-green-600 transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium">{localeNames[locale]}</span>
                </button>
                
                {isLangMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                    {locales.map((loc) => (
                      <button
                        key={loc}
                        onClick={() => handleLanguageChange(loc)}
                        className={`block w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors ${
                          locale === loc ? 'text-green-600 font-medium' : 'text-gray-700'
                        }`}
                      >
                        {localeNames[loc]}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={() => window.open('https://wa.me/message/RATP775SVRXLC1', '_blank')}
              >
                WhatsApp
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => {
                  const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`transition-colors font-medium px-2 py-1 ${
                        isActive 
                          ? 'text-green-600 bg-green-50 rounded-md' 
                          : 'text-gray-700 hover:text-green-600'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                })}
                
                {/* Mobile Language Switcher */}
                <div className="px-2 py-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <Globe className="w-4 h-4 text-gray-700" />
                    <span className="text-sm font-medium text-gray-700">{t.common.language}</span>
                  </div>
                  <div className="flex space-x-2">
                    {locales.map((loc) => (
                      <button
                        key={loc}
                        onClick={() => handleLanguageChange(loc)}
                        className={`px-3 py-1 text-sm rounded-md transition-colors ${
                          locale === loc 
                            ? 'bg-green-600 text-white' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {localeNames[loc]}
                      </button>
                    ))}
                  </div>
                </div>

                <Button
                  className="bg-green-600 hover:bg-green-700 text-white w-full mt-4"
                  onClick={() => window.open('https://wa.me/message/RATP775SVRXLC1', '_blank')}
                >
                  WhatsApp
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Floating contact buttons */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 flex flex-col space-y-2">
        <Button
          size="sm"
          className="bg-green-600 hover:bg-green-700 text-white rounded-full w-12 h-12 p-0"
          onClick={() => window.open('https://wa.me/message/RATP775SVRXLC1', '_blank')}
        >
          <Phone className="w-5 h-5" />
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="bg-white hover:bg-gray-50 rounded-full w-12 h-12 p-0"
          onClick={() => window.location.href = 'mailto:2124427370@qq.com'}
        >
          <Mail className="w-5 h-5" />
        </Button>
      </div>
    </>
  )
}
