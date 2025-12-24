'use client'

import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { getSymptomName } from '../lib/symptomTranslations'
import { getCategoryTranslationKey } from '../lib/categoryTranslations'

interface SymptomSelectorProps {
  selectedSymptoms: string[]
  onSymptomToggle: (symptom: string) => void
}

interface SymptomCategory {
  name: string
  icon: string
  symptoms: string[]
}

interface SymptomModalProps {
  category: SymptomCategory | null
  isOpen: boolean
  onClose: () => void
  selectedSymptoms: string[]
  onSymptomToggle: (symptom: string) => void
}

const SYMPTOM_CATEGORIES: SymptomCategory[] = [
  {
    name: 'Head & Neurological',
    icon: '🧠',
    symptoms: [
      'Headache',
      'Migraine',
      'Dizziness',
      'Vertigo',
      'Confusion',
      'Memory Problems',
      'Seizures',
      'Tremors',
      'Fainting',
      'Loss of Consciousness',
      'Sensitivity to Light',
      'Sensitivity to Sound',
      'Brain Fog',
      'Difficulty Concentrating',
    ],
  },
  {
    name: 'Respiratory & Chest',
    icon: '🫁',
    symptoms: [
      'Cough',
      'Dry Cough',
      'Wet Cough',
      'Shortness of Breath',
      'Chest Pain',
      'Chest Tightness',
      'Wheezing',
      'Rapid Breathing',
      'Shallow Breathing',
      'Runny Nose',
      'Stuffy Nose',
      'Sneezing',
      'Sore Throat',
      'Hoarse Voice',
      'Difficulty Swallowing',
      'Chest Congestion',
      'Blood in Sputum',
    ],
  },
  {
    name: 'Digestive & Abdominal',
    icon: '🫀',
    symptoms: [
      'Nausea',
      'Vomiting',
      'Abdominal Pain',
      'Stomach Cramps',
      'Diarrhea',
      'Constipation',
      'Bloating',
      'Gas',
      'Indigestion',
      'Heartburn',
      'Acid Reflux',
      'Loss of Appetite',
      'Increased Appetite',
      'Blood in Stool',
      'Black Stool',
      'Difficulty Swallowing',
      'Excessive Thirst',
      'Food Intolerance',
    ],
  },
  {
    name: 'Musculoskeletal',
    icon: '💪',
    symptoms: [
      'Muscle Aches',
      'Muscle Weakness',
      'Muscle Spasms',
      'Joint Pain',
      'Joint Stiffness',
      'Joint Swelling',
      'Back Pain',
      'Lower Back Pain',
      'Upper Back Pain',
      'Neck Pain',
      'Shoulder Pain',
      'Knee Pain',
      'Hip Pain',
      'Elbow Pain',
      'Wrist Pain',
      'Ankle Pain',
      'Foot Pain',
      'Limited Range of Motion',
    ],
  },
  {
    name: 'Skin & Dermatological',
    icon: '🦠',
    symptoms: [
      'Rash',
      'Itching',
      'Hives',
      'Redness',
      'Swelling',
      'Bumps',
      'Blisters',
      'Dry Skin',
      'Oily Skin',
      'Flaking',
      'Peeling',
      'Discoloration',
      'Bruising',
      'Bleeding',
      'Warmth to Touch',
      'Tenderness',
      'Hair Loss',
      'Nail Changes',
    ],
  },
  {
    name: 'Eyes & Ears',
    icon: '👁️',
    symptoms: [
      'Eye Irritation',
      'Red Eyes',
      'Watery Eyes',
      'Dry Eyes',
      'Blurred Vision',
      'Double Vision',
      'Eye Pain',
      'Sensitivity to Light',
      'Eye Discharge',
      'Ear Pain',
      'Ear Discharge',
      'Hearing Loss',
      'Ringing in Ears',
      'Ear Fullness',
      'Dizziness',
      'Ear Itching',
    ],
  },
  {
    name: 'Urinary & Genital',
    icon: '🚽',
    symptoms: [
      'Frequent Urination',
      'Painful Urination',
      'Blood in Urine',
      'Cloudy Urine',
      'Urgency to Urinate',
      'Difficulty Urinating',
      'Incontinence',
      'Genital Itching',
      'Genital Pain',
      'Genital Discharge',
      'Genital Sores',
      'Pain During Intercourse',
    ],
  },
  {
    name: 'Mental & Emotional',
    icon: '🧘',
    symptoms: [
      'Anxiety',
      'Depression',
      'Mood Swings',
      'Irritability',
      'Agitation',
      'Panic Attacks',
      'Stress',
      'Insomnia',
      'Excessive Sleepiness',
      'Nightmares',
      'Difficulty Sleeping',
      'Loss of Interest',
      'Feeling Overwhelmed',
    ],
  },
  {
    name: 'General & Systemic',
    icon: '🌡️',
    symptoms: [
      'Fever',
      'Chills',
      'Sweating',
      'Night Sweats',
      'Fatigue',
      'Weakness',
      'Exhaustion',
      'Weight Loss',
      'Weight Gain',
      'Swollen Lymph Nodes',
      'Swelling',
      'Dehydration',
      'Pale Skin',
      'Yellow Skin',
      'Cold Hands/Feet',
      'Hot Flashes',
    ],
  },
]

