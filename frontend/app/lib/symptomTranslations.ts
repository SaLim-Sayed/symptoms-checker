export interface SymptomTranslations {
  [key: string]: {
    en: string
    ar: string
  }
}

export const symptomTranslations: SymptomTranslations = {
  // Head & Neurological
  'Headache': { en: 'Headache', ar: 'صداع' },
  'Migraine': { en: 'Migraine', ar: 'صداع نصفي' },
  'Dizziness': { en: 'Dizziness', ar: 'دوار' },
  'Vertigo': { en: 'Vertigo', ar: 'دوار شديد' },
  'Confusion': { en: 'Confusion', ar: 'ارتباك' },
  'Memory Problems': { en: 'Memory Problems', ar: 'مشاكل الذاكرة' },
  'Seizures': { en: 'Seizures', ar: 'نوبات' },
  'Tremors': { en: 'Tremors', ar: 'رعشة' },
  'Fainting': { en: 'Fainting', ar: 'إغماء' },
  'Loss of Consciousness': { en: 'Loss of Consciousness', ar: 'فقدان الوعي' },
  'Sensitivity to Light': { en: 'Sensitivity to Light', ar: 'حساسية للضوء' },
  'Sensitivity to Sound': { en: 'Sensitivity to Sound', ar: 'حساسية للصوت' },
  'Brain Fog': { en: 'Brain Fog', ar: 'ضبابية الدماغ' },
  'Difficulty Concentrating': { en: 'Difficulty Concentrating', ar: 'صعوبة في التركيز' },
  
  // Respiratory & Chest
  'Cough': { en: 'Cough', ar: 'سعال' },
  'Dry Cough': { en: 'Dry Cough', ar: 'سعال جاف' },
  'Wet Cough': { en: 'Wet Cough', ar: 'سعال رطب' },
  'Shortness of Breath': { en: 'Shortness of Breath', ar: 'ضيق في التنفس' },
  'Chest Pain': { en: 'Chest Pain', ar: 'ألم في الصدر' },
  'Chest Tightness': { en: 'Chest Tightness', ar: 'ضيق في الصدر' },
  'Wheezing': { en: 'Wheezing', ar: 'صفير' },
  'Rapid Breathing': { en: 'Rapid Breathing', ar: 'تنفس سريع' },
  'Shallow Breathing': { en: 'Shallow Breathing', ar: 'تنفس ضحل' },
  'Runny Nose': { en: 'Runny Nose', ar: 'سيلان الأنف' },
  'Stuffy Nose': { en: 'Stuffy Nose', ar: 'انسداد الأنف' },
  'Sneezing': { en: 'Sneezing', ar: 'عطس' },
  'Sore Throat': { en: 'Sore Throat', ar: 'التهاب الحلق' },
  'Hoarse Voice': { en: 'Hoarse Voice', ar: 'بحة في الصوت' },
  'Difficulty Swallowing': { en: 'Difficulty Swallowing', ar: 'صعوبة في البلع' },
  'Chest Congestion': { en: 'Chest Congestion', ar: 'احتقان الصدر' },
  'Blood in Sputum': { en: 'Blood in Sputum', ar: 'دم في البلغم' },
  
  // Digestive & Abdominal
  'Nausea': { en: 'Nausea', ar: 'غثيان' },
  'Vomiting': { en: 'Vomiting', ar: 'قيء' },
  'Abdominal Pain': { en: 'Abdominal Pain', ar: 'ألم في البطن' },
  'Stomach Cramps': { en: 'Stomach Cramps', ar: 'تشنجات في المعدة' },
  'Diarrhea': { en: 'Diarrhea', ar: 'إسهال' },
  'Constipation': { en: 'Constipation', ar: 'إمساك' },
  'Bloating': { en: 'Bloating', ar: 'انتفاخ' },
  'Gas': { en: 'Gas', ar: 'غازات' },
  'Indigestion': { en: 'Indigestion', ar: 'عسر الهضم' },
  'Heartburn': { en: 'Heartburn', ar: 'حرقة في المعدة' },
  'Acid Reflux': { en: 'Acid Reflux', ar: 'ارتجاع الحمض' },
  'Loss of Appetite': { en: 'Loss of Appetite', ar: 'فقدان الشهية' },
  'Increased Appetite': { en: 'Increased Appetite', ar: 'زيادة الشهية' },
  'Blood in Stool': { en: 'Blood in Stool', ar: 'دم في البراز' },
  'Black Stool': { en: 'Black Stool', ar: 'براز أسود' },
  'Excessive Thirst': { en: 'Excessive Thirst', ar: 'عطش مفرط' },
  'Food Intolerance': { en: 'Food Intolerance', ar: 'عدم تحمل الطعام' },
  
  // Musculoskeletal
  'Muscle Aches': { en: 'Muscle Aches', ar: 'آلام العضلات' },
  'Muscle Weakness': { en: 'Muscle Weakness', ar: 'ضعف العضلات' },
  'Muscle Spasms': { en: 'Muscle Spasms', ar: 'تشنجات العضلات' },
  'Joint Pain': { en: 'Joint Pain', ar: 'ألم المفاصل' },
  'Joint Stiffness': { en: 'Joint Stiffness', ar: 'تيبس المفاصل' },
  'Joint Swelling': { en: 'Joint Swelling', ar: 'تورم المفاصل' },
  'Back Pain': { en: 'Back Pain', ar: 'ألم الظهر' },
  'Lower Back Pain': { en: 'Lower Back Pain', ar: 'ألم أسفل الظهر' },
  'Upper Back Pain': { en: 'Upper Back Pain', ar: 'ألم أعلى الظهر' },
  'Neck Pain': { en: 'Neck Pain', ar: 'ألم الرقبة' },
  'Shoulder Pain': { en: 'Shoulder Pain', ar: 'ألم الكتف' },
  'Knee Pain': { en: 'Knee Pain', ar: 'ألم الركبة' },
  'Hip Pain': { en: 'Hip Pain', ar: 'ألم الورك' },
  'Elbow Pain': { en: 'Elbow Pain', ar: 'ألم المرفق' },
  'Wrist Pain': { en: 'Wrist Pain', ar: 'ألم المعصم' },
  'Ankle Pain': { en: 'Ankle Pain', ar: 'ألم الكاحل' },
  'Foot Pain': { en: 'Foot Pain', ar: 'ألم القدم' },
  'Limited Range of Motion': { en: 'Limited Range of Motion', ar: 'نطاق حركة محدود' },
  
  // Skin & Dermatological
  'Rash': { en: 'Rash', ar: 'طفح جلدي' },
  'Itching': { en: 'Itching', ar: 'حكة' },
  'Hives': { en: 'Hives', ar: 'شرى' },
  'Redness': { en: 'Redness', ar: 'احمرار' },
  'Swelling': { en: 'Swelling', ar: 'تورم' },
  'Bumps': { en: 'Bumps', ar: 'نتوءات' },
  'Blisters': { en: 'Blisters', ar: 'بثور' },
  'Dry Skin': { en: 'Dry Skin', ar: 'جلد جاف' },
  'Oily Skin': { en: 'Oily Skin', ar: 'جلد دهني' },
  'Flaking': { en: 'Flaking', ar: 'تقشير' },
  'Peeling': { en: 'Peeling', ar: 'تقشر' },
  'Discoloration': { en: 'Discoloration', ar: 'تغير اللون' },
  'Bruising': { en: 'Bruising', ar: 'كدمات' },
  'Bleeding': { en: 'Bleeding', ar: 'نزيف' },
  'Warmth to Touch': { en: 'Warmth to Touch', ar: 'دفء عند اللمس' },
  'Tenderness': { en: 'Tenderness', ar: 'ألم عند اللمس' },
  'Hair Loss': { en: 'Hair Loss', ar: 'تساقط الشعر' },
  'Nail Changes': { en: 'Nail Changes', ar: 'تغيرات الأظافر' },
  
  // Eyes & Ears
  'Eye Irritation': { en: 'Eye Irritation', ar: 'تهيج العين' },
  'Red Eyes': { en: 'Red Eyes', ar: 'عيون حمراء' },
  'Watery Eyes': { en: 'Watery Eyes', ar: 'عيون دامعة' },
  'Dry Eyes': { en: 'Dry Eyes', ar: 'جفاف العين' },
  'Blurred Vision': { en: 'Blurred Vision', ar: 'رؤية ضبابية' },
  'Double Vision': { en: 'Double Vision', ar: 'رؤية مزدوجة' },
  'Eye Pain': { en: 'Eye Pain', ar: 'ألم العين' },
  'Eye Discharge': { en: 'Eye Discharge', ar: 'إفرازات العين' },
  'Ear Pain': { en: 'Ear Pain', ar: 'ألم الأذن' },
  'Ear Discharge': { en: 'Ear Discharge', ar: 'إفرازات الأذن' },
  'Hearing Loss': { en: 'Hearing Loss', ar: 'فقدان السمع' },
  'Ringing in Ears': { en: 'Ringing in Ears', ar: 'طنين الأذن' },
  'Ear Fullness': { en: 'Ear Fullness', ar: 'امتلاء الأذن' },
  'Ear Itching': { en: 'Ear Itching', ar: 'حكة الأذن' },
  
  // Urinary & Genital
  'Frequent Urination': { en: 'Frequent Urination', ar: 'كثرة التبول' },
  'Painful Urination': { en: 'Painful Urination', ar: 'ألم عند التبول' },
  'Blood in Urine': { en: 'Blood in Urine', ar: 'دم في البول' },
  'Cloudy Urine': { en: 'Cloudy Urine', ar: 'بول غائم' },
  'Urgency to Urinate': { en: 'Urgency to Urinate', ar: 'حاجة ملحة للتبول' },
  'Difficulty Urinating': { en: 'Difficulty Urinating', ar: 'صعوبة في التبول' },
  'Incontinence': { en: 'Incontinence', ar: 'سلس البول' },
  'Genital Itching': { en: 'Genital Itching', ar: 'حكة الأعضاء التناسلية' },
  'Genital Pain': { en: 'Genital Pain', ar: 'ألم الأعضاء التناسلية' },
  'Genital Discharge': { en: 'Genital Discharge', ar: 'إفرازات الأعضاء التناسلية' },
  'Genital Sores': { en: 'Genital Sores', ar: 'قروح الأعضاء التناسلية' },
  'Pain During Intercourse': { en: 'Pain During Intercourse', ar: 'ألم أثناء الجماع' },
  
  // Mental & Emotional
  'Anxiety': { en: 'Anxiety', ar: 'قلق' },
  'Depression': { en: 'Depression', ar: 'اكتئاب' },
  'Mood Swings': { en: 'Mood Swings', ar: 'تقلبات المزاج' },
  'Irritability': { en: 'Irritability', ar: 'تهيج' },
  'Agitation': { en: 'Agitation', ar: 'تململ' },
  'Panic Attacks': { en: 'Panic Attacks', ar: 'نوبات الهلع' },
  'Stress': { en: 'Stress', ar: 'توتر' },
  'Insomnia': { en: 'Insomnia', ar: 'أرق' },
  'Excessive Sleepiness': { en: 'Excessive Sleepiness', ar: 'نعاس مفرط' },
  'Nightmares': { en: 'Nightmares', ar: 'كوابيس' },
  'Difficulty Sleeping': { en: 'Difficulty Sleeping', ar: 'صعوبة في النوم' },
  'Loss of Interest': { en: 'Loss of Interest', ar: 'فقدان الاهتمام' },
  'Feeling Overwhelmed': { en: 'Feeling Overwhelmed', ar: 'شعور بالإرهاق' },
  
  // General & Systemic
  'Fever': { en: 'Fever', ar: 'حمى' },
  'Chills': { en: 'Chills', ar: 'قشعريرة' },
  'Sweating': { en: 'Sweating', ar: 'تعرق' },
  'Night Sweats': { en: 'Night Sweats', ar: 'تعرق ليلي' },
  'Fatigue': { en: 'Fatigue', ar: 'إرهاق' },
  'Weakness': { en: 'Weakness', ar: 'ضعف' },
  'Exhaustion': { en: 'Exhaustion', ar: 'إنهاك' },
  'Weight Loss': { en: 'Weight Loss', ar: 'فقدان الوزن' },
  'Weight Gain': { en: 'Weight Gain', ar: 'زيادة الوزن' },
  'Swollen Lymph Nodes': { en: 'Swollen Lymph Nodes', ar: 'تضخم الغدد الليمفاوية' },
  'Dehydration': { en: 'Dehydration', ar: 'جفاف' },
  'Pale Skin': { en: 'Pale Skin', ar: 'شحوب الجلد' },
  'Yellow Skin': { en: 'Yellow Skin', ar: 'اصفرار الجلد' },
  'Cold Hands/Feet': { en: 'Cold Hands/Feet', ar: 'برودة اليدين/القدمين' },
  'Hot Flashes': { en: 'Hot Flashes', ar: 'هبات ساخنة' },
}

export function getSymptomName(symptom: string, language: 'en' | 'ar'): string {
  const translation = symptomTranslations[symptom]
  if (translation) {
    return translation[language]
  }
  return symptom // Fallback to original if no translation
}

