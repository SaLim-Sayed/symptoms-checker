'use client'

import { useLanguage } from '../contexts/LanguageContext'

export default function LanguageSwitcher() {
  const { language, setLanguage, isRTL } = useLanguage()

  return (
    <div className={`fixed top-4 z-50 ${isRTL ? 'left-4' : 'right-4'}`}>
      <div className="bg-white rounded-lg shadow-lg p-2 flex gap-2 border border-gray-200">
        <button
          onClick={() => setLanguage('en')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            language === 'en'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          English
        </button>
        <button
          onClick={() => setLanguage('ar')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            language === 'ar'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          dir="rtl"
        >
          العربية
        </button>
      </div>
    </div>
  )
}