// Bottom Modal Component for Mobile
function SymptomModal({
  category,
  isOpen,
  onClose,
  selectedSymptoms,
  onSymptomToggle,
}: SymptomModalProps) {
  const { t, language, isRTL } = useLanguage()
  if (!category) return null

  const categoryKey = getCategoryTranslationKey(category.name)
  const categoryName = categoryKey ? t.categories[categoryKey] : category.name

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      {/* Modal */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl z-50 md:hidden max-h-[85vh] flex flex-col transition-transform duration-300 ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        {/* Drag Handle */}
        <div className="flex justify-center pt-2 pb-1">
          <div className="w-12 h-1 bg-gray-300 rounded-full" />
        </div>
        {/* Header */}
        <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''} justify-between px-4 pb-3 border-b sticky top-0 bg-white rounded-t-2xl`}>
          <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <span className="text-2xl">{category.icon}</span>
            <h3 className="text-lg font-semibold text-gray-800">
              {categoryName}
            </h3>
            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
              {category.symptoms.filter(s => selectedSymptoms.includes(s)).length} {t.common.selected}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label={t.common.close}
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {/* Content */}
        <div className="overflow-y-auto p-4 flex-1">
          <div className="grid grid-cols-2 gap-3">
            {category.symptoms.map(symptom => {
              const isSelected = selectedSymptoms.includes(symptom)
              return (
                <button
                  key={symptom}
                  onClick={() => {
                    onSymptomToggle(symptom)
                  }}
                  className={`p-3 rounded-lg border-2 transition-all duration-200 text-sm font-medium ${isRTL ? 'text-right' : 'text-left'} ${
                    isSelected
                      ? 'bg-blue-500 text-white border-blue-600 shadow-md'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400 hover:bg-blue-50'
                  }`}
                >
                  {getSymptomName(symptom, language)}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default function SymptomSelector({
  selectedSymptoms,
  onSymptomToggle,
}: SymptomSelectorProps) {
  const { t, language, isRTL } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [mobileModalOpen, setMobileModalOpen] = useState(false)

  const handleCategoryClick = (category: SymptomCategory) => {
    setSelectedCategory(category.name)
    setMobileModalOpen(true)
  }

  const closeModal = () => {
    setMobileModalOpen(false)
    setTimeout(() => setSelectedCategory(null), 300) // Delay to allow animation
  }

  const currentCategory = SYMPTOM_CATEGORIES.find(
    c => c.name === selectedCategory
  )

  const getCategorySelectedCount = (category: SymptomCategory) => {
    return category.symptoms.filter(s => selectedSymptoms.includes(s)).length
  }

  return (
    <>
      <div className={`flex flex-col md:flex-row gap-6 h-full`} dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Sidebar for Desktop */}
        <aside className="hidden md:flex md:flex-col md:w-64 lg:w-72 bg-gray-50 rounded-lg p-4 h-fit sticky top-4">
          <h2 className={`text-xl font-semibold text-gray-800 mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
            {t.selector.selectBodyPart}
          </h2>
          <nav className="space-y-2">
            {SYMPTOM_CATEGORIES.map(category => {
              const count = getCategorySelectedCount(category)
              const isActive = selectedCategory === category.name
              const categoryKey = getCategoryTranslationKey(category.name)
              const categoryName = categoryKey ? t.categories[categoryKey] : category.name

              return (
                <button
                  key={category.name}
                  onClick={() => {
                    setSelectedCategory(
                      isActive ? null : category.name
                    )
                  }}
                  className={`w-full ${isRTL ? 'text-right' : 'text-left'} px-4 py-3 rounded-lg transition-all duration-200 flex items-center ${isRTL ? 'flex-row-reverse' : ''} justify-between ${
                    isActive
                      ? 'bg-blue-500 text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                  }`}
                >
                  <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className="text-xl">{category.icon}</span>
                    <span className="font-medium text-sm">{categoryName}</span>
                  </div>
                  {count > 0 && (
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        isActive
                          ? 'bg-white text-blue-500'
                          : 'bg-blue-500 text-white'
                      }`}
                    >
                      {count}
                    </span>
                  )}
                </button>
              )
            })}
          </nav>
        </aside>

        {/* Mobile List View */}
        <div className="md:hidden" dir={isRTL ? 'rtl' : 'ltr'}>
          <h2 className={`text-xl font-semibold text-gray-800 mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
            {t.selector.selectBodyPart}
          </h2>
          <div className="space-y-2">
            {SYMPTOM_CATEGORIES.map(category => {
              const count = getCategorySelectedCount(category)
              const categoryKey = getCategoryTranslationKey(category.name)
              const categoryName = categoryKey ? t.categories[categoryKey] : category.name
              return (
                <button
                  key={category.name}
                  onClick={() => handleCategoryClick(category)}
                  className={`w-full ${isRTL ? 'text-right' : 'text-left'} px-4 py-4 rounded-lg bg-white border border-gray-200 hover:bg-blue-50 transition-colors flex items-center ${isRTL ? 'flex-row-reverse' : ''} justify-between`}
                >
                  <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className="text-2xl">{category.icon}</span>
                    <span className="font-medium text-gray-800">
                      {categoryName}
                    </span>
                  </div>
                  {count > 0 ? (
                    <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                      {count}
                    </span>
                  ) : (
                    <svg
                      className={`w-5 h-5 text-gray-400 ${isRTL ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Main Content Area - Desktop */}
        <div className={`hidden md:block flex-1`} dir={isRTL ? 'rtl' : 'ltr'}>
          {selectedCategory ? (
            <div>
              <div className={`mb-4 flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-3xl">
                  {
                    SYMPTOM_CATEGORIES.find(c => c.name === selectedCategory)
                      ?.icon
                  }
                </span>
                <h2 className={`text-2xl font-semibold text-gray-800 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {(() => {
                    const categoryKey = getCategoryTranslationKey(selectedCategory)
                    return categoryKey ? t.categories[categoryKey] : selectedCategory
                  })()}
                </h2>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {SYMPTOM_CATEGORIES.find(c => c.name === selectedCategory)
                  ?.symptoms.map(symptom => {
                    const isSelected = selectedSymptoms.includes(symptom)
                    return (
                      <button
                        key={symptom}
                        onClick={() => onSymptomToggle(symptom)}
                        className={`p-3 rounded-lg border-2 transition-all duration-200 text-sm font-medium ${isRTL ? 'text-right' : 'text-left'} ${
                          isSelected
                            ? 'bg-blue-500 text-white border-blue-600 shadow-md'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400 hover:bg-blue-50'
                        }`}
                      >
                        {getSymptomName(symptom, language)}
                      </button>
                    )
                  })}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-64 text-gray-400">
              <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                <p className="text-lg mb-2">{t.selector.selectBodyPart}</p>
                <p className="text-sm">{t.selector.selectCategory}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Modal */}
      <SymptomModal
        category={currentCategory || null}
        isOpen={mobileModalOpen}
        onClose={closeModal}
        selectedSymptoms={selectedSymptoms}
        onSymptomToggle={onSymptomToggle}
      />
    </>
  )
}

