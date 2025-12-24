export const categoryNameMap: Record<string, keyof import('./translations').Translations['categories']> = {
  'Head & Neurological': 'head',
  'Respiratory & Chest': 'respiratory',
  'Digestive & Abdominal': 'digestive',
  'Musculoskeletal': 'musculoskeletal',
  'Skin & Dermatological': 'skin',
  'Eyes & Ears': 'eyes',
  'Urinary & Genital': 'urinary',
  'Mental & Emotional': 'mental',
  'General & Systemic': 'general',
}

export function getCategoryTranslationKey(categoryName: string): keyof import('./translations').Translations['categories'] | null {
  return categoryNameMap[categoryName] || null
}

