'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { Locale, defaultLocale, getTranslations } from '@/lib/i18n'

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: ReturnType<typeof getTranslations>
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale)

  useEffect(() => {
    // 从 localStorage 读取用户语言偏好
    const savedLocale = localStorage.getItem('locale') as Locale
    if (savedLocale && ['en'].includes(savedLocale)) {
      setLocale(savedLocale)
    } else {
      // 检查浏览器语言
      // const browserLang = navigator.language.toLowerCase()
      // if (browserLang.startsWith('zh')) {
      //   setLocale('zh')
      // }
    }
  }, [])

  useEffect(() => {
    // 保存语言偏好到 localStorage
    localStorage.setItem('locale', locale)
  }, [locale])

  const t = getTranslations(locale)

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
