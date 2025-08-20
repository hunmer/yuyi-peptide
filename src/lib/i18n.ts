export type Locale = 'en'

export const locales: Locale[] = ['en']

export const defaultLocale: Locale = 'en'

export const localeNames = {
  en: 'English'
}

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      products: 'Products',
      workshop: 'Workshop',
      cooperate: 'Cooperate',
      news: 'FAQ',
      contact: 'Contact'
    },
    common: {
      language: 'Language',
      loading: 'Loading...'
    }
  },
}

export function getTranslations(locale: Locale) {
  return translations[locale] || translations[defaultLocale]
}
